import { z } from 'zod';

export const navigationItemSchema: z.ZodType<{
  label: string;
  href: string;
  children?: { label: string; href: string; children?: unknown[]; exact?: boolean }[];
  exact?: boolean;
}> = z.lazy(() =>
  z.object({
    label: z.string().min(1),
    href: z.string().min(1),
    children: z.array(navigationItemSchema).optional(),
    exact: z.boolean().optional(),
  }),
);

export const navigationConfigSchema = z.object({
  main: z.array(navigationItemSchema),
  footer: z.array(navigationItemSchema),
});

export type NavigationConfigSchema = z.infer<typeof navigationConfigSchema>;
