export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'facebook' | 'instagram' | 'youtube';
  label: string;
  href: string;
}

export interface SocialConfig {
  links: SocialLink[];
  showInFooter: boolean;
  showInHeader: boolean;
}

/** Social links — use "#" until real profile URLs are available */
export const social: SocialConfig = {
  links: [
    { platform: 'facebook', label: 'Facebook', href: '#' },
    { platform: 'linkedin', label: 'LinkedIn', href: '#' },
    { platform: 'twitter', label: 'Twitter', href: '#' },
    { platform: 'youtube', label: 'YouTube', href: '#' },
  ],
  showInFooter: true,
  showInHeader: false,
};
