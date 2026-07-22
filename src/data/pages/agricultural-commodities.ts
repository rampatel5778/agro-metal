/**
 * Agricultural Commodities page content — /products/agricultural-commodities/
 */

const img = (file: string, folder = '2026/02') =>
  `/images/agrometal/${folder}/${file}`;

/** Page title hero — Agriva breadcrumb-wrapper */
export const agriHero = {
  title: 'Agricultural Commodities',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Agricultural Commodities' },
  ],
  backgroundImageSrc: img('Top-banner-image.webp', '2026/03'),
  topImageSrc: img('Top-banner-image.webp', '2026/03'),
} as const;

/** Intro — Agriva about-section-4 (content left, image right) */
export const agriIntro = {
  id: 'agri-intro',
  title: 'Agricultural Commodities',
  paragraphs: [
    'Agro Metal supports global food security and economic stability through resilient, climate-smart supply chains, ensuring reliable sourcing, efficient distribution, and consistent quality across agricultural commodities worldwide for global markets demand.',
    'We deliver high-quality grains, oilseeds, oils, flour, and pulses to meet evolving needs of global markets, supporting dependable supply, consistent standards, and market responsiveness worldwide across diverse agricultural value chains.',
  ],
  imageSrc: img('2nd-image-1-1.webp', '2026/03'),
  imageAlt: 'Agricultural commodities supply and distribution',
  cta: { label: 'View Products', href: '#agri-products' },
} as const;

/** Product forms — Agriva shop-card-items (5 commodity groups) */
export const agriProductGroups = [
  {
    id: 'grains',
    title: 'Grains',
    description:
      'Grains such as corn, wheat, and barley are used for animal feed, human consumption, ethanol production, and various industrial applications across agricultural and processing sectors.',
    items: [
      {
        title: 'Corn',
        imageSrc: img('Corn.jpg'),
        imageAlt: 'Corn',
      },
      {
        title: 'Wheat',
        imageSrc: img('Wheat.jpg'),
        imageAlt: 'Wheat',
      },
      {
        title: 'Barley',
        imageSrc: img('Barley.jpeg'),
        imageAlt: 'Barley',
      },
    ],
  },
  {
    id: 'oilseeds',
    title: 'Oilseeds',
    description:
      'Oilseeds include soybeans, sunflower seeds, rapeseed or canola, and cottonseed, serving as important agricultural commodities for food, oil extraction, and related industrial applications.',
    items: [
      {
        title: 'Soybeans',
        imageSrc: img('Soybeans.jpeg'),
        imageAlt: 'Soybeans',
      },
      {
        title: 'Sunflower Seeds',
        imageSrc: img('sunflower-oil.jpeg'),
        imageAlt: 'Sunflower seeds',
      },
      {
        title: 'Rapeseed/Canola',
        imageSrc: img('Rapeseed.jpeg'),
        imageAlt: 'Rapeseed and canola',
      },
      {
        title: 'Cottonseed',
        imageSrc: img('Cottonseed.jpeg'),
        imageAlt: 'Cottonseed',
      },
    ],
  },
  {
    id: 'oils-related',
    title: 'Oils & Related Products',
    description:
      'Oils and related products include edible and refined oils used in food preparation, industrial processes, and biofuel applications.',
    items: [
      {
        title: 'Edible Oils',
        imageSrc: img('sunflower-oil-2.jpeg'),
        imageAlt: 'Edible oils',
      },
      {
        title: 'Refined Oils – Food',
        imageSrc: img('refined-oils-food-2.jpeg'),
        imageAlt: 'Refined food oils',
      },
      {
        title: 'Biofuel',
        imageSrc: img('biofuel.jpeg'),
        imageAlt: 'Biofuel',
      },
    ],
  },
  {
    id: 'flour-by-products',
    title: 'Flour & By-Products',
    description:
      'Flour and by-products include wheat flour, cornmeal, barley flour, and bran supporting food processing, baking, and nutritional applications across agricultural markets.',
    items: [
      {
        title: 'Wheat Flour',
        imageSrc: img('Wheat-flour.jpeg'),
        imageAlt: 'Wheat flour',
      },
      {
        title: 'Cornmeal',
        imageSrc: img('cornmeal.jpeg'),
        imageAlt: 'Cornmeal',
      },
      {
        title: 'Barley Flour',
        imageSrc: img('barley-flour.jpeg'),
        imageAlt: 'Barley flour',
      },
      {
        title: 'Bran',
        imageSrc: img('bran.jpeg'),
        imageAlt: 'Bran',
      },
    ],
  },
  {
    id: 'pulses',
    title: 'Pulses',
    description:
      'Pulses include lentils, chickpeas, beans, and peas, serving as important agricultural products widely used for food consumption, nutrition, and dietary needs across households and food processing industries.',
    items: [
      {
        title: 'Lentils',
        imageSrc: img('Lentils.jpeg'),
        imageAlt: 'Lentils',
      },
      {
        title: 'Chickpeas',
        imageSrc: img('Chickpeas.jpeg'),
        imageAlt: 'Chickpeas',
      },
      {
        title: 'Beans',
        imageSrc: img('Beans.jpeg'),
        imageAlt: 'Beans',
      },
      {
        title: 'Peas',
        imageSrc: img('Peas.jpeg'),
        imageAlt: 'Peas',
      },
    ],
  },
] as const;

