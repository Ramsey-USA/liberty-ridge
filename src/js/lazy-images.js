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
      this.imageObserver = new IntersectionObserver(
        this.handleIntersection.bind(this),
        {
          root: null,
          rootMargin: '50px 0px', // Start loading 50px before image enters viewport
          threshold: 0.01
        }
      );

      this.observeImages();
    } else {
      // Fallback for older browsers - load all images immediately
      this.loadAllImages();
    }
  }

  observeImages() {
    const lazyImages = document.querySelectorAll('[data-lazy]');
    lazyImages.forEach(image => {
      this.imageObserver.observe(image);
    });
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
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
    // Handle single img elements with srcset
    if (img.dataset.srcset) {
      img.srcset = img.dataset.srcset;
    }
    if (img.dataset.src) {
      img.src = img.dataset.src;
    }

    // Add loaded class for CSS transitions
    img.addEventListener('load', () => {
      img.classList.add('loaded');
      img.removeAttribute('data-lazy');
    });

    // Handle error case
    img.addEventListener('error', () => {
      img.classList.add('error');
    });
  }

  loadPictureElement(picture) {
    const sources = picture.querySelectorAll('source[data-srcset]');
    const img = picture.querySelector('img[data-src]');

    // Load source elements
    sources.forEach(source => {
      if (source.dataset.srcset) {
        source.srcset = source.dataset.srcset;
        source.removeAttribute('data-srcset');
      }
    });

    // Load img element
    if (img) {
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
      }
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }

      img.addEventListener('load', () => {
        picture.classList.add('loaded');
        picture.removeAttribute('data-lazy');
      });

      img.addEventListener('error', () => {
        picture.classList.add('error');
      });
    }
  }

  loadAllImages() {
    // Fallback for browsers without Intersection Observer
    const lazyImages = document.querySelectorAll('[data-lazy]');
    lazyImages.forEach(element => {
      this.loadImage(element);
    });
  }

  // Method to manually trigger loading of specific images
  loadSpecificImage(selector) {
    const element = document.querySelector(selector);
    if (element) {
      this.loadImage(element);
    }
  }

  // Method to refresh observer for dynamically added images
  refresh() {
    if (this.imageObserver) {
      this.observeImages();
    }
  }
}

// Helper function to create responsive picture elements
function createPictureElement(imageName, alt, sizes = '100vw', loading = 'lazy') {
  const picture = document.createElement('picture');
  const isEager = loading === 'eager';
  
  // AVIF source
  const avifSource = document.createElement('source');
  avifSource.type = 'image/avif';
  if (isEager) {
    avifSource.srcset = `
      assets/images/${imageName}-480w.avif 480w,
      assets/images/${imageName}-768w.avif 768w,
      assets/images/${imageName}-1024w.avif 1024w,
      assets/images/${imageName}-1920w.avif 1920w
    `;
  } else {
    avifSource.setAttribute('data-srcset', `
      assets/images/${imageName}-480w.avif 480w,
      assets/images/${imageName}-768w.avif 768w,
      assets/images/${imageName}-1024w.avif 1024w,
      assets/images/${imageName}-1920w.avif 1920w
    `);
  }
  avifSource.sizes = sizes;
  
  // WebP source
  const webpSource = document.createElement('source');
  webpSource.type = 'image/webp';
  if (isEager) {
    webpSource.srcset = `
      assets/images/${imageName}-480w.webp 480w,
      assets/images/${imageName}-768w.webp 768w,
      assets/images/${imageName}-1024w.webp 1024w,
      assets/images/${imageName}-1920w.webp 1920w
    `;
  } else {
    webpSource.setAttribute('data-srcset', `
      assets/images/${imageName}-480w.webp 480w,
      assets/images/${imageName}-768w.webp 768w,
      assets/images/${imageName}-1024w.webp 1024w,
      assets/images/${imageName}-1920w.webp 1920w
    `);
  }
  webpSource.sizes = sizes;
  
  // Fallback img
  const img = document.createElement('img');
  img.alt = alt;
  img.loading = loading;
  img.decoding = 'async';
  img.sizes = sizes;
  
  if (isEager) {
    img.src = `assets/images/${imageName}.jpg`;
    img.srcset = `
      assets/images/${imageName}-480w.jpg 480w,
      assets/images/${imageName}-768w.jpg 768w,
      assets/images/${imageName}-1024w.jpg 1024w,
      assets/images/${imageName}-1920w.jpg 1920w
    `;
  } else {
    img.setAttribute('data-src', `assets/images/${imageName}.jpg`);
    img.setAttribute('data-srcset', `
      assets/images/${imageName}-480w.jpg 480w,
      assets/images/${imageName}-768w.jpg 768w,
      assets/images/${imageName}-1024w.jpg 1024w,
      assets/images/${imageName}-1920w.jpg 1920w
    `);
    picture.setAttribute('data-lazy', 'true');
  }
  
  picture.appendChild(avifSource);
  picture.appendChild(webpSource);
  picture.appendChild(img);
  
  return picture;
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.lazyImageLoader = new LazyImageLoader();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LazyImageLoader, createPictureElement };
}