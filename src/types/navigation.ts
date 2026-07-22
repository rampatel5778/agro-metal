export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  /** Optional: highlight in nav when this exact path is active */
  exact?: boolean;
}

export interface NavigationConfig {
  main: NavigationItem[];
  footer: NavigationItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
