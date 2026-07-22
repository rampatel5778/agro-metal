/**
 * Home page scroll animations — Agriva about-2.html + main.js patterns (no jQuery)
 * @see docs/animations.md
 */

declare global {
  interface Window {
    gsap: {
      registerPlugin: (...plugins: unknown[]) => void;
      from: (target: Element | Element[], vars: Record<string, unknown>) => unknown;
      to: (target: Element | Element[], vars: Record<string, unknown>) => unknown;
      set: (target: Element | Element[], vars: Record<string, unknown>) => unknown;
      utils: { toArray: <T extends Element>(selector: string) => T[] };
    };
    ScrollTrigger: {
      create: (vars: Record<string, unknown>) => unknown;
    };
    SplitText: new (
      element: Element,
      config: { type: string },
    ) => { chars: Element[] };
    WOW: new (config?: Record<string, unknown>) => {
      init: () => void;
      sync?: () => void;
    };
  }
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function waitForGlobals(callback: () => void): void {
  if (window.gsap && window.ScrollTrigger && window.SplitText) {
    callback();
    return;
  }
  requestAnimationFrame(() => waitForGlobals(callback));
}

function restartCssAnimation(element: HTMLElement): void {
  element.style.animation = 'none';
  void element.offsetWidth;
  element.style.removeProperty('animation');
}

/** WOW.js — fadeInUp on paragraph + visibility trigger for image mosaic */
function initWow(): void {
  if (!window.WOW) return;

  new window.WOW({
    live: false,
    resetAnimation: false,
    offset: 80,
    mobile: true,
  }).init();
}

/** Restart img-custom-anim clip-path when images enter viewport (about-2.html) */
function initAboutImageAnimations(): void {
  const images = document.querySelectorAll<HTMLElement>(
    '.about-us-two-section .about-us-image.wow, .home-split-cta .about-image.wow',
  );
  if (images.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        restartCssAnimation(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
  );

  images.forEach((element) => observer.observe(element));
}

function initTpFadeAnim(): void {
  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray<HTMLElement>('.tp_fade_anim').forEach((item) => {
    const tpFadeOffset = Number(item.getAttribute('data-fade-offset') ?? 40);
    const tpDurationValue = Number(item.getAttribute('data-duration') ?? 0.75);
    const tpFadeDirection = item.getAttribute('data-fade-from') ?? 'bottom';
    const tpOnscrollValue = item.getAttribute('data-on-scroll') ?? '1';
    const tpDelayValue = Number(item.getAttribute('data-delay') ?? 0.15);
    const tpEaseValue = item.getAttribute('data-ease') ?? 'power2.out';

    const tpAnimSetting: Record<string, unknown> = {
      opacity: 0,
      ease: tpEaseValue,
      duration: tpDurationValue,
      delay: tpDelayValue,
      x:
        tpFadeDirection === 'left'
          ? -tpFadeOffset
          : tpFadeDirection === 'right'
            ? tpFadeOffset
            : 0,
      y:
        tpFadeDirection === 'top'
          ? -tpFadeOffset
          : tpFadeDirection === 'bottom'
            ? tpFadeOffset
            : 0,
    };

    if (tpOnscrollValue === '1') {
      tpAnimSetting.scrollTrigger = {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none reset',
      };
    }

    gsap.from(item, tpAnimSetting);
  });
}

/** Heading char stagger — GSAP SplitText + ScrollTrigger (about-2.html .text-anim) */
function initTextAnim(): void {
  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll<HTMLElement>('.text-anim').forEach((element) => {
    const animationSplitText = new window.SplitText(element, { type: 'chars, words' });

    gsap.set(animationSplitText.chars, { autoAlpha: 0, x: 20 });

    ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(animationSplitText.chars, {
          duration: 1,
          delay: 0.1,
          x: 0,
          autoAlpha: 1,
          stagger: 0.03,
          ease: 'power2.out',
        });
      },
    });
  });
}

export function initHomeAnimations(): void {
  const isHome = document.body.classList.contains('page-home');
  const isProducts = document.body.classList.contains('page-products');
  if (!isHome && !isProducts) return;
  if (prefersReducedMotion()) return;

  initWow();
  if (isHome) initAboutImageAnimations();

  waitForGlobals(() => {
    initTextAnim();
    initTpFadeAnim();
  });
}

function bootHomeAnimations(): void {
  if (document.readyState === 'complete') {
    initHomeAnimations();
    return;
  }

  window.addEventListener('load', initHomeAnimations, { once: true });
}

bootHomeAnimations();
