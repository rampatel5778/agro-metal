import { z } from 'zod';
import { contentImageSchema } from './section.schema.js';

export const timelineItemSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  period: z.string().optional(),
  date: z.string().optional(),
  body: z.union([z.string(), z.array(z.string())]).optional(),
  image: contentImageSchema.optional(),
});

export const timelineSchema = z.object({
  id: z.string().min(1),
  variant: z.enum(['horizontal', 'vertical', 'slider']),
  items: z.array(timelineItemSchema).min(1),
});

export type TimelineSchema = z.infer<typeof timelineSchema>;
