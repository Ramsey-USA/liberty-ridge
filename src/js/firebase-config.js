/**
 * Firebase Configuration and Initialization
 *
 * IMPORTANT: This file contains your Firebase project configuration.
 * Get these values from your Firebase Console > Project Settings > General > Your apps
 *
 * Steps to set up:
 * 1. Go to https://console.firebase.google.com/
 * 2. Select your project (or create a new one)
 * 3. Go to Project Settings (gear icon) > General tab
 * 4. Scroll to "Your apps" section
 * 5. If no web app exists, click "Add app" and choose Web (</>)
 * 6. Copy the config object values and replace the placeholders below
 */

// Replace these values with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_MCkY8PxvwN9T2hqN6x9eknVCM8G4tT0',
  authDomain: 'liberty-ridge-c9d53.firebaseapp.com',
  projectId: 'liberty-ridge-c9d53',
  storageBucket: 'liberty-ridge-c9d53.firebasestorage.app',
  messagingSenderId: '649829572366',
  appId: '1:649829572366:web:65d5b0a916ee9bd56b815f',
  measurementId: 'G-QKQY97V7FB' // Optional: for Google Analytics
};

/**
 * Initialize Firebase and notify the data service layer
 */
(function initializeFirebase() {
  // Check if Firebase SDK is loaded
  if (typeof firebase === 'undefined') {
    console.error('Firebase SDK not loaded. Check that Firebase scripts are included in HTML.');
    return;
  }

  try {
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    console.info('✅ Firebase initialized successfully');

    // Initialize services
    const db = firebase.firestore();
    const storage = firebase.storage();
    const auth = firebase.auth();

    // Optional: Initialize Analytics if measurementId is provided
    if (firebaseConfig.measurementId && firebase.analytics) {
      try {
        firebase.analytics();
        console.info('✅ Firebase Analytics initialized');
      } catch (analyticsError) {
        console.warn('Firebase Analytics failed to initialize:', analyticsError.message);
      }
    }

    // Dispatch custom event to notify firebase-data-service.js that Firebase is ready
    const firebaseReadyEvent = new CustomEvent('firebaseReady', {
      detail: {
        firebase,
        app,
        db,
        storage,
        auth
      }
    });

    window.dispatchEvent(firebaseReadyEvent);
    console.info('✅ firebaseReady event dispatched');

    // Optional: Make Firebase services globally available for debugging
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      window.firebase = firebase;
      window.firebaseApp = app;
      window.firebaseDb = db;
      window.firebaseStorage = storage;
      window.firebaseAuth = auth;
      console.info('🔧 Firebase services exposed globally for local development');
    }
  } catch (error) {
    console.error('❌ Failed to initialize Firebase:', error);

    // Show user-friendly error message
    if (error.code === 'auth/invalid-api-key') {
      console.error('Invalid API key. Check your firebaseConfig.apiKey value.');
    } else if (error.code === 'auth/project-not-found') {
      console.error('Project not found. Check your firebaseConfig.projectId value.');
    }
  }
})();
