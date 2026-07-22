export type CTVariant = 'primary' | 'secondary' | 'outline' | 'link';

export interface CTA {
  label: string;
  href: string;
  variant?: CTVariant;
  external?: boolean;
  anchor?: string;
}

export interface VideoCTA {
  heading: string;
  videoId: string;
  cta: CTA;
}
