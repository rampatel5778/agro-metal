import type { CompanySchema } from '@lib/schemas/company.schema.js';
import { companySchema } from '@lib/schemas/company.schema.js';
import { ASSET_PATHS } from './constants.js';

const companyData = {
  name: 'Agrometal',
  legalName: 'Agrometal',
  tagline:
    'Bridging global agriculture and mining commodities with trusted trading and logistics solutions.',
  address: {
    line1: 'Office LB04124, P.O.Box 262679',
    line2: 'Jebel Ali, Dubai, UAE',
  },
  contact: {
    phone: '+971 (0)4 434 1284',
    phoneHref: 'tel:+971044341284',
    fax: '+971 (0)4 434 1278',
    faxHref: 'tel:+971044341278',
    email: 'info@agrometal.ae',
    emailHref: 'mailto:info@agrometal.ae',
  },
  logos: {
    header: `${ASSET_PATHS.agrometalImages}/2026/02/header-logo_agro_new-01.svg`,
    footer: `${ASSET_PATHS.agrometalImages}/2026/03/footer-logo_agro_new-01-02.svg`,
  },
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178!2d55.027!3d25.005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAwJzE4LjAiTiA1NcKwMDEnMzcuMiJF!5e0!3m2!1sen!2sae!4v1600000000000!5m2!1sen!2sae',
  mapDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Jebel+Ali+Dubai+UAE+Agrometal',
} satisfies CompanySchema;

export const company = companySchema.parse(companyData);

export type Company = typeof company;
