import type { NavigationItem } from './navigation.js';
import type { ContentImage } from './image.js';
import type { FormDefinition } from './form.js';

export interface FooterContactColumn {
  heading: string;
  address: string[];
  phone: string;
  phoneHref: string;
  fax?: string;
  faxHref?: string;
  email: string;
  emailHref: string;
}

export interface FooterConfig {
  logo: ContentImage;
  logoHref: string;
  contact: FooterContactColumn;
  usefulLinks: NavigationItem[];
  newsletter: {
    heading: string;
    description?: string;
    form: FormDefinition;
  };
  copyright: string;
  showSocial: boolean;
}
