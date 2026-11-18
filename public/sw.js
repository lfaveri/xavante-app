// sw.js - Service Worker para funcionamento 100% Offline
const CACHE_NAME = 'xavante-app-cache-v5';

const ASSETS_TO_CACHE = [
  './',
  'index.html',
  'manifest.json',
  'assets/app.js',
  'assets/index.css',
  'assets/web.js',
  'assets/apple-touch-icon.png',
  'assets/abelha.png',
  'assets/aranha.png',
  'assets/bocaiuva.png',
  'assets/borboleta.png',
  'assets/cachorro.png',
  'assets/ema.png',
  'assets/gato.png',
  'assets/grama.png',
  'assets/icon.jpg',
  'assets/jacare.png',
  'assets/lagartixa.png',
  'assets/mascot.jpg',
  'assets/olho.png',
  'assets/ouvido.png',
  'assets/pato.png',
  'assets/pe.png',
  'assets/ponte.png',
  'assets/porco.png',
  'assets/sol.png',
  'assets/tamandua.png',
  'assets/tatu.png',
  'assets/vaca.png'
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

// Rede primeiro (pega sempre a versão nova quando há internet);
// sem internet, usa a cópia guardada.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request).then((networkResponse) => {
      if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
        const copy = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      }
      return networkResponse;
    }).catch(() =>
      caches.match(event.request, { ignoreVary: true, ignoreSearch: true })
        .then((r) => r || caches.match('index.html'))
    )
  );
});
