/**
 * Admin Dashboard JavaScript
 * Handles admin authentication and dashboard functionality
 */

class AdminDashboard {
  constructor () {
    this.currentUser = null;
    this.currentTab = 'dashboard';
    this.isAuthenticated = false;
  }

  /**
   * Initialize the admin dashboard
   */
  init () {
    this.checkAuthState();
    this.attachEventListeners();
    this.initTheme();
  }

  /**
   * Check authentication state on page load
   */
  checkAuthState () {
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
  attachEventListeners () {
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

    // Upload media button
    const uploadMediaBtn = document.getElementById('uploadMediaBtn');
    if (uploadMediaBtn) {
      uploadMediaBtn.addEventListener('click', () => this.showUploadModal());
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
  async handleLogin (e) {
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
  handleLogout () {
    localStorage.removeItem('admin-demo-login');
    this.showAuthScreen();
    this.showNotification('Logged out successfully', 'info');
  }

  /**
   * Show authentication screen
   */
  showAuthScreen () {
    document.getElementById('authScreen').style.display = 'flex';
    document.getElementById('adminDashboard').style.display = 'none';
    this.isAuthenticated = false;
  }

  /**
   * Show dashboard
   */
  showDashboard () {
    document.getElementById('authScreen').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'flex';
    this.isAuthenticated = true;
    this.loadDashboardData();
  }

  /**
   * Switch between dashboard tabs
   */
  switchTab (tabName) {
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
  loadDashboardData () {
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
  loadRecentActivity () {
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
  loadTabData (tabName) {
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
  loadAppointments () {
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
  loadGalleryItems () {
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
  loadFAQItems () {
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
  loadContactForms () {
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
  attachMockActionListeners () {
    // Upload media button
    const uploadBtn = document.getElementById('uploadMediaBtn');
    if (uploadBtn) {
      uploadBtn.addEventListener('click', () => {
        this.showUploadModal();
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
  editAppointment (id) {
    this.showNotification(`Edit appointment ${id} functionality would be implemented here`, 'info');
  }

  deleteAppointment (id) {
    this.showNotification(`Delete appointment ${id} functionality would be implemented here`, 'warning');
  }

  /**
   * Initialize theme
   */
  initTheme () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  /**
   * Toggle theme
   */
  toggleTheme () {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  /**
   * Show loading state
   */
  showLoading (show) {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
      overlay.style.display = show ? 'flex' : 'none';
    }
  }

  /**
   * Show authentication error
   */
  showAuthError (message) {
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
  showNotification (message, type = 'info') {
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
  getActivityIcon (type) {
    const icons = {
      appointment: 'event',
      gallery: 'photo_library',
      contact: 'contact_mail',
      default: 'notifications'
    };
    return icons[type] || icons.default;
  }

  getNotificationIcon (type) {
    const icons = {
      success: 'check_circle',
      error: 'error',
      warning: 'warning',
      info: 'info'
    };
    return icons[type] || icons.info;
  }

  getNotificationColor (type) {
    const colors = {
      success: '#4caf50',
      error: '#f44336',
      warning: '#ff9800',
      info: '#2196f3'
    };
    return colors[type] || colors.info;
  }

  /**
   * Show upload modal for media files
   */
  showUploadModal () {
    const modal = document.createElement('div');
    modal.className = 'upload-modal';
    modal.innerHTML = `
      <div class="upload-modal-backdrop"></div>
      <div class="upload-modal-content">
        <div class="upload-modal-header">
          <h3>Upload Media Files</h3>
          <button class="upload-modal-close" aria-label="Close modal">
            <span class="material-icons">close</span>
          </button>
        </div>
        <div class="upload-modal-body">
          <div class="upload-instructions">
            <h4>📋 Upload Guidelines</h4>
            <ul>
              <li><strong>Images:</strong> JPG, PNG, WebP (max 10MB each)</li>
              <li><strong>Videos:</strong> MP4, WebM (max 100MB each)</li>
              <li><strong>Recommended sizes:</strong> 1920x1080 for photos, 1280x720 for videos</li>
              <li><strong>File naming:</strong> Use descriptive names (e.g., "safety-training-2024.jpg")</li>
            </ul>
          </div>

          <div class="upload-zone" id="uploadZone">
            <span class="material-icons">cloud_upload</span>
            <h4>Drag & Drop Files Here</h4>
            <p>or click to browse files</p>
            <input type="file" id="fileInput" multiple accept="image/*,video/*" style="display: none;">
          </div>

          <div class="upload-preview" id="uploadPreview"></div>

          <div class="upload-metadata">
            <div class="form-group">
              <label for="uploadCategory">Category</label>
              <select id="uploadCategory" class="form-control">
                <option value="safety">Safety Training</option>
                <option value="marksmanship">Marksmanship</option>
                <option value="tactical">Tactical Training</option>
                <option value="concealed-carry">Concealed Carry</option>
                <option value="group">Group Training</option>
                <option value="maintenance">Equipment Maintenance</option>
              </select>
            </div>

            <div class="form-group">
              <label for="uploadDescription">Description</label>
              <textarea id="uploadDescription" class="form-control" placeholder="Enter a description for this media..." rows="3"></textarea>
            </div>
          </div>

          <div class="upload-progress" id="uploadProgress" style="display: none;">
            <div class="progress-bar">
              <div class="progress-fill" id="progressFill"></div>
            </div>
            <p id="progressText">Uploading...</p>
          </div>
        </div>
        <div class="upload-modal-footer">
          <button class="btn btn-secondary upload-cancel">Cancel</button>
          <button class="btn btn-primary upload-submit" id="uploadSubmit" disabled>Upload Files</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    this.initUploadModal(modal);
  }

  /**
   * Initialize upload modal functionality
   */
  initUploadModal (modal) {
    const uploadZone = modal.querySelector('#uploadZone');
    const fileInput = modal.querySelector('#fileInput');
    const uploadPreview = modal.querySelector('#uploadPreview');
    const uploadSubmit = modal.querySelector('#uploadSubmit');
    const closeBtn = modal.querySelector('.upload-modal-close');
    const cancelBtn = modal.querySelector('.upload-cancel');
    const backdrop = modal.querySelector('.upload-modal-backdrop');

    const selectedFiles = [];

    // File selection handlers
    uploadZone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => this.handleFileSelection(e.target.files, selectedFiles, uploadPreview, uploadSubmit));

    // Drag and drop handlers
    uploadZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadZone.classList.add('dragover');
    });

    uploadZone.addEventListener('dragleave', () => {
      uploadZone.classList.remove('dragover');
    });

    uploadZone.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadZone.classList.remove('dragover');
      this.handleFileSelection(e.dataTransfer.files, selectedFiles, uploadPreview, uploadSubmit);
    });

    // Submit handler
    uploadSubmit.addEventListener('click', () => {
      this.processUpload(selectedFiles, modal);
    });

    // Close handlers
    [closeBtn, cancelBtn, backdrop].forEach(element => {
      element.addEventListener('click', () => {
        document.body.removeChild(modal);
      });
    });
  }

  /**
   * Handle file selection for upload
   */
  handleFileSelection (files, selectedFiles, previewContainer, submitButton) {
    const validFiles = Array.from(files).filter(file => {
      const isImage = file.type.startsWith('image/');
      const isVideo = file.type.startsWith('video/');
      const isValidSize = (isImage && file.size <= 10 * 1024 * 1024) || (isVideo && file.size <= 100 * 1024 * 1024);

      return (isImage || isVideo) && isValidSize;
    });

    selectedFiles.push(...validFiles);
    this.updateUploadPreview(selectedFiles, previewContainer);
    submitButton.disabled = selectedFiles.length === 0;
  }

  /**
   * Update upload preview
   */
  updateUploadPreview (files, container) {
    container.innerHTML = files.map((file, index) => `
      <div class="upload-file-preview" data-index="${index}">
        <div class="file-preview-content">
          ${file.type.startsWith('image/')
            ? `<img src="${URL.createObjectURL(file)}" alt="${file.name}" class="preview-image">`
            : '<div class="preview-video"><span class="material-icons">videocam</span></div>'
          }
        </div>
        <div class="file-preview-info">
          <h5>${file.name}</h5>
          <p>${this.formatFileSize(file.size)}</p>
        </div>
        <button class="file-remove" onclick="this.removeFile(${index})">
          <span class="material-icons">close</span>
        </button>
      </div>
    `).join('');
  }

  /**
   * Process file upload
   */
  async processUpload (files, modal) {
    const progressContainer = modal.querySelector('#uploadProgress');
    const progressFill = modal.querySelector('#progressFill');
    const progressText = modal.querySelector('#progressText');
    const category = modal.querySelector('#uploadCategory').value;
    const description = modal.querySelector('#uploadDescription').value;

    progressContainer.style.display = 'block';

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const progress = ((i + 1) / files.length) * 100;

        progressFill.style.width = `${progress}%`;
        progressText.textContent = `Uploading ${file.name} (${i + 1}/${files.length})`;

        // Simulate upload process (replace with actual Firebase Storage upload)
        await this.uploadFile(file, category, description);
      }

      this.showNotification('Files uploaded successfully!', 'success');
      document.body.removeChild(modal);
      this.loadGalleryItems(); // Refresh gallery
    } catch (error) {
      this.showNotification('Upload failed: ' + error.message, 'error');
    }
  }

  /**
   * Upload single file to storage
   */
  async uploadFile (file, category, description) {
    // Check if Firebase is available
    if (typeof firebase === 'undefined' || !firebase.storage) {
      throw new Error('Firebase Storage not available');
    }

    try {
      // Generate unique filename
      const timestamp = Date.now();
      const random = Math.random().toString(36).substring(2);
      const extension = file.name.split('.').pop();
      const uniqueFilename = `${category}/${timestamp}_${random}.${extension}`;

      // Create storage reference
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(`media/${uniqueFilename}`);

      // Upload file with metadata
      const metadata = {
        contentType: file.type,
        customMetadata: {
          category,
          description,
          originalName: file.name,
          uploadedAt: new Date().toISOString(),
          uploadedBy: 'admin' // In production, use actual user ID
        }
      };

      // Perform upload
      const uploadTask = fileRef.put(file, metadata);

      // Return a promise that resolves when upload completes
      return new Promise((resolve, reject) => {
        uploadTask.on('state_changed',
          // Progress function
          () => {
            // Progress tracking for upload - no action needed in demo
          },
          // Error function
          (error) => {
            // console.error('Upload error:', error);
            reject(error);
          },
          // Complete function
          async () => {
            try {
              // Get download URL
              const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();

              // Save file info to Firestore
              const fileInfo = {
                name: file.name,
                url: downloadURL,
                category,
                description,
                type: file.type.startsWith('image/') ? 'photo' : 'video',
                size: file.size,
                metadata: metadata.customMetadata,
                createdAt: new Date(),
                updatedAt: new Date()
              };

              // Add to Firestore collection
              if (firebase.firestore) {
                await firebase.firestore().collection('gallery').add(fileInfo);
              }

              resolve({
                success: true,
                url: downloadURL,
                fileInfo
              });
            } catch (error) {
              reject(error);
            }
          }
        );
      });
    } catch (error) {
      // console.error('Firebase upload error:', error);
      // Fallback to mock upload for development
      return this.mockUpload(file, category, description);
    }
  }

  /**
   * Mock upload for development/testing
   */
  async mockUpload (file, category, description) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockResult = {
          success: true,
          url: URL.createObjectURL(file),
          fileInfo: {
            name: file.name,
            size: file.size,
            type: file.type,
            category,
            description,
            uploadDate: new Date().toISOString()
          }
        };

        // In development, log the upload details
        if (window.location.hostname === 'localhost') {
          // console.log('Mock upload completed:', mockResult);
        }

        resolve(mockResult);
      }, 1000 + Math.random() * 2000); // Simulate 1-3 second upload
    });
  }

  /**
   * Format file size for display
   */
  formatFileSize (bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
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
