// Exhibition pages: Japanese / English. Same preference as the rest of the site: ?lang=ja|en, remembered as
// localStorage 'inimuLang' (the key main.js uses). Japanese is the page as written; English swaps in the data-en* texts.
(() => {
  const query = new URLSearchParams(location.search).get('lang');
  let lang = query === 'en' || query === 'ja' ? query : null;
  try {
    if (lang) localStorage.setItem('inimuLang', lang);
    else lang = localStorage.getItem('inimuLang') || 'ja';
  } catch (error) {
    lang = lang || 'ja';
  }
  document.querySelectorAll('.ex-menu__lang a[data-lang]').forEach((link) => {
    link.setAttribute('aria-current', String(link.dataset.lang === lang));
  });
  if (lang !== 'en') return;
  const root = document.documentElement;
  root.lang = 'en';
  if (root.dataset.titleEn) document.title = root.dataset.titleEn;
  document.querySelectorAll('[data-en]').forEach((element) => { element.textContent = element.dataset.en; });
  document.querySelectorAll('.learning-note[data-en]').forEach((note) => { note.lang = 'en'; });
  document.querySelectorAll('[data-en-html]').forEach((element) => { element.innerHTML = element.dataset.enHtml; });
  document.querySelectorAll('[data-en-aria]').forEach((element) => { element.setAttribute('aria-label', element.dataset.enAria); });
  document.querySelectorAll('[data-en-alt]').forEach((element) => { element.setAttribute('alt', element.dataset.enAlt); });
})();
