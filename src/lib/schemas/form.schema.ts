import { z } from 'zod';

export const formFieldSchema = z.object({
  name: z.string().min(1),
  type: z.enum(['text', 'email', 'tel', 'textarea', 'hidden']),
  label: z.string().min(1),
  placeholder: z.string().optional(),
  required: z.boolean(),
  minLength: z.number().positive().optional(),
  maxLength: z.number().positive().optional(),
  defaultCountry: z.string().length(2).optional(),
  autocomplete: z.string().optional(),
});

export const formDefinitionSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  action: z.string().optional(),
  method: z.literal('POST'),
  fields: z.array(formFieldSchema).min(1),
  submitLabel: z.string().min(1),
  successMessage: z.string().min(1),
  errorMessage: z.string().min(1),
  honeypotField: z.string().optional(),
});

export type FormDefinitionSchema = z.infer<typeof formDefinitionSchema>;
