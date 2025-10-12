/**
 * Admin Dashboard JavaScript
 * Handles admin authentication and dashboard functionality
 */

class AdminDashboard {
  constructor() {
    this.currentUser = null;
    this.currentTab = 'dashboard';
    this.isAuthenticated = false;
  }

  /**
   * Initialize the admin dashboard
   */
  init() {
    this.checkAuthState();
    this.attachEventListeners();
    this.initTheme();
  }

  /**
   * Check authentication state on page load
   */
  checkAuthState() {
    // Check for demo login state in localStorage
    const demoLogin = localStorage.getItem('admin-demo-login');
    
    if (demoLogin === 'true') {
      this.showDashboard();
    } else {
      this.showAuthScreen();
    }
  }

  /**
   * Attach event listeners
   */
  attachEventListeners() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => this.handleLogin(e));
    }

    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => this.handleLogout());
    }

    // Tab navigation
    const adminNavLinks = document.querySelectorAll('.admin-nav-link');
    adminNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = e.target.getAttribute('data-tab') || e.target.closest('.admin-nav-link').getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Mock action buttons
    this.attachMockActionListeners();
  }

  /**
   * Handle login form submission
   */
  async handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;
    
    this.showLoading(true);
    
    try {
      // Simulate authentication delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Demo login - accept any email/password for now
      if (email && password) {
        localStorage.setItem('admin-demo-login', 'true');
        this.showDashboard();
        this.showNotification('Login successful!', 'success');
      } else {
        throw new Error('Please enter both email and password');
      }
    } catch (error) {
      this.showAuthError(error.message);
    } finally {
      this.showLoading(false);
    }
  }

  /**
   * Handle logout
   */
  handleLogout() {
    localStorage.removeItem('admin-demo-login');
    this.showAuthScreen();
    this.showNotification('Logged out successfully', 'info');
  }

  /**
   * Show authentication screen
   */
  showAuthScreen() {
    document.getElementById('authScreen').style.display = 'flex';
    document.getElementById('adminDashboard').style.display = 'none';
    this.isAuthenticated = false;
  }

  /**
   * Show dashboard
   */
  showDashboard() {
    document.getElementById('authScreen').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'flex';
    this.isAuthenticated = true;
    this.loadDashboardData();
  }

  /**
   * Switch between dashboard tabs
   */
  switchTab(tabName) {
    this.currentTab = tabName;
    
    // Update navigation active state
    document.querySelectorAll('.admin-nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-tab') === tabName) {
        link.classList.add('active');
      }
    });

    // Show/hide tab content
    document.querySelectorAll('.admin-tab').forEach(tab => {
      tab.classList.remove('active');
    });
    
    const activeTab = document.getElementById(`${tabName}-tab`);
    if (activeTab) {
      activeTab.classList.add('active');
    }

    // Load tab-specific data
    this.loadTabData(tabName);
  }

  /**
   * Load dashboard data
   */
  loadDashboardData() {
    // Mock data for demonstration
    document.getElementById('totalAppointments').textContent = '24';
    document.getElementById('pendingAppointments').textContent = '6';
    document.getElementById('totalGalleryItems').textContent = '18';
    document.getElementById('totalContactForms').textContent = '12';

    // Load recent activity
    this.loadRecentActivity();
  }

  /**
   * Load recent activity
   */
  loadRecentActivity() {
    const activities = [
      { type: 'appointment', message: 'New consultation booked for Oct 15, 2024', time: '2 hours ago' },
      { type: 'gallery', message: 'New training photo uploaded', time: '4 hours ago' },
      { type: 'contact', message: 'Contact form submitted by Sarah Johnson', time: '6 hours ago' },
      { type: 'appointment', message: 'Appointment confirmed for Oct 14, 2024', time: '1 day ago' }
    ];

    const activityContainer = document.getElementById('recentActivity');
    activityContainer.innerHTML = activities.map(activity => `
      <div class="activity-item">
        <div class="activity-icon">
          <span class="material-icons">${this.getActivityIcon(activity.type)}</span>
        </div>
        <div class="activity-content">
          <p>${activity.message}</p>
          <span class="activity-time">${activity.time}</span>
        </div>
      </div>
    `).join('');
  }

  /**
   * Load tab-specific data
   */
  loadTabData(tabName) {
    switch (tabName) {
      case 'appointments':
        this.loadAppointments();
        break;
      case 'gallery':
        this.loadGalleryItems();
        break;
      case 'faq':
        this.loadFAQItems();
        break;
      case 'contact':
        this.loadContactForms();
        break;
      default:
        break;
    }
  }

  /**
   * Load appointments (mock data)
   */
  loadAppointments() {
    const appointments = [
      {
        id: 1,
        date: '2024-10-15',
        time: '10:00 AM',
        name: 'John Smith',
        email: 'john@example.com',
        phone: '(555) 123-4567',
        experience: 'Beginner',
        status: 'pending'
      },
      {
        id: 2,
        date: '2024-10-16',
        time: '2:00 PM',
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        phone: '(555) 987-6543',
        experience: 'Intermediate',
        status: 'confirmed'
      }
    ];

    const tableBody = document.getElementById('appointmentsTableBody');
    if (tableBody) {
      tableBody.innerHTML = appointments.map(appointment => `
        <tr>
          <td>${appointment.date}</td>
          <td>${appointment.time}</td>
          <td>${appointment.name}</td>
          <td>${appointment.email}</td>
          <td>${appointment.phone}</td>
          <td>${appointment.experience}</td>
          <td><span class="status-badge status-${appointment.status}">${appointment.status}</span></td>
          <td>
            <button class="btn btn-sm btn-secondary" onclick="adminDashboard.editAppointment(${appointment.id})">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="adminDashboard.deleteAppointment(${appointment.id})">Delete</button>
          </td>
        </tr>
      `).join('');
    }
  }

  /**
   * Load gallery items (mock data)
   */
  loadGalleryItems() {
    const galleryGrid = document.getElementById('adminGalleryGrid');
    if (galleryGrid) {
      galleryGrid.innerHTML = `
        <div class="admin-gallery-item">
          <img src="../assets/images/training-1.jpg" alt="Training 1">
          <div class="gallery-item-actions">
            <button class="btn btn-sm btn-secondary">Edit</button>
            <button class="btn btn-sm btn-danger">Delete</button>
          </div>
        </div>
        <div class="admin-gallery-item">
          <img src="../assets/images/training-2.jpg" alt="Training 2">
          <div class="gallery-item-actions">
            <button class="btn btn-sm btn-secondary">Edit</button>
            <button class="btn btn-sm btn-danger">Delete</button>
          </div>
        </div>
      `;
    }
  }

  /**
   * Load FAQ items (mock data)
   */
  loadFAQItems() {
    const faqList = document.getElementById('faqList');
    if (faqList) {
      faqList.innerHTML = `
        <div class="faq-item">
          <h4>What types of firearms training do you offer?</h4>
          <p>We offer comprehensive training including basic firearm safety, advanced marksmanship...</p>
          <div class="faq-actions">
            <button class="btn btn-sm btn-secondary">Edit</button>
            <button class="btn btn-sm btn-danger">Delete</button>
          </div>
        </div>
      `;
    }
  }

  /**
   * Load contact forms (mock data)
   */
  loadContactForms() {
    const tableBody = document.getElementById('contactTableBody');
    if (tableBody) {
      tableBody.innerHTML = `
        <tr>
          <td>2024-10-12</td>
          <td>Mike Davis</td>
          <td>mike@example.com</td>
          <td>Training Inquiry</td>
          <td><span class="status-badge status-new">New</span></td>
          <td>
            <button class="btn btn-sm btn-secondary">View</button>
            <button class="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
      `;
    }
  }

  /**
   * Attach mock action listeners
   */
  attachMockActionListeners() {
    // Upload media button
    const uploadBtn = document.getElementById('uploadMediaBtn');
    if (uploadBtn) {
      uploadBtn.addEventListener('click', () => {
        this.showNotification('Upload functionality would be implemented here', 'info');
      });
    }

    // Add FAQ button
    const addFaqBtn = document.getElementById('addFaqBtn');
    if (addFaqBtn) {
      addFaqBtn.addEventListener('click', () => {
        this.showNotification('Add FAQ functionality would be implemented here', 'info');
      });
    }

    // Create slots button
    const createSlotBtn = document.getElementById('createSlotBtn');
    if (createSlotBtn) {
      createSlotBtn.addEventListener('click', () => {
        this.showNotification('Create slots functionality would be implemented here', 'info');
      });
    }
  }

  /**
   * Mock methods for demo
   */
  editAppointment(id) {
    this.showNotification(`Edit appointment ${id} functionality would be implemented here`, 'info');
  }

  deleteAppointment(id) {
    this.showNotification(`Delete appointment ${id} functionality would be implemented here`, 'warning');
  }

  /**
   * Initialize theme
   */
  initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  /**
   * Toggle theme
   */
  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  /**
   * Show loading state
   */
  showLoading(show) {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
      overlay.style.display = show ? 'flex' : 'none';
    }
  }

  /**
   * Show authentication error
   */
  showAuthError(message) {
    const errorElement = document.getElementById('authError');
    const errorMessageElement = document.getElementById('authErrorMessage');
    
    if (errorElement && errorMessageElement) {
      errorMessageElement.textContent = message;
      errorElement.style.display = 'flex';
      
      setTimeout(() => {
        errorElement.style.display = 'none';
      }, 5000);
    }
  }

  /**
   * Show notification
   */
  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <span class="material-icons">${this.getNotificationIcon(type)}</span>
      <span>${message}</span>
      <button onclick="this.parentElement.remove()">
        <span class="material-icons">close</span>
      </button>
    `;

    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: white;
      border: 2px solid ${this.getNotificationColor(type)};
      border-radius: 8px;
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      z-index: 10000;
      max-width: 400px;
    `;

    document.body.appendChild(notification);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 5000);
  }

  /**
   * Helper methods
   */
  getActivityIcon(type) {
    const icons = {
      appointment: 'event',
      gallery: 'photo_library',
      contact: 'contact_mail',
      default: 'notifications'
    };
    return icons[type] || icons.default;
  }

  getNotificationIcon(type) {
    const icons = {
      success: 'check_circle',
      error: 'error',
      warning: 'warning',
      info: 'info'
    };
    return icons[type] || icons.info;
  }

  getNotificationColor(type) {
    const colors = {
      success: '#4caf50',
      error: '#f44336',
      warning: '#ff9800',
      info: '#2196f3'
    };
    return colors[type] || colors.info;
  }
}

// Initialize admin dashboard
let adminDashboard;

document.addEventListener('DOMContentLoaded', () => {
  adminDashboard = new AdminDashboard();
  adminDashboard.init();
});

// Export for global access
window.adminDashboard = adminDashboard;