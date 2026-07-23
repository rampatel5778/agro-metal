/**

 * Home page content — Agriva Home 01 layouts with Agrometal content

 * @see docs/sections.md — Home section order

 */

import type { CTA } from '@types/cta.js';

import { ASSET_PATHS, VIDEOS } from '../constants.js';



const imageBase = `${ASSET_PATHS.agrometalImages}/2026/02`;
const commodityIconBase = `${ASSET_PATHS.agrometalImages}/2025/12/commodity-icons-white`;



/** Hero — RevSlider slide in Agriva hero-2 layout (video + bottom bar only) */
export const homeHero = {
  youtubeId: VIDEOS.homeHero,
  videoTitle: 'Agro Metal Intro Video Final V2',
  bottomBar: {
    heading: 'Agro Metal FZCO',
    items: [
      'Ferrous Metals',
      'Non-Ferrous Metals',
      'Agricultural Commodities',
      'Sustainability Driven',
    ],
  },
} as const;



/** Intro — Agriva about-2.html about-us-two-section with image mosaic */

export const homeIntro = {

  eyebrow: 'About Us',

  title:
    'Agro Metal Is Involved In The Supply Chain Of Metals, Minerals And Energy Products.',

  body:
    "Founded in 2003 and headquartered in Dubai, Agro Metal FZCO is more than a commodity trader – we're your strategic partner. We connect vital industries with responsibly sourced raw materials, navigating the complexities of global supply chains with unparalleled expertise. Our client-centric approach leverages over 50 years of experience, a growing presence across 14 countries, cutting-edge market intelligence, and a deep commitment to sustainability to deliver a competitive edge and drive lasting value.",

  cta: {
    label: 'about us',
    href: '/about-us/',
  } satisfies CTA,

} as const;

/** Commodity icons — Agriva feature-box-item-2 with white WordPress commodity icons */
export const homeCommodityIcons = {
  items: [
    {
      title: 'Zinc',
      description: 'Ingots, Alloys, And Sheets For Galvanizing',
      iconSrc: `${commodityIconBase}/zinc-white.webp`,
    },
    {
      title: 'Copper',
      description: 'Cathodes, Rods, Wires, And Pipes',
      iconSrc: `${commodityIconBase}/copper-white.webp`,
    },
    {
      title: 'Lithium',
      description: 'Carbonate, Hydroxide, And Spodumene',
      iconSrc: `${commodityIconBase}/lithium-white.webp`,
    },
    {
      title: 'Ferrous Metals',
      description: 'Iron Ore, Steel Products, And More',
      iconSrc: `${commodityIconBase}/ferrous-white.webp`,
    },
    {
      title: 'Corn',
      description: 'For Feed, Consumption, And Industrial Use',
      iconSrc: `${commodityIconBase}/corn-white.webp`,
    },
    {
      title: 'Wheat',
      description: 'Premium Quality For Food And Feed',
      iconSrc: `${commodityIconBase}/wheat-white.webp`,
    },
    {
      title: 'Barley',
      description: 'For Brewing, Feed, And Food Products',
      iconSrc: `${commodityIconBase}/barley-white.webp`,
    },
    {
      title: 'Oilseeds',
      description: 'Soybeans, Sunflower, And Rapeseed',
      iconSrc: `${commodityIconBase}/oilseeds-white.webp`,
    },
  ],
} as const;

/** About stats — Agriva about-section-2 (tractor + counters) after product cards */

export const homeAboutStats = {
  title:
    'Trusted supplier delivering metals and agricultural products efficiently to global markets.',
  youtubeId: VIDEOS.footerCta,
  videoTitle: 'Agrometal',
  items: [
    {
      value: 50,
      suffix: '+',
      heading: 'Years Of Experience',
      description: 'Over 50 years in the global metals and agriculture trading industry.',
    },
    {
      value: 98,
      suffix: '%',
      heading: 'Satisfied Clients',
      description: 'Based on service feedback from global partners and clients.',
      emphasized: true,
    },
    {
      value: 14,
      suffix: '+',
      heading: 'Countries Presence',
      description: 'Operating in 14 countries with offices, agents and partner networks.',
    },
  ],
} as const;



