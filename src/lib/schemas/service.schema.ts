import { z } from 'zod';
import { contentImageSchema, ctaSchema } from './section.schema.js';

export const serviceItemSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  slug: z.string().min(1),
  href: z.string().min(1),
  description: z.string().optional(),
  image: contentImageSchema.optional(),
  cta: ctaSchema.optional(),
});

export const serviceDetailSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  intro: z.string().optional(),
  introImage: contentImageSchema.optional(),
  benefits: z.array(z.string()).optional(),
  whyChooseUs: z.array(z.string()).optional(),
  ctas: z.array(ctaSchema).optional(),
});

export type ServiceDetailSchema = z.infer<typeof serviceDetailSchema>;
