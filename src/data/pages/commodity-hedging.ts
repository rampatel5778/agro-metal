/**
 * Commodity Hedging — /services/commodity-hedging/
 */

/** Page title hero — Agriva breadcrumb-wrapper */
export const commodityHedgingHero = {
  title: 'Commodity Hedging',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: 'Commodity Hedging' },
  ],
  backgroundImageSrc: '/images/agrometal/2026/03/top-banner.webp',
  topImageSrc: '/images/agrometal/2026/03/top-banner.webp',
} as const;

/** Intro + Benefits — Agriva about-section-4 (image left, checklist + CTA) */
export const commodityHedgingIntro = {
  id: 'commodity-hedging-intro',
  title: 'Commodity Hedging',
  description:
    'Protect your business from price volatility in global commodity markets. Agro Metal provides tailored hedging solutions across ferrous metals, non-ferrous metals, and agricultural commodities. Our strategies help you manage risk, stabilize costs, and maintain predictable margins.',
  benefitsTitle: 'Benefits',
  benefits: [
    'Minimize exposure to price fluctuations',
    'Secure competitive procurement costs',
    'Leverage market expertise for informed decisions',
  ],
  imageSrc: '/images/agrometal/2026/03/Benefits-.webp',
  imageAlt: 'Commodity hedging benefits',
  cta: { label: 'Enquire Now', href: '/contact-us/' },
} as const;

/** Why Choose — 2×2 icon points left, image right */
export const commodityHedgingWhyChoose = {
  id: 'commodity-hedging-why-choose',
  title: 'Why Choose Agro Metal?',
  items: [
    {
      description: 'Global reach with expertise across 14+ countries',
      iconSrc: '/images/agrometal/2026/03/icon6.png',
    },
    {
      description:
        'Integrated solutions connecting trading, risk management, and logistics',
      iconSrc: '/images/agrometal/2026/03/icon8.png',
    },
    {
      description:
        'Commitment to sustainability, transparency, and responsible operations',
      iconSrc: '/images/agrometal/2026/03/icon7.png',
    },
    {
      description:
        'Dedicated support and market insights to maximize your competitive advantage',
      iconSrc: '/images/agrometal/2026/03/icon5.png',
    },
  ],
  imageSrc: '/images/agrometal/2026/03/Why-Choose-Agro-Metal.webp',
  imageAlt: 'Why choose Agro Metal for commodity hedging',
} as const;

/** Closing video CTA — Agriva drone-video-section */
export const commodityHedgingClosingCta = {
  id: 'closing-cta',
  eyebrow: 'Partner With Us',
  title:
    'Reliable, Sustainable & Globally Sourced Metals and Agricultural Commodities',
  youtubeId: 'nr3_0zjTlsI',
  posterSrc: '/assets/img/home-3/video-bg.jpg',
  cta: { label: 'Contact Us', href: '/contact-us/' },
} as const;
