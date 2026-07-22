/**
 * Non-Ferrous Metals page content — /products/non-ferrous-metals/
 */

const img = (file: string, folder = '2026/02') =>
  `/images/agrometal/${folder}/${file}`;

/** Page title hero — Agriva breadcrumb-wrapper */
export const nonFerrousHero = {
  title: 'Non-Ferrous Metals',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Non-Ferrous Metals' },
  ],
  backgroundImageSrc:
    '/images/agrometal/2026/03/Non-ferous-metal-top-Banner-.webp',
  topImageSrc: '/images/agrometal/2026/03/Non-ferous-metal-top-Banner-.webp',
} as const;

/** Intro — Agriva about-section-4 (content left, image right) */
export const nonFerrousIntro = {
  id: 'non-ferrous-intro',
  title: 'Non-Ferrous Metals',
  paragraphs: [
    'Non-ferrous metals are essential for modern manufacturing, renewable energy, and electrification, supporting advanced technologies through lightweight properties, corrosion resistance, and superior conductivity worldwide industries.',
    'These metals enable innovation across industries by delivering efficiency, durability, and performance, making them indispensable materials for electrical systems, sustainable infrastructure, and future-focused industrial applications.',
  ],
  imageSrc: '/images/agrometal/2026/03/2nd-image-1.webp',
  imageAlt: 'Non-ferrous metals industrial supply and processing',
  /** Scrolls to product forms stack */
  cta: { label: 'View Products', href: '#non-ferrous-products' },
} as const;

/** Product forms — Agriva shop-card-items (4 metals) */
export const nonFerrousProductGroups = [
  {
    id: 'copper_main',
    title: 'Copper',
    description:
      'Copper includes cathodes, rods, wires, and pipes, widely used in electrical systems, power applications, and electric vehicle infrastructure due to conductivity, reliability, and versatility.',
    items: [
      {
        title: 'Cathodes',
        imageSrc: img('Non-Ferrous-Product-Range.webp', '2026/01'),
        imageAlt: 'Copper cathodes',
      },
      {
        title: 'Rods',
        imageSrc: img('large-steel-factory-warehouse_1127-3282.jpeg'),
        imageAlt: 'Copper rods',
      },
      {
        title: 'Wires',
        imageSrc: img('wire.jpeg'),
        imageAlt: 'Copper wires',
      },
      {
        title: 'Pipes',
        imageSrc: img('pipe.jpeg'),
        imageAlt: 'Copper pipes',
      },
    ],
  },
  {
    id: 'zinc',
    title: 'Zinc',
    description:
      'Zinc is supplied as ingots, alloys, and sheets, primarily used for corrosion protection and galvanizing, enhancing durability and extending the lifespan of steel and metal products.',
    items: [
      {
        title: 'Ingots',
        imageSrc: img('cathods.jpeg'),
        imageAlt: 'Zinc ingots',
      },
      {
        title: 'Alloys',
        imageSrc: img('alloy.jpeg'),
        imageAlt: 'Zinc alloys',
      },
      {
        title: 'Sheets',
        imageSrc: img('sheet.jpeg'),
        imageAlt: 'Zinc sheets',
      },
    ],
  },
  {
    id: 'lithium',
    title: 'Lithium',
    description:
      'Lithium is available as carbonate, hydroxide, and spodumene, essential for lithium-ion batteries and energy storage systems supporting electric mobility and modern energy applications.',
    items: [
      {
        title: 'Carbonate',
        imageSrc: img('carbonet.jpeg'),
        imageAlt: 'Lithium carbonate',
      },
      {
        title: 'Hydroxide',
        imageSrc: img('hydroxide.jpeg'),
        imageAlt: 'Lithium hydroxide',
      },
      {
        title: 'Spodumene',
        imageSrc: img('spodumene.jpeg'),
        imageAlt: 'Lithium spodumene',
      },
    ],
  },
  {
    id: 'aluminium',
    title: 'Aluminium',
    description:
      'Aluminium is supplied as ingots, sheets, billets, and extrusions, valued for lightweight strength, recyclability, and suitability for electric vehicles, aerospace applications, and construction projects.',
    items: [
      {
        title: 'Ingots',
        imageSrc: img('al-ingot.jpeg'),
        imageAlt: 'Aluminium ingots',
      },
      {
        title: 'Sheets',
        imageSrc: img('al-sheet.jpeg'),
        imageAlt: 'Aluminium sheets',
      },
      {
        title: 'Billets',
        imageSrc: img('billets.jpeg'),
        imageAlt: 'Aluminium billets',
      },
      {
        title: 'Extrusions',
        imageSrc: img('extrusions.jpeg'),
        imageAlt: 'Aluminium extrusions',
      },
    ],
  },
] as const;

