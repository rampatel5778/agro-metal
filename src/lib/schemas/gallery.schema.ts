import { z } from 'zod';

export const galleryItemSchema = z.object({
  id: z.string().min(1),
  src: z.string().min(1),
  alt: z.string(),
  caption: z.string().optional(),
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
});

export const gallerySchema = z.object({
  id: z.string().min(1),
  variant: z.enum(['grid', 'carousel', 'drag']),
  items: z.array(galleryItemSchema).min(1),
});

export type GallerySchema = z.infer<typeof gallerySchema>;
