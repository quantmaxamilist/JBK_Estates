const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initMotion(): void {
  document.documentElement.classList.add('js-ready');
  const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    nodes.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );

  nodes.forEach((el) => observer.observe(el));
}

initMotion();

export {};
