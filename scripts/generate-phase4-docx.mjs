/**
 * Generates Phase-4-Component-Library.docx
 * Usage: node scripts/generate-phase4-docx.mjs
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
  ShadingType,
} from 'docx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '..', 'docs', 'Phase-4-Component-Library.docx');

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

const layoutComponents = [
  ['BaseLayout', 'HTML shell, SEO, header, footer', 'layout/BaseLayout.astro'],
  ['Header', 'Logo + desktop/mobile nav', 'layout/Header.astro'],
  ['MainNavigation', 'Desktop dropdown nav', 'layout/MainNavigation.astro'],
  ['MobileNavigation', 'Mobile accordion menu', 'layout/MobileNavigation.astro'],
  ['Footer', 'Widgets, contact, newsletter', 'layout/Footer.astro'],
  ['FooterBottom', 'Copyright bar', 'layout/FooterBottom.astro'],
  ['BreadcrumbHero', 'Inner page title banner', 'layout/BreadcrumbHero.astro'],
  ['SEO', 'Meta, OG, Twitter', 'layout/SEO.astro'],
  ['StructuredData', 'JSON-LD injection', 'layout/StructuredData.astro'],
  ['Container', 'Max-width wrapper', 'layout/Container.astro'],
  ['SectionWrapper', 'Section padding/bg', 'layout/SectionWrapper.astro'],
  ['SectionTitle', 'Heading + subtitle', 'layout/SectionTitle.astro'],
];

const uiComponents = [
  ['Button', 'ds-btn variants', 'ui/Button.astro'],
  ['Icon', 'Font Awesome wrapper', 'ui/Icon.astro'],
  ['Image', 'Responsive image', 'ui/Image.astro'],
  ['Video', 'HTML5 video', 'ui/Video.astro'],
  ['Badge', 'Label badge', 'ui/Badge.astro'],
  ['Tag', 'Inline tag', 'ui/Tag.astro'],
  ['Chip', 'Pill chip', 'ui/Chip.astro'],
  ['Divider', 'HR separator', 'ui/Divider.astro'],
  ['Overlay', 'Dark/gradient overlay', 'ui/Overlay.astro'],
  ['Card', 'Base card shell', 'ui/Card.astro'],
  ['Link', 'Styled anchor', 'ui/Link.astro'],
];

const formComponents = [
  ['FormField', 'Label/hint/error wrapper', 'forms/FormField.astro'],
  ['Input', 'Text input', 'forms/Input.astro'],
  ['Textarea', 'Multiline input', 'forms/Textarea.astro'],
  ['Select', 'Dropdown', 'forms/Select.astro'],
  ['Checkbox', 'Checkbox input', 'forms/Checkbox.astro'],
  ['Radio', 'Radio input', 'forms/Radio.astro'],
  ['ContactForm', 'Inquiry form UI', 'forms/ContactForm.astro'],
  ['NewsletterForm', 'Footer signup UI', 'forms/NewsletterForm.astro'],
];

const contentComponents = [
  ['RichText', 'HTML content renderer', 'sections/RichText.astro'],
  ['TextBlock', 'Heading + paragraphs', 'sections/TextBlock.astro'],
  ['IntroText', 'Intro + CTA', 'sections/IntroText.astro'],
  ['IntroTextImage', 'Split text/image', 'sections/IntroTextImage.astro'],
  ['CounterStats', 'Animated counters', 'sections/CounterStats.astro'],
  ['CertificationBadges', 'Cert logo row', 'sections/CertificationBadges.astro'],
  ['BrandCarousel', 'Partner logos', 'sections/BrandCarousel.astro'],
  ['TimelineVertical', 'Vertical milestones', 'sections/TimelineVertical.astro'],
  ['TimelineHorizontal', 'Horizontal timeline', 'sections/TimelineHorizontal.astro'],
  ['VideoBlock', 'YouTube embed', 'sections/VideoBlock.astro'],
  ['VideoCTA', 'Video background CTA', 'sections/VideoCTA.astro'],
  ['TextMarquee', 'Scrolling text', 'sections/TextMarquee.astro'],
  ['TextBanner', 'Headline strip', 'sections/TextBanner.astro'],
];

const businessComponents = [
  ['IconGrid', 'Icon + label grid', 'sections/IconGrid.astro'],
  ['IconBoxGrid', 'Icon box grid', 'sections/IconBoxGrid.astro'],
  ['FeatureCards', 'Feature cards', 'sections/FeatureCards.astro'],
  ['ValueCards', 'Value cards', 'sections/ValueCards.astro'],
  ['ProductCards', 'Product cards', 'sections/ProductCards.astro'],
  ['CategoryCardGrid', 'Hub image cards', 'sections/CategoryCardGrid.astro'],
  ['ProductCategoryGrid', 'Product sub-items', 'sections/ProductCategoryGrid.astro'],
  ['IndustryCards', 'Industry grid', 'sections/IndustryCards.astro'],
  ['ServiceCardGrid', 'Service cards', 'sections/ServiceCardGrid.astro'],
  ['BenefitsList', 'Benefits list', 'sections/BenefitsList.astro'],
  ['WhyChooseUs', 'Differentiators', 'sections/WhyChooseUs.astro'],
  ['BlogCards', 'Blog/trends cards', 'sections/BlogCards.astro'],
  ['AnchorNav', 'In-page links', 'sections/AnchorNav.astro'],
];

const doc = new Document({
  title: 'Phase 4 Component Library Report',
  sections: [
    {
      children: [
        h1('Phase 4 — Component Library Report'),
        p('Agrometal Astro rebuild — reusable business components using Phase 3 Design System (ds-* classes).'),
        p('Status: Complete — awaiting approval before Phase 5. No pages assembled.'),
        h2('Deliverables'),
        bullet('58 reusable Astro components (4A–4E)'),
        bullet('TypeScript prop interfaces in src/types/components/'),
        bullet('Component layout CSS in src/styles/components.css'),
        bullet('Vanilla JS for mobile nav, counters, carousel autoplay, form UI feedback'),
        bullet('Documentation: docs/phase-4-component-library.md'),
        h2('Rules Enforced'),
        bullet('All components use ds-* Design System classes'),
        bullet('No inline CSS in components'),
        bullet('No hardcoded business content — props only'),
        bullet('No page assembly or HTML migration'),
        bullet('Forms are UI-only (backend in Phase 13)'),
        h2('4A — Layout Components'),
        table(['Component', 'Purpose', 'File'], layoutComponents),
        h2('4B — UI Components'),
        table(['Component', 'Purpose', 'File'], uiComponents),
        h2('4C — Form Components'),
        table(['Component', 'Purpose', 'File'], formComponents),
        h2('4D — Content Components'),
        table(['Component', 'Purpose', 'File'], contentComponents),
        h2('4E — Business Components'),
        table(['Component', 'Purpose', 'File'], businessComponents),
        h2('Testing'),
        bullet('npm run build — PASS (15 routes)'),
        bullet('TypeScript strict — PASS via Astro build'),
        bullet('No duplicated ProductCategoryGrid markup — delegates to ProductCards'),
        bullet('Accessibility: skip link, ARIA on nav/forms, reduced-motion fallbacks'),
        h2('Next Step'),
        p('Phase 5 — Assemble 14 pages using components + JSON content (after approval).'),
      ],
    },
  ],
});

const buffer = await Packer.toBuffer(doc);
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, buffer);
console.log('Written:', OUT);
