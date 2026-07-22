/**
 * Services hub page content — /services/
 */

/** Page title hero — Agriva breadcrumb-wrapper */
export const servicesHero = {
  title: 'Services',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services' },
  ],
  backgroundImageSrc: '/images/agrometal/2026/02/below-banner.webp',
  topImageSrc: '/images/agrometal/2026/02/below-banner.webp',
} as const;

/** Hub intro — same centered Agriva header style as Products */
export const servicesRangeIntro = {
  id: 'services-intro',
  eyebrow: 'What We Offer',
  title: 'Empowering Global Trade with Confidence',
  description:
    'At Agro Metal, we go beyond trading commodities. Our suite of strategic services helps clients manage risk, optimize operations, and secure reliable supply chains. With global expertise, robust market insights, and integrated logistics, we ensure your business thrives in a complex and dynamic market.',
} as const;

/** Service cards — Agriva service-card-items-2 style-2 */
export const servicesHubCards = {
  items: [
    {
      title: 'Commodity Hedging',
      href: '/services/commodity-hedging/',
      imageSrc: '/images/agrometal/2026/03/Commodity-Hedging.png',
      imageAlt: 'Commodity Hedging',
      tags: ['Risk', 'Markets', 'Price Protection'],
    },
    {
      title: 'Currency Hedging',
      href: '/services/currency-hedging/',
      imageSrc: '/images/agrometal/2026/03/Currency-Hedging.png',
      imageAlt: 'Currency Hedging',
      tags: ['FX', 'Trade', 'Stability'],
    },
    {
      title: 'Logistics',
      href: '/services/logistics/',
      imageSrc: '/images/agrometal/2026/03/Logistics.png',
      imageAlt: 'Logistics',
      tags: ['Delivery', 'Supply Chain', 'Reliability'],
    },
  ],
} as const;
