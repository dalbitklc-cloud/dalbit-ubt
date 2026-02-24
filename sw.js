const CACHE_NAME = 'dalbit-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  // Idagdag dito ang lahat ng audio files mo
  './audio/q21.mp3',
  './audio/q22.mp3',
  './audio/q23.mp3',
  './audio/q24.mp3',
  './audio/q25.mp3',
  './audio/q26.mp3',
  './audio/q27.mp3',
  './audio/q28.mp3',
  './audio/q29.mp3',
  './audio/q30.mp3',
  './audio/q31.mp3',
  './audio/q32.mp3',
  './audio/q33.mp3',
  './audio/q34.mp3',
  './audio/q35.mp3',
  './audio/q36.mp3',
  './audio/q37.mp3',
  './audio/q38.mp3',
  './audio/q39.mp3',
  './audio/q40.mp3',
  'https://cdn-icons-png.flaticon.com/512/3062/3062634.png' 
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
