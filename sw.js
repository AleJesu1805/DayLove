const CACHE_NAME = 'day-cache-v2';

const urlsToCache = [
  './',
  './index.html',
  './main.css',
  './manifest.json',
  './dayIcon.png',
  './daySentada.png',
  './imgNombre.png',
  './gsap.min.js',
  './ScrollTrigger.min.js',
  './script.js',
  './DayFto/day01.jpg',
  './DayFto/day02.jpg',
  './DayFto/day03.jpg',
  './DayFto/day04.jpg',
  './DayFto/day05.jpg',
  './DayFto/day06.jpg',
  './DayFto/day07.jpg',
  './DayFto/day08.jpg',
  './DayFto/day09.jpg',
  './DayFto/day10.jpg',
  './DayFto/day11.jpg',
  './DayFto/day12.jpg',
  './DayFto/day13.jpg',
  './DayFto/day14.jpg',
  './DayFto/day15.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});