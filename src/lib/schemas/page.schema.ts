import { z } from 'zod';
import { sectionSchema } from './section.schema.js';

export const pageIdSchema = z.enum([
  'home',
  'about-us',
  'our-history',
  'trading-logistics-warehousing',
  'products',
  'ferrous-metals',
  'non-ferrous-metals',
  'agricultural-commodities',
  'services',
  'commodity-hedging',
  'currency-hedging',
  'logistics',
  'sustainability',
  'contact-us',
]);

export const pageTemplateSchema = z.enum(['home', 'inner-default', 'hub', 'contact']);

export const pageSeoMetaSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1).max(320),
  canonical: z.string().optional(),
  ogImage: z.string().optional(),
  noindex: z.boolean().optional(),
});

export const pageContentSchema = z.object({
  id: pageIdSchema,
  slug: z.string().min(1),
  path: z.string().min(1),
  template: pageTemplateSchema,
  seo: pageSeoMetaSchema,
  sections: z.array(sectionSchema),
});

export type PageContentSchema = z.infer<typeof pageContentSchema>;
