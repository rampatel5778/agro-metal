import { IMAGE_FORMATS, IMAGE_WIDTHS, ASSET_PATHS } from '@data/constants';

/** Astro Image configuration — docs/assets.md */
export const imageConfig = {
  /** Preferred output formats — WebP first */
  formats: IMAGE_FORMATS,
  /** Responsive breakpoints for srcset generation */
  widths: IMAGE_WIDTHS,
  /** Default loading strategy */
  defaultLoading: 'lazy' as const,
  /** Quality for raster compression */
  quality: 80,
  /** Path prefixes */
  paths: ASSET_PATHS,
} as const;

/** YouTube embed helpers */
export function getYouTubeEmbedUrl(
  videoId: string,
  options: { privacyEnhanced?: boolean; autoplay?: boolean; mute?: boolean } = {},
): string {
  const host = options.privacyEnhanced !== false ? 'www.youtube-nocookie.com' : 'www.youtube.com';
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
  });
  if (options.autoplay) params.set('autoplay', '1');
  if (options.mute) params.set('mute', '1');
  return `https://${host}/embed/${videoId}?${params.toString()}`;
}

/** SVG assets served from public/icons or inline */
export const svgConfig = {
  inlineCritical: true,
  spritePath: `${ASSET_PATHS.icons}/sprite.svg`,
} as const;

/** Font files — self-hosted option in public/fonts/ (future) */
export const fontConfig = {
  preload: ['Instrument Sans', 'Inter'],
  display: 'swap' as const,
  path: ASSET_PATHS.fonts,
} as const;
