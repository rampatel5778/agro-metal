import type { BreadcrumbItem, NavigationItem } from '@types/navigation.js';
import type { FooterConfig } from '@types/footer.js';
import type { PageSeo } from '@types/seo.js';
import type { ContentImage } from '@types/image.js';

export type ContainerWidth = 'default' | 'narrow' | 'wide' | 'fluid';
export type SectionVariant = 'default' | 'sm' | 'muted' | 'dark';
export type SectionTitleAlign = 'left' | 'center';

export interface ContainerProps {
  width?: ContainerWidth;
  class?: string;
  id?: string;
  ariaLabel?: string;
}

export interface SectionWrapperProps {
  variant?: SectionVariant;
  class?: string;
  id?: string;
  ariaLabel?: string;
}

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: SectionTitleAlign;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  class?: string;
}

export interface LogoProps {
  src: string;
  alt: string;
  href?: string;
  width?: number;
  height?: number;
}

export interface HeaderProps {
  logo: LogoProps;
  navigation: NavigationItem[];
  currentPath?: string;
  sticky?: boolean;
  class?: string;
  phone?: string;
  phoneHref?: string;
  contactCta?: { label: string; href: string };
}

export interface MainNavigationProps {
  items: NavigationItem[];
  currentPath?: string;
  class?: string;
  ariaLabel?: string;
}

export interface MobileNavigationProps {
  items: NavigationItem[];
  currentPath?: string;
  id?: string;
  class?: string;
  ariaLabel?: string;
}

export interface FooterProps {
  config: FooterConfig;
  socialLinks?: SocialLink[];
  class?: string;
}

export interface FooterBottomProps {
  copyright: string;
  class?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface BreadcrumbHeroProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  backgroundImage?: ContentImage;
  class?: string;
}

/** Agriva template breadcrumb-wrapper — inner page title banner */
export interface AgrivaBreadcrumbHeroProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  /** Full-bleed photo — default home-3/about-1.jpg */
  backgroundImageSrc?: string;
  /** Mobile / tablet full-bleed photo — default home-3/about-1.jpg */
  topImageSrc?: string;
  /** Desktop shape mask (Agriva breadcrumb.png cutout) */
  shapeMaskSrc?: string;
  class?: string;
}

export interface SeoProps extends Partial<PageSeo> {
  title: string;
  description: string;
  canonical: string;
}

export interface StructuredDataProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export interface BaseLayoutProps {
  seo: SeoProps;
  structuredData?: StructuredDataProps['data'];
  header: HeaderProps;
  footer: Pick<FooterProps, 'config'>;
  socialLinks?: SocialLink[];
  showSkipLink?: boolean;
  bodyClass?: string;
}
