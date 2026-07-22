/** Canonical page identifiers — 14 pages per docs/sitemap.md */
export type PageId =
  | 'home'
  | 'about-us'
  | 'our-history'
  | 'trading-logistics-warehousing'
  | 'products'
  | 'ferrous-metals'
  | 'non-ferrous-metals'
  | 'agricultural-commodities'
  | 'services'
  | 'commodity-hedging'
  | 'currency-hedging'
  | 'logistics'
  | 'sustainability'
  | 'contact-us';

export type PageTemplate = 'home' | 'inner-default' | 'hub' | 'contact';

export interface PageRoute {
  id: PageId;
  path: `/${string}` | '/';
  label: string;
  template: PageTemplate;
  showFooterVideoCta: boolean;
}

export interface PageSeoMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export interface PageContent {
  id: PageId;
  slug: string;
  path: string;
  template: PageTemplate;
  seo: PageSeoMeta;
  sections: import('./section.js').Section[];
}
