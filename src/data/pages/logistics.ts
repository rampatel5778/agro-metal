/**
 * Logistics — /services/logistics/
 * Same section stack as Commodity Hedging & Currency Hedging.
 */

/** Page title hero — Agriva breadcrumb-wrapper */
export const logisticsHero = {
  title: 'Logistics',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: 'Logistics' },
  ],
  backgroundImageSrc: '/images/agrometal/2026/03/Top-banner-1-1.webp',
  topImageSrc: '/images/agrometal/2026/03/Top-banner-1-1.webp',
} as const;

/** Intro + Benefits — Agriva about-section-4 (image left, checklist + CTA) */
export const logisticsIntro = {
  id: 'logistics-intro',
  title: 'Logistics',
  description:
    'Efficient logistics are critical to ensuring timely delivery, cost control, and supply chain reliability. Agro Metal provides end-to-end logistics services, from warehousing and transportation to customs clearance and freight management. Our integrated solutions guarantee smooth and sustainable operations across global markets.',
  benefitsTitle: 'Benefits',
  benefits: [
    'Optimized supply chain management',
    'Timely and reliable deliveries',
    'Scalable and flexible logistics solutions',
  ],
  imageSrc: '/images/agrometal/2026/03/2nd-image-.webp',
  imageAlt: 'Logistics and supply chain services',
  cta: { label: 'Enquire Now', href: '/contact-us/' },
} as const;

/** Why Choose — 2×2 icon points left, image right */
export const logisticsWhyChoose = {
  id: 'logistics-why-choose',
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
  imageAlt: 'Why choose Agro Metal for logistics',
} as const;

/** Closing video CTA — Agriva drone-video-section */
export const logisticsClosingCta = {
  id: 'closing-cta',
  eyebrow: 'Partner With Us',
  title:
    'Reliable, Sustainable & Globally Sourced Metals and Agricultural Commodities',
  youtubeId: 'nr3_0zjTlsI',
  posterSrc: '/assets/img/home-3/video-bg.jpg',
  cta: { label: 'Contact Us', href: '/contact-us/' },
} as const;
