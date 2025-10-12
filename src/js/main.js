/**
 * Liberty Ridge Training Grounds - Main JavaScript
 * Handles core functionality including theme switching, navigation, and form handling
 */

// Global state management
const AppState = {
  theme: 'light',
  mobileMenuOpen: false,
  chatbotOpen: false,
  currentGalleryTab: 'photos'
};

// DOM elements cache
const Elements = {
  header: null,
  themeToggle: null,
  menuToggle: null,
  navMobile: null,
  chatbotToggle: null,
  chatbotWindow: null,
  chatbotClose: null,
  consultationForm: null,
  galleryTabs: null,
  photoGallery: null,
  videoGallery: null
};

/**
 * Initialize the application
 */
function initApp () {
  cacheElements();
  initTheme();
  initNavigation();
  initChatbot();
  initForms();
  initGallery();
  initScrollEffects();

  console.log('Liberty Ridge Training Grounds - Application initialized');
}

/**
 * Cache DOM elements for better performance
 */
function cacheElements () {
  Elements.header = document.getElementById('header');
  Elements.themeToggle = document.getElementById('themeToggle');
  Elements.menuToggle = document.getElementById('menuToggle');
  Elements.navMobile = document.getElementById('navMobile');
  Elements.chatbotToggle = document.getElementById('chatbotToggle');
  Elements.chatbotWindow = document.getElementById('chatbotWindow');
  Elements.chatbotClose = document.getElementById('chatbotClose');
  Elements.consultationForm = document.getElementById('consultationForm');
  Elements.galleryTabs = document.querySelectorAll('.gallery-tab');
  Elements.photoGallery = document.getElementById('photoGallery');
  Elements.videoGallery = document.getElementById('videoGallery');
}

/**
 * Theme Management
 */
function initTheme () {
  // Check for saved theme preference or default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  // Theme toggle event listener
  if (Elements.themeToggle) {
    Elements.themeToggle.addEventListener('click', toggleTheme);
  }
}

function setTheme (theme) {
  AppState.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  // Update theme toggle icon
  if (Elements.themeToggle) {
    const icon = Elements.themeToggle.querySelector('.material-icons');
    icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
  }
}

