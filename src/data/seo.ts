import type { SeoDefaults } from '@types/seo';
import { seoDefaultsSchema } from '@lib/schemas/seo.schema.js';
import { ASSET_PATHS, SITE_URL } from './constants.js';
import { site } from './site.js';

const seoDefaultsData: SeoDefaults = {
  siteName: site.name,
  titleTemplate: '%s | Agrometal',
  defaultDescription: site.tagline,
  defaultOgImage: `${ASSET_PATHS.agrometalImages}/2026/02/header-logo_agro_new-01.svg`,
  locale: site.localeOg,
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
};

export const seoDefaults = seoDefaultsSchema.parse(seoDefaultsData);

/** Per-page SEO overrides — full copy in docs/seo.md; populated during Phase 5+ */
export const pageSeoOverrides: Record<
  string,
  { title: string; description: string }
> = {
  '/': {
    title: 'Agrometal — Global Agriculture & Mining Commodity Trading',
    description: seoDefaults.defaultDescription,
  },
  '/about-us/': {
    title: 'About Agrometal — Global Commodity Trading Company',
    description:
      'Learn about Agrometal — a Dubai-based commodity trading company connecting global agriculture and mining markets with integrity.',
  },
  '/about-us/our-history/': {
    title: 'Our History — Agrometal',
    description:
      "Discover Agrometal's journey from 2003 to today — milestones in global commodity trading, logistics, and market expansion.",
  },
  '/about-us/trading-logistics-warehousing/': {
    title: 'Trading, Logistics & Warehousing — Agrometal',
    description:
      'Agrometal trading, logistics and warehousing services — global sourcing, storage, blending, and ethical supply chain management.',
  },
  '/products/': {
    title: 'Products — Ferrous, Non-Ferrous & Agricultural Commodities',
    description:
      'Explore Agrometal products: ferrous metals, non-ferrous metals, and agricultural commodities sourced and delivered worldwide.',
  },
  '/products/ferrous-metals/': {
    title: 'Ferrous Metals Trading — Agrometal',
    description:
      'Ferrous metals trading by Agrometal — iron ore, steel products, and reliable supply for construction, automotive, and energy sectors.',
  },
  '/products/non-ferrous-metals/': {
    title: 'Non-Ferrous Metals Trading — Agrometal',
    description:
      "Non-ferrous metals trading — copper, zinc, lithium, aluminium through Agrometal's global network. Sustainable and traceable supply.",
  },
  '/products/agricultural-commodities/': {
    title: 'Agricultural Commodities Trading — Agrometal',
    description:
      'Agricultural commodities trading — grains, oilseeds, pulses, and food crops sourced globally and delivered with reliability.',
  },
  '/services/': {
    title: 'Commodity Trading Services — Agrometal',
    description:
      'Agrometal services: commodity hedging, currency hedging, and end-to-end logistics for international trade.',
  },
  '/services/commodity-hedging/': {
    title: 'Commodity Hedging Services — Agrometal',
    description:
      'Manage commodity price risk with Agrometal hedging strategies for metals and agricultural products. Enquire today.',
  },
  '/services/currency-hedging/': {
    title: 'Currency Hedging Services — Agrometal',
    description:
      'Protect against FX volatility with Agrometal currency hedging solutions for international commodity trades.',
  },
  '/services/logistics/': {
    title: 'Global Logistics Services — Agrometal',
    description:
      'Global logistics services from Agrometal — shipping, warehousing, and supply chain management worldwide.',
  },
  '/sustainability/': {
    title: 'Sustainability & ESG Commitment — Agrometal',
    description:
      "Agrometal's commitment to environmental stewardship, social responsibility, and ethical governance in global trade.",
  },
  '/contact-us/': {
    title: 'Contact Agrometal — Dubai, UAE',
    description:
      'Contact Agrometal in Jebel Ali, Dubai. Call +971 4 434 1284 or email info@agrometal.ae for commodity trading enquiries.',
  },
};

export function getCanonicalUrl(path: string): string {
  const normalized = path.endsWith('/') || path === '' ? path || '/' : `${path}/`;
  return new URL(normalized, SITE_URL).href;
}

export function getPageSeo(path: string) {
  const override = pageSeoOverrides[path] ?? pageSeoOverrides['/'];
  return {
    ...seoDefaults,
    title: override.title,
    description: override.description,
    canonical: getCanonicalUrl(path),
  };
}
