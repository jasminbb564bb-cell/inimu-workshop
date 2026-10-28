/* inimu GA4 consent gate. No form values or other PII are sent. */
(() => {
  const measurementId = 'G-59G43SS9G4';
  const consentKey = 'inimuAnalyticsConsent';
  let enabled = false;
  const readConsent = () => { try { return localStorage.getItem(consentKey); } catch (_) { return null; } };
  const saveConsent = (value) => { try { localStorage.setItem(consentKey, value); } catch (_) {} };
  const clearConsent = () => { try { localStorage.removeItem(consentKey); } catch (_) {} };
  const send = (name, parameters = {}) => { if (!enabled || typeof window.gtag !== 'function') return; window.gtag('event', name, { ...parameters, transport_type: 'beacon' }); };
  const loadGoogleTag = () => {
    if (enabled) return;
    enabled = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { allow_google_signals: false, allow_ad_personalization_signals: false });
    if (!document.getElementById('inimu-ga4-script')) {
      const script = document.createElement('script'); script.id = 'inimu-ga4-script'; script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`; document.head.appendChild(script);
    }
    window.inimuAnalytics.enabled = () => enabled;
  };
  const showConsentBanner = () => {
    if (document.querySelector('.analytics-consent')) return;
    const banner = document.createElement('aside');
    banner.className = 'analytics-consent'; banner.setAttribute('aria-label', 'アクセス解析の設定');
    const source = document.querySelector('script[src$="analytics.js"]')?.src;
    const privacyUrl = source ? new URL('../privacy/', source).href : new URL('privacy/', location.href).href;
    banner.innerHTML = `<div class="analytics-consent__copy"><strong>アクセス解析について</strong><p>サイト改善のため、同意した場合に限りGoogle Analytics 4で利用状況を測定します。氏名・メールアドレスなどは送信しません。</p><a href="${privacyUrl}">プライバシーについて</a></div><div class="analytics-consent__actions"><button type="button" data-analytics-consent="deny">拒否</button><button type="button" data-analytics-consent="grant">同意する</button></div>`;
    document.body.appendChild(banner);
    banner.addEventListener('click', (event) => { const button = event.target.closest('[data-analytics-consent]'); if (!button) return; const granted = button.dataset.analyticsConsent === 'grant'; saveConsent(granted ? 'granted' : 'denied'); banner.remove(); if (granted) loadGoogleTag(); });
  };
  window.inimuAnalytics = { send, enabled: () => enabled, resetConsent: () => { enabled = false; clearConsent(); showConsentBanner(); } };
  if (readConsent() === 'granted') loadGoogleTag(); else if (readConsent() !== 'denied') showConsentBanner();
  document.addEventListener('click', (event) => {
    if (event.target.closest?.('[data-analytics-consent="reset"]')) { window.inimuAnalytics.resetConsent(); return; }
    if (event.target.closest?.('.skip-intro')) { send('intro_skip'); return; }
    const link = event.target.closest?.('a'); if (!link) return;
    const href = link.href || ''; const label = link.textContent.trim().toUpperCase();
    if (/jalan\.net/i.test(href)) return send('reservation_click', { destination: 'jalan' });
    let path = ''; try { path = new URL(href, location.href).pathname; } catch (_) {}
    const shop = label.includes('SHOP') || /\/shop\//.test(path); const experience = label.includes('EXPERIENCE') || /\/experience\//.test(path);
    if (shop || experience) send('entrance_click', { destination: shop ? 'shop' : 'experience' });
  }, { capture: true });
})();
