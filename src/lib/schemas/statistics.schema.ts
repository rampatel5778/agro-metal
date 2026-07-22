import { z } from 'zod';

export const statisticItemSchema = z.object({
  id: z.string().min(1),
  value: z.string().min(1),
  suffix: z.string().optional(),
  label: z.string().min(1),
  description: z.string().optional(),
});

export const statisticsBlockSchema = z.object({
  id: z.string().min(1),
  heading: z.string().optional(),
  items: z.array(statisticItemSchema).min(1),
});

export const testimonialSchema = z.object({
  id: z.string().min(1),
  quote: z.string().min(1),
  author: z.string().optional(),
  role: z.string().optional(),
  company: z.string().optional(),
  image: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .optional(),
});

export type StatisticsBlockSchema = z.infer<typeof statisticsBlockSchema>;
