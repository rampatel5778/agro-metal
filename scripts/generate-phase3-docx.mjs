/**
 * Generates Phase-3-Design-System.docx
 * Usage: node scripts/generate-phase3-docx.mjs
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
  BorderStyle,
  AlignmentType,
  ShadingType,
} from 'docx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '..', 'docs', 'Phase-3-Design-System.docx');

function h1(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text, bold: true })] });
}
function h2(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text, bold: true })] });
}
function p(text) {
  return new Paragraph({ spacing: { after: 160 }, children: [new TextRun(text)] });
}
function bullet(text) {
  return new Paragraph({ spacing: { after: 80 }, bullet: { level: 0 }, children: [new TextRun(text)] });
}

function table(headers, rows) {
  const headerRow = new TableRow({
    tableHeader: true,
    children: headers.map(
      (h) =>
        new TableCell({
          width: { size: 100 / headers.length, type: WidthType.PERCENTAGE },
          shading: { type: ShadingType.CLEAR, fill: 'D95648' },
          children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, color: 'FFFFFF' })] })],
        }),
    ),
  });
  const dataRows = rows.map(
    (row) =>
      new TableRow({
        children: row.map(
          (c) =>
            new TableCell({
              children: [new Paragraph({ children: [new TextRun(String(c))] })],
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

const doc = new Document({
  title: 'Phase 3 Design System Report',
  sections: [
    {
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 300 },
          children: [new TextRun({ text: 'Agrometal Design System', bold: true, size: 36, color: 'D95648' })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: 'Phase 3 Completion Report', bold: true, size: 24 })],
        }),
        p('Status: Complete — awaiting Phase 4 approval'),
        p('Showcase URL: /design-system/ (noindex, internal only)'),

        h1('1. Objective'),
        p(
          'Create a scalable enterprise Design System that every Astro component will use, faithfully reproducing the Agriva HTML template with Tailwind CSS v4 and Astro best practices.',
        ),
        p('Not built: Pages, HTML migration, Header, Footer, Hero, business section components.'),

        h1('2. Tailwind Theme'),
        table(
          ['Category', 'Implementation'],
          [
            ['Colors', 'Primary #D95648, secondary, accent, neutral, semantic, surfaces, overlays'],
            ['Typography', 'Instrument Sans + Inter, clamp-based heading scale'],
            ['Spacing', 'Section 5–7.5rem, gutter, stack, content/page/wide widths'],
            ['Border Radius', 'xs, sm, md, lg, xl, btn, full'],
            ['Shadows', 'xs, sm, card, header, lift, focus'],
            ['Opacity', 'disabled 0.55, muted 0.72'],
            ['Transitions', '150ms–800ms, default + bounce easing'],
            ['Breakpoints', 'sm 576px → 4xl 1900px'],
            ['Z-index', 'dropdown 100 → toast 500'],
            ['Animation', 'fade, slide, scale, reveal, marquee keyframes'],
          ],
        ),
        new Paragraph({ spacing: { after: 200 }, children: [] }),

        h1('3. CSS Files Created'),
        bullet('variables.css — @theme + :root complete token system'),
        bullet('typography.css — display, h1–h6, lead, body, caption, label, link, lists'),
        bullet('buttons.css — 9 variants, 3 sizes, loading/disabled/hover/focus/active'),
        bullet('forms.css — input, textarea, select, checkbox, radio, validation states'),
        bullet('cards.css — feature, product, service, blog, value, stat, timeline, image, icon'),
        bullet('layout.css — section, container, grid, flex, stack, split, columns'),
        bullet('animations.css — fade, slide, scale, reveal, hover lift/scale, reduced motion'),
        bullet('utilities.css — glass, overlays, badges, tags, chips, status, dividers'),
        bullet('images.css — aspect ratios, cover/contain, zoom, overlay'),
        bullet('accessibility.css — skip link, sr-only, focus ring, contrast panels'),
        bullet('global.css — entry point with @config tailwind.config.ts'),

        h1('4. Button System'),
        table(
          ['Variant', 'Class', 'Template Reference'],
          [
            ['Primary', 'ds-btn--primary', '.theme-btn circle reveal'],
            ['Secondary', 'ds-btn--secondary', '.theme-btn-2 yellow'],
            ['Accent', 'ds-btn--accent', '.theme-btn-3 green'],
            ['Outline', 'ds-btn--outline', '.theme-btn.style-border'],
            ['Ghost', 'ds-btn--ghost', 'Transparent hover fill'],
            ['Text / Link', 'ds-btn--link', '.link-btn arrow shift'],
            ['Icon', 'ds-btn--icon', 'Square icon button'],
            ['CTA', 'ds-btn--cta', 'Large primary CTA'],
          ],
        ),
        new Paragraph({ spacing: { after: 200 }, children: [] }),

        h1('5. Typography System'),
        bullet('ds-display — clamp 2.5rem–4.6875rem'),
        bullet('ds-h1 through ds-h6 — responsive clamp scale'),
        bullet('ds-lead, ds-body-lg, ds-body, ds-body-sm'),
        bullet('ds-caption, ds-label, ds-btn-text, ds-quote, ds-eyebrow'),
        bullet('ds-link — focus-visible accessible'),
        bullet('ds-list, ds-list--ordered'),

        h1('6. Form Design System (styling only)'),
        bullet('ds-input, ds-textarea, ds-select'),
        bullet('ds-checkbox, ds-radio'),
        bullet('ds-field + ds-field--error + ds-field--success'),
        bullet('Focus ring, placeholder, hint, error/success messages'),

        h1('7. Card System'),
        bullet('ds-card — base with shadow and radius'),
        bullet('ds-card--feature — centered icon + text'),
        bullet('ds-card--product / --service — media + tag + body'),
        bullet('ds-card--blog — meta + landscape media'),
        bullet('ds-card--value — left border accent'),
        bullet('ds-card--stat — large metric number'),
        bullet('ds-card--timeline — period label + content'),
        bullet('ds-card--image — gradient overlay title'),
        bullet('ds-card--icon — horizontal icon layout'),
        bullet('ds-card--lift — hover translateY + image zoom'),

        h1('8. Layout System'),
        bullet('ds-section — responsive vertical padding'),
        bullet('ds-container — page width 75rem, narrow 48rem, wide 90rem'),
        bullet('ds-grid--2/3/4 — responsive columns'),
        bullet('ds-stack, ds-flex, ds-split, ds-columns'),

        h1('9. Animation System'),
        bullet('ds-animate-fade-in, fade-in-up, slide-in-left/right'),
        bullet('ds-animate-scale-in, reveal, marquee'),
        bullet('ds-hover-lift, ds-hover-scale'),
        bullet('prefers-reduced-motion: all animations disabled'),

        h1('10. Icon System'),
        p('Component: src/components/ui/Icon.astro'),
        bullet('Font Awesome 6 Pro via /assets/css/all.min.css'),
        bullet('Props: name, style, size, color, rotate, spin, pulse, label, decorative'),
        bullet('Accessibility: aria-label or aria-hidden'),

        h1('11. Image System'),
        p('Component: src/components/ui/DsImage.astro'),
        bullet('Aspect: video, square, portrait, landscape'),
        bullet('Fit: cover, contain'),
        bullet('Loading: lazy default, priority eager + fetchpriority high'),
        bullet('Options: zoom hover, gradient overlay, rounded'),

        h1('12. Utility Classes'),
        bullet('ds-glass — backdrop blur panel'),
        bullet('ds-overlay-dark — rgba dark overlay'),
        bullet('ds-gradient-overlay — card gradient'),
        bullet('ds-text-gradient — theme gradient text'),
        bullet('ds-badge, ds-tag, ds-chip, ds-status'),
        bullet('ds-divider, ds-highlight'),

        h1('13. Accessibility Theme'),
        bullet('Focus ring: 3px #D95648, 2px offset'),
        bullet('Skip link: ds-skip-link'),
        bullet('Screen reader: ds-sr-only'),
        bullet('Selection colors in variables.css'),
        bullet('Reduced motion overrides in animations.css'),
        bullet('Min touch target: 2.75rem'),

        h1('14. Showcase Page'),
        p('Route: /design-system/ — meta robots noindex, nofollow'),
        p('Demonstrates: colors, typography, buttons, forms, cards, badges, spacing, icons, images, animations, layout'),

        h1('15. Naming Convention'),
        p('All design system classes use ds- prefix to separate from Tailwind utilities and Phase 4 business components.'),

        h1('16. Architectural Notes'),
        bullet('Tailwind v4 via @tailwindcss/vite (Astro 7 compatible)'),
        bullet('@config tailwind.config.ts in global.css for tooling'),
        bullet('Agriva primary hover clip-path preserved on ds-btn--primary'),
        bullet('Font Awesome webfonts may need verification — template CSS bundled'),

        h1('17. Next Step'),
        p('Phase 4 — Reusable Components: BaseLayout, Header, Footer, BreadcrumbHero, section components using ds-* primitives. Awaiting approval.'),

        new Paragraph({ spacing: { before: 400 }, children: [] }),
        new Paragraph({
          children: [new TextRun({ text: '/docs remains the single source of truth for implementation.', italics: true })],
        }),
      ],
    },
  ],
});

const buffer = await Packer.toBuffer(doc);
fs.writeFileSync(OUT, buffer);
console.log(`Created: ${OUT}`);
