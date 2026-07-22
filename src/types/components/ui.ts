import type { HTMLAttributes } from 'astro/types';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'icon'
  | 'cta';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type IconStyle = 'solid' | 'regular' | 'light' | 'thin' | 'brands';
export type IconSize = 'xs' | 'sm' | 'lg' | 'xl' | '2x' | '1x';
export type ImageAspect = 'video' | 'square' | 'portrait' | 'landscape' | 'none';
export type ImageFit = 'cover' | 'contain';
export type ImageRounded = 'none' | 'lg' | 'full';
export type BadgeVariant = 'default' | 'secondary' | 'success' | 'outline';
export type TagVariant = 'default' | 'muted';
export type ChipVariant = 'default' | 'outline';
export type OverlayVariant = 'dark' | 'dark-strong' | 'gradient';
export type CardVariant =
  | 'default'
  | 'feature'
  | 'product'
  | 'stat'
  | 'timeline'
  | 'service'
  | 'blog';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
  class?: string;
  ariaLabel?: string;
  id?: string;
  name?: string;
  value?: string;
}

export interface IconProps {
  name: string;
  style?: IconStyle;
  size?: IconSize;
  class?: string;
  color?: string;
  rotate?: 90 | 180 | 270;
  spin?: boolean;
  pulse?: boolean;
  label?: string;
  decorative?: boolean;
}

export interface ImageProps extends HTMLAttributes<'img'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspect?: ImageAspect;
  fit?: ImageFit;
  rounded?: ImageRounded;
  position?: 'top' | 'center' | 'bottom';
  lazy?: boolean;
  priority?: boolean;
  zoom?: boolean;
  overlay?: boolean;
}

export interface VideoProps {
  src: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  class?: string;
  ariaLabel?: string;
}

export interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
  class?: string;
}

export interface TagProps {
  text: string;
  variant?: TagVariant;
  href?: string;
  class?: string;
}

export interface ChipProps {
  text: string;
  variant?: ChipVariant;
  href?: string;
  class?: string;
}

export interface DividerProps {
  class?: string;
  decorative?: boolean;
}

export interface OverlayProps {
  variant?: OverlayVariant;
  class?: string;
}

export interface CardProps {
  variant?: CardVariant;
  href?: string;
  class?: string;
  hover?: boolean;
}

export interface LinkProps {
  href: string;
  external?: boolean;
  class?: string;
  ariaLabel?: string;
  underline?: boolean;
}
