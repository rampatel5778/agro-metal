/**
 * Design system token catalog — used by showcase page
 */
export const colorTokens = [
  { name: 'Primary', var: '--color-primary', hex: '#D95648' },
  { name: 'Primary Dark', var: '--color-primary-dark', hex: '#B8453A' },
  { name: 'Secondary', var: '--color-secondary', hex: '#F5D83E' },
  { name: 'Accent', var: '--color-accent', hex: '#11A21B' },
  { name: 'Header', var: '--color-header', hex: '#2F2F2F' },
  { name: 'Text', var: '--color-text', hex: '#50624A' },
  { name: 'Background', var: '--color-bg', hex: '#F5F6F4' },
  { name: 'Surface', var: '--color-surface', hex: '#FFFFFF' },
  { name: 'Footer BG', var: '--color-bg-footer', hex: '#012804' },
  { name: 'Success', var: '--color-success', hex: '#11A21B' },
  { name: 'Warning', var: '--color-warning', hex: '#C9970A' },
  { name: 'Error', var: '--color-error', hex: '#C8433A' },
] as const;

export const spacingTokens = [
  { name: 'Section SM', var: '--spacing-section-sm', value: '5rem' },
  { name: 'Section MD', var: '--spacing-section-md', value: '6.25rem' },
  { name: 'Section', var: '--spacing-section', value: '7.5rem' },
  { name: 'Gutter', var: '--spacing-gutter', value: '1.5rem' },
  { name: 'Stack', var: '--spacing-stack', value: '1.5rem' },
] as const;

export const radiusTokens = [
  { name: 'SM', value: '0.25rem' },
  { name: 'MD', value: '0.5rem' },
  { name: 'LG', value: '1rem' },
  { name: 'XL', value: '1.5rem' },
  { name: 'Button', value: '0.5rem' },
  { name: 'Full', value: '9999px' },
] as const;

export const shadowTokens = [
  { name: 'XS', class: 'shadow-xs' },
  { name: 'Card', class: 'ds-card' },
  { name: 'Lift', class: 'ds-hover-lift' },
] as const;
