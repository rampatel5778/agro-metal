/**
 * Contact Us — /contact-us/
 */
import { company } from '../company.js';

/** Page title hero — Agriva breadcrumb-wrapper */
export const contactHero = {
  title: 'Contact Us',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Contact Us' },
  ],
  backgroundImageSrc: '/images/agrometal/2026/03/top-banner-1-3.webp',
  topImageSrc: '/images/agrometal/2026/03/top-banner-1-3.webp',
} as const;

/** Contact info — Agriva contact-info-section */
export const contactInfo = {
  id: 'contact-info',
  eyebrow: 'Get in Touch',
  title: 'Reach Out for Inquiries, Partnerships, or Support',
  description:
    'Get in touch with Agro Metal for inquiries, partnerships, or support. Our team is committed to providing reliable service and timely responses.',
  phone: company.contact.phone,
  phoneHref: company.contact.phoneHref,
  fax: company.contact.fax,
  faxHref: company.contact.faxHref,
  email: company.contact.email,
  emailHref: company.contact.emailHref,
  addressLines: [company.address.line1, company.address.line2],
  directionsHref: company.mapDirectionsUrl,
} as const;

/** Contact form + map — Agriva contact-section */
export const contactFormMap = {
  id: 'contact-form-map',
  mapEmbedUrl: company.mapEmbedUrl,
  mapTitle: 'Agro Metal office location — Jebel Ali, Dubai',
} as const;

/** Closing video CTA — Agriva drone-video-section (same as product pages) */
export const contactClosingCta = {
  id: 'closing-cta',
  eyebrow: 'Partner With Us',
  title: 'Reliable, sustainable, and globally sourced metals and agricultural commodities.',
  youtubeId: 'nr3_0zjTlsI',
  posterSrc: '/assets/img/home-3/video-bg.jpg',
  cta: { label: 'Contact Us', href: '/contact-us/' },
} as const;
