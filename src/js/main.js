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
function initApp() {
  cacheElements();
  initTheme();
  initNavigation();
  initChatbot();
  initForms();
  initGallery();
  initScrollEffects();

  // Application successfully initialized
}

/**
 * Cache DOM elements for better performance
 */
function cacheElements() {
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
function initTheme() {
  // Check for saved theme preference or default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  // Theme toggle event listener
  if (Elements.themeToggle) {
    Elements.themeToggle.addEventListener('click', toggleTheme);
  }
}

function setTheme(theme) {
  AppState.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  // Update theme toggle icon
  if (Elements.themeToggle) {
    const icon = Elements.themeToggle.querySelector('.material-icons');
    icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
  }
}

function toggleTheme() {
  const newTheme = AppState.theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

/**
 * Navigation Management
 */
function initNavigation() {
  // Mobile menu toggle
  if (Elements.menuToggle) {
    Elements.menuToggle.addEventListener('click', toggleMobileMenu);
  }

  // Close mobile menu when clicking on nav links
  const mobileNavLinks = document.querySelectorAll('.nav-mobile-link');
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Smooth scroll for anchor links
  const allNavLinks = document.querySelectorAll('a[href^="#"]');
  allNavLinks.forEach((link) => {
    link.addEventListener('click', handleSmoothScroll);
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (
      AppState.mobileMenuOpen &&
      !Elements.navMobile.contains(e.target) &&
      !Elements.menuToggle.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });
}

function toggleMobileMenu() {
  AppState.mobileMenuOpen = !AppState.mobileMenuOpen;

  if (AppState.mobileMenuOpen) {
    openMobileMenu();
  } else {
    closeMobileMenu();
  }
}

function openMobileMenu() {
  Elements.navMobile.classList.add('active');
  Elements.menuToggle.classList.add('active');
  Elements.menuToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeMobileMenu() {
  AppState.mobileMenuOpen = false;
  Elements.navMobile.classList.remove('active');
  Elements.menuToggle.classList.remove('active');
  Elements.menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = ''; // Restore scroll
}

function handleSmoothScroll(e) {
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
function initChatbot() {
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

function toggleChatbot() {
  AppState.chatbotOpen = !AppState.chatbotOpen;

  if (AppState.chatbotOpen) {
    openChatbot();
  } else {
    closeChatbot();
  }
}

function openChatbot() {
  Elements.chatbotWindow.classList.add('active');
  Elements.chatbotToggle.setAttribute('aria-expanded', 'true');
}

function closeChatbot() {
  AppState.chatbotOpen = false;
  Elements.chatbotWindow.classList.remove('active');
  Elements.chatbotToggle.setAttribute('aria-expanded', 'false');
}

function handleChatbotMessage() {
  const input = document.getElementById('chatbotInput');
  const message = input.value.trim();

  if (message) {
    addChatMessage(message, 'user');
    input.value = '';

    // Simulate bot response
    setTimeout(() => {
      addChatMessage("Thanks for your message! We'll get back to you soon.", 'bot');
    }, 1000);
  }
}

function addChatMessage(message, sender) {
  const messagesContainer = document.getElementById('chatbotMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message chat-message-${sender}`;
  messageDiv.textContent = message;

  if (messagesContainer) {
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}

/**
 * Form Management
 */
function initForms() {
  if (Elements.consultationForm) {
    Elements.consultationForm.addEventListener('submit', handleConsultationForm);
  }
}

function handleConsultationForm(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // Basic validation
  if (!data.name || !data.email || !data.message) {
    alert('Please fill in all required fields.');
    return;
  }

  // Simulate form submission
  alert("Thank you for your submission! We'll contact you soon.");
  e.target.reset();
}

/**
 * Gallery Management
 */
function initGallery() {
  if (Elements.galleryTabs) {
    Elements.galleryTabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const tabType = tab.dataset.tab;
        switchGalleryTab(tabType);
      });
    });
  }
}

function switchGalleryTab(tabType) {
  AppState.currentGalleryTab = tabType;

  // Update tab active states
  Elements.galleryTabs.forEach((tab) => {
    if (tab.dataset.tab === tabType) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // Show/hide gallery content
  if (Elements.photoGallery && Elements.videoGallery) {
    if (tabType === 'photos') {
      Elements.photoGallery.style.display = 'grid';
      Elements.videoGallery.style.display = 'none';
    } else {
      Elements.photoGallery.style.display = 'none';
      Elements.videoGallery.style.display = 'grid';
    }
  }
}

/**
 * Scroll Effects
 */
function initScrollEffects() {
  // Header background on scroll
  window.addEventListener('scroll', () => {
    if (Elements.header) {
      if (window.scrollY > 100) {
        Elements.header.classList.add('scrolled');
      } else {
        Elements.header.classList.remove('scrolled');
      }
    }
  });

  // Scroll to top functionality
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page is hidden
  } else {
    // Page is visible
  }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    AppState,
    Elements,
    initApp
  };
}
