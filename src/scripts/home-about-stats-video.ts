/**
 * Home about stats — YouTube lightbox on play button (Agriva video-popup behaviour, no jQuery)
 */
import { getYouTubeEmbedUrl } from '@lib/assets.js';

function closeModal(modal: HTMLElement, iframe: HTMLIFrameElement): void {
  modal.hidden = true;
  document.body.classList.remove('home-video-modal-open');
  iframe.src = '';
}

function openModal(modal: HTMLElement, iframe: HTMLIFrameElement, youtubeId: string, title: string): void {
  iframe.title = title;
  iframe.src = `${getYouTubeEmbedUrl(youtubeId, { autoplay: true, mute: false })}&rel=0`;
  modal.hidden = false;
  document.body.classList.add('home-video-modal-open');
  modal.querySelector<HTMLButtonElement>('[data-home-video-close]')?.focus();
}

export function initHomeAboutStatsVideo(): void {
  const trigger = document.querySelector<HTMLAnchorElement>('[data-home-about-video]');
  const modal = document.getElementById('home-about-stats-video-modal');
  const iframe = modal?.querySelector<HTMLIFrameElement>('iframe');

  if (!trigger || !modal || !iframe) return;

  const youtubeId = trigger.dataset.youtubeId;
  if (!youtubeId) return;

  const title = trigger.getAttribute('aria-label') ?? 'Video';

  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    openModal(modal, iframe, youtubeId, title);
  });

  modal.querySelectorAll<HTMLElement>('[data-home-video-close]').forEach((control) => {
    control.addEventListener('click', () => closeModal(modal, iframe));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) {
      closeModal(modal, iframe);
    }
  });
}

initHomeAboutStatsVideo();
