/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-f411997d82891471a13d.js"
  },
  {
    "url": "app.af16afd375c8097504d1.css"
  },
  {
    "url": "app-13a66c0ecf4e4fe492f8.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-416e3433c94a981b3e42.js"
  },
  {
    "url": "index.html",
    "revision": "d52b23f5b0cbe9b56de43502e43db884"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9ad7ebe965b45c8eed0095d405ba0366"
  },
  {
    "url": "1.b89ea2f94670ddf3deeb.css"
  },
  {
    "url": "component---src-pages-index-js-ba77c9189c87fcfb7696.js"
  },
  {
    "url": "1-164560773c1aff7c1a55.js"
  },
  {
    "url": "0-d0814208ec84ef8bd057.js"
  },
  {
    "url": "static/d/691/path---index-6a9-q8t317rlCVVQS7jPFTv9rdHxy6U.json",
    "revision": "f49c6acbe356067e07b71fff2cc3937c"
  },
  {
    "url": "component---src-pages-404-js-e3dcb355de03477abae6.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "bca3b18fe2d9161f96bb1bd25c11b9e3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});