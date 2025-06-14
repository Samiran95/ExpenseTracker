const CACHE_NAME = 'pwa-demo-cache-v1';
const OFFLINE_URL = 'offline.html';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/Dashboard/css/style.css',
  '/JS/app.js',
  '/manifest.json',
  '/offline.html'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
  self.clients.claim();
});

// Fetch
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch(() => {
        return caches.match(event.request).then(cached => {
          return cached || caches.match(OFFLINE_URL);
        });
      })
  );
});
