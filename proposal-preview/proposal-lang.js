// Proposal preview: Japanese / English. Same preference as the rest of the site: ?lang=ja|en, remembered as
// localStorage 'inimuLang'. Japanese is the page as written; English swaps in the <template data-lang="en"> blocks.
(() => {
  const root = document.documentElement;
  const swaps = [...document.querySelectorAll('template[data-lang="en"]')].map((template) => {
    const target = document.querySelector(template.dataset.for);
    return target && { target, ja: target.innerHTML, en: template.innerHTML };
  }).filter(Boolean);
  const labels = [...document.querySelectorAll('[data-en-aria]')].map((el) => ({ el, ja: el.getAttribute('aria-label'), en: el.dataset.enAria }));
  const links = document.querySelectorAll('.proposal-lang a[data-lang]');

  const readLanguage = () => {
    const query = new URLSearchParams(location.search).get('lang');
    if (query === 'en' || query === 'ja') return query;
    try { return localStorage.getItem('inimuLang') === 'en' ? 'en' : 'ja'; } catch (error) { return 'ja'; }
  };

  const apply = (lang) => {
    if (root.lang !== lang) {
      swaps.forEach((swap) => { swap.target.innerHTML = swap[lang]; });
      labels.forEach((label) => label.el.setAttribute('aria-label', label[lang]));
      root.lang = lang;
    }
    links.forEach((link) => link.setAttribute('aria-current', String(link.dataset.lang === lang)));
  };

  const initial = readLanguage();
  apply(initial);
  try { localStorage.setItem('inimuLang', initial); } catch (error) { /* storage unavailable */ }

  links.forEach((link) => link.addEventListener('click', (event) => {
    event.preventDefault();
    const lang = link.dataset.lang;
    // Keep the page being read in place: the two languages have different text lengths.
    const frame = [...document.querySelectorAll('main > .frame')].find((el) => el.getBoundingClientRect().bottom > 1) || null;
    const before = frame && frame.getBoundingClientRect().top;
    apply(lang);
    if (frame) window.scrollBy({ top: frame.getBoundingClientRect().top - before, behavior: 'instant' });
    try { localStorage.setItem('inimuLang', lang); } catch (error) { /* storage unavailable */ }
    const url = new URL(location.href);
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
  }));
})();
