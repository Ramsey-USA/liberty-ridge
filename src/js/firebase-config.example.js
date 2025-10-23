/*
  Example Firebase config and initializer.

  Usage:
  1. Copy this file to `src/js/firebase-config.js`.
     cp src/js/firebase-config.example.js src/js/firebase-config.js
  2. Fill in the firebaseConfig values from your Firebase project settings.
  3. The file initializes Firebase (compat SDK used by this project) and
     dispatches a `firebaseReady` event with { db, storage } so the data layer can
     start (see `src/js/firebase-data-service.js`).

  Important: Do NOT commit `src/js/firebase-config.js` with real secrets. Keep it
  out of version control or use environment-injection during your CI/CD pipeline.
*/

// <-- Replace the values below with your project's Firebase config -->
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT.firebaseapp.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT.appspot.com',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
  measurementId: 'G-XXXXXXXXXX'
};

(function initFirebase() {
  if (typeof firebase === 'undefined' || !firebase.initializeApp) {
    console.warn('Firebase SDK not detected - ensure the Firebase <script> tags are loaded in index.html');
    return;
  }

  try {
    // Initialize Firebase app
    firebase.initializeApp(firebaseConfig);

    // Optional: initialize analytics if available
    if (firebase.analytics) {
      try {
        firebase.analytics();
      } catch (e) {
        // Analytics may fail in some environments (CSP, SSR) - ignore
      }
    }

    // Prepare commonly-used services
    const db = firebase.firestore();
    const storage = firebase.storage();

    // Notify the rest of the application that Firebase is ready
    window.dispatchEvent(new CustomEvent('firebaseReady', { detail: { db, storage } }));
    // Also expose for debugging (optional)
    window.__LR_FIREBASE__ = { firebase, db, storage };
    console.info('Firebase initialized and firebaseReady event dispatched');
  } catch (err) {
    console.error('Failed to initialize Firebase:', err);
  }
})();
