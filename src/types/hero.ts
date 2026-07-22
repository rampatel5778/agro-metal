import type { ContentImage } from './image.js';
import type { CTA } from './cta.js';

export interface Hero {
  title: string;
  subtitle?: string;
  description?: string;
  bannerImage?: ContentImage;
  videoId?: string;
  ctas?: CTA[];
}

export interface BreadcrumbHero extends Hero {
  breadcrumbs: import('./navigation.js').BreadcrumbItem[];
}
