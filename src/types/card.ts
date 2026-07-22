import type { ContentImage } from './image.js';
import type { CTA } from './cta.js';

export interface Card {
  id?: string;
  title: string;
  description?: string;
  image?: ContentImage;
  icon?: string;
  href?: string;
  cta?: CTA;
}

export interface FeatureCard extends Card {
  iconSrc?: string;
}

export interface ServiceCard extends Card {
  readMoreLabel?: string;
}

export interface ProductCard extends Card {
  category?: string;
}

export interface BlogCard extends Card {
  date?: string;
  readMoreLabel?: string;
}
