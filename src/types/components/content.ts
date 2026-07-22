import type { ContentImage } from '@types/image.js';
import type { CTA } from '@types/cta.js';

export interface RichTextProps {
  html?: string;
  class?: string;
}

export interface TextBlockProps {
  heading?: string;
  body: string | string[];
  class?: string;
}

export interface IntroTextProps {
  heading?: string;
  body: string | string[];
  cta?: CTA;
  align?: 'left' | 'center';
  class?: string;
}

export interface IntroTextImageProps {
  heading?: string;
  body: string | string[];
  image: ContentImage;
  imagePosition?: 'left' | 'right';
  cta?: CTA;
  class?: string;
}

export interface StatItem {
  id?: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface CounterStatsProps {
  items: StatItem[];
  class?: string;
  ariaLabel?: string;
}

export interface CertificationItem {
  id?: string;
  image: ContentImage;
  href?: string;
}

export interface CertificationBadgesProps {
  items: CertificationItem[];
  class?: string;
  ariaLabel?: string;
}

export interface BrandItem {
  id?: string;
  image: ContentImage;
  href?: string;
  label?: string;
}

export interface BrandCarouselProps {
  items: BrandItem[];
  autoplay?: boolean;
  class?: string;
  ariaLabel?: string;
}

export interface TimelineItem {
  id?: string;
  year?: string;
  title: string;
  body?: string;
  image?: ContentImage;
}

export interface TimelineVerticalProps {
  items: TimelineItem[];
  heading?: string;
  class?: string;
}

export interface HomeTimelineItem {
  period: string;
  title: string;
  body: string;
}

export interface HomeTimelineProps {
  title: string;
  items: HomeTimelineItem[];
}

/** Agriva Home 03 about-section — image + eyebrow + headline + CTA */
export interface HomeSplitCtaProps {
  id: string;
  eyebrow: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  cta: CTA;
  /** Image on left (default) or right — matches existing alternating layout */
  imagePosition?: 'left' | 'right';
  class?: string;
}

export interface TimelineHorizontalProps {
  items: TimelineItem[];
  heading?: string;
  class?: string;
}

export interface VideoBlockProps {
  youtubeId?: string;
  videoSrc?: string;
  title: string;
  poster?: ContentImage;
  class?: string;
}

export interface VideoCTAProps {
  youtubeId?: string;
  videoSrc?: string;
  heading: string;
  body?: string;
  cta?: CTA;
  poster?: ContentImage;
  class?: string;
}

export interface TextMarqueeProps {
  items: string[];
  speed?: 'slow' | 'normal' | 'fast';
  class?: string;
  ariaLabel?: string;
}

export interface TextBannerProps {
  text: string;
  variant?: 'default' | 'primary' | 'dark';
  class?: string;
}

export interface HomeIntroImage {
  src: string;
  animation: 'img-custom-anim-top' | 'img-custom-anim-left' | 'img-custom-anim-right';
}

export interface HomeIntroProps {
  eyebrow?: string;
  title: string;
  body: string | string[];
  cta?: CTA;
  images?: {
    top: HomeIntroImage;
    left: HomeIntroImage;
    right: HomeIntroImage;
  };
  class?: string;
}

export interface HomeFeatureGridItem {
  id?: string;
  title: string;
  description: string;
  iconSrc: string;
  delay?: string;
}

export interface HomeFeatureGridProps {
  items: HomeFeatureGridItem[];
  maskSrc?: string;
  maskHoverSrc?: string;
  class?: string;
}

/** @deprecated Use HomeFeatureGridProps */
export type HomeCommodityIconsProps = HomeFeatureGridProps;

export interface HomeAboutStatsItem {
  value: number;
  suffix?: string;
  prefix?: string;
  heading: string;
  description: string;
  /** Center elevated stat (e.g. 98% satisfaction) */
  emphasized?: boolean;
}

export interface HomeAboutStatsAssets {
  leftShape: string;
  rightShape: string;
  maize: string;
  tractor: string;
  paddy: string;
}

export interface HomeAboutStatsProps {
  title: string;
  items: HomeAboutStatsItem[];
  youtubeId: string;
  videoTitle?: string;
  assets?: HomeAboutStatsAssets;
  class?: string;
}

export interface HomeProductCardItem {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  description: string;
  delay?: string;
}

export interface HomeProductCardsProps {
  items: HomeProductCardItem[];
  class?: string;
}

/** Products hub — Agriva section-title intro above product cards */
export interface ProductsRangeIntroProps {
  title: string;
  description: string;
  class?: string;
}

export interface HomeStatsCounterItem {
  value: number;
  suffix?: string;
  prefix?: string;
  heading: string;
  description: string;
}

export interface HomeStatsCounterProps {
  title: string;
  items: HomeStatsCounterItem[];
  class?: string;
}

export interface AboutVolumeCounterItem {
  value: number;
  suffix?: string;
  prefix?: string;
  heading: string;
  description: string;
}

export interface AboutVolumeCountersProps {
  eyebrow?: string;
  title: string;
  items: AboutVolumeCounterItem[];
  class?: string;
}

export interface AboutCertificationItem {
  iconSrc: string;
  label: string;
  detail?: string;
}

export interface AboutCertificationsProps {
  title: string;
  items: AboutCertificationItem[];
  backgroundImageSrc?: string;
  class?: string;
}

export interface AboutDifferentiatorItem {
  iconSrc: string;
  title: string;
  description: string;
}

export interface AboutDifferentiatorsProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: AboutDifferentiatorItem[];
  backgroundImageSrc?: string;
  class?: string;
}

