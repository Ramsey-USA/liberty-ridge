import { db } from './firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where, orderBy } from 'firebase/firestore';

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