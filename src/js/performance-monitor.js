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
    
    // Custom metrics
    this.measureImageLoading();
    this.measureCSSLoading();
    this.measureJSLoading();
  }

  collectLoadMetrics() {
    this.measureLoadTime();
    this.measureResourceTiming();
    this.sendMetrics();
  }

  measureLCP() {
    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = Math.round(lastEntry.startTime);
        this.reportMetric('LCP', this.metrics.lcp, 'ms');
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }

  measureFID() {
    // First Input Delay
    if ('PerformanceObserver' in window) {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          this.metrics.fid = Math.round(entry.processingStart - entry.startTime);
          this.reportMetric('FID', this.metrics.fid, 'ms');
        });
      }).observe({ entryTypes: ['first-input'] });
    }
  }

  measureCLS() {
    // Cumulative Layout Shift
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        this.metrics.cls = Math.round(clsValue * 1000) / 1000;
        this.reportMetric('CLS', this.metrics.cls, '');
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }

  measureFCP() {
    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = Math.round(entry.startTime);
            this.reportMetric('FCP', this.metrics.fcp, 'ms');
          }
        });
      }).observe({ entryTypes: ['paint'] });
    }
  }

  measureTTFB() {
    // Time to First Byte
    if ('performance' in window && 'timing' in performance) {
      const timing = performance.timing;
      this.metrics.ttfb = timing.responseStart - timing.navigationStart;
      this.reportMetric('TTFB', this.metrics.ttfb, 'ms');
    }
  }

  measureImageLoading() {
    // Track image loading performance
    const images = document.querySelectorAll('img, picture');
    let loadedImages = 0;
    let totalImages = images.length;
    const startTime = performance.now();

    if (totalImages === 0) return;

    images.forEach((img) => {
      const element = img.tagName === 'PICTURE' ? img.querySelector('img') : img;
      if (element.complete) {
        loadedImages++;
      } else {
        element.addEventListener('load', () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            this.metrics.imagesLoadTime = Math.round(performance.now() - startTime);
            this.reportMetric('Images Load Time', this.metrics.imagesLoadTime, 'ms');
          }
        });
      }
    });

    if (loadedImages === totalImages) {
      this.metrics.imagesLoadTime = 0; // All images were already loaded
      this.reportMetric('Images Load Time', this.metrics.imagesLoadTime, 'ms');
    }
  }

  measureCSSLoading() {
    // Track CSS loading performance
    const startTime = performance.now();
    const checkCSS = () => {
      if (document.readyState === 'complete') {
        this.metrics.cssLoadTime = Math.round(performance.now() - startTime);
        this.reportMetric('CSS Load Time', this.metrics.cssLoadTime, 'ms');
      } else {
        setTimeout(checkCSS, 50);
      }
    };
    checkCSS();
  }

  measureJSLoading() {
    // Track JavaScript loading performance
    if ('performance' in window) {
      const jsResources = performance.getEntriesByType('resource')
        .filter(entry => entry.name.includes('.js'));
      
      if (jsResources.length > 0) {
        const totalJSTime = jsResources.reduce((total, resource) => {
          return total + (resource.responseEnd - resource.startTime);
        }, 0);
        this.metrics.jsLoadTime = Math.round(totalJSTime);
        this.reportMetric('JS Load Time', this.metrics.jsLoadTime, 'ms');
      }
    }
  }

  measureLoadTime() {
    // Overall page load time
    if ('performance' in window && 'timing' in performance) {
      const timing = performance.timing;
      this.metrics.loadTime = timing.loadEventEnd - timing.navigationStart;
      this.reportMetric('Page Load Time', this.metrics.loadTime, 'ms');
    }
  }

  measureResourceTiming() {
    // Detailed resource timing
    if ('performance' in window) {
      const resources = performance.getEntriesByType('resource');
      
      const resourceTypes = {
        css: resources.filter(r => r.name.includes('.css')),
        js: resources.filter(r => r.name.includes('.js')),
        images: resources.filter(r => /\.(jpg|jpeg|png|gif|webp|avif|svg)/.test(r.name)),
        fonts: resources.filter(r => /\.(woff|woff2|ttf|eot)/.test(r.name))
      };

      Object.entries(resourceTypes).forEach(([type, entries]) => {
        if (entries.length > 0) {
          const avgLoadTime = entries.reduce((total, entry) => {
            return total + (entry.responseEnd - entry.startTime);
          }, 0) / entries.length;
          
          this.metrics[`${type}AvgLoadTime`] = Math.round(avgLoadTime);
          this.reportMetric(`${type.toUpperCase()} Avg Load Time`, this.metrics[`${type}AvgLoadTime`], 'ms');
        }
      });
    }
  }

  reportMetric(name, value, unit) {
    // Report to console in development
    if (process.env.NODE_ENV !== 'production') {
      console.log(`📊 ${name}: ${value}${unit}`);
    }

    // Store for analytics
    this.storeMetric(name, value, unit);
  }

  storeMetric(name, value, unit) {
    // Store metrics for later analysis
    if (!window.performanceMetrics) {
      window.performanceMetrics = {};
    }
    window.performanceMetrics[name] = { value, unit, timestamp: Date.now() };
  }

  sendMetrics() {
    // Send metrics to analytics (implement as needed)
    if (typeof gtag !== 'undefined') {
      // Google Analytics 4
      Object.entries(this.metrics).forEach(([metric, value]) => {
        gtag('event', 'performance_metric', {
          metric_name: metric,
          metric_value: value
        });
      });
    }

    // Performance summary
    this.generatePerformanceSummary();
  }

  generatePerformanceSummary() {
    const summary = {
      coreWebVitals: {
        lcp: this.metrics.lcp,
        fid: this.metrics.fid,
        cls: this.metrics.cls
      },
      loadingMetrics: {
        fcp: this.metrics.fcp,
        ttfb: this.metrics.ttfb,
        loadTime: this.metrics.loadTime
      },
      optimizations: {
        imagesLoadTime: this.metrics.imagesLoadTime,
        cssLoadTime: this.metrics.cssLoadTime,
        jsLoadTime: this.metrics.jsLoadTime
      }
    };

    // Report performance grade
    const grade = this.calculatePerformanceGrade(summary);
    
    if (process.env.NODE_ENV !== 'production') {
      console.log('🎯 Performance Summary:', summary);
      console.log(`📈 Performance Grade: ${grade}`);
    }

    // Store summary for later access
    window.performanceSummary = { ...summary, grade };
  }

  calculatePerformanceGrade(summary) {
    let score = 100;

    // Core Web Vitals scoring
    if (summary.coreWebVitals.lcp > 2500) score -= 20;
    else if (summary.coreWebVitals.lcp > 4000) score -= 40;

    if (summary.coreWebVitals.fid > 100) score -= 20;
    else if (summary.coreWebVitals.fid > 300) score -= 40;

    if (summary.coreWebVitals.cls > 0.1) score -= 15;
    else if (summary.coreWebVitals.cls > 0.25) score -= 30;

    // Loading metrics scoring
    if (summary.loadingMetrics.fcp > 1800) score -= 10;
    if (summary.loadingMetrics.ttfb > 600) score -= 10;
    if (summary.loadingMetrics.loadTime > 3000) score -= 10;

    // Return letter grade
    if (score >= 90) return 'A+';
    if (score >= 85) return 'A';
    if (score >= 80) return 'B+';
    if (score >= 75) return 'B';
    if (score >= 70) return 'C+';
    if (score >= 65) return 'C';
    return 'Needs Improvement';
  }

  // Public method to get current metrics
  getMetrics() {
    return { ...this.metrics };
  }

  // Public method to get performance summary
  getSummary() {
    return window.performanceSummary || null;
  }
}

// Initialize performance monitoring
document.addEventListener('DOMContentLoaded', () => {
  window.performanceMonitor = new PerformanceMonitor();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PerformanceMonitor;
}