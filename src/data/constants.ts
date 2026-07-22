import type { PageRoute } from '@types/page';

/** Canonical domain — docs/architecture-decisions.md */
export const SITE_URL = 'https://agrometal.ae' as const;

/** Netlify deployment platform */
export const DEPLOY_PLATFORM = 'netlify' as const;

/** Future form API — Resend via Astro serverless on Netlify */
export const FORM_API = {
  contactEndpoint: '/api/contact',
  newsletterEndpoint: '/api/newsletter',
  emailProvider: 'resend' as const,
} as const;

/** YouTube video IDs — docs/assets.md */
export const VIDEOS = {
  homeHero: '7AGfbbcy8Ro',
  footerCta: 'nr3_0zjTlsI',
} as const;

/** All 14 routes — docs/sitemap.md */
export const ROUTES: readonly PageRoute[] = [
  { id: 'home', path: '/', label: 'Home', template: 'home', showFooterVideoCta: true },
  {
    id: 'about-us',
    path: '/about-us/',
    label: 'About Agrometal',
    template: 'inner-default',
    showFooterVideoCta: true,
  },
  {
    id: 'our-history',
    path: '/about-us/our-history/',
    label: 'Our History',
    template: 'inner-default',
    showFooterVideoCta: false,
  },
  {
    id: 'trading-logistics-warehousing',
    path: '/about-us/trading-logistics-warehousing/',
    label: 'Trading, Logistics & warehousing',
    template: 'inner-default',
    showFooterVideoCta: false,
  },
  {
    id: 'products',
    path: '/products/',
    label: 'Products',
    template: 'hub',
    showFooterVideoCta: false,
  },
  {
    id: 'ferrous-metals',
    path: '/products/ferrous-metals/',
    label: 'Ferrous Metals',
    template: 'inner-default',
    showFooterVideoCta: true,
  },
  {
    id: 'non-ferrous-metals',
    path: '/products/non-ferrous-metals/',
    label: 'Non-Ferrous Metals',
    template: 'inner-default',
    showFooterVideoCta: true,
  },
  {
    id: 'agricultural-commodities',
    path: '/products/agricultural-commodities/',
    label: 'Agricultural Commodities',
    template: 'inner-default',
    showFooterVideoCta: true,
  },
  {
    id: 'services',
    path: '/services/',
    label: 'Services',
    template: 'hub',
    showFooterVideoCta: true,
  },
  {
    id: 'commodity-hedging',
    path: '/services/commodity-hedging/',
    label: 'Commodity Hedging',
    template: 'inner-default',
    showFooterVideoCta: true,
  },
  {
    id: 'currency-hedging',
    path: '/services/currency-hedging/',
    label: 'Currency Hedging',
    template: 'inner-default',
    showFooterVideoCta: true,
  },
  {
    id: 'logistics',
    path: '/services/logistics/',
    label: 'Logistics',
    template: 'inner-default',
    showFooterVideoCta: true,
  },
  {
    id: 'sustainability',
    path: '/sustainability/',
    label: 'Sustainability',
    template: 'inner-default',
    showFooterVideoCta: true,
  },
  {
    id: 'contact-us',
    path: '/contact-us/',
    label: 'Contact Us',
    template: 'contact',
    showFooterVideoCta: true,
  },
] as const;

export const ROUTE_BY_ID = Object.fromEntries(ROUTES.map((r) => [r.id, r])) as Record<
  PageRoute['id'],
  PageRoute
>;

export const ROUTE_BY_PATH = Object.fromEntries(ROUTES.map((r) => [r.path, r])) as Record<
  string,
  PageRoute
>;

/** Image breakpoints for responsive srcset — docs/assets.md */
export const IMAGE_WIDTHS = [640, 768, 1024, 1280, 1536] as const;

/** Default image formats — WebP preferred */
export const IMAGE_FORMATS = ['webp', 'jpeg'] as const;

/** Font preload URLs */
export const FONT_PRECONNECT = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
] as const;

export const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap';

/** Asset path prefixes */
export const ASSET_PATHS = {
  images: '/images',
  agrometalImages: '/images/agrometal',
  videos: '/videos',
  icons: '/icons',
  fonts: '/fonts',
  templateAssets: '/assets',
} as const;

/** Legacy HTML filename → Astro path */
export const LEGACY_ROUTE_MAP: Record<string, string> = {
  'index.html': '/',
  'about-us.html': '/about-us/',
  'our-history.html': '/about-us/our-history/',
  'trading-logistics-warehousing.html': '/about-us/trading-logistics-warehousing/',
  'products.html': '/products/',
  'ferrous-metals.html': '/products/ferrous-metals/',
  'non-ferrous-metals.html': '/products/non-ferrous-metals/',
  'agricultural-commodities.html': '/products/agricultural-commodities/',
  'services.html': '/services/',
  'commodity-hedging.html': '/services/commodity-hedging/',
  'currency-hedging.html': '/services/currency-hedging/',
  'logistics.html': '/services/logistics/',
  'sustainability.html': '/sustainability/',
  'contact-us.html': '/contact-us/',
};

/** Project phase marker for route placeholders */
export const BUILD_PHASE = 2 as const;
