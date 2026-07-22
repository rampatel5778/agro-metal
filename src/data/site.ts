import { SITE_URL, GOOGLE_FONTS_URL, VIDEOS, DEPLOY_PLATFORM, FORM_API } from './constants.js';

export const site = {
  name: 'Agrometal',
  tagline:
    'Bridging global agriculture and mining commodities with trusted trading and logistics solutions.',
  url: SITE_URL,
  locale: 'en',
  localeOg: 'en_AE',
  templateReference: 'agriva-home-01',
  deployPlatform: DEPLOY_PLATFORM,
  formApi: FORM_API,
  videos: VIDEOS,
  fonts: {
    heading: 'Instrument Sans',
    body: 'Inter',
    googleFontsUrl: GOOGLE_FONTS_URL,
  },
} as const;

export type SiteConfig = typeof site;
