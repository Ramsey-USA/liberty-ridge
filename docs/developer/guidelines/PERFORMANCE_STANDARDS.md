# ⚡ Performance Standards & Guidelines

> **Navigation**: [📋 Main README](../../../README.md) → [📚 Documentation Index](../../DOCUMENTATION_INDEX.md) → [🎯 Developer Guide](../DEVELOPER_GUIDE.md) → **Performance Standards**

## 🎯 Performance Targets

Liberty Ridge maintains **military-grade performance standards** to ensure optimal user experience and professional credibility.

### Lighthouse Score Requirements

```

🏆 MINIMUM REQUIREMENTS
├── Performance: 95+/100
├── Accessibility: 100/100
├── Best Practices: 100/100
└── SEO: 95+/100

```

### Core Web Vitals Targets

```

🚀 CORE WEB VITALS
├── LCP (Largest Contentful Paint): < 2.5s
├── FID (First Input Delay): < 100ms
├── CLS (Cumulative Layout Shift): < 0.1
└── TTFB (Time to First Byte): < 800ms

```

### Bundle Size Limits

```

📦 BUNDLE SIZE TARGETS
├── JavaScript Total: < 20KB compressed
├── CSS Total: < 10KB compressed
├── Images: WebP/AVIF optimized
├── Fonts: Subset and preloaded
└── Total Page Weight: < 500KB

```

## 🔧 Optimization Strategies

### JavaScript Optimization

#### ESBuild Configuration

```javascript

// build-optimized.js
const esbuild = require('esbuild');

const config = {
    entryPoints: ['src/js/main.js'],
    bundle: true,
    minify: true,
    target: 'es2020',
    format: 'esm',
    outdir: 'src/js/dist',

    // Advanced optimizations
    treeShaking: true,
    mangleProps: /^_/,
    drop: ['console', 'debugger'],
    define: {
        'process.env.NODE_ENV': '"production"'
    },

    // Splitting for better caching
    splitting: true,
    chunkNames: '[name]-[hash]',

    // Compression
    charset: 'utf8',
    legalComments: 'none'
};

esbuild.build(config);

```

#### Code Splitting Example

```javascript

// main.js - Load only critical code initially
import { initializeApp } from './core/app.js';
import { setupEventListeners } from './core/events.js';

// Initialize core functionality
initializeApp();
setupEventListeners();

// Lazy load non-critical features
const loadAdminPanel = () => import('./admin/admin-panel.js');
const loadImageGallery = () => import('./components/image-gallery.js');
const loadChatbot = () => import('./components/chatbot.js');

// Load admin panel only when needed
document.querySelector('#admin-login')?.addEventListener('click', async () => {
    const { AdminPanel } = await loadAdminPanel();
    new AdminPanel().initialize();
});

// Load image gallery when scrolled to gallery section
const galleryObserver = new IntersectionObserver(async (entries) => {
    if (entries[0].isIntersecting) {
        const { ImageGallery } = await loadImageGallery();
        new ImageGallery().initialize();
        galleryObserver.disconnect();
    }
});

const gallerySection = document.querySelector('#gallery');
if (gallerySection) {
    galleryObserver.observe(gallerySection);
}

```

#### Dead Code Elimination

```javascript

// ✅ CORRECT - Tree-shakeable exports
// utils/helpers.js
export const formatDate = (date) => { /* ... */ };
export const validateEmail = (email) => { /* ... */ };
export const debounce = (func, wait) => { /* ... */ };

// main.js - Import only what you need
import { formatDate, debounce } from './utils/helpers.js';

// ❌ INCORRECT - Imports entire library
import * as helpers from './utils/helpers.js';

```

### CSS Optimization

#### Critical CSS Inlining

```html

<!-- Inline critical CSS in <head> -->
<style>
    /* Critical path CSS - above-the-fold content */
    :root { /* CSS variables */ }
    .lr-header { /* Header styles */ }
    .lr-hero { /* Hero section styles */ }
    .lr-button--primary { /* CTA button styles */ }
</style>

<!-- Load non-critical CSS asynchronously -->
<link rel="preload" href="/css/main.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/css/main.min.css"></noscript>

```

#### CSS Optimization Techniques

