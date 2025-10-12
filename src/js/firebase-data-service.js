/**
 * Firebase Data Service
 * Handles all database operations for the Liberty Ridge Training Grounds website
 */

// Wait for Firebase to be ready
let db, storage;

window.addEventListener('firebaseReady', (event) => {
  db = event.detail.db;
  storage = event.detail.storage;
  // console.log('🔥 Firebase Data Service initialized');
});

// Helper function to ensure Firebase is ready
function ensureFirebaseReady () {
  return new Promise((resolve) => {
    if (db && storage) {
      resolve();
    } else {
      window.addEventListener('firebaseReady', () => {
        db = firebase.firestore();
        storage = firebase.storage();
        resolve();
      }, { once: true });
    }
  });
}

/**
 * Appointment Management
 */
export const appointmentService = {
  /**
   * Create a new appointment
   */
  async create (appointmentData) {
    await ensureFirebaseReady();

    try {
      const appointment = {
        ...appointmentData,
        status: 'pending',
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      };

      const docRef = await db.collection('appointments').add(appointment);

      // Send to HighLevel CRM
      await this.sendToHighLevel(appointment);

      return { id: docRef.id, ...appointment };
    } catch (error) {
      // console.error('Error creating appointment:', error);
      throw error;
    }
  },

  /**
   * Get appointments for a specific date
   */
  async getByDate (date) {
    await ensureFirebaseReady();

    try {
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);

      const querySnapshot = await db.collection('appointments')
        .where('date', '>=', firebase.firestore.Timestamp.fromDate(startOfDay))
        .where('date', '<=', firebase.firestore.Timestamp.fromDate(endOfDay))
        .orderBy('date')
        .get();

      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      // console.error('Error getting appointments by date:', error);
      throw error;
    }
  },

  /**
   * Get all appointments (admin only)
   */
  async getAll () {
    await ensureFirebaseReady();

    try {
      const querySnapshot = await db.collection('appointments')
        .orderBy('date', 'desc')
        .get();

      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      // console.error('Error getting all appointments:', error);
      throw error;
    }
  },

  /**
   * Update appointment status
   */
  async updateStatus (appointmentId, status) {
    await ensureFirebaseReady();

    try {
      await db.collection('appointments').doc(appointmentId).update({
        status,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    } catch (error) {
      // console.error('Error updating appointment status:', error);
      throw error;
    }
  },

  /**
   * Send appointment to HighLevel CRM
   */
  async sendToHighLevel (appointmentData) {
    try {
      const webhookUrl = 'https://hooks.zapier.com/hooks/catch/demo/'; // Replace with actual URL

      const payload = {
        name: appointmentData.name,
        email: appointmentData.email,
        phone: appointmentData.phone,
        date: appointmentData.date,
        time: appointmentData.time,
        experience: appointmentData.experience,
        goals: appointmentData.goals,
        source: 'Liberty Ridge Training Grounds Website',
        type: 'consultation_request'
      };

      // Use fetch to send to webhook
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HighLevel webhook failed: ${response.statusText}`);
      }

      // console.log('Successfully sent to HighLevel CRM');
    } catch (error) {
      // console.error('Error sending to HighLevel:', error);
      // Don't throw error here - appointment should still be saved
    }
  }
};

/**
 * Gallery Management
 */
export const galleryService = {
  /**
   * Get all gallery items
   */
  async getAll () {
    await ensureFirebaseReady();

    try {
      const querySnapshot = await db.collection('gallery')
        .orderBy('createdAt', 'desc')
        .get();

      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      // console.error('Error getting gallery items:', error);
      throw error;
    }
  },

  /**
   * Get gallery items by type (photos/videos)
   */
  async getByType (type) {
    await ensureFirebaseReady();

    try {
      const querySnapshot = await db.collection('gallery')
        .where('type', '==', type)
        .orderBy('createdAt', 'desc')
        .get();

      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      // console.error('Error getting gallery items by type:', error);
      throw error;
    }
  },

  /**
   * Upload media file
   */
  async uploadMedia (file, metadata) {
    await ensureFirebaseReady();

    try {
      // Generate unique filename
      const timestamp = Date.now();
      const randomString = Math.random().toString(36).substring(2);
      const extension = file.name.split('.').pop();
      const filename = `${timestamp}_${randomString}.${extension}`;

      // Determine storage path based on file type
      const isVideo = file.type.startsWith('video/');
      const storagePath = `gallery/${isVideo ? 'videos' : 'photos'}/${filename}`;

      // Upload file to Firebase Storage
      const storageRef = storage.ref().child(storagePath);
      const snapshot = await storageRef.put(file);
      const downloadURL = await snapshot.ref.getDownloadURL();

      // Create database entry
      const galleryItem = {
        title: metadata.title,
        description: metadata.description,
        category: metadata.category,
        type: isVideo ? 'video' : 'photo',
        url: downloadURL,
        storagePath,
        filename,
        fileSize: file.size,
        mimeType: file.type,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      };

      const docRef = await db.collection('gallery').add(galleryItem);

      return { id: docRef.id, ...galleryItem };
    } catch (error) {
      // console.error('Error uploading media:', error);
      throw error;
    }
  },

  /**
   * Delete gallery item
   */
  async delete (itemId) {
    try {
      // Get item data first
      const itemDoc = await getDoc(doc(db, 'gallery', itemId));
      if (!itemDoc.exists()) {
        throw new Error('Gallery item not found');
      }

      const itemData = itemDoc.data();

      // Delete from storage
      if (itemData.storagePath) {
        const storageRef = ref(storage, itemData.storagePath);
        await deleteObject(storageRef);
      }

      // Delete from Firestore
      await deleteDoc(doc(db, 'gallery', itemId));
    } catch (error) {
      // console.error('Error deleting gallery item:', error);
      throw error;
    }
  }
};

/**
 * FAQ Management
 */
export const faqService = {
  /**
   * Get all FAQ items
   */
  async getAll () {
    try {
      const q = query(
        collection(db, 'faq'),
        orderBy('order', 'asc')
      );

      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      // console.error('Error getting FAQ items:', error);
      throw error;
    }
  },

  /**
   * Get FAQ items by category
   */
  async getByCategory (category) {
    try {
      const q = query(
        collection(db, 'faq'),
        where('category', '==', category),
        orderBy('order', 'asc')
      );

      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      // console.error('Error getting FAQ by category:', error);
      throw error;
    }
  },

  /**
   * Create FAQ item
   */
  async create (faqData) {
    try {
      const faq = {
        ...faqData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, 'faq'), faq);
      return { id: docRef.id, ...faq };
    } catch (error) {
      // console.error('Error creating FAQ:', error);
      throw error;
    }
  },

  /**
   * Update FAQ item
   */
  async update (faqId, faqData) {
    try {
      const faqRef = doc(db, 'faq', faqId);
      await updateDoc(faqRef, {
        ...faqData,
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      // console.error('Error updating FAQ:', error);
      throw error;
    }
  },

  /**
   * Delete FAQ item
   */
  async delete (faqId) {
    try {
      await deleteDoc(doc(db, 'faq', faqId));
    } catch (error) {
      // console.error('Error deleting FAQ:', error);
      throw error;
    }
  }
};

/**
 * Available Slots Management
 */
export const availableSlotsService = {
  /**
   * Get available slots for a date range
   */
  async getAvailableSlots (startDate, endDate) {
    try {
      const q = query(
        collection(db, 'available_slots'),
        where('date', '>=', Timestamp.fromDate(startDate)),
        where('date', '<=', Timestamp.fromDate(endDate)),
        where('isAvailable', '==', true),
        orderBy('date', 'asc')
      );

      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      // console.error('Error getting available slots:', error);
      throw error;
    }
  },

  /**
   * Create available time slots for a date
   */
  async createSlotsForDate (date, timeSlots) {
    try {
      const promises = timeSlots.map(timeSlot => {
        const slotData = {
          date: Timestamp.fromDate(date),
          time: timeSlot,
          isAvailable: true,
          createdAt: serverTimestamp()
        };
        return addDoc(collection(db, 'available_slots'), slotData);
      });

      await Promise.all(promises);
    } catch (error) {
      // console.error('Error creating available slots:', error);
      throw error;
    }
  },

  /**
   * Mark time slot as booked
   */
  async markSlotAsBooked (date, time) {
    try {
      const q = query(
        collection(db, 'available_slots'),
        where('date', '==', Timestamp.fromDate(date)),
        where('time', '==', time),
        limit(1)
      );

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const slotDoc = querySnapshot.docs[0];
        await updateDoc(slotDoc.ref, {
          isAvailable: false,
          bookedAt: serverTimestamp()
        });
      }
    } catch (error) {
      // console.error('Error marking slot as booked:', error);
      throw error;
    }
  }
};

/**
 * Contact Form Service
 */
export const contactService = {
  /**
   * Submit contact form
   */
  async submit (contactData) {
    try {
      const contact = {
        ...contactData,
        status: 'new',
        createdAt: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, 'contact'), contact);

      // Send notification email (if configured)
      await this.sendNotificationEmail(contact);

      return { id: docRef.id, ...contact };
    } catch (error) {
      // console.error('Error submitting contact form:', error);
      throw error;
    }
  },

  /**
   * Send notification email
   */
  async sendNotificationEmail (contactData) {
    try {
      // This would integrate with a service like SendGrid, EmailJS, etc.
      // console.log('Contact form submission notification:', contactData);
    } catch (error) {
      // console.error('Error sending notification email:', error);
    }
  }
};

/**
 * Analytics Service
 */
export const analyticsService = {
  /**
   * Log chatbot interaction
   */
  async logChatbotInteraction (interaction) {
    try {
      const log = {
        ...interaction,
        timestamp: serverTimestamp(),
        sessionId: this.getSessionId()
      };

      await addDoc(collection(db, 'chatbot_logs'), log);
    } catch (error) {
      // console.error('Error logging chatbot interaction:', error);
    }
  },

  /**
   * Get or create session ID
   */
  getSessionId () {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  }
};

// Export all services
export default {
  appointment: appointmentService,
  gallery: galleryService,
  faq: faqService,
  availableSlots: availableSlotsService,
  contact: contactService,
  analytics: analyticsService
};
