/**
 * Performance Monitoring for Lighthouse Optimization
 * Tracks key metrics and reports performance improvements
 */

class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.init();
  }

  init() {
    // Wait for page load to collect metrics
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.collectMetrics());
    } else {
      this.collectMetrics();
    }

    // Collect metrics after window load
    window.addEventListener('load', () => {
      setTimeout(() => this.collectLoadMetrics(), 1000);
    });
  }

  collectMetrics() {
    // Core Web Vitals and Performance Metrics
    this.measureLCP(); // Largest Contentful Paint
    this.measureFID(); // First Input Delay
    this.measureCLS(); // Cumulative Layout Shift
    this.measureFCP(); // First Contentful Paint
    this.measureTTFB(); // Time to First Byte
  }

  collectLoadMetrics() {
    this.measureResourceTiming();
    this.measureNavigationTiming();
    this.reportMetrics();
  }

  measureLCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.renderTime || lastEntry.loadTime;
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }

  measureFID() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.name === 'first-input-delay') {
            this.metrics.fid = entry.processingStart - entry.startTime;
          }
        }
      });

      observer.observe({ entryTypes: ['first-input'] });
    }
  }

  measureCLS() {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        this.metrics.cls = clsValue;
      });

      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }

  measureFCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
          }
        }
      });

      observer.observe({ entryTypes: ['paint'] });
    }
  }

  measureTTFB() {
    const navigation = performance.getEntriesByType('navigation')[0];
    if (navigation) {
      this.metrics.ttfb = navigation.responseStart - navigation.requestStart;
    }
  }

  measureResourceTiming() {
    const resources = performance.getEntriesByType('resource');
    const resourceMetrics = {
      totalResources: resources.length,
      totalSize: 0,
      totalDuration: 0,
      imageCount: 0,
      cssCount: 0,
      jsCount: 0
    };

    resources.forEach((resource) => {
      resourceMetrics.totalDuration += resource.duration;
      if (resource.transferSize) {
        resourceMetrics.totalSize += resource.transferSize;
      }

      // Count resource types
      if (resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
        resourceMetrics.imageCount++;
      } else if (resource.name.match(/\.css$/i)) {
        resourceMetrics.cssCount++;
      } else if (resource.name.match(/\.js$/i)) {
        resourceMetrics.jsCount++;
      }
    });

    this.metrics.resources = resourceMetrics;
  }

  measureNavigationTiming() {
    const navigation = performance.getEntriesByType('navigation')[0];
    if (navigation) {
      this.metrics.navigation = {
        domContentLoaded:
          navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalPageLoad: navigation.loadEventEnd - navigation.navigationStart
      };
    }
  }

  reportMetrics() {
    // Send metrics to analytics or logging service
    const performanceData = {
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      metrics: this.metrics
    };

    // Log to console for development
    console.group('Performance Metrics');
    console.log('Core Web Vitals:', {
      LCP: this.metrics.lcp,
      FID: this.metrics.fid,
      CLS: this.metrics.cls
    });
    console.log('Loading Metrics:', {
      FCP: this.metrics.fcp,
      TTFB: this.metrics.ttfb
    });
    console.log('Resource Metrics:', this.metrics.resources);
    console.log('Navigation Metrics:', this.metrics.navigation);
    console.groupEnd();

    // Store in localStorage for debugging
    try {
      localStorage.setItem('performanceMetrics', JSON.stringify(performanceData));
    } catch (e) {
      // Storage might be full or disabled
    }

    // Send to analytics if available
    if (typeof gtag !== 'undefined') {
      // eslint-disable-next-line no-undef
      gtag('event', 'performance_metrics', {
        custom_parameter: JSON.stringify(this.metrics)
      });
    }
  }

  getPerformanceScore() {
    const scores = {
      lcp: this.scoreLCP(this.metrics.lcp),
      fid: this.scoreFID(this.metrics.fid),
      cls: this.scoreCLS(this.metrics.cls),
      fcp: this.scoreFCP(this.metrics.fcp),
      ttfb: this.scoreTTFB(this.metrics.ttfb)
    };

    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
    return {
      individual: scores,
      overall: Math.round(totalScore / Object.keys(scores).length)
    };
  }

  scoreLCP(lcp) {
    if (lcp <= 2500) return 100;
    if (lcp <= 4000) return 50;
    return 0;
  }

  scoreFID(fid) {
    if (fid <= 100) return 100;
    if (fid <= 300) return 50;
    return 0;
  }

  scoreCLS(cls) {
    if (cls <= 0.1) return 100;
    if (cls <= 0.25) return 50;
    return 0;
  }

  scoreFCP(fcp) {
    if (fcp <= 1800) return 100;
    if (fcp <= 3000) return 50;
    return 0;
  }

  scoreTTFB(ttfb) {
    if (ttfb <= 600) return 100;
    if (ttfb <= 1500) return 50;
    return 0;
  }
}

// Initialize performance monitoring
document.addEventListener('DOMContentLoaded', () => {
  const performanceMonitor = new PerformanceMonitor();

  // Expose globally for debugging
  window.PerformanceMonitor = performanceMonitor;
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PerformanceMonitor;
}
