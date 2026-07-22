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

/** Supply Chain Excellence — Agriva why-choose-us-section-2 (image left) */
export const tradingSupplyChainEnsuring = {
  id: 'supply-chain-ensuring',
  eyebrow: 'Supply Chain Excellence',
  title: 'Ensuring a Stable, Efficient & Ethical Supply Chain',
  imageSrc: '/images/agrometal/2026/03/Logistics.png',
  imageAlt: 'Port logistics with shipping containers, crane, and freight truck',
  imagePosition: 'left' as const,
  items: [
    {
      iconSrc: '/assets/img/home-2/icon/01.svg',
      title: 'Strategic Global Network',
      description:
        'Presence in 14 countries ensures timely delivery and optimised logistics.',
    },
    {
      iconSrc: '/assets/img/home-2/icon/02.svg',
      title: 'Integrated Logistics Solutions',
      description:
        'End-to-end management from sourcing to transportation and financing.',
    },
    {
      iconSrc: '/assets/img/home-2/icon/03.svg',
      title: 'Market Expertise',
      description:
        'Actionable insights and data-driven analysis to navigate volatility.',
    },
    {
      iconSrc: '/assets/img/home-2/icon/04.svg',
      title: 'Proactive Risk Mitigation',
      description:
        'Identifying and preventing potential disruptions across the supply chain.',
    },
    {
      iconSrc: '/assets/img/home-2/icon/05.svg',
      title: 'Strategic Partnerships',
      description:
        'Strong supplier relationships guarantee transparent, responsible sourcing.',
    },
    {
      iconSrc: '/assets/img/home-2/icon/07.svg',
      title: 'Commitment to Sustainability',
      description:
        'Embedding environmental and social responsibility in all operations.',
    },
  ],
} as const;

/** What Sets Us Apart — Agriva why-choose-us-section-2 (image right) */
export const tradingSupplyChainApart = {
  id: 'supply-chain-apart',
  eyebrow: 'Differentiation',
  title: 'What Sets Us Apart',
  imageSrc:
    '/images/agrometal/2026/03/sustainable-development-with-renewable-energy-solutions-ecology-concept-green-business.webp',
  imageAlt: 'Sustainable development and responsible green business operations',
  imagePosition: 'right' as const,
  class: 'trading-supply-chain--alt',
  items: [
    {
      iconSrc: '/assets/img/home-2/icon/08.svg',
      title: 'Responsible Sourcing',
      description:
        'Ethical, sustainable sourcing with strict quality and compliance standards.',
    },
    {
      iconSrc: '/assets/img/home-2/icon/09.svg',
      title: 'Deep Market Knowledge',
      description:
        'Strong market insights to support smart and timely business decisions.',
    },
    {
      iconSrc: '/assets/img/home-2/icon/10.svg',
      title: 'Customised Solutions',
      description:
        'Flexible strategies designed to match your specific business needs.',
    },
    {
      iconSrc: '/assets/img/home-2/icon/11.svg',
      title: 'Reliability & Transparency',
      description:
        'Consistent service with clear communication and trusted partnerships.',
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
