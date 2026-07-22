export interface StatisticItem {
  id: string;
  value: string;
  suffix?: string;
  label: string;
  description?: string;
}

export interface StatisticsBlock {
  id: string;
  heading?: string;
  items: StatisticItem[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author?: string;
  role?: string;
  company?: string;
  image?: import('./image.js').ContentImage;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface Gallery {
  id: string;
  variant: 'grid' | 'carousel' | 'drag';
  items: GalleryItem[];
}
