/** Join class names, filtering falsy values */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/** Check if nav href matches current path */
export function isActivePath(href: string, currentPath: string, exact = false): boolean {
  if (exact) return href === currentPath;
  if (href === '/') return currentPath === '/';
  return currentPath.startsWith(href);
}
