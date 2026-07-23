/**
 * Agrometal Design System — Tailwind v4 theme extension
 * Primary tokens live in src/styles/variables.css (@theme)
 * This file documents and extends the theme for tooling compatibility.
 * @see docs/colors.md docs/typography.md docs/animations.md
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        theme: {
          DEFAULT: '#d95648',
          dark: '#b8453a',
          yellow: '#11a21b', /* remapped to brand green */
          green: '#11a21b',
        },
        header: '#2f2f2f',
        text: '#50624a',
        border: '#02060a',
        bg: {
          DEFAULT: '#f5f6f4',
          dark: '#50624a',
          footer: '#012804',
          surface: '#ffffff',
          muted: '#eef0ed',
        },
        success: '#11a21b',
        warning: '#11a21b',
        error: '#c8433a',
      },
      fontFamily: {
        heading: ['Instrument Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
        btn: '0.5rem',
      },
      boxShadow: {
        card: '0 1px 14px 0 rgb(0 0 0 / 0.13)',
        header: '0 2px 20px rgb(0 0 0 / 0.08)',
        lift: '0 12px 32px rgb(0 0 0 / 0.12)',
      },
      maxWidth: {
        content: '48rem',
        page: '75rem',
        wide: '90rem',
      },
      zIndex: {
        dropdown: '100',
        sticky: '200',
        overlay: '300',
        modal: '400',
        toast: '500',
      },
      transitionDuration: {
        fast: '150ms',
        DEFAULT: '300ms',
        slow: '500ms',
        slower: '800ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0, 0.96, 0.58, 1.1)',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(1.5rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-1.5rem)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s var(--ease-default, ease) both',
        'fade-in': 'fade-in 0.4s var(--ease-default, ease) both',
        'slide-in-left': 'slide-in-left 0.5s var(--ease-default, ease) both',
        'scale-in': 'scale-in 0.45s var(--ease-default, ease) both',
        marquee: 'marquee 30s linear infinite',
        spin: 'spin 1s linear infinite',
      },
    },
  },
};
