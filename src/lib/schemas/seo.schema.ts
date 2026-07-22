import { z } from 'zod';

export const seoDefaultsSchema = z.object({
  siteName: z.string().min(1),
  titleTemplate: z.string().min(1),
  defaultDescription: z.string().min(1),
  defaultOgImage: z.string().min(1),
  locale: z.string().min(2),
  twitterCard: z.enum(['summary', 'summary_large_image']),
  robots: z.string().min(1),
});

export const pageSeoSchema = seoDefaultsSchema.extend({
  title: z.string().min(1),
  description: z.string().min(1),
  canonical: z.string().url(),
  ogImage: z.string().optional(),
  noindex: z.boolean().optional(),
  jsonLd: z.array(z.record(z.string(), z.unknown())).optional(),
});

export type SeoDefaultsSchema = z.infer<typeof seoDefaultsSchema>;
