// Service Worker for Liberty Ridge Training Grounds
// Implements caching strategies for improved performance

// const CACHE_NAME = 'liberty-ridge-v1.0.0'; // Unused variable - keeping for future use
const STATIC_CACHE = 'static-assets-v1';
const DYNAMIC_CACHE = 'dynamic-content-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/src/index.html',
  '/src/css/main.min.css',
  '/src/css/lazy-images.min.css',
  '/src/js/dist/app-bundle.js',
  '/src/js/dist/lazy-images.js',
  // Critical images (preload these)
  '/src/assets/images/training-1.avif',
  '/src/assets/images/training-1.webp',
  '/src/assets/images/training-1.jpg'
];

// Dynamic content patterns
const DYNAMIC_PATTERNS = [
  /\/src\/assets\/images\/.+\.(webp|avif|jpg|png)$/,
  /\/api\/.*/,
  /\/src\/js\/.*/,
  /\/src\/css\/.*/
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        // eslint-disable-next-line no-console
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('Service Worker: Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Failed to cache static assets', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              // eslint-disable-next-line no-console
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
            return Promise.resolve(); // Fix: Return a resolved promise for non-deleted caches
          })
        );
      })
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('Service Worker: Activation complete');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests (except for allowed CDNs)
  if (url.origin !== location.origin && !isAllowedExternalRequest(url)) {
    return;
  }

  // Handle different types of requests
  if (isStaticAsset(request.url)) {
    event.respondWith(handleStaticAsset(request));
  } else if (isImageRequest(request.url)) {
    event.respondWith(handleImageRequest(request));
  } else if (isDynamicContent(request.url)) {
    event.respondWith(handleDynamicContent(request));
  } else {
    event.respondWith(handleDefaultRequest(request));
  }
});

// Strategy: Cache First (for static assets)
async function handleStaticAsset(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Service Worker: Static asset fetch failed', error);
    return new Response('Asset not available', { status: 404 });
  }
}

// Strategy: Cache First with fallback (for images)
async function handleImageRequest(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      // Only cache successful responses
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Service Worker: Image fetch failed', error);
    // Return placeholder image or cached fallback
    return (
      caches.match('/src/assets/images/placeholder-photo.jpg') ||
      new Response('Image not available', { status: 404 })
    );
  }
}

// Strategy: Network First with cache fallback (for dynamic content)
async function handleDynamicContent(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Service Worker: Network failed, trying cache', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Content not available offline', { status: 404 });
  }
}

// Strategy: Network First (for HTML pages)
async function handleDefaultRequest(request) {
  try {
    const networkResponse = await fetch(request);
    return networkResponse;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Service Worker: Network failed for default request', error);
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    // Fallback to index page for navigation requests
    if (request.mode === 'navigate') {
      return caches.match('/src/index.html');
    }
    return new Response('Content not available', { status: 404 });
  }
}

// Helper functions
function isStaticAsset(url) {
  return /\.(css|js|woff2?|ttf|eot)(\?.*)?$/.test(url);
}

function isImageRequest(url) {
  return /\.(jpg|jpeg|png|gif|webp|avif|svg)(\?.*)?$/.test(url);
}

function isDynamicContent(url) {
  return DYNAMIC_PATTERNS.some((pattern) => pattern.test(url));
}

function isAllowedExternalRequest(url) {
  const allowedDomains = ['fonts.googleapis.com', 'fonts.gstatic.com', 'www.gstatic.com'];
  return allowedDomains.some((domain) => url.hostname.includes(domain));
}

// Background sync for failed requests (if supported)
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle any queued requests when connection is restored
  // eslint-disable-next-line no-console
  console.log('Service Worker: Background sync triggered');
}

// Push notifications (if supported)
self.addEventListener('push', (event) => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/src/assets/images/icon-192.png',
      badge: '/src/assets/images/badge-72.png'
    };
    event.waitUntil(self.registration.showNotification('Liberty Ridge Training', options));
  }
});

// Cleanup old caches periodically
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