/** Product category cards — Agriva service-card-items-2 (3 items) */

export const homeProductCards = {

  items: [

    {

      title: 'Ferrous Metals',

      href: '/products/ferrous-metals/',

      imageSrc: `${imageBase}/Ferrous-Metals.webp`,

      imageAlt: 'Ferrous Metals',

      tags: ['Steel', 'Iron Ore', 'Infrastructure'],

      description:

        'Ferrous metals underpin construction, automotive, machinery, and infrastructure, offering strength, durability, and versatility for structures, vehicles, and equipment.',

    },

    {

      title: 'Non-Ferrous Metals',

      href: '/products/non-ferrous-metals/',

      imageSrc: `${imageBase}/Non-Ferrous-Metals.webp`,

      imageAlt: 'Non-Ferrous Metals',

      tags: ['Copper', 'Zinc', 'Lithium'],

      description:

        'Non-ferrous metals are essential for modern manufacturing, renewable energy, and electrification, supporting advanced technologies through conductivity and corrosion resistance.',

    },

    {

      title: 'Agricultural Commodities',

      href: '/products/agricultural-commodities/',

      imageSrc: `${imageBase}/Agricultural-Commodities.webp`,

      imageAlt: 'Agricultural Commodities',

      tags: ['Grains', 'Oilseeds', 'Pulses'],

      description:

        'Agro Metal supports global food security through resilient supply chains, delivering high-quality grains, oilseeds, oils, flour, and pulses to global markets.',

    },

  ],

} as const;

/** Horizontal timeline — sections 8–9 (history intro + milestones) */
export const homeTimeline = {
  title:
    '20 Years With Us. History Of Metals<br />Agriculture Growth Across Regions Through Years.',
  items: [
    {
      period: '2003 – 2010',
      title: 'Building Global Networks',
      body: 'Built strong supplier customer networks, expanded metals agriculture, established regional hubs, strengthened finance expertise.',
    },
    {
      period: '2011 – 2020',
      title: 'Expanding Worldwide',
      body: 'Entered 14+ countries, formed partnerships, optimised logistics, strengthened supply chains, integrated sustainability and sourcing.',
    },
    {
      period: '2021 – Present',
      title: 'Investing For The Future',
      body: 'Invested in copper mining assets, launched ESG framework, adopted tools, expanded reach, diversified portfolio.',
    },
    {
      period: 'Today',
      title: 'Delivering Sustainable Value',
      body: 'Resilient enterprise connecting industries worldwide with reliable sourced commodities, delivering sustainable value and partnerships.',
    },
  ],
} as const;

const imageBaseMar = `${ASSET_PATHS.agrometalImages}/2026/03`;

/** Ferrous & non-ferrous split CTA — after timeline (image left) */
export const homeMetalsSplit = {
  id: 'home-metals-split',
  eyebrow: 'Ferrous & Non-Ferrous Metal',
  title:
    'Powering Industries Worldwide With Premium Quality Ferrous & Non-Ferrous Metal Solutions You Trust.',
  imageSrc: `${imageBaseMar}/agriculture-food-production-concept-with-tractor-machine-silos-irrigation-system.webp`,
  imageAlt:
    'Tractor and industrial silos in an agricultural field at sunset',
  imagePosition: 'left' as const,
  cta: {
    label: 'Know more',
    href: '/products/ferrous-metals/',
  } satisfies CTA,
} as const;

/** Agricultural commodities split CTA — after metals (image right) */
export const homeAgriSplit = {
  id: 'home-agri-split',
  eyebrow: 'Agricultural Commodities',
  title:
    'From Farm To World, Delivering Essential Agricultural Commodities With Reliability And Care.',
  imageSrc: `${imageBaseMar}/industrial-worker-shaping-metal-rod-factory.webp`,
  imageAlt: 'Industrial worker shaping hot metal rod in a factory',
  imagePosition: 'right' as const,
  cta: {
    label: 'Know more',
    href: '/products/agricultural-commodities/',
  } satisfies CTA,
} as const;

