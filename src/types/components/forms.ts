import type { FormDefinition, FormField as FormFieldConfig } from '@types/form.js';

export interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';
  placeholder?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  value?: string;
  disabled?: boolean;
  autocomplete?: string;
  minLength?: number;
  maxLength?: number;
  class?: string;
}

export interface InputProps extends Omit<FormFieldProps, 'type'> {
  type?: 'text' | 'email' | 'tel' | 'password' | 'search' | 'url';
}

export interface TextareaProps extends Omit<FormFieldProps, 'type'> {
  rows?: number;
}

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<FormFieldProps, 'type'> {
  options: SelectOption[];
}

export interface CheckboxProps extends Omit<FormFieldProps, 'type'> {
  checked?: boolean;
}

export interface RadioProps extends Omit<FormFieldProps, 'type'> {
  value: string;
  checked?: boolean;
  groupName: string;
}

export interface ContactFormProps {
  form: FormDefinition;
  class?: string;
  heading?: string;
  description?: string;
}

export interface NewsletterFormProps {
  form: FormDefinition;
  class?: string;
  heading?: string;
  description?: string;
}

export type { FormFieldConfig };
