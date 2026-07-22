import { z } from 'zod';
import { navigationItemSchema } from './navigation.schema.js';
import { contentImageSchema } from './section.schema.js';
import { formDefinitionSchema } from './form.schema.js';

export const footerContactSchema = z.object({
  heading: z.string().min(1),
  address: z.array(z.string()).min(1),
  phone: z.string().min(1),
  phoneHref: z.string().min(1),
  fax: z.string().optional(),
  faxHref: z.string().optional(),
  email: z.string().email(),
  emailHref: z.string().min(1),
});

export const footerConfigSchema = z.object({
  logo: contentImageSchema,
  logoHref: z.string().min(1),
  contact: footerContactSchema,
  usefulLinks: z.array(navigationItemSchema),
  newsletter: z.object({
    heading: z.string().min(1),
    description: z.string().optional(),
    form: formDefinitionSchema,
  }),
  copyright: z.string().min(1),
  showSocial: z.boolean(),
});

export type FooterConfigSchema = z.infer<typeof footerConfigSchema>;
