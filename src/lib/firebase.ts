// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_MCkY8PxvwN9T2hqN6x9eknVCM8G4tT0",
  authDomain: "liberty-ridge-c9d53.firebaseapp.com",
  projectId: "liberty-ridge-c9d53",
  storageBucket: "liberty-ridge-c9d53.firebasestorage.app",
  messagingSenderId: "649829572366",
  appId: "1:649829572366:web:65d5b0a916ee9bd56b815f",
  measurementId: "G-QKQY97V7FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Export the app instance
export default app;