/* 離線快取：第一次開啟時把整個網站存到手機，之後沒有網路也能看。
   更新網站內容後，把 VERSION 改一個數字，手機下次連網時就會換成新版。 */
var VERSION = "kyushu-2026-v5";
var ASSETS = [
  "./", "index.html", "css/style.css", "js/data.js", "js/app.js",
  "fonts/zenmaru-900.woff", "fonts/zenmaru-700.woff", "fonts/fill-900.woff2", "fonts/fill-700.woff2", "manifest.webmanifest", "icon.svg", "icon-180.png", "icon-512.png",
  "images/amanoiwato.jpg", "images/amanoyasukawara.jpg", "images/aso-jinja.jpg", "images/beppu-tower.jpg",
  "images/chinoike-jigoku.jpg", "images/kamado-jigoku.jpg", "images/kinrinko.jpg", "images/kokonoe.jpg",
  "images/kumamoto-castle.jpg", "images/kusasenri.jpg", "images/manai.jpg", "images/nakadake.jpg",
  "images/oniishi-bozu.jpg", "images/oniyama-jigoku.jpg", "images/ropeway.jpg", "images/sagiridai.jpg",
  "images/saiganden.jpg", "images/shiraike-jigoku.jpg", "images/shirakawa.jpg", "images/showakan.jpg",
  "images/suizenji.jpg", "images/takachiho-jinja.jpg", "images/takachiho-kyo.jpg", "images/tatsumaki-jigoku.jpg",
  "images/tsurumidake.jpg", "images/umi-jigoku.jpg", "images/unagihime.jpg", "images/yunotsubo.jpg"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

/* 先用快取立即顯示，同時在背景向網路取新版更新快取 */
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(VERSION).then(function (cache) {
    return cache.match(req, { ignoreSearch: true }).then(function (hit) {
      var fresh = fetch(req).then(function (res) {
        if (res && res.ok) cache.put(req, res.clone());
        return res;
      }).catch(function () { return hit || (req.mode === "navigate" ? cache.match("index.html") : undefined); });
      return hit || fresh;
    });
  }));
});
