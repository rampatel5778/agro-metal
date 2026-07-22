export type FormFieldType = 'text' | 'email' | 'tel' | 'textarea' | 'hidden';

export interface FormField {
  name: string;
  type: FormFieldType;
  label: string;
  placeholder?: string;
  required: boolean;
  minLength?: number;
  maxLength?: number;
  defaultCountry?: string;
  autocomplete?: string;
}

export interface FormDefinition {
  id: string;
  name: string;
  action?: string;
  method: 'POST';
  fields: FormField[];
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
  honeypotField?: string;
}

export interface ContactFormDefinition extends FormDefinition {
  id: 'contact-inquiry';
}

export interface NewsletterFormDefinition extends FormDefinition {
  id: 'newsletter';
}

export type SiteFormId = 'contact-inquiry' | 'newsletter';
