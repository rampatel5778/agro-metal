/**
 * Home vertical timeline — step-by-step scroll progression
 * @see docs/animations.md
 */

declare global {
  interface Window {
    gsap?: {
      registerPlugin: (...plugins: unknown[]) => void;
      to: (target: Element, vars: Record<string, unknown>) => unknown;
      set: (target: Element, vars: Record<string, unknown>) => void;
    };
    ScrollTrigger?: {
      create: (vars: Record<string, unknown>) => { kill: () => void };
      refresh: () => void;
    };
  }
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function waitForGlobals(callback: () => void, attempts = 0): void {
  if (window.gsap && window.ScrollTrigger) {
    callback();
    return;
  }
  if (attempts > 120) return;
  requestAnimationFrame(() => waitForGlobals(callback, attempts + 1));
}

export function initHomeTimeline(): void {
  const vertical = document.querySelector<HTMLElement>('[data-timeline-vertical]');
  const progress = document.querySelector<HTMLElement>('[data-timeline-line-progress]');
  const steps = Array.from(document.querySelectorAll<HTMLElement>('[data-timeline-step]'));

  if (!vertical || !progress || steps.length === 0) return;

  const resetSteps = (): void => {
    steps.forEach((step) => {
      step.classList.remove('is-active', 'is-past', 'is-visible');
    });
  };

  const setStepState = (index: number): void => {
    steps.forEach((step, i) => {
      step.classList.toggle('is-active', i === index);
      step.classList.toggle('is-past', i < index);
      step.classList.toggle('is-visible', i <= index);
    });
  };

  const revealAll = (): void => {
    steps.forEach((step, i) => {
      step.classList.add('is-visible');
      step.classList.toggle('is-past', i < steps.length - 1);
      step.classList.toggle('is-active', i === steps.length - 1);
    });
    progress.style.transform = 'scaleY(1)';
  };

  if (prefersReducedMotion()) {
    revealAll();
    return;
  }

  resetSteps();
  progress.style.transform = 'scaleY(0)';

  waitForGlobals(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(progress, {
      scaleY: 0,
      transformOrigin: 'top center',
    });

    /** Drive line fill + active circle from the same scroll progress (all steps). */
    const applyScrollProgress = (value: number): void => {
      const clamped = Math.min(1, Math.max(0, value));
      gsap.set(progress, { scaleY: clamped, transformOrigin: 'top center' });

      if (clamped <= 0.01) {
        setStepState(0);
        return;
      }

      if (clamped >= 0.99) {
        setStepState(steps.length - 1);
        return;
      }

      const index = Math.min(
        steps.length - 1,
        Math.floor(clamped * steps.length),
      );
      setStepState(index);
    };

    steps.forEach((step, index) => {
      const card = step.querySelector('.home-timeline-card');
      const fromX = index % 2 === 0 ? -48 : 48;

      if (card) {
        gsap.set(card, { opacity: 0, x: fromX, y: 12 });
        gsap.to(card, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    });

    ScrollTrigger.create({
      trigger: vertical,
      start: 'top 72%',
      end: 'bottom 28%',
      scrub: 0.55,
      onUpdate: (self: { progress: number }) => {
        applyScrollProgress(self.progress);
      },
      onEnter: (self: { progress: number }) => {
        applyScrollProgress(self.progress);
      },
      onEnterBack: (self: { progress: number }) => {
        applyScrollProgress(self.progress);
      },
      onLeaveBack: () => {
        resetSteps();
        gsap.set(progress, { scaleY: 0, transformOrigin: 'top center' });
      },
    });

    applyScrollProgress(0);
    ScrollTrigger.refresh();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHomeTimeline);
} else {
  initHomeTimeline();
}
