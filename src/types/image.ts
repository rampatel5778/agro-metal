export interface ContentImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  /** Original remote URL — audit reference only */
  remoteUrl?: string;
}

export interface ImageAsset extends ContentImage {
  format?: 'webp' | 'jpeg' | 'png' | 'svg';
  sizes?: string;
}

export interface ResponsiveImageSet {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  width: number;
  height: number;
}
