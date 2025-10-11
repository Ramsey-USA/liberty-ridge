import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc, where } from 'firebase/firestore';

import { db } from './firebase';

// Media management types
export interface MediaItem {
  id?: string;
  title: string;
  description: string;
  category: 'consultation' | 'competition' | 'training' | 'equipment' | 'facility';
  type: 'photo' | 'video';
  url: string;
  thumbnailUrl?: string;
  tags: string[];
  isVisible: boolean;
  uploadedBy: string;
  uploadedAt: Date;
  fileSize?: number;
  dimensions?: { width: number; height: number };
}

// Course enrollment functions
export const enrollStudent = async (studentData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  course: string;
  experience: string;
  message: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, 'enrollments'), {
      ...studentData,
      createdAt: new Date(),
      status: 'pending'
    });
    console.log('Enrollment submitted with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding enrollment: ', error);
    throw error;
  }
};

// Contact form submission
export const submitContactForm = async (contactData: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...contactData,
      createdAt: new Date(),
      status: 'new'
    });
    return docRef.id;
  } catch (error) {
    console.error('Error submitting contact form: ', error);
    throw error;
  }
};

// Team application submission
export const submitTeamApplication = async (applicationData: {
  firstName: string;
  lastName: string;
  email: string;
  militaryBranch: string;
  skills: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, 'team_applications'), {
      ...applicationData,
      createdAt: new Date(),
      status: 'pending_review'
    });
    return docRef.id;
  } catch (error) {
    console.error('Error submitting team application: ', error);
    throw error;
  }
};

// Newsletter signup
export const subscribeToNewsletter = async (email: string) => {
  try {
    const docRef = await addDoc(collection(db, 'newsletter_subscribers'), {
      email,
      subscribedAt: new Date(),
      active: true
    });
    return docRef.id;
  } catch (error) {
    console.error('Error subscribing to newsletter: ', error);
    throw error;
  }
};

// Get course information
export const getCourses = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'courses'));
    const courses = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return courses;
  } catch (error) {
    console.error('Error fetching courses: ', error);
    throw error;
  }
};

// Media Management Functions

// Add new media item
export const addMediaItem = async (mediaData: Omit<MediaItem, 'id' | 'uploadedAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'media'), {
      ...mediaData,
      uploadedAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding media item: ', error);
    throw error;
  }
};

// Get all visible media items
export const getVisibleMedia = async (category?: string): Promise<MediaItem[]> => {
  try {
    let q = query(
      collection(db, 'media'),
      where('isVisible', '==', true),
      orderBy('uploadedAt', 'desc')
    );

    if (category) {
      q = query(
        collection(db, 'media'),
        where('isVisible', '==', true),
        where('category', '==', category),
        orderBy('uploadedAt', 'desc')
      );
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      uploadedAt: doc.data().uploadedAt?.toDate() || new Date()
    })) as MediaItem[];
  } catch (error) {
    console.error('Error fetching visible media: ', error);
    throw error;
  }
};

// Get all media items (admin view)
export const getAllMedia = async (): Promise<MediaItem[]> => {
  try {
    const q = query(collection(db, 'media'), orderBy('uploadedAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      uploadedAt: doc.data().uploadedAt?.toDate() || new Date()
    })) as MediaItem[];
  } catch (error) {
    console.error('Error fetching all media: ', error);
    throw error;
  }
};

// Update media item
export const updateMediaItem = async (id: string, updates: Partial<MediaItem>) => {
  try {
    const docRef = doc(db, 'media', id);
    await updateDoc(docRef, updates);
  } catch (error) {
    console.error('Error updating media item: ', error);
    throw error;
  }
};

// Delete media item
export const deleteMediaItem = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'media', id));
  } catch (error) {
    console.error('Error deleting media item: ', error);
    throw error;
  }
};

// Get media by category
export const getMediaByCategory = async (category: string): Promise<MediaItem[]> => {
  try {
    const q = query(
      collection(db, 'media'),
      where('isVisible', '==', true),
      where('category', '==', category),
      orderBy('uploadedAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      uploadedAt: doc.data().uploadedAt?.toDate() || new Date()
    })) as MediaItem[];
  } catch (error) {
    console.error('Error fetching media by category: ', error);
    throw error;
  }
};

// Toggle media visibility
export const toggleMediaVisibility = async (id: string, isVisible: boolean) => {
  try {
    const docRef = doc(db, 'media', id);
    await updateDoc(docRef, { isVisible });
  } catch (error) {
    console.error('Error toggling media visibility: ', error);
    throw error;
  }
};