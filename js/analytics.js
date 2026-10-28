/* inimu GA4 instrumentation. No form values or other PII are sent. */
(() => {
  const measurementId = 'G-59G43SS9G4';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  if (!window.__inimuGa4Initialized) {
    window.__inimuGa4Initialized = true;
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    if (!document.getElementById('inimu-ga4-script')) {
      const script = document.createElement('script');
      script.id = 'inimu-ga4-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
    }
  }
  const send = (name, parameters = {}) => {
    // Keep the event in the gtag queue immediately; this is important for
    // clicks that also start a visual transition or navigation.
    window.gtag('event', name, { ...parameters, transport_type: 'beacon' });
  };
  window.inimuAnalytics = { send };
  document.addEventListener('click', (event) => {
    if (event.target.closest?.('.skip-intro')) {
      send('intro_skip');
      return;
    }
    const link = event.target.closest?.('a');
    if (!link) return;
    const href = link.href || '';
    const label = link.textContent.trim().toUpperCase();
    if (/jalan\.net/i.test(href)) return send('reservation_click', { destination: 'jalan' });
    let path = '';
    try { path = new URL(href, location.href).pathname; } catch (_) {}
    const shop = label.includes('SHOP') || /\/shop\//.test(path);
    const experience = label.includes('EXPERIENCE') || /\/experience\//.test(path);
    if (shop || experience) send('entrance_click', { destination: shop ? 'shop' : 'experience' });
  }, { capture: true });
})();
