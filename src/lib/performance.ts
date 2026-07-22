import { FONT_PRECONNECT, GOOGLE_FONTS_URL, IMAGE_WIDTHS } from '@data/constants';

/** Performance strategy — docs/implementation-plan.md Phase 11 */
export const performanceConfig = {
  /** DNS preconnect targets */
  preconnect: [...FONT_PRECONNECT],

  /** Font preload — Google Fonts CSS (self-host in Phase 11 if needed) */
  preload: [
    {
      href: GOOGLE_FONTS_URL,
      as: 'style' as const,
      crossorigin: true,
    },
  ],

  /** Image optimization defaults */
  images: {
    widths: IMAGE_WIDTHS,
    formats: ['webp', 'jpeg'] as const,
    lazyByDefault: true,
    lcpPriority: 'eager' as const,
  },

  /** Code splitting — islands loaded on demand */
  hydration: {
    defaultStrategy: 'client:visible' as const,
    carouselStrategy: 'client:visible' as const,
    formStrategy: 'client:load' as const,
  },

  /** YouTube facade — load iframe on interaction */
  youtubeFacade: true,

  /** Target metrics */
  targets: {
    lighthousePerformance: 90,
    lcpMs: 2500,
    cls: 0.1,
    inpMs: 200,
  },
} as const;

export type PerformanceConfig = typeof performanceConfig;