/** Industries we serve — Agriva project-card-items-4 */
export const nonFerrousIndustries = {
  id: 'industries-we-serve',
  eyebrow: 'End Markets',
  title: 'Industries We Serve',
  description:
    'End-use industries include automotive and EVs, renewable energy, construction, aerospace, consumer goods, and electronics across diverse industrial sectors worldwide.',
  items: [
    {
      title: 'Automotive & EVs',
      imageSrc: '/images/agrometal/2026/03/Automotive-and-EV-.webp',
      imageAlt: 'Automotive and EVs',
    },
    {
      title: 'Renewable Energy & Electrical Infrastructure',
      imageSrc: '/images/agrometal/2026/03/Renewable-Energy-and-utility.webp',
      imageAlt: 'Renewable energy and electrical infrastructure',
    },
    {
      title: 'Construction',
      imageSrc: '/images/agrometal/2026/03/Construction-.webp',
      imageAlt: 'Construction',
    },
    {
      title: 'Aerospace',
      imageSrc:
        '/images/agrometal/2026/03/aircraft-engine-maintenance-by-technician-hangar-with-dramatic-lighting-1.webp',
      imageAlt: 'Aerospace',
    },
    {
      title: 'Consumer Goods',
      imageSrc: '/images/agrometal/2026/03/Consumer-Goods-1-1.webp',
      imageAlt: 'Consumer goods',
    },
    {
      title: 'Electronics',
      imageSrc: '/images/agrometal/2026/03/Electronics.webp',
      imageAlt: 'Electronics',
    },
  ],
} as const;

/** Trends & Insights — Agriva feature-card-item (3-up) */
export const nonFerrousTrends = {
  id: 'trends-insights',
  eyebrow: 'Market Outlook',
  title: 'Trends & Insights',
  description:
    'Electrification and battery demand drive growth, while circular economy recycling initiatives and digitalization of metals trading platforms reshape markets globally.',
  items: [
    {
      title: 'Electrification and battery demand',
      description:
        'Electrification and battery demand drive growth across mobility, energy storage, and power infrastructure markets worldwide.',
      imageSrc: '/images/agrometal/2026/03/Automotive-and-EV-.webp',
      imageAlt: 'Electrification and battery demand',
      iconSrc: '/assets/img/home-1/icon/01.svg',
    },
    {
      title: 'Circular economy & recycling initiatives',
      description:
        'Circular economy and recycling initiatives are reshaping how non-ferrous metals are recovered, reused, and supplied globally.',
      imageSrc: '/images/agrometal/2026/03/CIRCUL_1.webp',
      imageAlt: 'Circular economy and recycling initiatives',
      iconSrc: '/assets/img/home-1/icon/02.svg',
    },
    {
      title: 'Digitalization of metals trading platforms',
      description:
        'Digitalization of metals trading platforms is transforming how markets connect, trade, and operate around the world.',
      imageSrc:
        '/images/agrometal/2026/03/future-visions-business-technology-concept.webp',
      imageAlt: 'Digitalization of metals trading platforms',
      iconSrc: '/assets/img/home-1/icon/03.svg',
    },
  ],
} as const;

/** Closing video CTA — Agriva drone-video-section */
export const nonFerrousClosingCta = {
  id: 'closing-cta',
  eyebrow: 'Partner With Us',
  title: 'Sustainable, traceable, and reliable non-ferrous metals supply.',
  youtubeId: 'nr3_0zjTlsI',
  posterSrc: '/assets/img/home-3/video-bg.jpg',
  cta: { label: 'Contact Us', href: '/contact-us/' },
} as const;
