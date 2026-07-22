import type { ContentImage } from './image.js';
import type { CTA } from './cta.js';
import type { Section } from './section.js';

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  href: string;
  description?: string;
  image?: ContentImage;
  cta?: CTA;
}

export interface ServiceDetailContent {
  id: string;
  title: string;
  intro?: string;
  introImage?: ContentImage;
  benefits?: string[];
  whyChooseUs?: string[];
  ctas?: CTA[];
  sections?: Section[];
}
