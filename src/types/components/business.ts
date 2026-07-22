import type { Card, FeatureCard, ProductCard, BlogCard } from '@types/card.js';
import type { ContentImage } from '@types/image.js';
import type { CTA } from '@types/cta.js';

export interface IconGridItem {
  id?: string;
  icon: string;
  label: string;
  href?: string;
}

export interface IconGridProps {
  items: IconGridItem[];
  columns?: 2 | 3 | 4;
  class?: string;
  ariaLabel?: string;
}

export interface IconBoxItem {
  id?: string;
  icon?: string;
  iconSrc?: ContentImage;
  title: string;
  body?: string;
  href?: string;
}

export interface IconBoxGridProps {
  items: IconBoxItem[];
  columns?: 2 | 3 | 4;
  class?: string;
  ariaLabel?: string;
}

export interface FeatureCardsProps {
  items: FeatureCard[];
  columns?: 2 | 3 | 4;
  class?: string;
  ariaLabel?: string;
}

export interface ValueCardsProps {
  items: FeatureCard[];
  columns?: 2 | 3 | 4;
  class?: string;
  ariaLabel?: string;
}

export interface ProductCardsProps {
  items: ProductCard[];
  columns?: 2 | 3 | 4;
  class?: string;
  ariaLabel?: string;
}

export interface CategoryCard extends Card {
  overlay?: boolean;
}

export interface CategoryCardGridProps {
  items: CategoryCard[];
  columns?: 2 | 3 | 4;
  class?: string;
  ariaLabel?: string;
}

export interface ProductCategoryGridProps {
  items: ProductCard[];
  columns?: 2 | 3 | 4;
  class?: string;
  ariaLabel?: string;
}

export interface IndustryCardsProps {
  items: Card[];
  columns?: 2 | 3 | 4 | 6;
  class?: string;
  ariaLabel?: string;
}

export interface ServiceCardGridProps {
  items: Card[];
  columns?: 2 | 3;
  class?: string;
  ariaLabel?: string;
}

export interface BenefitItem {
  id?: string;
  title: string;
  body?: string;
  icon?: string;
}

export interface BenefitsListProps {
  heading?: string;
  items: BenefitItem[];
  class?: string;
}

export interface WhyChooseUsProps {
  heading?: string;
  body?: string | string[];
  items: BenefitItem[];
  image?: ContentImage;
  cta?: CTA;
  class?: string;
}

export interface BlogCardsProps {
  items: BlogCard[];
  columns?: 2 | 3 | 4;
  class?: string;
  ariaLabel?: string;
}

export interface AnchorNavItem {
  id?: string;
  label: string;
  href: string;
}

export interface AnchorNavProps {
  items: AnchorNavItem[];
  ariaLabel?: string;
  class?: string;
}
