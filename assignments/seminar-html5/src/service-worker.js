'use strict';

/* eslint-env browser, serviceworker */

importScripts('./scripts/libs/idb-keyval.js');
importScripts('./scripts/analytics-sw.js');


const version = "1.0.0";
const cacheName = `pushExample-${version}`;

const check = () => {
  if (!('serviceWorker' in navigator)) {
    throw new Error('No Service Worker support!')
  }
  if (!('PushManager' in window)) {
    throw new Error('No Push API Support!')
  }
}

const registerServiceWorker = async () => {
  const swRegistration = await navigator.serviceWorker.register('service-worker.js')
  return swRegistration
}

const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission()
  // value of permission can be 'granted', 'default', 'denied'
  // granted: user has accepted the request
  // default: user has dismissed the notification permission popup by clicking on x
  // denied: user has denied the request.
  if (permission !== 'granted') {
    throw new Error('Permission not granted for Notification')
  } else {
    console.log('Permission granted')
  }
}

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/index.html`,
        `/push.html`,
        `/api1.html`,
        `/api2.html`,
        `/referencias.html`,
        `/css/style_api.css`,
        `/css/main.css`,
        `/css/index.css`,
        `/images/agateemieliD.gif`,
        `/images/agateemieliE.gif`,
        `/images/badge-72x72.png`,
        `/images/criatividade-off.png`,
        `/images/icon-css3.png`,
        `/images/icon-html5.png`,
        `/images/king.gif`,
        `/images/logo-192x192.png`,
        `/images/logo-32x32.png`,
        `/images/logo-512x512.png`,
        `/images/logo-72x72.png`,
        `/images/logo.svg`,
        `/images/placanomes.png`
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});

const main = async () => {
  check()
  const swRegistration = await registerServiceWorker()
  const permission = await requestNotificationPermission()
}

self.analytics.trackingId = 'UA-77119321-2';

self.addEventListener('push', function(event) {
  console.log('Received push');
  let notificationTitle = 'Mensagem do Rei William Wonka Wilkinson!';
  const notificationOptions = {
    body: 'Vamos atacar o Príncipe Heitor Pascoal, aquele calhorda!',
    icon: './images/king.gif',
    badge: './images/badge-72x72.png',
    tag: 'simple-push-demo-notification',
    data: {
      url: 'index.html',
    },
  };

  if (event.data) {
    const dataText = event.data.text();
    notificationTitle = 'Mensagem do Rei William Wonka Wilkinson!';
    notificationOptions.body = `'${dataText}'`;
  }

  event.waitUntil(
    Promise.all([
      self.registration.showNotification(
        notificationTitle, notificationOptions),
      self.analytics.trackEvent('push-received'),
    ])
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  let clickResponsePromise = Promise.resolve();
  if (event.notification.data && event.notification.data.url) {
    clickResponsePromise = clients.openWindow(event.notification.data.url);
  }

  event.waitUntil(
    Promise.all([
      clickResponsePromise,
      self.analytics.trackEvent('notification-click'),
    ])
  );
});

self.addEventListener('notificationclose', function(event) {
  event.waitUntil(
    Promise.all([
      self.analytics.trackEvent('notification-close'),
    ])
  );
});
