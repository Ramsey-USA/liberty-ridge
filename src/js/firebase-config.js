/**
 * Firebase Configuration and Initialization
 * This file handles Firebase setup for the Liberty Ridge Training Grounds website
 */

// Firebase configuration
// NOTE: These are public configuration values and can be safely exposed
const firebaseConfig = {
  apiKey: 'demo-api-key', // Replace with actual API key
  authDomain: 'liberty-ridge-training.firebaseapp.com', // Replace with actual domain
  projectId: 'liberty-ridge-training', // Replace with actual project ID
  storageBucket: 'liberty-ridge-training.appspot.com', // Replace with actual storage bucket
  messagingSenderId: '123456789', // Replace with actual sender ID
  appId: '1:123456789:web:abcdef123456', // Replace with actual app ID
  measurementId: 'G-XXXXXXXXXX' // Replace with actual measurement ID
};

// Development vs Production environment detection
const isLocalhost = window.location.hostname === 'localhost' ||
                   window.location.hostname === '127.0.0.1' ||
                   window.location.hostname.includes('gitpod') ||
                   window.location.hostname.includes('codespace');

// Initialize Firebase (using global variables from CDN)
let app, auth, db, storage, analytics;

// Initialize Firebase when the page loads
document.addEventListener('DOMContentLoaded', async () => {
  if (typeof firebase !== 'undefined') {
    // Initialize Firebase
    app = firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore();
    storage = firebase.storage();

    // Initialize Analytics (only in production)
    if (!isLocalhost && firebase.analytics) {
      try {
        analytics = firebase.analytics();
      } catch (error) {
        console.warn('Analytics initialization failed:', error);
      }
    }

    // Connect to emulators in development
    if (isLocalhost) {
      console.log('🔧 Development mode: Connecting to Firebase emulators');

      try {
        // Connect to Auth emulator
        auth.useEmulator('http://localhost:9099');

        // Connect to Firestore emulator
        db.useEmulator('localhost', 8080);

        // Connect to Storage emulator
        storage.useEmulator('localhost', 9199);

        console.log('✅ Connected to Firebase emulators');
      } catch (error) {
        console.warn('⚠️ Emulator connection failed (this is normal if emulators are not running):', error.message);
      }
    }

    console.log('🔥 Firebase initialized successfully');

    // Trigger custom event that Firebase is ready
    window.dispatchEvent(new CustomEvent('firebaseReady', {
      detail: { app, auth, db, storage, analytics }
    }));
  } else {
    console.error('Firebase SDK not loaded. Make sure to include Firebase CDN scripts.');
  }
});

// Firebase service functions
export const firebaseServices = {
  get app () { return app; },
  get auth () { return auth; },
  get db () { return db; },
  get storage () { return storage; },
  get analytics () { return analytics; }
};

// Authentication helpers
export const authHelpers = {
  /**
   * Check if user is authenticated
   */
  isAuthenticated () {
    return auth.currentUser !== null;
  },

  /**
   * Check if current user is admin
   */
  async isAdmin () {
    if (!auth.currentUser) return false;
    try {
      const idTokenResult = await auth.currentUser.getIdTokenResult();
      return idTokenResult.claims.admin === true;
    } catch (error) {
      console.error('Error checking admin status:', error);
      return false;
    }
  },

  /**
   * Get current user info
   */
  getCurrentUser () {
    return auth.currentUser;
  },

  /**
   * Listen for auth state changes
   */
  onAuthStateChange (callback) {
    return auth.onAuthStateChanged(callback);
  }
};

// Firestore helpers
export const firestoreHelpers = {
  /**
   * Get a document reference
   */
  doc (collection, docId) {
    return doc(db, collection, docId);
  },

  /**
   * Get a collection reference
   */
  collection (collectionName) {
    return collection(db, collectionName);
  },

  /**
   * Add timestamp to document data
   */
  addTimestamp (data) {
    return {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  },

  /**
   * Update timestamp for existing document
   */
  updateTimestamp (data) {
    return {
      ...data,
      updatedAt: new Date()
    };
  }
};

// Storage helpers
export const storageHelpers = {
  /**
   * Get a storage reference
   */
  ref (path) {
    return ref(storage, path);
  },

  /**
   * Generate a unique filename
   */
  generateUniqueFilename (originalName) {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2);
    const extension = originalName.split('.').pop();
    return `${timestamp}_${random}.${extension}`;
  },

  /**
   * Get file size in human readable format
   */
  formatFileSize (bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
};

// Error handling
export const firebaseErrors = {
  /**
   * Get user-friendly error message
   */
  getErrorMessage (error) {
    const errorMessages = {
      'auth/user-not-found': 'No account found with this email address.',
      'auth/wrong-password': 'Incorrect password.',
      'auth/email-already-in-use': 'An account already exists with this email address.',
      'auth/weak-password': 'Password should be at least 6 characters.',
      'auth/invalid-email': 'Please enter a valid email address.',
      'auth/too-many-requests': 'Too many unsuccessful attempts. Please try again later.',
      'permission-denied': 'You do not have permission to perform this action.',
      unavailable: 'Service is currently unavailable. Please try again later.',
      'deadline-exceeded': 'Request timed out. Please try again.',
      'resource-exhausted': 'Service quota exceeded. Please try again later.'
    };

    return errorMessages[error.code] || error.message || 'An unexpected error occurred.';
  },

  /**
   * Log error for debugging
   */
  logError (context, error) {
    console.error(`Firebase Error [${context}]:`, {
      code: error.code,
      message: error.message,
      stack: error.stack
    });
  }
};

// Initialize app state management
export const appState = {
  user: null,
  isAdmin: false,
  isLoading: true,

  /**
   * Initialize app state
   */
  async init () {
    return new Promise((resolve) => {
      const unsubscribe = authHelpers.onAuthStateChange(async (user) => {
        this.user = user;
        this.isAdmin = user ? await authHelpers.isAdmin() : false;
        this.isLoading = false;

        // Trigger custom event for state change
        window.dispatchEvent(new CustomEvent('authStateChanged', {
          detail: { user, isAdmin: this.isAdmin }
        }));

        unsubscribe();
        resolve({ user, isAdmin: this.isAdmin });
      });
    });
  }
};

// Environment configuration
export const config = {
  isDevelopment: isLocalhost,
  isProduction: !isLocalhost,
  emulatorPorts: {
    auth: 9099,
    firestore: 8080,
    storage: 9199,
    hosting: 5000,
    ui: 4000
  },
  api: {
    // HighLevel CRM webhook URL (replace with actual URL)
    highlevelWebhook: 'https://hooks.zapier.com/hooks/catch/your-webhook-id/',
    // Other API endpoints
    contactForm: '/api/contact',
    newsletter: '/api/newsletter'
  }
};

// Development helpers
if (isLocalhost) {
  // Expose Firebase services to global scope for debugging
  window.firebase = {
    app,
    auth,
    db,
    storage,
    analytics,
    helpers: { authHelpers, firestoreHelpers, storageHelpers },
    errors: firebaseErrors,
    config
  };

  console.log('🔥 Firebase services available in window.firebase for debugging');
}

// Export default configuration
export default {
  ...firebaseServices,
  helpers: { authHelpers, firestoreHelpers, storageHelpers },
  errors: firebaseErrors,
  appState,
  config
};
