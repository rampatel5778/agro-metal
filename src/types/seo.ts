export interface SeoDefaults {
  siteName: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultOgImage: string;
  locale: string;
  twitterCard: 'summary' | 'summary_large_image';
  robots: string;
}

export interface PageSeo extends SeoDefaults {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>[];
}

export interface OpenGraphTags {
  type: string;
  siteName: string;
  title: string;
  description: string;
  url: string;
  image: string;
  locale: string;
}

export interface TwitterCardTags {
  card: string;
  title: string;
  description: string;
  image: string;
}
