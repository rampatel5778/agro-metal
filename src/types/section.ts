import type { PageId } from './page.js';

export type SectionType =
  | 'hero'
  | 'hero-video'
  | 'breadcrumb-hero'
  | 'text'
  | 'text-image'
  | 'text-marquee'
  | 'cards'
  | 'icon-grid'
  | 'product-grid'
  | 'service-grid'
  | 'industry-grid'
  | 'timeline-horizontal'
  | 'timeline-vertical'
  | 'timeline-slider'
  | 'stats'
  | 'certifications'
  | 'video-cta'
  | 'blog-cards'
  | 'brand-carousel'
  | 'split-cta'
  | 'contact-info'
  | 'contact-form'
  | 'map'
  | 'benefits'
  | 'why-choose-us'
  | 'trends';

export interface Section {
  id: string;
  type: SectionType;
  heading?: string;
  subheading?: string;
  body?: string | string[];
  items?: SectionItem[];
  image?: import('./image.js').ContentImage;
  images?: import('./image.js').ContentImage[];
  videoId?: string;
  cta?: import('./cta.js').CTA;
  ctas?: import('./cta.js').CTA[];
  meta?: Record<string, unknown>;
}

export interface SectionItem {
  id?: string;
  title?: string;
  body?: string;
  href?: string;
  anchor?: string;
  image?: import('./image.js').ContentImage;
  icon?: string;
}