```css

/* ✅ CORRECT - Efficient selectors */
.lr-button {}
.lr-card__header {}

/* ✅ CORRECT - Use CSS custom properties for maintainability */
:root {
    --color-primary: #1a1a1a;
    --button-padding: 0.5rem 1rem;
}

.lr-button {
    background-color: var(--color-primary);
    padding: var(--button-padding);
}

/* ✅ CORRECT - Optimize animations for 60fps */
.lr-modal {
    transform: translateZ(0); /* Hardware acceleration */
    will-change: transform; /* Hint to browser */
}

.lr-fade-in {
    animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ❌ INCORRECT - Expensive selectors */
div.container > ul li:nth-child(odd) a:hover {}

* + * {}

[class*="button"] {}

```

### Image Optimization

#### Responsive Images with Modern Formats

```html

<!-- ✅ CORRECT - Modern image optimization -->
<picture class="lr-image-container">
    <!-- Modern formats for supporting browsers -->
    <source
        srcset="/assets/images/hero-400.avif 400w,
                /assets/images/hero-800.avif 800w,
                /assets/images/hero-1200.avif 1200w"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        type="image/avif"
    >
    <source
        srcset="/assets/images/hero-400.webp 400w,
                /assets/images/hero-800.webp 800w,
                /assets/images/hero-1200.webp 1200w"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        type="image/webp"
    >
    <!-- Fallback for older browsers -->
    <img
        src="/assets/images/hero-800.jpg"
        srcset="/assets/images/hero-400.jpg 400w,
                /assets/images/hero-800.jpg 800w,
                /assets/images/hero-1200.jpg 1200w"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt="Zach providing expert firearms training at Liberty Ridge"
        class="lr-image"
        loading="lazy"
        decoding="async"
    >
</picture>

```

#### Lazy Loading Implementation

```javascript

// lazy-images.js - Optimized lazy loading
class LazyImageLoader {
    constructor() {
        this.imageObserver = new IntersectionObserver(
            this.handleImageIntersection.bind(this),
            {
                rootMargin: '50px 0px', // Start loading 50px before visible
                threshold: 0.1
            }
        );

        this.init();
    }

    init() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                this.imageObserver.observe(img);
            }
        });
    }

    handleImageIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                this.loadImage(img);
                this.imageObserver.unobserve(img);
            }
        });
    }

    loadImage(img) {
        const src = img.dataset.src;
        if (src) {
            img.src = src;
            img.classList.add('lr-image--loading');

            img.onload = () => {
                img.classList.remove('lr-image--loading');
                img.classList.add('lr-image--loaded');
            };

            img.onerror = () => {
                img.classList.add('lr-image--error');
                console.error('Failed to load image:', src);
            };
        }
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new LazyImageLoader());
} else {
    new LazyImageLoader();
}

```

### Font Optimization

#### Font Loading Strategy

```html

<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/roboto-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/roboto-500.woff2" as="font" type="font/woff2" crossorigin>

<!-- Google Fonts with display=swap -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">

```

```css

/* Font display optimization */
@font-face {
    font-family: 'Roboto';
    src: url('/fonts/roboto-400.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap; /* Prevents invisible text during font swap */
}

/* Fallback fonts with similar metrics */
body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
                 'Helvetica Neue', Arial, sans-serif;
}

```

## 🗄️ Caching Strategy

### Service Worker Implementation

```javascript

// service-worker.js - Comprehensive caching strategy
const CACHE_NAME = 'lr-v1.2.0';
const STATIC_CACHE = 'lr-static-v1.2.0';
const DYNAMIC_CACHE = 'lr-dynamic-v1.2.0';

// Cache static assets
const STATIC_ASSETS = [
    '/',
    '/css/critical.min.css',
    '/css/main.min.css',
    '/js/dist/app-bundle.js',
    '/js/dist/lazy-images.js',
    '/fonts/roboto-400.woff2',
    '/fonts/roboto-500.woff2'
];

// Install event - cache static assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => cache.addAll(STATIC_ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => cacheName.startsWith('lr-') &&
                            cacheName !== STATIC_CACHE &&
                            cacheName !== DYNAMIC_CACHE)
                    .map(cacheName => caches.delete(cacheName))
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - cache strategy
self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) return response;

            return fetch(event.request).then(response => {
                if (!response || response.status !== 200) return response;

                // Cache dynamic content
                if (shouldCache(event.request)) {
                    const responseClone = response.clone();
                    caches.open(DYNAMIC_CACHE)
                        .then(cache => cache.put(event.request, responseClone));
                }

                return response;
            });
        })
    );
});

function shouldCache(request) {
    const url = new URL(request.url);
    return url.origin === location.origin &&
           !url.pathname.includes('/api/') &&
           !url.pathname.includes('/admin/');
}

```

### HTTP Caching Headers

