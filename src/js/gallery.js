/**
 * Gallery functionality for photo and video management
 * Integrates with Firebase Storage for media hosting
 */

class GalleryManager {
  constructor () {
    this.currentTab = 'photos';
    this.photos = [];
    this.videos = [];
    this.isLoading = false;
  }

  /**
   * Initialize the gallery
   */
  init () {
    this.attachEventListeners();
    this.loadGalleryContent();
  }

  /**
   * Attach event listeners
   */
  attachEventListeners () {
    // Gallery tab switching
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    galleryTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const tabType = e.target.getAttribute('data-tab');
        this.switchTab(tabType);
      });
    });

    // Modal functionality for image/video viewing
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('gallery-item-image') ||
          e.target.classList.contains('gallery-item-video')) {
        this.openModal(e.target);
      }
    });
  }

  /**
   * Switch between gallery tabs
   */
  switchTab (tabType) {
    if (this.currentTab === tabType) return;

    this.currentTab = tabType;

    // Update tab active states
    document.querySelectorAll('.gallery-tab').forEach(tab => {
      tab.classList.remove('active');
      if (tab.getAttribute('data-tab') === tabType) {
        tab.classList.add('active');
      }
    });

    // Update gallery content
    this.updateGalleryDisplay();
  }

  /**
   * Update gallery display based on current tab
   */
  updateGalleryDisplay () {
    const photoGallery = document.getElementById('photoGallery');
    const videoGallery = document.getElementById('videoGallery');

    if (this.currentTab === 'photos') {
      photoGallery.style.display = 'grid';
      videoGallery.style.display = 'none';
      this.renderPhotos();
    } else {
      photoGallery.style.display = 'none';
      videoGallery.style.display = 'grid';
      this.renderVideos();
    }
  }

  /**
   * Load gallery content from Firebase (placeholder)
   */
  async loadGalleryContent () {
    this.isLoading = true;
    this.showLoadingState();

    try {
      // TODO: Replace with actual Firebase Storage integration
      await this.loadMockData();
      this.updateGalleryDisplay();
    } catch (error) {
      // Log error for debugging in development
      if (process.env.NODE_ENV === 'development') {
        throw error;
      }
      this.showErrorState();
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Load mock data for development
   */
  async loadMockData () {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock photo data
    this.photos = [
      {
        id: 1,
        url: '/assets/images/training-1.jpg',
        thumbnail: '/assets/images/training-1-thumb.jpg',
        title: 'Basic Safety Training',
        description: 'Learning fundamental firearm safety protocols',
        category: 'safety'
      },
      {
        id: 2,
        url: '/assets/images/training-2.jpg',
        thumbnail: '/assets/images/training-2-thumb.jpg',
        title: 'Marksmanship Practice',
        description: 'Precision shooting at the range',
        category: 'marksmanship'
      },
      {
        id: 3,
        url: '/assets/images/training-3.jpg',
        thumbnail: '/assets/images/training-3-thumb.jpg',
        title: 'Tactical Positioning',
        description: 'Learning proper stance and positioning',
        category: 'tactical'
      },
      {
        id: 4,
        url: '/assets/images/training-4.jpg',
        thumbnail: '/assets/images/training-4-thumb.jpg',
        title: 'Equipment Maintenance',
        description: 'Proper cleaning and maintenance techniques',
        category: 'maintenance'
      },
      {
        id: 5,
        url: '/assets/images/training-5.jpg',
        thumbnail: '/assets/images/training-5-thumb.jpg',
        title: 'Group Training Session',
        description: 'Advanced training with multiple participants',
        category: 'group'
      },
      {
        id: 6,
        url: '/assets/images/training-6.jpg',
        thumbnail: '/assets/images/training-6-thumb.jpg',
        title: 'Concealed Carry Training',
        description: 'Practical self-defense scenarios',
        category: 'concealed-carry'
      }
    ];

    // Mock video data
    this.videos = [
      {
        id: 1,
        url: '/assets/videos/safety-basics.mp4',
        thumbnail: '/assets/images/video-thumb-1.jpg',
        title: 'Firearm Safety Basics',
        description: 'Essential safety rules every gun owner should know',
        duration: '5:32',
        category: 'safety'
      },
      {
        id: 2,
        url: '/assets/videos/marksmanship-tips.mp4',
        thumbnail: '/assets/images/video-thumb-2.jpg',
        title: 'Marksmanship Tips',
        description: 'Improving accuracy and precision',
        duration: '8:15',
        category: 'marksmanship'
      },
      {
        id: 3,
        url: '/assets/videos/tactical-training.mp4',
        thumbnail: '/assets/images/video-thumb-3.jpg',
        title: 'Tactical Training Overview',
        description: 'Military-style tactical training techniques',
        duration: '12:40',
        category: 'tactical'
      }
    ];
  }

  /**
   * Render photo gallery
   */
  renderPhotos () {
    const photoGallery = document.getElementById('photoGallery');

    if (this.photos.length === 0) {
      photoGallery.innerHTML = this.getEmptyState('photos');
      return;
    }

    const photosHTML = this.photos.map(photo => `
      <div class="gallery-item" data-id="${photo.id}">
        <div class="gallery-item-container">
          <img 
            src="${photo.thumbnail || '/assets/images/placeholder-photo.jpg'}" 
            alt="${photo.title}"
            class="gallery-item-image"
            data-full-url="${photo.url}"
            loading="lazy"
          />
          <div class="gallery-item-overlay">
            <div class="gallery-item-info">
              <h4>${photo.title}</h4>
              <p>${photo.description}</p>
              <span class="gallery-item-category">${this.formatCategory(photo.category)}</span>
            </div>
            <button class="gallery-item-action" aria-label="View full image">
              <span class="material-icons">zoom_in</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    photoGallery.innerHTML = photosHTML;
    this.attachItemEventListeners();
  }

  /**
   * Render video gallery
   */
  renderVideos () {
    const videoGallery = document.getElementById('videoGallery');

    if (this.videos.length === 0) {
      videoGallery.innerHTML = this.getEmptyState('videos');
      return;
    }

    const videosHTML = this.videos.map(video => `
      <div class="gallery-item" data-id="${video.id}">
        <div class="gallery-item-container">
          <div class="video-thumbnail">
            <img 
              src="${video.thumbnail || '/assets/images/placeholder-video.jpg'}" 
              alt="${video.title}"
              class="gallery-item-video"
              data-video-url="${video.url}"
              loading="lazy"
            />
            <div class="video-play-button">
              <span class="material-icons">play_arrow</span>
            </div>
            <div class="video-duration">${video.duration}</div>
          </div>
          <div class="gallery-item-overlay">
            <div class="gallery-item-info">
              <h4>${video.title}</h4>
              <p>${video.description}</p>
              <span class="gallery-item-category">${this.formatCategory(video.category)}</span>
            </div>
            <button class="gallery-item-action" aria-label="Play video">
              <span class="material-icons">play_circle</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    videoGallery.innerHTML = videosHTML;
    this.attachItemEventListeners();
  }

  /**
   * Attach event listeners to gallery items
   */
  attachItemEventListeners () {
    // Image/video click handlers
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
      const image = item.querySelector('.gallery-item-image');
      const video = item.querySelector('.gallery-item-video');
      const actionButton = item.querySelector('.gallery-item-action');

      if (image) {
        image.addEventListener('click', () => this.openImageModal(image));
        actionButton.addEventListener('click', () => this.openImageModal(image));
      }

      if (video) {
        video.addEventListener('click', () => this.openVideoModal(video));
        actionButton.addEventListener('click', () => this.openVideoModal(video));
      }
    });
  }

  /**
   * Open image modal
   */
  openImageModal (imageElement) {
    const fullUrl = imageElement.getAttribute('data-full-url');
    const title = imageElement.alt;

    this.createModal({
      type: 'image',
      src: fullUrl || imageElement.src,
      title
    });
  }

  /**
   * Open video modal
   */
  openVideoModal (videoElement) {
    const videoUrl = videoElement.getAttribute('data-video-url');
    const title = videoElement.alt;

    this.createModal({
      type: 'video',
      src: videoUrl,
      title
    });
  }

  /**
   * Create and show modal
   */
  createModal ({ type, src, title }) {
    // Remove existing modal if present
    const existingModal = document.querySelector('.gallery-modal');
    if (existingModal) {
      existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = `
      <div class="gallery-modal-backdrop"></div>
      <div class="gallery-modal-content">
        <div class="gallery-modal-header">
          <h3>${title}</h3>
          <button class="gallery-modal-close" aria-label="Close modal">
            <span class="material-icons">close</span>
          </button>
        </div>
        <div class="gallery-modal-body">
          ${type === 'image'
            ? `<img src="${src}" alt="${title}" class="gallery-modal-image" />`
            : `<video src="${src}" controls class="gallery-modal-video" autoplay></video>`
          }
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Event listeners for modal
    const closeButton = modal.querySelector('.gallery-modal-close');
    const backdrop = modal.querySelector('.gallery-modal-backdrop');

    closeButton.addEventListener('click', () => this.closeModal(modal));
    backdrop.addEventListener('click', () => this.closeModal(modal));

    // ESC key to close
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        this.closeModal(modal);
        document.removeEventListener('keydown', handleEscapeKey);
      }
    };
    document.addEventListener('keydown', handleEscapeKey);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Animate in
    setTimeout(() => {
      modal.classList.add('active');
    }, 10);
  }

  /**
   * Close modal
   */
  closeModal (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';

    setTimeout(() => {
      modal.remove();
    }, 300);
  }

  /**
   * Show loading state
   */
  showLoadingState () {
    const galleries = [document.getElementById('photoGallery'), document.getElementById('videoGallery')];
    galleries.forEach(gallery => {
      if (gallery) {
        gallery.innerHTML = this.getLoadingState();
      }
    });
  }

  /**
   * Show error state
   */
  showErrorState () {
    const galleries = [document.getElementById('photoGallery'), document.getElementById('videoGallery')];
    galleries.forEach(gallery => {
      if (gallery) {
        gallery.innerHTML = this.getErrorState();
      }
    });
  }

  /**
   * Get loading state HTML
   */
  getLoadingState () {
    return Array.from({ length: 6 }, (_, i) => `
      <div class="gallery-item">
        <div class="gallery-item-skeleton">
          <div class="skeleton gallery-image-skeleton"></div>
          <div class="skeleton gallery-text-skeleton"></div>
          <div class="skeleton gallery-text-skeleton short"></div>
        </div>
      </div>
    `).join('');
  }

  /**
   * Get error state HTML
   */
  getErrorState () {
    return `
      <div class="gallery-error">
        <span class="material-icons">error_outline</span>
        <h3>Unable to load gallery</h3>
        <p>Please try again later or contact support if the problem persists.</p>
        <button class="btn btn-secondary" onclick="galleryManager.loadGalleryContent()">
          Retry
        </button>
      </div>
    `;
  }

  /**
   * Get empty state HTML
   */
  getEmptyState (type) {
    const icon = type === 'photos' ? 'photo_camera' : 'videocam';
    const text = type === 'photos' ? 'No photos available' : 'No videos available';

    return `
      <div class="gallery-empty">
        <span class="material-icons">${icon}</span>
        <h3>${text}</h3>
        <p>Check back soon for new content!</p>
      </div>
    `;
  }

  /**
   * Format category for display
   */
  formatCategory (category) {
    return category.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  /**
   * Upload new media (admin functionality)
   */
  async uploadMedia (file, type, metadata) {
    try {
      // TODO: Integrate with Firebase Storage
      // Development logging would go here when Firebase is integrated

      // Simulate upload process
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            url: URL.createObjectURL(file),
            id: Date.now()
          });
        }, 2000);
      });
    } catch (error) {
      // Log error for debugging in development
      if (process.env.NODE_ENV === 'development') {
        throw error;
      }
      throw new Error('Failed to upload media');
    }
  }
}

// Gallery styles
const galleryStyles = `
  .gallery-item {
    position: relative;
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-small);
    transition: all var(--transition-base);
    cursor: pointer;
  }

  .gallery-item:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-medium);
  }

  .gallery-item-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .gallery-item-image,
  .video-thumbnail img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform var(--transition-base);
  }

  .gallery-item:hover .gallery-item-image,
  .gallery-item:hover .video-thumbnail img {
    transform: scale(1.05);
  }

  .video-thumbnail {
    position: relative;
    height: 200px;
    overflow: hidden;
  }

  .video-play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
    transition: all var(--transition-base);
  }

  .gallery-item:hover .video-play-button {
    background-color: rgba(0, 0, 0, 0.9);
    transform: translate(-50%, -50%) scale(1.1);
  }

  .video-duration {
    position: absolute;
    bottom: var(--spacing-sm);
    right: var(--spacing-sm);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
  }

  .gallery-item-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    padding: var(--spacing-xl) var(--spacing-md) var(--spacing-md);
    color: white;
    transform: translateY(100%);
    transition: transform var(--transition-base);
  }

  .gallery-item:hover .gallery-item-overlay {
    transform: translateY(0);
  }

  .gallery-item-info h4 {
    margin: 0 0 var(--spacing-xs) 0;
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-medium);
  }

  .gallery-item-info p {
    margin: 0 0 var(--spacing-sm) 0;
    font-size: var(--font-size-sm);
    line-height: var(--line-height-normal);
    opacity: 0.9;
  }

  .gallery-item-category {
    background-color: rgba(255, 255, 255, 0.2);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .gallery-item-action {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    background-color: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--transition-fast);
    opacity: 0;
  }

  .gallery-item:hover .gallery-item-action {
    opacity: 1;
  }

  .gallery-item-action:hover {
    background-color: white;
    transform: scale(1.1);
  }

  /* Modal Styles */
  .gallery-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: var(--z-modal);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
  }

  .gallery-modal.active {
    opacity: 1;
    visibility: visible;
  }

  .gallery-modal-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
  }

  .gallery-modal-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    background-color: var(--color-background);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-large);
    transform: scale(0.9);
    transition: transform var(--transition-base);
  }

  .gallery-modal.active .gallery-modal-content {
    transform: scale(1);
  }

  .gallery-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-lg);
    border-bottom: 1px solid var(--color-border);
  }

  .gallery-modal-header h3 {
    margin: 0;
    font-size: var(--font-size-xl);
    color: var(--color-text-primary);
  }

  .gallery-modal-close {
    background: none;
    border: none;
    color: var(--color-text-secondary);
    cursor: pointer;
    padding: var(--spacing-sm);
    border-radius: var(--border-radius-md);
    transition: all var(--transition-fast);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gallery-modal-close:hover {
    background-color: var(--color-background-secondary);
    color: var(--color-text-primary);
  }

  .gallery-modal-body {
    padding: 0;
  }

  .gallery-modal-image {
    width: 100%;
    height: auto;
    max-height: 70vh;
    object-fit: contain;
    display: block;
  }

  .gallery-modal-video {
    width: 100%;
    height: auto;
    max-height: 70vh;
    display: block;
  }

  /* Loading States */
  .gallery-item-skeleton {
    padding: var(--spacing-md);
  }

  .gallery-image-skeleton {
    width: 100%;
    height: 200px;
    border-radius: var(--border-radius-md);
    margin-bottom: var(--spacing-md);
  }

  .gallery-text-skeleton {
    height: 1rem;
    border-radius: var(--border-radius-sm);
    margin-bottom: var(--spacing-sm);
  }

  .gallery-text-skeleton.short {
    width: 60%;
  }

  /* Error and Empty States */
  .gallery-error,
  .gallery-empty {
    grid-column: 1 / -1;
    text-align: center;
    padding: var(--spacing-4xl);
    color: var(--color-text-muted);
  }

  .gallery-error .material-icons,
  .gallery-empty .material-icons {
    font-size: 4rem;
    margin-bottom: var(--spacing-lg);
    color: var(--color-text-secondary);
  }

  .gallery-error h3,
  .gallery-empty h3 {
    margin-bottom: var(--spacing-md);
    color: var(--color-text-primary);
  }

  .gallery-error p,
  .gallery-empty p {
    margin-bottom: var(--spacing-lg);
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`;

// Add gallery styles to document
const galleryStyleSheet = document.createElement('style');
galleryStyleSheet.textContent = galleryStyles;
document.head.appendChild(galleryStyleSheet);

// Initialize gallery
let galleryManager;

function initGallery () {
  galleryManager = new GalleryManager();
  galleryManager.init();
}

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initGallery, 100);
  });
} else {
  setTimeout(initGallery, 100);
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GalleryManager;
}