function toggleTheme () {
  const newTheme = AppState.theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

/**
 * Navigation Management
 */
function initNavigation () {
  // Mobile menu toggle
  if (Elements.menuToggle) {
    Elements.menuToggle.addEventListener('click', toggleMobileMenu);
  }

  // Close mobile menu when clicking on nav links
  const mobileNavLinks = document.querySelectorAll('.nav-mobile-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Smooth scroll for anchor links
  const allNavLinks = document.querySelectorAll('a[href^="#"]');
  allNavLinks.forEach(link => {
    link.addEventListener('click', handleSmoothScroll);
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (AppState.mobileMenuOpen &&
        !Elements.navMobile.contains(e.target) &&
        !Elements.menuToggle.contains(e.target)) {
      closeMobileMenu();
    }
  });
}

function toggleMobileMenu () {
  AppState.mobileMenuOpen = !AppState.mobileMenuOpen;

  if (AppState.mobileMenuOpen) {
    openMobileMenu();
  } else {
    closeMobileMenu();
  }
}

function openMobileMenu () {
  Elements.navMobile.classList.add('active');
  Elements.menuToggle.classList.add('active');
  Elements.menuToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeMobileMenu () {
  AppState.mobileMenuOpen = false;
  Elements.navMobile.classList.remove('active');
  Elements.menuToggle.classList.remove('active');
  Elements.menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = ''; // Restore scroll
}

function handleSmoothScroll (e) {
  e.preventDefault();
  const targetId = e.target.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const headerHeight = Elements.header.offsetHeight;
    const targetPosition = targetElement.offsetTop - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Chatbot Management
 */
function initChatbot () {
  if (Elements.chatbotToggle) {
    Elements.chatbotToggle.addEventListener('click', toggleChatbot);
  }

  if (Elements.chatbotClose) {
    Elements.chatbotClose.addEventListener('click', closeChatbot);
  }

  // Initialize chatbot input handling
  const chatbotInput = document.getElementById('chatbotInput');
  const chatbotSend = document.getElementById('chatbotSend');

  if (chatbotInput && chatbotSend) {
    chatbotSend.addEventListener('click', handleChatbotMessage);
    chatbotInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleChatbotMessage();
      }
    });
  }
}

function toggleChatbot () {
  AppState.chatbotOpen = !AppState.chatbotOpen;

  if (AppState.chatbotOpen) {
    openChatbot();
  } else {
    closeChatbot();
  }
}

function openChatbot () {
  Elements.chatbotWindow.classList.add('active');
  Elements.chatbotToggle.setAttribute('aria-expanded', 'true');
}

function closeChatbot () {
  AppState.chatbotOpen = false;
  Elements.chatbotWindow.classList.remove('active');
  Elements.chatbotToggle.setAttribute('aria-expanded', 'false');
}

function handleChatbotMessage () {
  const input = document.getElementById('chatbotInput');
  const message = input.value.trim();

  if (message) {
    addChatbotMessage(message, 'user');
    input.value = '';

    // Simulate bot response (replace with actual chatbot logic)
    setTimeout(() => {
      const response = generateChatbotResponse(message);
      addChatbotMessage(response, 'bot');
    }, 1000);
  }
}

function addChatbotMessage (message, sender) {
  const messagesContainer = document.getElementById('chatbotMessages');
  const messageElement = document.createElement('div');
  messageElement.className = `chatbot-message ${sender}`;
  messageElement.innerHTML = `<p>${message}</p>`;

  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateChatbotResponse (message) {
  // Simple keyword-based responses (replace with proper chatbot logic)
  const responses = {
    price: 'Our training sessions are competitively priced. Please book a consultation for detailed pricing information.',
    schedule: 'You can schedule a consultation using the booking form on our website. We offer flexible scheduling options.',
    experience: 'Our instructor Zach is an Army veteran with extensive military and civilian firearms training experience.',
    location: 'We serve Pasco, WA and the greater Pacific Northwest area. Mobile training options are available.',
    safety: 'Safety is our top priority. All training sessions emphasize proper safety protocols and responsible gun ownership.',
    beginner: 'We welcome beginners! Our training programs are designed for all skill levels, from complete beginners to advanced shooters.',
    military: 'Yes, our instructor is an Army veteran with real-world military experience in firearms training and tactics.',
    default: 'Thank you for your question! For detailed information, please book a consultation or contact us directly. Our instructor would be happy to discuss your specific training needs.'
  };

  const lowerMessage = message.toLowerCase();

  for (const [keyword, response] of Object.entries(responses)) {
    if (lowerMessage.includes(keyword)) {
      return response;
    }
  }

  return responses.default;
}

/**
 * Form Management
 */
function initForms () {
  if (Elements.consultationForm) {
    Elements.consultationForm.addEventListener('submit', handleConsultationSubmit);
  }

  // Listen for calendar appointment selection
  document.addEventListener('appointmentSelected', (e) => {
    const { date, time } = e.detail;
    showNotification(`Selected appointment: ${date.toDateString()} at ${time}`, 'success');
  });
}

async function handleConsultationSubmit (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  // Show loading state
  const submitButton = e.target.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Scheduling...';
  submitButton.disabled = true;

  try {
    // Here you would integrate with Firebase and HighLevel CRM
    // For now, we'll simulate the submission
    await simulateFormSubmission(data);

    // Show success message
    showNotification('Consultation scheduled successfully! We will contact you soon.', 'success');

    // Reset form
    e.target.reset();
  } catch (error) {
    console.error('Form submission error:', error);
    showNotification('There was an error scheduling your consultation. Please try again.', 'error');
  } finally {
    // Restore button state
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }
}

async function simulateFormSubmission (data) {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

/**
 * Gallery Management
 */
function initGallery () {
  Elements.galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabType = tab.getAttribute('data-tab');
      switchGalleryTab(tabType);
    });
  });

  // Load initial gallery content
  loadGalleryContent('photos');
}

