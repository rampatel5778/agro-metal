/** Accessibility standards — WCAG 2.1 AA — docs/project-rules.md */

export const a11yConfig = {
  /** Skip navigation link target */
  skipLinkTarget: '#main-content',

  /** Focus ring — matches variables.css */
  focusRing: {
    width: '3px',
    color: '#d95648',
    offset: '2px',
  },

  /** Minimum touch target — WCAG 2.5.5 */
  minTouchTargetPx: 44,

  /** Color contrast pairs verified in docs/colors.md */
  contrastPairs: [
    { foreground: '#2f2f2f', background: '#f5f6f4', level: 'AAA' },
    { foreground: '#50624a', background: '#f5f6f4', level: 'AAA' },
    { foreground: '#ffffff', background: '#d95648', level: 'AA' },
    { foreground: '#ffffff', background: '#012804', level: 'AAA' },
  ],

  /** Keyboard navigation requirements */
  keyboard: {
    trapFocusInModals: true,
    escapeClosesMobileMenu: true,
    arrowKeysInMenus: true,
  },

  /** Reduced motion — handled in animations.css */
  reducedMotion: true,

  /** Form accessibility */
  forms: {
    associateLabels: true,
    announceErrors: true,
    ariaLive: 'polite' as const,
  },

  /** Image requirements */
  images: {
    requireAlt: true,
    decorativeAlt: '',
  },
} as const;

export type A11yConfig = typeof a11yConfig;
