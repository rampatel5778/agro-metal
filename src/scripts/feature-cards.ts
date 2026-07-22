/**
 * Agriva feature-box-item-2 hover — yellow active state on card
 */
export function initFeatureCards(): void {
  const cards = document.querySelectorAll<HTMLElement>('.feature-box-item-2');
  if (cards.length === 0) return;

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      cards.forEach((c) => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
}

initFeatureCards();
