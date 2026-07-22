import { footerConfigSchema } from '@lib/schemas/footer.schema.js';
import { company } from './company.js';
import { navigation } from './navigation.js';
import { social } from './social.js';

export const contactFormDefinition = {
  id: 'contact-inquiry',
  name: 'Contact Inquiry',
  method: 'POST' as const,
  action: '/api/contact',
  fields: [
    {
      name: 'name',
      type: 'text' as const,
      label: 'Your Name',
      placeholder: 'Your Name*',
      required: true,
      minLength: 2,
      maxLength: 400,
      autocomplete: 'name',
    },
    {
      name: 'phone',
      type: 'tel' as const,
      label: 'Your Phone',
      placeholder: 'Your Phone*',
      required: true,
      defaultCountry: 'AE',
      autocomplete: 'tel',
    },
    {
      name: 'email',
      type: 'email' as const,
      label: 'Your Email',
      placeholder: 'Your Email*',
      required: true,
      autocomplete: 'email',
    },
    {
      name: 'message',
      type: 'textarea' as const,
      label: 'Your Message',
      placeholder: 'Your Message',
      required: false,
      maxLength: 2000,
      autocomplete: 'off',
    },
  ],
  submitLabel: 'Send',
  successMessage: 'Thank you for your enquiry. We will get back to you shortly.',
  errorMessage:
    'Something went wrong. Please try again or email info@agrometal.ae directly.',
  honeypotField: 'website',
};

export const newsletterFormDefinition = {
  id: 'newsletter',
  name: 'Newsletter Signup',
  method: 'POST' as const,
  action: '/api/newsletter',
  fields: [
    {
      name: 'email',
      type: 'email' as const,
      label: 'Your Email',
      placeholder: 'Your Email',
      required: true,
      autocomplete: 'email',
    },
  ],
  submitLabel: 'SIGN UP',
  successMessage: 'Thank you for subscribing!',
  errorMessage: 'Subscription failed. Please try again.',
};

export const footer = footerConfigSchema.parse({
  logo: {
    src: company.logos.footer,
    alt: 'Agrometal logo',
    width: 202,
    height: 115,
  },
  logoHref: '/',
  contact: {
    heading: 'Contact',
    address: [company.address.line1, company.address.line2],
    phone: company.contact.phone,
    phoneHref: company.contact.phoneHref,
    fax: company.contact.fax,
    faxHref: company.contact.faxHref,
    email: company.contact.email,
    emailHref: company.contact.emailHref,
  },
  usefulLinks: navigation.footer,
  newsletter: {
    heading: 'Get newsletter from Agrometal',
    description: 'Subscribe for industry insights and company updates.',
    form: {
      ...newsletterFormDefinition,
      fields: [
        {
          ...newsletterFormDefinition.fields[0],
          placeholder: 'Enter your email',
        },
      ],
      submitLabel: 'subscribe now',
    },
  },
  copyright: `© ${new Date().getFullYear()} ${company.name}. All rights reserved.`,
  showSocial: social.showInFooter && social.links.length > 0,
});

export { contactFormDefinition as contactForm, newsletterFormDefinition as newsletterForm };
