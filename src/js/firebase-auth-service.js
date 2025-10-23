/**
 * Firebase Authentication Service
 * Handles admin authentication and authorization for Liberty Ridge Training Grounds
 */

// Wait for Firebase to be ready
let auth, db;

window.addEventListener('firebaseReady', (event) => {
  auth = event.detail.auth;
  db = event.detail.db;
  console.info('🔐 Firebase Auth Service initialized');
});

// Helper function to ensure Firebase is ready
function ensureFirebaseReady() {
  return new Promise((resolve) => {
    if (auth && db) {
      resolve();
    } else {
      window.addEventListener(
        'firebaseReady',
        () => {
          auth = firebase.auth();
          db = firebase.firestore();
          resolve();
        },
        { once: true }
      );
    }
  });
}

/**
 * Authentication Service
 */
export const authService = {
  /**
   * Get current user
   */
  getCurrentUser() {
    return auth ? auth.currentUser : null;
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated() {
    return !!this.getCurrentUser();
  },

  /**
   * Check if current user is admin
   */
  async isAdmin() {
    await ensureFirebaseReady();

    const user = this.getCurrentUser();
    if (!user) return false;

    try {
      // Check if user email is in admin list
      const adminDoc = await db.collection('admin_users').doc(user.uid).get();
      if (adminDoc.exists) {
        return adminDoc.data().isAdmin === true;
      }

      // Fallback: check if email matches admin email
      const adminEmail = 'admin@libertyridgetraininggrounds.com';
      return user.email === adminEmail;
    } catch (error) {
      console.error('Error checking admin status:', error);
      return false;
    }
  },

  /**
   * Sign in with email and password
   */
  async signIn(email, password) {
    await ensureFirebaseReady();

    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Check if user is admin
      const isAdmin = await this.isAdmin();
      if (!isAdmin) {
        await this.signOut();
        throw new Error('Access denied. Admin privileges required.');
      }

      // Log admin login
      await db.collection('admin_logs').add({
        action: 'login',
        adminId: user.uid,
        adminEmail: user.email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        ip: 'unknown' // Could be enhanced with IP detection
      });

      console.info('✅ Admin signed in successfully');
      return user;
    } catch (error) {
      console.error('❌ Sign in failed:', error);
      throw error;
    }
  },

  /**
   * Sign out current user
   */
  async signOut() {
    await ensureFirebaseReady();

    try {
      const user = this.getCurrentUser();
      if (user) {
        // Log admin logout
        await db.collection('admin_logs').add({
          action: 'logout',
          adminId: user.uid,
          adminEmail: user.email,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
      }

      await auth.signOut();
      console.info('✅ Admin signed out successfully');
    } catch (error) {
      console.error('❌ Sign out failed:', error);
      throw error;
    }
  },

  /**
   * Listen to authentication state changes
   */
  onAuthStateChanged(callback) {
    if (auth) {
      return auth.onAuthStateChanged(callback);
    } else {
      // Wait for Firebase to be ready
      window.addEventListener('firebaseReady', () => {
        auth.onAuthStateChanged(callback);
      }, { once: true });
    }
  },

  /**
   * Reset password
   */
  async resetPassword(email) {
    await ensureFirebaseReady();

    try {
      await auth.sendPasswordResetEmail(email);
      console.info('✅ Password reset email sent');
    } catch (error) {
      console.error('❌ Password reset failed:', error);
      throw error;
    }
  }
};

/**
 * Admin Guard - Middleware for protecting admin routes
 */
export const adminGuard = {
  /**
   * Check if user can access admin features
   */
  async canAccess() {
    if (!authService.isAuthenticated()) {
      return false;
    }

    return await authService.isAdmin();
  },

  /**
   * Redirect to login if not authenticated
   */
  async requireAuth(redirectToLogin = true) {
    const canAccess = await this.canAccess();

    if (!canAccess && redirectToLogin) {
      window.location.href = '/admin/login.html';
      return false;
    }

    return canAccess;
  }
};

// Export individual functions for easy importing
export default {
  authService,
  adminGuard
};
