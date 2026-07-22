import type { ContentImage } from './image.js';
import type { Section } from './section.js';

export interface ProductCategory {
  id: string;
  title: string;
  slug: string;
  href: string;
  description?: string;
  image?: ContentImage;
}

export interface ProductSubItem {
  id: string;
  title: string;
  description?: string;
  image?: ContentImage;
  anchor?: string;
}

export interface ProductGroup {
  id: string;
  title: string;
  anchor?: string;
  items: ProductSubItem[];
}

export interface ProductPageContent {
  id: string;
  title: string;
  intro?: string;
  groups: ProductGroup[];
  industries?: import('./card.js').Card[];
  sections?: Section[];
}
