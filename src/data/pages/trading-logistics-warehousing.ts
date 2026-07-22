/**
 * Trading, Logistics & Warehousing page content
 */

/** Page title hero — Agriva breadcrumb-wrapper */
export const tradingLogisticsHero = {
  title: 'Trading, Logistics & Warehousing',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About Agrometal', href: '/about-us/' },
    { label: 'Trading, Logistics & Warehousing' },
  ],
} as const;

/** Business Model — Agriva index-4 why-choose-us-section-4 */
export const tradingBusinessModel = {
  eyebrow: 'Value Proposition',
  title: 'Business Model & Value Proposition',
  description:
    'Agro Metal creates value by seamlessly connecting global supply and demand trading, moving, and managing risk on metals and agri-commodities while leveraging deep partnerships and upstream integration for lasting competitive advantage.',
  cta: { label: 'Get In Touch', href: '/contact-us/' },
  items: [
    {
      iconSrc: '/images/agrometal/2026/03/icon4.png',
      title: 'Business Model',
      description:
        'Agro Metal is a global leader trading steel, metals, grains, oilseeds efficiently.',
    },
    {
      iconSrc: '/images/agrometal/2026/03/icon1.png',
      title: 'Sourcing Edge & Major Gateways',
      description:
        'Agro Metal combines steel sourcing across Africa, Middle East, Asia ensuring supply.',
    },
    {
      iconSrc: '/images/agrometal/2026/03/icon2.png',
      title: 'Integrated Trading & Value Creation',
      description:
        'Agro Metal oversees sourcing, blending, inventory, risk, shipping, financing with quality controls.',
    },
    {
      iconSrc: '/images/agrometal/2026/03/icon3.png',
      title: 'Mining as a Strategic Value Driver',
      description:
        'Agro Metal secures African mining rights, boosting profits while integrated trading logistics remain core.',
    },
  ],
} as const;

/** Competitive Advantages — Agriva service-2 service-box-items-3 */
export const tradingAdvantages = {
  eyebrow: 'Our Edge',
  title: 'Competitive Advantages',
  description:
    'Reliable global sourcing, flexible storage and blending, strong international partnerships, and decades of experience ensure fast, dependable, and innovative supply solutions.',
  items: [
    {
      iconSrc: '/assets/img/inner-page/icon/04.svg',
      title: 'Global Sourcing Strength',
      description: 'Cross-continental sourcing ensures supply security.',
    },
    {
      iconSrc: '/assets/img/inner-page/icon/05.svg',
      title: 'Integrated Storage & Blending',
      description:
        'Control of storage and blending facilities enables agile, tailored fulfillment.',
    },
    {
      iconSrc: '/assets/img/inner-page/icon/06.svg',
      title: 'Strategic Global Partnerships',
      description: 'Partnerships with global leaders enhancing market reach.',
    },
    {
      iconSrc: '/assets/img/inner-page/icon/07.svg',
      title: 'Decades of Trading Excellence',
      description:
        'Decades of trading experience foster a culture of reliability, speed, and innovation.',
    },
  ],
} as const;
