// ไม่เก็บแคชอะไร มีไว้ให้ Chrome ติดตั้งเป็นแอปได้เท่านั้น
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