export interface AboutMissionVisionTab {
  tabLabel: string;
  heading: string;
  body: string;
}

export interface AboutMissionVisionProps {
  eyebrow?: string;
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  mission: AboutMissionVisionTab;
  vision: AboutMissionVisionTab;
  class?: string;
}

export interface AboutValueItem {
  iconSrc: string;
  title: string;
  bullets: string[];
}

export interface AboutValuesProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: AboutValueItem[];
  class?: string;
}

export interface AboutGrowthStrategyItem {
  title: string;
  description: string;
}

export interface AboutGrowthStrategyProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: AboutGrowthStrategyItem[];
  class?: string;
}

/** Trading page — Agriva index-4 why-choose-us-section-4 */
export interface TradingBusinessModelItem {
  title: string;
  description: string;
  iconSrc: string;
}

export interface TradingBusinessModelProps {
  eyebrow?: string;
  title: string;
  description?: string;
  cta?: import('@types/cta.js').CTA;
  items: TradingBusinessModelItem[];
  class?: string;
}

/** Trading page — Agriva service-2 service-box-items-3 */
export interface TradingAdvantageItem {
  title: string;
  description: string;
  iconSrc: string;
}

export interface TradingAdvantagesProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: TradingAdvantageItem[];
  class?: string;
}

/** Trading page — Agriva index why-choose-us-section-2 (flip image via imagePosition) */
export interface TradingSupplyChainItem {
  title: string;
  description: string;
  iconSrc: string;
}

export interface TradingSupplyChainSplitProps {
  id: string;
  eyebrow?: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  items: TradingSupplyChainItem[];
  imagePosition?: 'left' | 'right';
  class?: string;
}

export interface HomeTextMarqueeProps {
  text: string;
  repetitions?: number;
  class?: string;
}

export interface HeroVideoProps {
  youtubeId: string;
  /** Main hero headline */
  title: string;
  eyebrow?: string;
  description?: string;
  primaryCta: import('@types/cta.js').CTA;
  secondaryCta?: import('@types/cta.js').CTA;
  bottomBar?: {
    heading: string;
    items: string[];
  };
  videoTitle?: string;
  iconSrc?: string;
  arrowLeftSrc?: string;
  arrowRightSrc?: string;
  class?: string;
}
