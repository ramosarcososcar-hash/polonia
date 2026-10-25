// Service worker: guarda la guía para usarla sin conexión.
const CACHE = "polska26-mt02";
const SHELL = ["./","index.html","sync.tngq55.js","weather.wx01.js","diary.dy02.js","suitcase.sc02.js","manifest.webmanifest","manifest-ios.webmanifest","icons/icon-192.png","media/hero-poster.jpg","img/candles.webp","img/candles2.webp","img/krakow.webp","img/obwarzanek.webp","img/pierogi.webp","img/wawel.webp","img/wieliczka.webp","img/zurek.webp"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return; // Firebase y Google Fonts van directos
  if (u.pathname.endsWith(".mp4")) return; // los vídeos se piden por rangos: sin caché
  if (u.pathname.endsWith("config.js") || e.request.mode === "navigate") {
    // Red primero: así los cambios de configuración y las versiones nuevas llegan enseguida
    e.respondWith(fetch(e.request).then((r) => { const cp = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, cp)); return r; }).catch(() => caches.match(e.request).then((r) => r || caches.match("index.html"))));
    return;
  }
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request).then((res) => { if (res.ok) { const cp = res.clone(); caches.open(CACHE).then((c) => c.put(e.request, cp)); } return res; })));
});
