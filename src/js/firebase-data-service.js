/**
 * Firebase Data Service
 * Handles all database operations for the Liberty Ridge Training Grounds website
 * Uses Firebase v9 compat mode syntax - Clean version without try/catch
 */

// Wait for Firebase to be ready
let db, storage;

window.addEventListener('firebaseReady', (event) => {
  db = event.detail.db;
  storage = event.detail.storage;
  // console.log('🔥 Firebase Data Service initialized');
});

// Helper function to ensure Firebase is ready
function ensureFirebaseReady() {
  return new Promise((resolve) => {
    if (db && storage) {
      resolve();
    } else {
      window.addEventListener(
        'firebaseReady',
        () => {
          db = firebase.firestore();
          storage = firebase.storage();
          resolve();
        },
        { once: true }
      );
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
  async create(appointmentData) {
    await ensureFirebaseReady();

    const appointment = {
      ...appointmentData,
      status: 'pending',
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    const docRef = await db.collection('appointments').add(appointment);
    return { id: docRef.id, ...appointment };
  },

  /**
   * Get appointment by ID
   */
  async getById(appointmentId) {
    await ensureFirebaseReady();

    const doc = await db.collection('appointments').doc(appointmentId).get();
    if (!doc.exists) {
      return null;
    }
    return { id: doc.id, ...doc.data() };
  },

  /**
   * Update appointment status
   */
  async updateStatus(appointmentId, status) {
    await ensureFirebaseReady();

    await db.collection('appointments').doc(appointmentId).update({
      status,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  },

  /**
   * Delete appointment
   */
  async delete(appointmentId) {
    await ensureFirebaseReady();
    await db.collection('appointments').doc(appointmentId).delete();
  },

  /**
   * Get appointments with filtering and pagination
   */
  async getAll(filters = {}) {
    await ensureFirebaseReady();

    let query = db.collection('appointments').orderBy('createdAt', 'desc');

    // Apply date range filter
    if (filters.startDate && filters.endDate) {
      const startTimestamp = firebase.firestore.Timestamp.fromDate(new Date(filters.startDate));
      const endTimestamp = firebase.firestore.Timestamp.fromDate(new Date(filters.endDate));
      query = query.where('createdAt', '>=', startTimestamp).where('createdAt', '<=', endTimestamp);
    }

    const snapshot = await query.get();
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
  },

  /**
   * Get appointments by status
   */
  async getByStatus(status, limit = 50) {
    await ensureFirebaseReady();

    const query = db
      .collection('appointments')
      .where('status', '==', status)
      .orderBy('createdAt', 'desc')
      .limit(limit);

    const snapshot = await query.get();
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
  }
};

/**
 * Contact Form Management
 */
export const contactService = {
  /**
   * Submit contact form
   */
  async submit(contactData) {
    await ensureFirebaseReady();

    const contact = {
      ...contactData,
      status: 'new',
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    const docRef = await db.collection('contacts').add(contact);
    return { id: docRef.id, ...contact };
  },

  /**
   * Update contact status
   */
  async updateStatus(contactId, status) {
    await ensureFirebaseReady();

    const contactRef = db.collection('contacts').doc(contactId);
    await contactRef.update({
      status,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  },

  /**
   * Delete contact
   */
  async delete(contactId) {
    await ensureFirebaseReady();
    await db.collection('contacts').doc(contactId).delete();
  }
};

/**
 * Gallery Management
 */
export const galleryService = {
  /**
   * Upload and save gallery item
   */
  async upload(file, metadata = {}) {
    await ensureFirebaseReady();

    // Upload to Storage
    const fileName = `gallery/${Date.now()}_${file.name}`;
    const storageRef = storage.ref(fileName);
    const uploadTask = await storageRef.put(file);
    const downloadURL = await uploadTask.ref.getDownloadURL();

    // Save to Firestore
    const galleryItem = {
      ...metadata,
      url: downloadURL,
      storagePath: fileName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    const docRef = await db.collection('gallery').add(galleryItem);
    return { id: docRef.id, ...galleryItem };
  },

  /**
   * Get all gallery items
   */
  async getAll() {
    await ensureFirebaseReady();

    const snapshot = await db.collection('gallery').orderBy('createdAt', 'desc').get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
  },

  /**
   * Delete gallery item
   */
  async delete(itemId) {
    await ensureFirebaseReady();

    // Get item data first
    const itemDoc = await db.collection('gallery').doc(itemId).get();
    if (!itemDoc.exists) {
      throw new Error('Gallery item not found');
    }

    const itemData = itemDoc.data();

    // Delete from storage
    if (itemData.storagePath) {
      const storageRef = storage.ref(itemData.storagePath);
      await storageRef.delete();
    }

    // Delete from Firestore
    await db.collection('gallery').doc(itemId).delete();
  }
};

/**
 * User Registration Management
 */
export const registrationService = {
  /**
   * Create user registration
   */
  async create(registrationData) {
    await ensureFirebaseReady();

    // Convert date strings to Timestamps
    const startDate = firebase.firestore.Timestamp.fromDate(
      new Date(registrationData.preferredDate)
    );
    const endDate = firebase.firestore.Timestamp.fromDate(new Date(registrationData.alternateDate));

    const registration = {
      ...registrationData,
      preferredDate: startDate,
      alternateDate: endDate,
      status: 'pending',
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    const docRef = await db.collection('registrations').add(registration);
    return { id: docRef.id, ...registration };
  },

  /**
   * Get registrations with date filtering
   */
  async getByDateRange(startDate, endDate, limit = 50) {
    await ensureFirebaseReady();

    const startTimestamp = firebase.firestore.Timestamp.fromDate(new Date(startDate));
    const endTimestamp = firebase.firestore.Timestamp.fromDate(new Date(endDate));

    const query = db
      .collection('registrations')
      .where('createdAt', '>=', startTimestamp)
      .where('createdAt', '<=', endTimestamp)
      .limit(limit);

    const snapshot = await query.get();

    // Update last accessed timestamp for the first result
    if (!snapshot.empty) {
      const firstDoc = snapshot.docs[0];
      await firstDoc.ref.update({
        lastAccessed: firebase.firestore.FieldValue.serverTimestamp()
      });
    }

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
  }
};

/**
 * Newsletter Subscription Management
 */
export const newsletterService = {
  /**
   * Subscribe to newsletter
   */
  async subscribe(email, name = '') {
    await ensureFirebaseReady();

    const subscription = {
      email,
      name,
      status: 'active',
      subscribedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    const docRef = await db.collection('newsletter').add(subscription);
    return { id: docRef.id, ...subscription };
  },

  /**
   * Unsubscribe from newsletter
   */
  async unsubscribe(email) {
    await ensureFirebaseReady();

    const query = db.collection('newsletter').where('email', '==', email).limit(1);

    const snapshot = await query.get();
    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      await doc.ref.update({
        status: 'unsubscribed',
        unsubscribedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
  }
};

/**
 * Training Log Management
 */
export const trainingLogService = {
  /**
   * Log training session
   */
  async logSession(sessionData) {
    await ensureFirebaseReady();

    const session = {
      ...sessionData,
      loggedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    const docRef = await db.collection('training_logs').add(session);
    return { id: docRef.id, ...session };
  }
};

// Export individual services for easy importing
export default {
  appointmentService,
  contactService,
  galleryService,
  registrationService,
  newsletterService,
  trainingLogService
};
