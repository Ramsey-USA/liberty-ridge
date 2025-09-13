import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User } from 'firebase/auth';

// User authentication functions for future admin panel
export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in: ', error);
    throw error;
  }
};

export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error creating account: ', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out: ', error);
    throw error;
  }
};

// Check if user is admin (you'll need to implement role checking)
export const isAdmin = (user: User | null): boolean => {
  // This is a placeholder - in production, you'd check user roles in Firestore
  // For now, you can manually add admin emails here
  const adminEmails = ['zach@libertyridegetraininggrounds.com', 'admin@libertyridegetraininggrounds.com'];
  return user ? adminEmails.includes(user.email || '') : false;
};