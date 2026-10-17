// Exhibition pages (shop/exhibition/*): open/close the plaster header menu.
// These pages do not load main.js, which rewrites headers and footers; the PC and phone views each have their own button.
// While a menu is open, everything outside its header is inert: background links cannot be tapped/clicked by mistake
// (a tap there only closes the menu) and Tab stays in the header and menu. Focus goes to the first item on open and back to
// the button when closed with Escape or an outside tap. The phone menu also dims the room (.ex-scrim) and holds the page scroll.
(() => {
  const scrim = document.querySelector('.ex-scrim');
  const pcView = window.matchMedia('(min-width: 768px) and (min-height: 600px) and (min-aspect-ratio: 8/5)');
  const inerted = [];
  const isolate = (keep) => {          // make every sibling along the path from `keep` up to <body> inert
    for (let node = keep; node && node !== document.body; node = node.parentElement) {
      [...node.parentElement.children].forEach((sibling) => {
        if (sibling !== node && sibling !== scrim && sibling.tagName !== 'SCRIPT' && !sibling.inert) {
          sibling.inert = true;
          inerted.push(sibling);
        }
      });
    }
  };
  const release = () => { inerted.splice(0).forEach((element) => { element.inert = false; }); };

  if (document.documentElement.lang === 'en') {
    document.querySelectorAll('[data-menu-toggle]').forEach((button) => button.setAttribute('aria-label', 'Open menu'));
  }
  document.querySelectorAll('[data-menu-toggle]').forEach((button) => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    if (!panel) return;
    const phone = Boolean(button.closest('.ex-sp'));
    const header = button.closest('header') || button.parentElement;
    const setOpen = (open, { restoreFocus = false } = {}) => {
      if (open === !panel.hidden) return;
      panel.hidden = !open;
      button.setAttribute('aria-expanded', String(open));
      const en = document.documentElement.lang === 'en';
      button.setAttribute('aria-label', open ? (en ? 'Close menu' : 'メニューを閉じる') : (en ? 'Open menu' : 'メニューを開く'));
      if (phone) {
        document.documentElement.classList.toggle('ex-menu-open', open);
        if (scrim) scrim.hidden = !open;
      }
      if (open) {
        isolate(header);
        panel.querySelector('a')?.focus({ preventScroll: true });
      } else {
        release();
        if (restoreFocus) button.focus({ preventScroll: true });
      }
    };
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      setOpen(panel.hidden);
    });
    panel.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });
    document.addEventListener('click', (event) => {
      if (!panel.hidden && !panel.contains(event.target)) setOpen(false, { restoreFocus: true });
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !panel.hidden) setOpen(false, { restoreFocus: true });
    });
    pcView.addEventListener('change', () => setOpen(false));
  });
  document.addEventListener('touchstart', () => {}, { passive: true });   // lets iOS Safari show :active feedback
})();
