/**
 * Generates Phase-2-Foundation-Summary.docx
 * Usage: node scripts/generate-phase2-docx.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  ShadingType,
  BorderStyle,
} from 'docx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '..', 'docs', 'Phase-2-Foundation-Summary.docx');

function h1(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text, bold: true })] });
}

function h2(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text, bold: true })] });
}

function h3(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text, bold: true })] });
}

function p(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 200 },
    children: [new TextRun({ text, ...opts })],
  });
}

function bullet(text) {
  return new Paragraph({
    spacing: { after: 100 },
    bullet: { level: 0 },
    children: [new TextRun(text)],
  });
}

function codeBlock(text) {
  return new Paragraph({
    spacing: { before: 120, after: 120 },
    shading: { type: ShadingType.CLEAR, fill: 'F5F6F4' },
    children: [
      new TextRun({
        text,
        font: 'Consolas',
        size: 18,
      }),
    ],
  });
}

function table(headers, rows) {
  const headerRow = new TableRow({
    tableHeader: true,
    children: headers.map(
      (h) =>
        new TableCell({
          width: { size: 100 / headers.length, type: WidthType.PERCENTAGE },
          shading: { type: ShadingType.CLEAR, fill: 'D95648' },
          children: [
            new Paragraph({
              children: [new TextRun({ text: h, bold: true, color: 'FFFFFF' })],
            }),
          ],
        }),
    ),
  });

  const dataRows = rows.map(
    (row) =>
      new TableRow({
        children: row.map(
          (cell) =>
            new TableCell({
              width: { size: 100 / headers.length, type: WidthType.PERCENTAGE },
              children: [new Paragraph({ children: [new TextRun(String(cell))] })],
            }),
        ),
      }),
  );

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1 },
      bottom: { style: BorderStyle.SINGLE, size: 1 },
      left: { style: BorderStyle.SINGLE, size: 1 },
      right: { style: BorderStyle.SINGLE, size: 1 },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1 },
      insideVertical: { style: BorderStyle.SINGLE, size: 1 },
    },
    rows: [headerRow, ...dataRows],
  });
}

const folderTree = `agrometal-astro/
├── astro.config.mjs          # Static, trailingSlash, compressHTML, Sharp images, aliases
├── eslint.config.js
├── netlify.toml              # Netlify deploy config
├── .prettierrc / .prettierignore
├── DEVELOPMENT.md            # Naming, commits, aliases, standards
├── package.json
├── public/
│   ├── images/agrometal/     # 149 localized assets (Phase 0)
│   ├── videos/ icons/ fonts/ assets/
├── src/
│   ├── components/
│   │   ├── layout/ sections/ ui/ forms/   (.gitkeep — empty)
│   ├── content/pages/        # 14 JSON audit files + _audit-summary.json
│   ├── data/
│   │   ├── site.ts navigation.ts footer.ts social.ts
│   │   ├── company.ts seo.ts constants.ts index.ts
│   ├── layouts/              (.gitkeep)
│   ├── lib/
│   │   ├── schemas/          # 12 Zod schemas (typed)
│   │   ├── assets.ts performance.ts accessibility.ts
│   ├── pages/                # 14 route placeholders
│   │   ├── index.astro
│   │   ├── about-us/ … contact-us/
│   ├── styles/
│   │   ├── global.css variables.css utilities.css animations.css
│   ├── types/                # 15 interface modules + index.ts
│   └── utils/ route.ts content.ts
└── scripts/                    # Phase 0 audit scripts (retained)`;

const architectureDiagram = `┌─────────────────────────────────────────────────────────────┐
│                    docs/ — Source of Truth                   │
│  sitemap.md │ pages.md │ components.md │ architecture…      │
└────────────────────────────┬────────────────────────────────┘
                             │
         ┌───────────────────┼───────────────────┐
         ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ Global Config   │ │ Zod Schemas     │ │ Page JSON       │
│ src/data/       │ │ src/lib/schemas │ │ src/content/    │
│ site, nav, seo  │ │ validation      │ │ pages/*.json    │
└────────┬────────┘ └────────┬────────┘ └────────┬────────┘
         │                   │                   │
         └───────────────────┼───────────────────┘
                             ▼
                  ┌─────────────────────┐
                  │ Route Placeholders  │
                  │ src/pages/ (×14)    │
                  └──────────┬──────────┘
                             │
                  ┌──────────▼──────────┐
                  │ Tailwind v4 Tokens  │
                  │ src/styles/         │
                  └──────────┬──────────┘
                             ▼
                  ┌─────────────────────┐
                  │ dist/ → Netlify CDN │
                  └─────────────────────┘`;

const contentFlow = `existing website HTML (reference)
        ↓ Phase 0 audit
src/content/pages/{pageId}.json
        ↓ Zod validation (pageContentSchema)
src/utils/content.ts → loadPageContent()
        ↓ Phase 5+ (not yet wired)
Page .astro files → Section components → HTML output`;

const dataFlow = `src/data/constants.ts     → ROUTES, VIDEOS, ASSET_PATHS
src/data/company.ts       → NAP, logos, map URLs
src/data/navigation.ts    → Header + footer nav (Zod-validated)
src/data/footer.ts        → Footer config + form definitions
src/data/seo.ts           → Per-page titles/descriptions/canonicals
src/data/social.ts        → Empty links → icons hidden
        ↓
Phase 4+ components consume @data/* imports
        ↓
Static HTML in dist/ (Netlify)`;

const doc = new Document({
  creator: 'Agrometal Astro Project',
  title: 'Phase 2 Foundation Summary',
  description: 'Agrometal Astro Rebuild — Phase 2 completion report',
  sections: [
    {
      properties: {},
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
          children: [
            new TextRun({ text: 'Agrometal Astro Rebuild', bold: true, size: 36, color: 'D95648' }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [new TextRun({ text: 'Phase 2 Foundation Summary', bold: true, size: 28 })],
        }),
        p('Project: Agrometal Website Rebuild'),
        p('Phase: 2 — Architecture & Project Foundation'),
        p('Status: Complete — awaiting approval for Phase 3'),
        p('Location: agrometal-astro/'),
        new Paragraph({ spacing: { after: 300 }, children: [] }),

        p(
          'Phase 2 foundation is complete in agrometal-astro/. The previous SCSS prototype has been removed; the project now uses Tailwind CSS v4 (@tailwindcss/vite) with Astro 7. npm run build succeeds — all 14 routes generate.',
          { bold: false },
        ),

        h1('1. Folder Tree'),
        ...folderTree.split('\n').map((line) => codeBlock(line)),

        h1('2. Architecture Diagram'),
        ...architectureDiagram.split('\n').map((line) => codeBlock(line)),

        h1('3. Content Flow'),
        ...contentFlow.split('\n').map((line) => codeBlock(line)),
        p('Content stays in JSON. Pages will compose sections from validated data in Phase 5+.'),

        h1('4. Data Flow'),
        ...dataFlow.split('\n').map((line) => codeBlock(line)),

        h1('5. Hydration Strategy'),
        table(
          ['Layer', 'Strategy'],
          [
            ['Default', 'Zero JS — static HTML + CSS only'],
            ['Carousels (Brand, ESG slider)', 'client:visible — Swiper island when in viewport'],
            ['Counters', 'client:visible — vanilla IntersectionObserver'],
            ['Mobile menu', 'client:load — small vanilla JS island'],
            ['Forms', 'client:load — validation UI only (no backend yet)'],
            ['YouTube', 'Facade pattern — iframe on click (performanceConfig.youtubeFacade)'],
            ['GSAP timelines', 'Lazy dynamic import on Home/History only (Phase 5+)'],
          ],
        ),
        new Paragraph({ spacing: { after: 200 }, children: [] }),
        p('No jQuery, ScrollSmoother, or custom cursor.'),

        h1('6. Image Strategy'),
        bullet('Storage: public/images/agrometal/ (localized, no remote deps)'),
        bullet('Runtime: Astro <Image> + Sharp service (configured in astro.config.mjs)'),
        bullet('Formats: WebP primary, JPEG fallback (IMAGE_FORMATS)'),
        bullet('Responsive: 640–1536px widths (IMAGE_WIDTHS)'),
        bullet('Loading: Lazy default; eager for LCP hero only'),
        bullet('SVG logos: Unchanged Agrometal SVGs served as static assets'),

        h1('7. Performance Strategy'),
        bullet('Static output → CDN on Netlify'),
        bullet('compressHTML: true'),
        bullet('CSS code splitting via Vite'),
        bullet('Font preconnect to Google Fonts (performanceConfig.preconnect)'),
        bullet('Vendor chunk separation in Vite rollup'),
        bullet('Long-cache headers for /images/, /fonts/, /assets/ (netlify.toml)'),
        bullet('Targets: Lighthouse 90+, LCP < 2.5s, CLS < 0.1'),

        h1('8. Accessibility Strategy'),
        bullet('WCAG 2.1 AA target (src/lib/accessibility.ts)'),
        bullet(':focus-visible ring (#D95648, 3px)'),
        bullet('prefers-reduced-motion disables animations (animations.css)'),
        bullet('Skip link utility (.skip-link) ready for BaseLayout'),
        bullet('#main-content landmark on all route placeholders'),
        bullet('Form labels/ARIA defined in form schemas'),
        bullet('Social icons hidden when no official URLs (approved decision)'),

        h1('9. Architectural Concerns Before Phase 3'),
        table(
          ['Concern', 'Notes'],
          [
            [
              'Tailwind v4 + Astro 7',
              '@astrojs/tailwind does not support Astro 7 yet — using @tailwindcss/vite instead. Tokens live in variables.css @theme block.',
            ],
            [
              'Zod at runtime',
              'Config files validate at import time — good for safety, but build fails on bad data.',
            ],
            [
              'Phase 0 JSON vs new schema',
              'Audit JSON may need schema alignment when wired in Phase 5 — run validation then.',
            ],
            [
              'Google Maps embed URL',
              'Placeholder coordinates in company.ts — verify exact Jebel Ali office pin before launch.',
            ],
            ['Font Awesome', 'Not yet added — Phase 3 will add FA subset from template reference.'],
            [
              'Netlify + forms',
              'Static now; @astrojs/netlify adapter needed in Phase 13 for Resend API routes.',
            ],
            ['OG image', 'Default is logo SVG — need 1200×630 PNG/WebP before SEO phase.'],
          ],
        ),
        new Paragraph({ spacing: { after: 300 }, children: [] }),

        h1('What Was Delivered'),
        table(
          ['Item', 'Status'],
          [
            ['Astro config (static, trailingSlash, compressHTML, Sharp, aliases)', 'Done'],
            ['Tailwind v4 theme (colors, typography, spacing, breakpoints)', 'Done'],
            ['Folder structure', 'Done'],
            ['12 Zod schemas + TypeScript interfaces', 'Done'],
            ['Global config (site, nav, footer, SEO, company, social, constants)', 'Done'],
            ['14 empty route files', 'Done'],
            ['Global CSS (4 files, no component styling)', 'Done'],
            ['ESLint + Prettier + DEVELOPMENT.md', 'Done'],
            ['netlify.toml', 'Done'],
            ['SCSS prototype removed', 'Done'],
          ],
        ),
        new Paragraph({ spacing: { after: 200 }, children: [] }),
        p('Not built (as requested): components, layouts, page content, template HTML migration.'),

        h1('Approved Decisions Applied (Phase 2)'),
        bullet('1. Hosting: Netlify (netlify.toml)'),
        bullet('2. Contact Form: Resend via Astro API routes — documented for Phase 13'),
        bullet('3. Newsletter: UI schema only — no backend'),
        bullet('4. Home Trends section: Static content — no blog CMS'),
        bullet('5. Social Media: Empty links — icons hidden (no # placeholders)'),
        bullet('6. Privacy Policy: Not added — sitemap unchanged (14 pages)'),
        bullet('7. Google Maps: Embedded map URL in company.ts'),
        bullet('8. Canonical Domain: https://agrometal.ae'),
        bullet('9. Content Changes: Up to 20% refinement permitted'),
        bullet('10. SCSS Prototype: Discarded — Tailwind from scratch'),
        bullet('11. Template: Design reference only — no HTML migration'),

        h1('Next Step'),
        p(
          'Ready for Phase 3 — Design System (Tailwind component layer: buttons, section titles, typography utilities). Awaiting approval to proceed.',
        ),
        new Paragraph({ spacing: { before: 400 }, children: [] }),
        p('Document generated from Phase 2 completion report. /docs folder remains the single source of truth for implementation.', {
          italics: true,
          size: 20,
        }),
      ],
    },
  ],
});

const buffer = await Packer.toBuffer(doc);
fs.writeFileSync(OUT, buffer);
console.log(`Created: ${OUT}`);
