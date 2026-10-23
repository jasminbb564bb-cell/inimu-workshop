// While the first view fills the screen, the page pager steps back and the language switch loses its frame,
// so the question stands alone. No transition: they are simply absent until the reader moves on.
(() => {
  const first = document.getElementById('first-view');
  if (!first || !('IntersectionObserver' in window)) { document.body.classList.remove('is-first-view'); return; }
  new IntersectionObserver(([entry]) => {
    document.body.classList.toggle('is-first-view', entry.intersectionRatio >= 0.5);
  }, { threshold: [0, 0.5, 1] }).observe(first);
})();