```javascript

// dev-server.py - Cache headers for development
import gzip
from http.server import HTTPServer, SimpleHTTPRequestHandler

class OptimizedHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_cache_headers()
        super().end_headers()

    def send_cache_headers(self):
        path = self.path

        # Static assets - long cache
        if any(path.endswith(ext) for ext in ['.js', '.css', '.woff2', '.webp', '.avif']):
            self.send_header('Cache-Control', 'public, max-age=31536000')  # 1 year
            self.send_header('ETag', f'"{hash(path)}"')

        # HTML - short cache with validation
        elif path.endswith('.html') or path == '/':
            self.send_header('Cache-Control', 'public, max-age=3600, must-revalidate')  # 1 hour

        # Images - medium cache
        elif any(path.endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.svg']):
            self.send_header('Cache-Control', 'public, max-age=86400')  # 1 day

        # Security headers
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'DENY')
        self.send_header('X-XSS-Protection', '1; mode=block')

```

## 📊 Performance Monitoring

### Real-time Performance Tracking

```javascript

// performance-monitor.js - Core Web Vitals tracking
class PerformanceMonitor {
    constructor() {
        this.metrics = {};
        this.init();
    }

    init() {
        this.observeLCP();
        this.observeFID();
        this.observeCLS();
        this.observeTTFB();
        this.setupPerformanceObserver();
    }

    observeLCP() {
        new PerformanceObserver(entryList => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            this.metrics.lcp = lastEntry.startTime;
            this.reportMetric('LCP', lastEntry.startTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });
    }

    observeFID() {
        new PerformanceObserver(entryList => {
            const firstInput = entryList.getEntries()[0];
            this.metrics.fid = firstInput.processingStart - firstInput.startTime;
            this.reportMetric('FID', this.metrics.fid);
        }).observe({ entryTypes: ['first-input'] });
    }

    observeCLS() {
        let clsValue = 0;
        new PerformanceObserver(entryList => {
            for (const entry of entryList.getEntries()) {
                if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                }
            }
            this.metrics.cls = clsValue;
            this.reportMetric('CLS', clsValue);
        }).observe({ entryTypes: ['layout-shift'] });
    }

    observeTTFB() {
        new PerformanceObserver(entryList => {
            const navigationEntry = entryList.getEntries()[0];
            this.metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
            this.reportMetric('TTFB', this.metrics.ttfb);
        }).observe({ entryTypes: ['navigation'] });
    }

    reportMetric(name, value) {
        // Log to console in development
        if (process.env.NODE_ENV === 'development') {
            console.log(`${name}: ${value.toFixed(2)}ms`);
        }

        // Send to analytics in production
        if (typeof gtag !== 'undefined') {
            gtag('event', 'core_web_vital', {
                name: name,
                value: Math.round(value),
                metric_delta: value,
                metric_id: this.generateMetricId()
            });
        }
    }

    getSummary() {
        return {
            lcp: this.metrics.lcp?.toFixed(2) + 'ms',
            fid: this.metrics.fid?.toFixed(2) + 'ms',
            cls: this.metrics.cls?.toFixed(3),
            ttfb: this.metrics.ttfb?.toFixed(2) + 'ms',
            score: this.calculateScore()
        };
    }

    calculateScore() {
        const scores = [];

        if (this.metrics.lcp) scores.push(this.metrics.lcp < 2500 ? 100 : 50);
        if (this.metrics.fid) scores.push(this.metrics.fid < 100 ? 100 : 50);
        if (this.metrics.cls) scores.push(this.metrics.cls < 0.1 ? 100 : 50);
        if (this.metrics.ttfb) scores.push(this.metrics.ttfb < 800 ? 100 : 50);

        return scores.length ? Math.round(scores.reduce((a, b) => a + b) / scores.length) : 0;
    }

    generateMetricId() {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
}

// Initialize performance monitoring
window.performanceMonitor = new PerformanceMonitor();

```

### Lighthouse CI Integration

