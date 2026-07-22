/**
 * Ferrous Metals page content — /products/ferrous-metals/
 */

const img = (file: string, folder = '2026/03') =>
  `/images/agrometal/${folder}/${file}`;

/** Page title hero — Agriva breadcrumb-wrapper */
export const ferrousHero = {
  title: 'Ferrous Metals',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Ferrous Metals' },
  ],
  backgroundImageSrc: img('Top-Banner-.webp'),
  topImageSrc: img('Top-Banner-.webp'),
} as const;

/** Intro — Agriva about-section-4 (content left, image right) */
export const ferrousIntro = {
  id: 'ferrous-intro',
  title: 'Ferrous Metals',
  paragraphs: [
    'Ferrous metals underpin construction, automotive, machinery, and infrastructure, offering strength, durability, and versatility for structures, vehicles, equipment, ensuring consistent performance, reliability, and long-term industrial dependability.',
    'Sustainable steel solutions deliver reliability, performance, and quality through responsible sourcing and efficient processes, supporting industries with durable materials while reducing environmental impact globally responsibly.',
  ],
  imageSrc: img('2nd-Image.webp'),
  imageAlt: 'Ferrous metals and steel industrial supply',
  cta: { label: 'View Products', href: '#ferrous-products' },
} as const;

/** Product forms — Agriva shop-card-items (Iron Ore + Steel Products) */
export const ferrousProductGroups = [
  {
    id: 'iron-ore',
    title: 'Iron Ore',
    description:
      'Iron ore, available as lumps, fines, and pellets, serves as the primary raw material in steel production, supporting manufacturing processes that create essential steel products for various industrial applications.',
    items: [
      {
        title: 'Lumps',
        imageSrc: img('Lumps.webp'),
        imageAlt: 'Iron ore lumps',
      },
      {
        title: 'Fines',
        imageSrc: img('Fines-1.webp'),
        imageAlt: 'Iron ore fines',
      },
      {
        title: 'Pellets',
        imageSrc: img('Pillets.webp'),
        imageAlt: 'Iron ore pellets',
      },
    ],
  },
  {
    id: 'steel-products',
    title: 'Steel Products',
    description:
      'Steel products include long products like rebar, wire rod, structural steel; flat products such as hot-rolled coils, cold-rolled coils, plates; tubular pipes and tubes, and alloy steel grades.',
    items: [
      {
        title: 'Long Products',
        forms: ['Rebar', 'Wire rod', 'Structural steel'],
        imageSrc: img('Long-Products.webp'),
        imageAlt: 'Long steel products',
      },
      {
        title: 'Flat Products',
        forms: ['Hot-rolled coils', 'Cold-rolled coils', 'Plates'],
        imageSrc: img('Flat-Products.webp'),
        imageAlt: 'Flat steel products',
      },
      {
        title: 'Tubular Products',
        forms: ['Pipes', 'Tubes'],
        imageSrc: img('Tubular.webp'),
        imageAlt: 'Tubular steel products',
      },
      {
        title: 'Carbon & Alloy Steel',
        forms: ['High-strength', 'Corrosion-resistant grades'],
        imageSrc: img('Carbon-and-Alloy.webp'),
        imageAlt: 'Carbon and alloy steel',
      },
    ],
  },
] as const;

/** Industries we serve — Agriva project-card-items-4 */
export const ferrousIndustries = {
  id: 'industries-we-serve',
  eyebrow: 'End Markets',
  title: 'Industries We Serve',
  description:
    'End-use industries include construction, automotive, machinery, energy, and consumer goods, relying on materials for manufacturing and development.',
  items: [
    {
      title: 'Construction & Infrastructure',
      imageSrc: img('Construction-and-Infra.webp'),
      imageAlt: 'Construction and infrastructure',
    },
    {
      title: 'Automotive & Transportation',
      imageSrc: img('Automotive.webp'),
      imageAlt: 'Automotive and transportation',
    },
    {
      title: 'Machinery & Industrial Equipment',
      imageSrc: img('Machinery-and-industrial.webp'),
      imageAlt: 'Machinery and industrial equipment',
    },
    {
      title: 'Energy & Utilities',
      imageSrc: img('Energy-and-utility.webp'),
      imageAlt: 'Energy and utilities',
    },
    {
      title: 'Consumer Goods',
      imageSrc: img('Consumer-Goods-.webp'),
      imageAlt: 'Consumer goods',
    },
    {
      title: 'Packaging',
      imageSrc: img('Packaging.webp'),
      imageAlt: 'Packaging',
    },
  ],
} as const;

/** Trends & Insights — Agriva feature-card-item (3-up) */
export const ferrousTrends = {
  id: 'trends-insights',
  eyebrow: 'Market Outlook',
  title: 'Trends & Insights',
  description:
    'Key trends shaping ferrous metals focus on sustainability, recycling, lightweight applications, and advanced technologies improving efficiency, performance, and responsible steel production.',
  items: [
    {
      title: 'Low-carbon and electric arc furnace steel adoption',
      description:
        'Low-carbon and electric arc furnace steel adoption is advancing responsible steel production and improving efficiency across global markets.',
      imageSrc: img('Trend-and-Insight.webp'),
      imageAlt: 'Low-carbon and electric arc furnace steel adoption',
      iconSrc: '/assets/img/home-1/icon/01.svg',
    },
    {
      title: 'Lightweight automotive steel growth',
      description:
        'Lightweight automotive steel growth supports stronger, more efficient vehicles while meeting rising performance and mobility demand.',
      imageSrc: img('Automotive.webp'),
      imageAlt: 'Lightweight automotive steel growth',
      iconSrc: '/assets/img/home-1/icon/02.svg',
    },
    {
      title: 'Rising demand for recycled ferrous metals',
      description:
        'Rising demand for recycled ferrous metals is reshaping supply chains through sustainability, recycling, and circular steel initiatives.',
      imageSrc: img('CIRCUL_1.webp'),
      imageAlt: 'Rising demand for recycled ferrous metals',
      iconSrc: '/assets/img/home-1/icon/03.svg',
    },
  ],
} as const;

/** Closing video CTA — Agriva drone-video-section */
export const ferrousClosingCta = {
  id: 'closing-cta',
  eyebrow: 'Partner With Us',
  title: 'Sustainable, reliable, and responsible ferrous metals supply.',
  youtubeId: 'nr3_0zjTlsI',
  posterSrc: '/assets/img/home-3/video-bg.jpg',
  cta: { label: 'Contact Us', href: '/contact-us/' },
} as const;
