// sw.js - Service Worker para funcionamento 100% Offline
const CACHE_NAME = 'xavante-app-cache-v2';

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/icon.jpg',
  '/assets/mascot.jpg',
  '/assets/abelha.png',
  '/assets/aranha.png',
  '/assets/bocaiuva.png',
  '/assets/borboleta.png',
  '/assets/cachorro.png',
  '/assets/ema.png',
  '/assets/gato.png',
  '/assets/grama.png',
  '/assets/jacare.png',
  '/assets/lagartixa.png',
  '/assets/olho.png',
  '/assets/ouvido.png',
  '/assets/pato.png',
  '/assets/pe.png',
  '/assets/ponte.png',
  '/assets/porco.png',
  '/assets/sol.png',
  '/assets/tamandua.png',
  '/assets/tatu.png',
  '/assets/vaca.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        // Cache dynamic assets if valid
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          networkResponse.type === 'basic'
        ) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Fallback for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
