/**
 * Our History page content
 * Timeline reuses the Home vertical timeline as-is
 */

import { homeTimeline } from '@data/pages/home.js';

/** Page title hero — Agriva breadcrumb-wrapper */
export const ourHistoryHero = {
  title: 'Our History',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About Agrometal', href: '/about-us/' },
    { label: 'Our History' },
  ],
} as const;

/** Same history section as Home */
export const ourHistoryTimeline = homeTimeline;
