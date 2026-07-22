/**
 * Currency Hedging — /services/currency-hedging/
 * Same section stack as Commodity Hedging.
 */

/** Page title hero — Agriva breadcrumb-wrapper */
export const currencyHedgingHero = {
  title: 'Currency Hedging',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: 'Currency Hedging' },
  ],
  backgroundImageSrc: '/images/agrometal/2026/03/top-banner-1.webp',
  topImageSrc: '/images/agrometal/2026/03/top-banner-1.webp',
} as const;

/** Intro + Benefits — Agriva about-section-4 (image left, checklist + CTA) */
export const currencyHedgingIntro = {
  id: 'currency-hedging-intro',
  title: 'Currency Hedging',
  description:
    'Currency fluctuations can impact profitability in international trade. Agro Metal offers customized currency hedging solutions to protect your transactions, improve cash flow predictability, and safeguard margins in multi-currency operations.',
  benefitsTitle: 'Benefits',
  benefits: [
    'Mitigate foreign exchange risk',
    'Stabilize international transaction costs',
    'Flexible, market-driven hedging strategies',
  ],
  imageSrc: '/images/agrometal/2026/03/2nd-image-2.webp',
  imageAlt: 'Currency hedging benefits',
  cta: { label: 'Enquire Now', href: '/contact-us/' },
} as const;

/** Why Choose — 2×2 icon points left, image right */
export const currencyHedgingWhyChoose = {
  id: 'currency-hedging-why-choose',
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
  imageSrc: '/images/agrometal/2026/03/Why-Choose-Agro-Metal-1.webp',
  imageAlt: 'Why choose Agro Metal for currency hedging',
} as const;

/** Closing video CTA — Agriva drone-video-section */
export const currencyHedgingClosingCta = {
  id: 'closing-cta',
  eyebrow: 'Partner With Us',
  title:
    'Reliable, Sustainable & Globally Sourced Metals and Agricultural Commodities',
  youtubeId: 'nr3_0zjTlsI',
  posterSrc: '/assets/img/home-3/video-bg.jpg',
  cta: { label: 'Contact Us', href: '/contact-us/' },
} as const;
