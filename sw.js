const VERSION = 'v2';
const SHELL_CACHE = `japan-shell-${VERSION}`;
const RUNTIME_CACHE = `japan-runtime-${VERSION}`;
const MAX_RUNTIME = 80;
const SHELL = [
  './', 'index.html', 'script.js', 'styles.css', 'today.js', 'today.css',
  'cards.js', 'cards.css', 'expenses.js', 'expenses.css', 'pwa.js', 'pwa.css', 'router.js', 'nav.css',
  'manifest.webmanifest', 'icons/icon-180.png', 'icons/icon-192.png',
  'icons/icon-512.png', 'icons/icon-maskable-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) =>
      // Tolerate a missing file so one 404 doesn't abort the whole install.
      Promise.all(SHELL.map((u) => cache.add(u).catch(() => {})))
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => ![SHELL_CACHE, RUNTIME_CACHE].includes(k)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

async function trim(cache) {
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - MAX_RUNTIME; i++) await cache.delete(keys[i]);
}

async function staleWhileRevalidate(request, cacheName, opts) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request, opts);
  const network = fetch(request).then((res) => {
    if (res && (res.ok || res.type === 'opaque')) {
      cache.put(request, res.clone()).then(() => cacheName === RUNTIME_CACHE && trim(cache)).catch(() => {});
    }
    return res;
  }).catch(() => null);
  return cached || (await network) || Response.error();
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        if (res.ok) caches.open(SHELL_CACHE).then((c) => c.put(req, copy)).catch(() => {});
        return res;
      }).catch(async () =>
        (await caches.match(req, { ignoreSearch: true })) ||
        (await caches.match('index.html')) ||
        (await caches.match('./')) ||
        Response.error())
    );
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(req, SHELL_CACHE));
    return;
  }

  const runtimeHost = ['fonts.googleapis.com', 'fonts.gstatic.com', 'images.unsplash.com'].includes(url.hostname)
    || req.destination === 'image';
  if (runtimeHost) event.respondWith(staleWhileRevalidate(req, RUNTIME_CACHE));
});
