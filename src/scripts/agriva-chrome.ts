/**
 * Agriva Home 01 chrome — sticky header, offcanvas, search, back-to-top
 * Vanilla JS subset (no ScrollSmoother / custom cursor)
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
  const openBtn = document.querySelector('.sidebar__toggle');
  const closeBtns = document.querySelectorAll('.offcanvas__close, .offcanvas__overlay');
  const panel = document.querySelector('.offcanvas__info');
  const overlay = document.querySelector('.offcanvas__overlay');

  const open = () => {
    panel?.classList.add('info-open');
    overlay?.classList.add('overlay-open');
    document.body.classList.add('overflow-hidden');
  };

  const close = () => {
    panel?.classList.remove('info-open');
    overlay?.classList.remove('overlay-open');
    document.body.classList.remove('overflow-hidden');
  };

  openBtn?.addEventListener('click', open);
  openBtn?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      open();
    }
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener('click', close);
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
