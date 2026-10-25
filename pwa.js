(() => {
  'use strict';
  const el = (cls, html) => {
    const d = document.createElement('div');
    d.className = cls; d.hidden = true; d.innerHTML = html;
    document.body.appendChild(d);
    return d;
  };

  // Offline banner
  const banner = el('pwa-banner', 'Offline — your saved plan still works');
  banner.setAttribute('role', 'status');
  const syncOnline = () => { banner.hidden = navigator.onLine; };
  window.addEventListener('online', syncOnline);
  window.addEventListener('offline', syncOnline);
  syncOnline();

  // Service worker + update toast
  if ('serviceWorker' in navigator) {
    const toast = el('pwa-toast', '<span>Update available</span><button type="button">Reload</button>');
    toast.setAttribute('role', 'status');
    let waiting = null, reloading = false;
    toast.querySelector('button').addEventListener('click', () => {
      if (waiting) waiting.postMessage('SKIP_WAITING'); else location.reload();
    });
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (reloading || !waiting) return;
      reloading = true; location.reload();
    });
    const watch = (reg) => {
      const check = () => {
        if (reg.waiting && navigator.serviceWorker.controller) { waiting = reg.waiting; toast.hidden = false; }
      };
      check();
      reg.addEventListener('updatefound', () => {
        const w = reg.installing;
        if (w) w.addEventListener('statechange', () => { if (w.state === 'installed') check(); });
      });
    };
    window.addEventListener('load', async () => {
      try { watch(await navigator.serviceWorker.register('sw.js')); }
      catch (err) { console.warn('SW registration failed', err); }
    });
  }

  // iOS Add to Home Screen hint
  try {
    const ua = navigator.userAgent;
    const ios = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const safari = /safari/i.test(ua) && !/crios|fxios|edgios/i.test(ua);
    const standalone = window.navigator.standalone === true || matchMedia('(display-mode: standalone)').matches;
    let dismissed = false;
    try { dismissed = localStorage.getItem('pwa-ios-hint') === '1'; } catch (e) {}
    if (ios && safari && !standalone && !dismissed) {
      const hint = el('pwa-ios', '<span>Install: tap Share, then “Add to Home Screen”.</span><button type="button" class="pwa-dismiss" aria-label="Dismiss">✕</button>');
      hint.hidden = false;
      hint.querySelector('button').addEventListener('click', () => {
        hint.hidden = true;
        try { localStorage.setItem('pwa-ios-hint', '1'); } catch (e) {}
      });
    }
  } catch (e) {}
})();
