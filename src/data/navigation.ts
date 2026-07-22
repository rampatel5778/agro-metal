import type { NavigationConfig } from '@types/navigation';
import { navigationConfigSchema } from '@lib/schemas/navigation.schema.js';

const navigationData: NavigationConfig = {
  main: [
    { label: 'Home', href: '/', exact: true },
    {
      label: 'About',
      href: '/about-us/',
      children: [
        { label: 'About Agrometal', href: '/about-us/' },
        { label: 'Our History', href: '/about-us/our-history/' },
        {
          label: 'Trading, Logistics & warehousing',
          href: '/about-us/trading-logistics-warehousing/',
        },
      ],
    },
    {
      label: 'Products',
      href: '/products/',
      children: [
        { label: 'Ferrous Metals', href: '/products/ferrous-metals/' },
        { label: 'Non-Ferrous Metals', href: '/products/non-ferrous-metals/' },
        {
          label: 'Agricultural Commodities',
          href: '/products/agricultural-commodities/',
        },
      ],
    },
    {
      label: 'Services',
      href: '/services/',
      children: [
        { label: 'Commodity Hedging', href: '/services/commodity-hedging/' },
        { label: 'Currency Hedging', href: '/services/currency-hedging/' },
        { label: 'Logistics', href: '/services/logistics/' },
      ],
    },
    { label: 'Sustainability', href: '/sustainability/' },
    { label: 'Contact Us', href: '/contact-us/' },
  ],
  footer: [
    { label: 'About Agrometal', href: '/about-us/' },
    { label: 'Products', href: '/products/' },
    { label: 'Services', href: '/services/' },
    { label: 'Sustainability', href: '/sustainability/' },
    { label: 'Contact Us', href: '/contact-us/' },
  ],
};

export const navigation = navigationConfigSchema.parse(navigationData);

/** @deprecated Use navigation.main — kept for migration from Phase 0 */
export const mainNav = navigation.main;

/** @deprecated Use navigation.footer */
export const footerNav = navigation.footer;

export { LEGACY_ROUTE_MAP } from './constants.js';
