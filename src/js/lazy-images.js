/**
 * Lazy Loading Images with Modern Format Support
 * Implements progressive enhancement for responsive, optimized images
 */

class LazyImageLoader {
  constructor() {
    this.imageObserver = null;
    this.init();
  }

  init() {
    // Check for Intersection Observer support
    if ('IntersectionObserver' in window) {
      this.imageObserver = new IntersectionObserver(this.handleIntersection.bind(this), {
        root: null,
        rootMargin: '50px 0px', // Start loading 50px before image enters viewport
        threshold: 0.01
      });

      this.observeImages();
    } else {
      // Fallback for older browsers - load all images immediately
      this.loadAllImages();
    }
  }

  observeImages() {
    const lazyImages = document.querySelectorAll('[data-lazy]');
    lazyImages.forEach((image) => {
      this.imageObserver.observe(image);
    });
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.loadImage(entry.target);
        this.imageObserver.unobserve(entry.target);
      }
    });
  }

  loadImage(element) {
    const isImg = element.tagName === 'IMG';
    const isPicture = element.tagName === 'PICTURE';

    if (isImg) {
      this.loadSingleImage(element);
    } else if (isPicture) {
      this.loadPictureElement(element);
    }
  }

  loadSingleImage(img) {
    // Load the main image
    if (img.dataset.src) {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    }

    // Load srcset if available
    if (img.dataset.srcset) {
      img.srcset = img.dataset.srcset;
      img.removeAttribute('data-srcset');
    }

    // Add load event listener for visual feedback
    img.addEventListener('load', () => {
      img.classList.add('loaded');
      img.removeAttribute('data-lazy');
    });

    // Add error handler
    img.addEventListener('error', () => {
      img.classList.add('error');
    });
  }

  loadPictureElement(picture) {
    const sources = picture.querySelectorAll('source');
    sources.forEach((source) => {
      if (source.dataset.srcset) {
        source.srcset = source.dataset.srcset;
        source.removeAttribute('data-srcset');
      }
    });

    const img = picture.querySelector('img');
    if (img) {
      img.addEventListener('load', () => {
        picture.classList.add('loaded');
        picture.removeAttribute('data-lazy');
      });

      img.addEventListener('error', () => {
        picture.classList.add('error');
      });

      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
    }
  }

  loadAllImages() {
    // Fallback for browsers without Intersection Observer
    const lazyImages = document.querySelectorAll('[data-lazy]');
    lazyImages.forEach((image) => {
      this.loadImage(image);
    });
  }

  // Progressive enhancement for different image formats
  supportsWebP() {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('webp') !== -1;
  }

  supportsAVIF() {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/avif').indexOf('avif') !== -1;
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const lazyLoader = new LazyImageLoader();

  // Expose globally for manual triggering if needed
  window.LazyImageLoader = lazyLoader;
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LazyImageLoader;
}
