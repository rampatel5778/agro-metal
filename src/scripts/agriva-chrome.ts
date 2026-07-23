/**
 * Agriva Home 01 chrome — sticky header, offcanvas, back-to-top
 * Vanilla JS subset (no ScrollSmoother / custom cursor / jQuery meanmenu)
 */
export function initAgrivaChrome(): void {
  initStickyHeader();
  initOffcanvas();
  initBackToTop();
}

function initStickyHeader(): void {
  const header = document.getElementById('header-sticky');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('sticky', window.scrollY > 250);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initOffcanvas(): void {
  const openBtn = document.querySelector<HTMLElement>('.sidebar__toggle');
  const closeBtns = document.querySelectorAll('.offcanvas__close, .offcanvas__overlay');
  const panel = document.querySelector<HTMLElement>('.offcanvas__info');
  const overlay = document.querySelector('.offcanvas__overlay');
  if (!panel || !openBtn) return;

  const setExpanded = (expanded: boolean) => {
    openBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    openBtn.setAttribute('aria-label', expanded ? 'Close menu' : 'Open menu');
    panel.setAttribute('aria-hidden', expanded ? 'false' : 'true');
  };

  const open = () => {
    panel.classList.add('info-open');
    overlay?.classList.add('overlay-open');
    document.body.classList.add('overflow-hidden');
    setExpanded(true);
    const closeBtn = panel.querySelector<HTMLElement>('.offcanvas__close button');
    closeBtn?.focus();
  };

  const close = () => {
    panel.classList.remove('info-open');
    overlay?.classList.remove('overlay-open');
    document.body.classList.remove('overflow-hidden');
    setExpanded(false);
  };

  openBtn.addEventListener('click', open);
  openBtn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      open();
    }
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener('click', close);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel.classList.contains('info-open')) {
      close();
      openBtn.focus();
    }
  });

  // Close drawer when a real nav link is followed
  panel.querySelectorAll('.mean-nav a:not(.mean-expand)').forEach((link) => {
    link.addEventListener('click', () => close());
  });

  // Agriva meanmenu-style accordion (plus / minus)
  panel.querySelectorAll('.mean-expand').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const li = btn.closest('li');
      if (!li) return;
      const icon = btn.querySelector('i');
      const expanded = li.classList.toggle('dropdown-open');
      btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      btn.classList.toggle('mean-clicked', expanded);
      if (icon) {
        icon.classList.toggle('fa-plus', !expanded);
        icon.classList.toggle('fa-minus', expanded);
      }
    });
  });
}

function initBackToTop(): void {
  const btn = document.getElementById('back-top');
  if (!btn) return;

  const onScroll = () => {
    btn.style.display = window.scrollY > 300 ? 'inline-block' : 'none';
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAgrivaChrome);
  } else {
    initAgrivaChrome();
  }
}
