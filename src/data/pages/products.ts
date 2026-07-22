/**
 * Products hub page content — /products/
 */

/** Page title hero — Agriva breadcrumb-wrapper */
export const productsHero = {
  title: 'Products',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Products' },
  ],
  backgroundImageSrc: '/images/agrometal/2026/03/below-banner-1.webp',
  topImageSrc: '/images/agrometal/2026/03/below-banner-1.webp',
} as const;

/** Our Product Range — Agriva section-title (title + supporting copy) */
export const productsRangeIntro = {
  id: 'products-range',
  eyebrow: 'What We Supply',
  title: 'Our Product Range',
  description:
    'Metals, minerals, agricultural commodities, and energy products sourced globally with reliable supply and quality.',
} as const;
