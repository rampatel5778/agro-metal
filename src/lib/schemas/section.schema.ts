import { z } from 'zod';

export const contentImageSchema = z.object({
  src: z.string().min(1),
  alt: z.string(),
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
  loading: z.enum(['lazy', 'eager']).optional(),
  remoteUrl: z.string().url().optional(),
});

export const ctaSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  variant: z.enum(['primary', 'secondary', 'outline', 'link']).optional(),
  external: z.boolean().optional(),
  anchor: z.string().optional(),
});

export const sectionItemSchema = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  body: z.string().optional(),
  href: z.string().optional(),
  anchor: z.string().optional(),
  image: contentImageSchema.optional(),
  icon: z.string().optional(),
});

export const sectionTypeSchema = z.enum([
  'hero',
  'hero-video',
  'breadcrumb-hero',
  'text',
  'text-image',
  'text-marquee',
  'cards',
  'icon-grid',
  'product-grid',
  'service-grid',
  'industry-grid',
  'timeline-horizontal',
  'timeline-vertical',
  'timeline-slider',
  'stats',
  'certifications',
  'video-cta',
  'blog-cards',
  'brand-carousel',
  'split-cta',
  'contact-info',
  'contact-form',
  'map',
  'benefits',
  'why-choose-us',
  'trends',
]);

export const sectionSchema = z.object({
  id: z.string().min(1),
  type: sectionTypeSchema,
  heading: z.string().optional(),
  subheading: z.string().optional(),
  body: z.union([z.string(), z.array(z.string())]).optional(),
  items: z.array(sectionItemSchema).optional(),
  image: contentImageSchema.optional(),
  images: z.array(contentImageSchema).optional(),
  videoId: z.string().optional(),
  cta: ctaSchema.optional(),
  ctas: z.array(ctaSchema).optional(),
  meta: z.record(z.string(), z.unknown()).optional(),
});

export type ContentImageSchema = z.infer<typeof contentImageSchema>;
export type SectionSchema = z.infer<typeof sectionSchema>;
