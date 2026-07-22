/**
 * About Agrometal page content
 * @see existing website/about-us.html
 */

/** Page title hero — Agriva about-2.html breadcrumb-wrapper */
export const aboutHero = {
  title: 'About Agrometal',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About Agrometal' },
  ],
} as const;

/** Intro + volume counters — Agriva about-2.html our-statistics-section */
export const aboutVolumeStats = {
  eyebrow: 'Trade Volume',
  title:
    'Agro Metal delivers high-volume global trade across metals and agriculture, ensuring reliability, quality, partnerships, and growth.',
  items: [
    {
      value: 780,
      suffix: 'K+',
      heading: 'Metric Tons',
      description: 'key commodities',
    },
    {
      value: 80,
      suffix: 'K+',
      heading: 'Metric Tons',
      description: 'hot-rolled coil',
    },
    {
      value: 150,
      suffix: 'K+',
      heading: 'Metric Tons',
      description: 'billets',
    },
    {
      value: 315,
      suffix: 'K+',
      heading: 'Metric Tons',
      description: 'billets',
    },
    {
      value: 130,
      suffix: 'K+',
      heading: 'Metric Tons',
      description: 'barley',
    },
    {
      value: 105,
      suffix: 'K+',
      heading: 'Metric Tons',
      description: 'soybean meal',
    },
  ],
} as const;

/** Certifications — Agriva about-2.html our-imapact-section */
export const aboutCertifications = {
  title: 'Our Standards Have Been<br> Certified',
  items: [
    {
      iconSrc: '/images/agrometal/2026/02/iso-icon-1-1.webp',
      label: 'ISO',
      detail: 'Certified',
    },
    {
      iconSrc: '/images/agrometal/2026/02/Gata-icon-1-1.webp',
      label: 'GATA',
      detail: 'Certified',
    },
    {
      iconSrc: '/images/agrometal/2026/02/SGS-icon-1-1-e1772100029904.webp',
      label: 'SGS',
      detail: 'Certified',
    },
  ],
} as const;

/** Leading the Future — Agriva about.html work-process-section (5 cards) */
export const aboutDifferentiators = {
  eyebrow: 'Why Agrometal',
  title: 'Leading the Future of Agro & Metals',
  description:
    'Agro Metal brings together international expertise, strong momentum, and strategic partnerships to lead the next wave of opportunity across the rapidly evolving agricultural commodities, metals, and mining sectors.',
  items: [
    {
      iconSrc: '/images/agrometal/2026/03/Global-1.png',
      title: 'Global Scale, Integrated Network',
      description: 'Headquartered in Dubai, connecting suppliers and clients worldwide.',
    },
    {
      iconSrc: '/images/agrometal/2026/03/Reliability.png',
      title: 'Trusted Brand, Proven Reliability',
      description: 'Certified, experienced, trusted by leading global market participants.',
    },
    {
      iconSrc: '/images/agrometal/2026/03/Diversified.png',
      title: 'Diversified Market Strength',
      description: 'Leading agriculture, metals, mining with sustainable global operations.',
    },
    {
      iconSrc: '/images/agrometal/2026/03/Powerhouse.png',
      title: 'Enduring Sourcing Powerhouse',
      description: 'Strong sourcing networks across key global agricultural regions',
    },
    {
      iconSrc: '/images/agrometal/2026/03/Expansion.png',
      title: 'Expansion-Ready, Value-Driven',
      description: 'Financially strong, expanding across Asia and MENA markets',
    },
  ],
} as const;

/** Mission & Vision — Agriva about.html our-history-section-3 (no years) */
export const aboutMissionVision = {
  eyebrow: 'Our Purpose',
  title:
    'Driving sustainable global trade through ethical sourcing, innovation, and responsible growth worldwide.',
  imageSrc: '/assets/img/home-3/history-2010.jpg',
  imageAlt: 'Agricultural field operations',
  mission: {
    tabLabel: 'Our Mission',
    heading: 'Mission',
    body: 'Deliver metals and agriculture globally with transparency, efficiency, sustainability, and lasting partner value.',
  },
  vision: {
    tabLabel: 'Our Vision',
    heading: 'Vision',
    body: 'Connecting industries worldwide with essential resources through seamless, responsible, and innovative trade solutions.',
  },
} as const;

/** Our Values — Agriva index-4.html why-choose-us-box (6 cards) */
export const aboutValues = {
  eyebrow: 'Principles',
  title: 'Our Values',
  description:
    'These values define who we are at Agro Metal FZCO and are the cornerstone of our sustainable growth for our clients, partners, communities, and people.',
  items: [
    {
      iconSrc: '/assets/img/home-3/icon/05.svg',
      title: 'Integrity-Empowering Ethical Choices',
      bullets: [
        'Conducting business with honesty, transparency, and fairness.',
        'Upholding commitments and ethical sourcing.',
      ],
    },
    {
      iconSrc: '/assets/img/home-3/icon/06.svg',
      title: 'Reliability – Dependable & Consistent',
      bullets: [
        'Ensuring secure supply chains and consistent service.',
        'Proactively managing risks and mitigating disruptions.',
      ],
    },
    {
      iconSrc: '/assets/img/home-3/icon/07.svg',
      title: 'Customer Focus – Your Success First',
      bullets: [
        'Tailoring solutions to meet client needs.',
        'Building long-term partnerships based on trust and communication.',
      ],
    },
    {
      iconSrc: '/assets/img/home-3/icon/08.svg',
      title: 'Excellence – Constantly Improving',
      bullets: [
        'Driving innovation and continuous improvement.',
        'Investing in people and celebrating achievement.',
      ],
    },
    {
      iconSrc: '/assets/img/home-3/icon/03.svg',
      title: 'Sustainability – People, Planet, Prosperity',
      bullets: [
        'Minimizing environmental impact and ethical sourcing.',
        'Supporting communities and responsible resource management.',
      ],
    },
    {
      iconSrc: '/assets/img/home-3/icon/04.svg',
      title: 'Collaboration – One Team, Global Impact',
      bullets: [
        'Fostering teamwork, diversity, and inclusion.',
        'Working closely with partners, suppliers, and clients to achieve shared goals.',
      ],
    },
  ],
} as const;
