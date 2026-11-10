// sw.js - Service Worker para funcionamento 100% Offline
const CACHE_NAME = 'xavante-app-cache-v2';

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/icon.jpg',
  '/assets/mascot.jpg',
  '/assets/acostumando/abelha.png',
  '/assets/acostumando/aranha.png',
  '/assets/acostumando/bocaiuva.png',
  '/assets/acostumando/borboleta.png',
  '/assets/acostumando/cachorro.png',
  '/assets/acostumando/ema.png',
  '/assets/acostumando/gato.png',
  '/assets/acostumando/grama.png',
  '/assets/acostumando/jacare.png',
  '/assets/acostumando/lagartixa.png',
  '/assets/acostumando/olho.png',
  '/assets/acostumando/ouvido.png',
  '/assets/acostumando/pato.png',
  '/assets/acostumando/pe.png',
  '/assets/acostumando/ponte.png',
  '/assets/acostumando/porco.png',
  '/assets/acostumando/sol.png',
  '/assets/acostumando/tamandua.png',
  '/assets/acostumando/tatu.png',
  '/assets/acostumando/vaca.png'
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
