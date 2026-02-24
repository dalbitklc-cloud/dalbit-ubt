const CACHE_NAME = 'dalbit-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  // Idagdag dito ang lahat ng audio files mo
  './audio/q21.mp3',
  './audio/q22.mp3',
  './audio/q23.mp3' 
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