function switchGalleryTab (tabType) {
  AppState.currentGalleryTab = tabType;

  // Update tab active states
  Elements.galleryTabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.getAttribute('data-tab') === tabType) {
      tab.classList.add('active');
    }
  });

  // Show/hide gallery content
  if (tabType === 'photos') {
    Elements.photoGallery.style.display = 'grid';
    Elements.videoGallery.style.display = 'none';
  } else {
    Elements.photoGallery.style.display = 'none';
    Elements.videoGallery.style.display = 'grid';
  }

  // Load content for the selected tab
  loadGalleryContent(tabType);
}

function loadGalleryContent (type) {
  const container = type === 'photos' ? Elements.photoGallery : Elements.videoGallery;

  // Clear existing content
  container.innerHTML = '';

  // Add placeholder content (replace with Firebase integration)
  const placeholderCount = type === 'photos' ? 6 : 3;

  for (let i = 1; i <= placeholderCount; i++) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
      <div class="gallery-placeholder">
        <span class="material-icons">${type === 'photos' ? 'photo_camera' : 'videocam'}</span>
        <p>${type === 'photos' ? 'Training Photo' : 'Training Video'} ${i}</p>
      </div>
    `;
    container.appendChild(item);
  }
}

/**
 * Scroll Effects
 */
function initScrollEffects () {
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Header hide/show on scroll
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      Elements.header.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      Elements.header.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
  });
}

/**
 * Notification System
 */
function showNotification (message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="material-icons">${getNotificationIcon(type)}</span>
      <span>${message}</span>
    </div>
    <button class="notification-close">
      <span class="material-icons">close</span>
    </button>
  `;

  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-background);
    border: 2px solid ${getNotificationColor(type)};
    border-radius: var(--border-radius-md);
    padding: var(--spacing-md);
    box-shadow: var(--shadow-large);
    z-index: var(--z-tooltip);
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    max-width: 400px;
    animation: slideInRight 0.3s ease;
  `;

  // Add to document
  document.body.appendChild(notification);

  // Add close functionality
  const closeButton = notification.querySelector('.notification-close');
  closeButton.addEventListener('click', () => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  });

  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

function getNotificationIcon (type) {
  const icons = {
    success: 'check_circle',
    error: 'error',
    warning: 'warning',
    info: 'info'
  };
  return icons[type] || icons.info;
}

function getNotificationColor (type) {
  const colors = {
    success: 'var(--color-success)',
    error: 'var(--color-error)',
    warning: 'var(--color-warning)',
    info: 'var(--color-info)'
  };
  return colors[type] || colors.info;
}

/**
 * Utility Functions (currently unused but available for future development)
 */
// function debounce (func, wait) {
//   let timeout;
//   return function executedFunction (...args) {
//     const later = () => {
//       clearTimeout(timeout);
//       func(...args);
//     };
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   };
// }

// function throttle (func, limit) {
//   let inThrottle;
//   return function () {
//     const args = arguments;
//     const context = this;
//     if (!inThrottle) {
//       func.apply(context, args);
//       inThrottle = true;
//       setTimeout(() => inThrottle = false, limit);
//     }
//   };
// }

// Add CSS animations for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  
  .notification-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    flex: 1;
  }
  
  .notification-close {
    background: none;
    border: none;
    color: var(--color-text-secondary);
    cursor: pointer;
    padding: var(--spacing-xs);
    border-radius: var(--border-radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .notification-close:hover {
    background-color: var(--color-background-secondary);
  }
  
  .gallery-item {
    aspect-ratio: 16/9;
    border-radius: var(--border-radius-md);
    overflow: hidden;
    box-shadow: var(--shadow-small);
    transition: transform var(--transition-base);
  }
  
  .gallery-item:hover {
    transform: scale(1.02);
  }
  
  .gallery-placeholder {
    width: 100%;
    height: 100%;
    background-color: var(--color-background-tertiary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--color-text-muted);
  }
  
  .gallery-placeholder .material-icons {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
  }
`;
document.head.appendChild(notificationStyles);

// Initialize the application when the DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    AppState,
    initApp,
    setTheme,
    toggleTheme,
    showNotification
  };
}
