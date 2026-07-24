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
    header: `${ASSET_PATHS.agrometalImages}/2026/02/Logo.png`,
    footer: `${ASSET_PATHS.agrometalImages}/2026/03/footer-logo_agro_new-01-02.svg`,
  },
  mapEmbedUrl:
    'https://www.google.com/maps?q=Office+LB04124,+P.O.Box+262679,+Jebel+Ali,+Dubai,+United+Arab+Emirates&z=15&output=embed',
  mapDirectionsUrl: 'https://maps.app.goo.gl/3onGKx991d1gLJ6C8',
} satisfies CompanySchema;

export const company = companySchema.parse(companyData);

export type Company = typeof company;
