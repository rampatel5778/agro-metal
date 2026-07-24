import { company } from '@data/company.js';
import { navigation } from '@data/navigation.js';
import { footer } from '@data/footer.js';
import { social, type SocialLink as SiteSocialLink } from '@data/social.js';
import { getPageSeo } from '@data/seo.js';
import type { BaseLayoutProps, SocialLink as FooterSocialLink } from '@types/components/layout.js';

/** Map site social config to footer SocialLink shape (Agriva FA icon names) */
const SOCIAL_ICON_MAP: Record<SiteSocialLink['platform'], string> = {
  facebook: 'facebook-f',
  linkedin: 'linkedin-in',
  twitter: 'twitter',
  youtube: 'youtube',
  instagram: 'instagram',
};

function getSocialLinks(): FooterSocialLink[] {
  if (!social.showInFooter || social.links.length === 0) return [];
  return social.links.map((link) => ({
    label: link.label,
    href: link.href || '#',
    icon: SOCIAL_ICON_MAP[link.platform],
  }));
}

/**
 * Build shared layout props for BaseLayout from global config.
 * Page routes pass their path for SEO + active navigation state.
 */
export function getSiteLayout(path: string): BaseLayoutProps {
  const seo = getPageSeo(path);

  return {
    seo: {
      title: seo.title,
      description: seo.description,
      canonical: seo.canonical,
      ogImage: seo.defaultOgImage,
      siteName: seo.siteName,
      locale: seo.locale,
      twitterCard: seo.twitterCard,
      robots: seo.robots,
    },
    header: {
      logo: {
        src: company.logos.header,
        alt: `${company.name} logo`,
        href: '/',
        width: 240,
        height: 56,
      },
      navigation: navigation.main,
      currentPath: path,
      sticky: true,
      phone: company.contact.phone,
      phoneHref: company.contact.phoneHref,
      contactCta: { label: 'Get In Touch', href: '/contact-us/' },
    },
    footer: { config: footer },
    socialLinks: getSocialLinks(),
    showSkipLink: true,
  };
}