/** Industries we serve — Agriva project-card-items-4 */
export const agriIndustries = {
  id: 'industries-we-serve',
  eyebrow: 'End Markets',
  title: 'Industries We Serve',
  description:
    'End-use industries include food and beverage, animal feed, biofuels, industrial applications, textiles, pharmaceuticals, and nutraceuticals across sectors.',
  items: [
    {
      title: 'Food & Beverage Manufacturing',
      imageSrc: img('food-and-Beverage.webp', '2026/03'),
      imageAlt: 'Food and beverage manufacturing',
    },
    {
      title: 'Animal Feed & Livestock',
      imageSrc: img('Animal-Feed.webp', '2026/03'),
      imageAlt: 'Animal feed and livestock',
    },
    {
      title: 'Biofuels & Renewable Energy',
      imageSrc: img('Bio-Fuel.webp', '2026/03'),
      imageAlt: 'Biofuels and renewable energy',
    },
    {
      title: 'Industrial Applications & Textiles',
      imageSrc: img('Industry-and-textile.webp', '2026/03'),
      imageAlt: 'Industrial applications and textiles',
    },
    {
      title: 'Pharmaceuticals',
      imageSrc: img('Pharma.webp', '2026/03'),
      imageAlt: 'Pharmaceuticals',
    },
    {
      title: 'Nutraceuticals',
      imageSrc: img('Natureuticles.webp', '2026/03'),
      imageAlt: 'Nutraceuticals',
    },
  ],
} as const;

/** Trends & Insights — Agriva feature-card-item */
export const agriTrends = {
  id: 'trends-insights',
  eyebrow: 'Market Outlook',
  title: 'Trends & Insights',
  description:
    'Climate-smart traceable sourcing, rising food and feed demand, digital efficiency platforms, and growing biofuels and renewable demand drive global trends.',
  items: [
    {
      title: 'Climate-smart and traceable sourcing',
      description:
        'Climate-smart and traceable sourcing strengthens resilient supply chains and consistent quality across global agricultural markets.',
      imageSrc: img(
        'Agricultural-Commodities-Trends-Insights.webp',
        '2026/01'
      ),
      imageAlt: 'Climate-smart and traceable sourcing',
      iconSrc: '/assets/img/home-1/icon/01.svg',
    },
    {
      title: 'Rising global demand for food and feed',
      description:
        'Rising global demand for food and feed continues to shape agricultural commodity flows across consumption and livestock markets.',
      imageSrc: img('Animal-Feed.webp', '2026/03'),
      imageAlt: 'Rising global demand for food and feed',
      iconSrc: '/assets/img/home-1/icon/02.svg',
    },
    {
      title: 'Digital platforms improving efficiency',
      description:
        'Digital platforms are improving efficiency across sourcing, trading, and distribution of agricultural commodities worldwide.',
      imageSrc: img(
        'future-visions-business-technology-concept.webp',
        '2026/03'
      ),
      imageAlt: 'Digital platforms improving efficiency',
      iconSrc: '/assets/img/home-1/icon/03.svg',
    },
    {
      title: 'Growth in biofuels and renewable demand',
      description:
        'Growth in biofuels and renewable demand is expanding end-use opportunities for grains, oils, and related agricultural products.',
      imageSrc: img('Bio-Fuel.webp', '2026/03'),
      imageAlt: 'Growth in biofuels and renewable demand',
      iconSrc: '/assets/img/home-1/icon/04.svg',
    },
  ],
} as const;

/** Closing video CTA — Agriva drone-video-section */
export const agriClosingCta = {
  id: 'closing-cta',
  eyebrow: 'Partner With Us',
  title: 'Reliable, sustainable, and globally sourced agricultural commodities.',
  youtubeId: 'nr3_0zjTlsI',
  posterSrc: '/assets/img/home-3/video-bg.jpg',
  cta: { label: 'Contact Us', href: '/contact-us/' },
} as const;
