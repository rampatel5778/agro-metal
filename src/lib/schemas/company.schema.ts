import { z } from 'zod';
import { contentImageSchema } from './section.schema.js';

export const companyAddressSchema = z.object({
  line1: z.string().min(1),
  line2: z.string().min(1),
});

export const companyContactSchema = z.object({
  phone: z.string().min(1),
  phoneHref: z.string().min(1),
  fax: z.string().min(1),
  faxHref: z.string().min(1),
  email: z.string().email(),
  emailHref: z.string().min(1),
});

export const companySchema = z.object({
  name: z.string().min(1),
  legalName: z.string().min(1),
  tagline: z.string().min(1),
  address: companyAddressSchema,
  contact: companyContactSchema,
  logos: z.object({
    header: z.string().min(1),
    footer: z.string().min(1),
  }),
  mapEmbedUrl: z.string().url(),
  mapDirectionsUrl: z.string().url(),
});

export type CompanySchema = z.infer<typeof companySchema>;
