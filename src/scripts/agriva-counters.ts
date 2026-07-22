/**
 * Agriva count-item-2 — count-up on scroll + yellow active hover
 * @see docs/animations.md — replace jQuery counterUp
 */

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function animateCount(element: HTMLElement): void {
  const target = Number(element.dataset.countValue ?? element.textContent ?? 0);
  if (Number.isNaN(target)) return;

  const duration = 4000;
  const start = performance.now();

  function tick(now: number): void {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - (1 - progress) ** 3;
    element.textContent = String(Math.floor(eased * target));
    if (progress < 1) requestAnimationFrame(tick);
    else element.textContent = String(target);
  }

  requestAnimationFrame(tick);
}

function initCountUp(): void {
  const counters = document.querySelectorAll<HTMLElement>(
    '.home-stats-section .count, .home-about-stats .count, .about-statistics-section .count',
  );
  if (counters.length === 0) return;

  if (prefersReducedMotion()) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCount(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.3 },
  );

  counters.forEach((counter) => observer.observe(counter));
}

function initCountHover(): void {
  const cards = document.querySelectorAll<HTMLElement>(
    '.home-stats-section .count-item-2, .home-about-stats .count-item-2',
  );
  if (cards.length === 0) return;

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      cards.forEach((item) => item.classList.remove('active'));
      card.classList.add('active');
    });
  });
}

export function initAgrivaCounters(): void {
  initCountUp();
  initCountHover();
}

initAgrivaCounters();