```javascript

// lighthouse-audit.js - Automated performance testing
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function runLighthouseAudit(url = 'http://localhost:8080') {
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });

    const options = {
        logLevel: 'info',
        output: 'html',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        port: chrome.port,
        throttling: {
            rttMs: 150,
            throughputKbps: 1.6 * 1024,
            cpuSlowdownMultiplier: 4,
            requestLatencyMs: 150,
            downloadThroughputKbps: 1.6 * 1024,
            uploadThroughputKbps: 750
        }
    };

    const runnerResult = await lighthouse(url, options);

    // Extract scores
    const scores = {
        performance: Math.round(runnerResult.lhr.categories.performance.score * 100),
        accessibility: Math.round(runnerResult.lhr.categories.accessibility.score * 100),
        'best-practices': Math.round(runnerResult.lhr.categories['best-practices'].score * 100),
        seo: Math.round(runnerResult.lhr.categories.seo.score * 100)
    };

    // Check if scores meet requirements
    const requirements = {
        performance: 95,
        accessibility: 100,
        'best-practices': 100,
        seo: 95
    };

    const passed = Object.keys(requirements).every(
        category => scores[category] >= requirements[category]
    );

    console.log('🏆 Lighthouse Audit Results:');
    console.log('├── Performance:', scores.performance + '/100', scores.performance >= 95 ? '✅' : '❌');
    console.log('├── Accessibility:', scores.accessibility + '/100', scores.accessibility >= 100 ? '✅' : '❌');
    console.log('├── Best Practices:', scores['best-practices'] + '/100', scores['best-practices'] >= 100 ? '✅' : '❌');
    console.log('└── SEO:', scores.seo + '/100', scores.seo >= 95 ? '✅' : '❌');
    console.log('');
    console.log(passed ? '🎯 All targets met!' : '⚠️  Performance targets not met');

    await chrome.kill();

    return { scores, passed, report: runnerResult.report };
}

module.exports = { runLighthouseAudit };

```

## 🔍 Performance Debugging

### Performance Bottleneck Detection

```javascript

// Debug performance issues
function analyzePerformance() {
    const navigation = performance.getEntriesByType('navigation')[0];
    const resources = performance.getEntriesByType('resource');

    console.group('🔍 Performance Analysis');

    // Navigation timing
    console.log('📊 Navigation Timing:');
    console.log('├── DNS:', navigation.domainLookupEnd - navigation.domainLookupStart + 'ms');
    console.log('├── Connect:', navigation.connectEnd - navigation.connectStart + 'ms');
    console.log('├── TTFB:', navigation.responseStart - navigation.requestStart + 'ms');
    console.log('├── Download:', navigation.responseEnd - navigation.responseStart + 'ms');
    console.log('├── DOM Ready:', navigation.domContentLoadedEventEnd - navigation.navigationStart + 'ms');
    console.log('└── Load Complete:', navigation.loadEventEnd - navigation.navigationStart + 'ms');

    // Largest resources
    console.log('📦 Largest Resources:');
    resources
        .filter(resource => resource.transferSize > 10000)
        .sort((a, b) => b.transferSize - a.transferSize)
        .slice(0, 10)
        .forEach(resource => {
            console.log(`├── ${resource.name.split('/').pop()}: ${Math.round(resource.transferSize / 1024)}KB`);
        });

    // Slow resources
    console.log('🐌 Slowest Resources:');
    resources
        .filter(resource => resource.duration > 100)
        .sort((a, b) => b.duration - a.duration)
        .slice(0, 5)
        .forEach(resource => {
            console.log(`├── ${resource.name.split('/').pop()}: ${Math.round(resource.duration)}ms`);
        });

    console.groupEnd();
}

// Run in browser console
window.analyzePerformance = analyzePerformance;

```

## 📋 Performance Checklist

### Pre-deployment Checklist

- [ ] **Lighthouse Audit**: All scores meet requirements (95+/100/100/95+)
- [ ] **Bundle Sizes**: JavaScript < 20KB, CSS < 10KB compressed
- [ ] **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] **Image Optimization**: WebP/AVIF formats with fallbacks
- [ ] **Font Loading**: Preloaded, with font-display: swap
- [ ] **Critical CSS**: Inlined above-the-fold styles
- [ ] **Service Worker**: Caching strategy implemented
- [ ] **Lazy Loading**: Images and non-critical resources
- [ ] **Code Splitting**: Dynamic imports for large features
- [ ] **Compression**: Gzip/Brotli enabled on server

### Monitoring & Maintenance

- [ ] **Real User Monitoring**: Core Web Vitals tracking active
- [ ] **Performance Budget**: Alerts for bundle size increases
- [ ] **Regular Audits**: Weekly Lighthouse CI runs
- [ ] **Error Tracking**: JavaScript errors monitored
- [ ] **Analytics**: Page speed insights reviewed monthly
- [ ] **Cache Validation**: Cache hit rates monitored
- [ ] **CDN Performance**: Global performance tracked
- [ ] **Mobile Performance**: Mobile-specific testing

---

*These performance standards ensure Liberty Ridge delivers a fast, reliable, and professional user experience that reflects our military-grade standards.*
