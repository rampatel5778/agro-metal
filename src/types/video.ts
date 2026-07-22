export interface Video {
  id: string;
  provider: 'youtube';
  title?: string;
  /** lazy-load embed below fold */
  lazy?: boolean;
  /** Use youtube-nocookie.com */
  privacyEnhanced?: boolean;
}

export interface VideoEmbed extends Video {
  embedUrl: string;
  poster?: string;
}
