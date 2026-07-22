/**
 * Agriva process-card — green fill on hover (replaces jQuery from main.js)
 */

function initProcessCardHover(): void {
  const cards = document.querySelectorAll<HTMLElement>(
    '.about-differentiators .process-card, .work-process-section .process-card',
  );
  if (cards.length === 0) return;

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      cards.forEach((item) => item.classList.remove('active'));
      card.classList.add('active');
    });
  });
}

initProcessCardHover();
