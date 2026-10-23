// Mobile header menu open/close only — the same logic as the menu block in main.js,
// for pages that do not load main.js (main.js also rewrites footers and nav items).
(() => {
const navigation = document.querySelector('.site-nav');
const menuToggle = document.querySelector('.site-nav__toggle');
const navigationLinks = document.querySelectorAll('.site-nav__list a');

if (navigation && menuToggle) {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  });
  navigationLinks.forEach((link) => link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'メニューを開く');
  }));
}
})();

/* Secondary pages share the same language layer as primary pages. */
if (!document.querySelector('script[src$="js/main.js"],script[src$="/main.js"]')) {
  const source = document.currentScript;
  if (source) {
    const script = document.createElement('script');
    script.src = new URL('main.js', source.src).href;
    document.head.appendChild(script);
  }
}
