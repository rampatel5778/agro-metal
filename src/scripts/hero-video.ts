/** Build YouTube background embed URL (matches existing Agrometal site params) */
export function buildYouTubeHeroEmbedUrl(
  videoId: string,
  options: { autoplay?: boolean; origin?: string } = {},
): string {
  const { autoplay = true, origin } = options;
  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    mute: '1',
    loop: '1',
    playlist: videoId,
    controls: '0',
    modestbranding: '1',
    playsinline: '1',
    rel: '0',
    enablejsapi: '1',
    showinfo: '0',
    iv_load_policy: '3',
    fs: '0',
    disablekb: '1',
    start: '0',
  });
  if (origin) params.set('origin', origin);
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

export function initHeroVideos(): void {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll<HTMLElement>('[data-hero-video]').forEach((section) => {
    const iframe = section.querySelector<HTMLIFrameElement>('[data-hero-iframe]');
    const videoId = iframe?.dataset.youtubeId;
    if (!iframe || !videoId) return;

    iframe.src = buildYouTubeHeroEmbedUrl(videoId, {
      autoplay: !reducedMotion,
      origin: window.location.origin,
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroVideos);
  } else {
    initHeroVideos();
  }
}
