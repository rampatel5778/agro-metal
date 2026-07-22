/** Mobile navigation toggle + accordion submenus */
export function initMobileNav(root: HTMLElement): void {
  const toggle = root.querySelector<HTMLButtonElement>('[data-mobile-nav-toggle]');
  const panel = root.querySelector<HTMLElement>('[data-mobile-nav-panel]');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    panel.hidden = open;
    panel.classList.toggle('is-open', !open);
  });

  root.querySelectorAll<HTMLButtonElement>('[data-mobile-submenu-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const subId = btn.getAttribute('aria-controls');
      const sub = subId ? root.querySelector<HTMLElement>(`#${CSS.escape(subId)}`) : null;
      if (!sub) return;
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      sub.hidden = open;
      sub.classList.toggle('is-open', !open);
    });
  });
}

export function initAllMobileNav(): void {
  document.querySelectorAll<HTMLElement>('[data-mobile-nav]').forEach(initMobileNav);
}

if (typeof document !== 'undefined') {
  initAllMobileNav();
}
