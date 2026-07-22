import { z } from 'zod';
import { contentImageSchema } from './section.schema.js';
import { ctaSchema } from './section.schema.js';

export const productSubItemSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().optional(),
  image: contentImageSchema.optional(),
  anchor: z.string().optional(),
});

export const productGroupSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  anchor: z.string().optional(),
  items: z.array(productSubItemSchema),
});

export const productCategorySchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  slug: z.string().min(1),
  href: z.string().min(1),
  description: z.string().optional(),
  image: contentImageSchema.optional(),
});

export const productPageSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  intro: z.string().optional(),
  groups: z.array(productGroupSchema),
  industries: z
    .array(
      z.object({
        title: z.string(),
        description: z.string().optional(),
        image: contentImageSchema.optional(),
        href: z.string().optional(),
        cta: ctaSchema.optional(),
      }),
    )
    .optional(),
});

export type ProductPageSchema = z.infer<typeof productPageSchema>;
