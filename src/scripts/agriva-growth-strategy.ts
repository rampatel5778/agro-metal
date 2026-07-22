/**
 * About Growth Strategy — active step on hover / focus
 * Agriva-style single active item (same idea as process-card / count-item-2)
 */

function initGrowthStrategyRail(): void {
  const steps = document.querySelectorAll<HTMLElement>(
    '.about-growth-strategy__step',
  );
  if (steps.length === 0) return;

  const setActive = (active: HTMLElement): void => {
    steps.forEach((step) => step.classList.remove('active'));
    active.classList.add('active');
  };

  steps.forEach((step) => {
    step.addEventListener('mouseenter', () => setActive(step));
    step.addEventListener('focusin', () => setActive(step));
  });
}

initGrowthStrategyRail();
