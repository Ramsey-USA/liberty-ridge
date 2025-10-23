# Firebase Storage Integration Guide

## Overview

This guide shows how to integrate Firebase Storage for production media uploads on the Liberty Ridge website.

---

## 🔧 Firebase Storage Setup

### **1. Firebase Configuration**

Update `src/js/firebase-config.js` to include Storage:

```javascript

// Import Firebase Storage
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

// Initialize Firebase Storage
const storage = getStorage(app);

// Export storage for use in other files
export { storage, ref, uploadBytes, getDownloadURL, deleteObject };

```

### **2. Upload Service Implementation**

Create `src/js/firebase-upload-service.js`:

```javascript

import { storage, ref, uploadBytes, getDownloadURL } from './firebase-config.js';
import { db, collection, addDoc, serverTimestamp } from './firebase-config.js';

class FirebaseUploadService {
  constructor() {
    this.storage = storage;
    this.db = db;
  }

  /**

   * Upload file to Firebase Storage

   */
  async uploadFile(file, category, description) {
    try {
      // Generate unique filename
      const timestamp = Date.now();
      const fileName = `${category}/${timestamp}-${file.name}`;
      const storageRef = ref(this.storage, fileName);

      // Upload file
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      // Save metadata to Firestore
      const metadata = {
        fileName: file.name,
        originalName: file.name,
        size: file.size,
        type: file.type,
        category,
        description,
        url: downloadURL,
        path: fileName,
        uploadDate: serverTimestamp(),
        isActive: true
      };

      const docRef = await addDoc(collection(this.db, 'media'), metadata);

      return {
        id: docRef.id,
        ...metadata,
        url: downloadURL
      };
    } catch (error) {
      console.error('Upload failed:', error);
      throw new Error(`Upload failed: ${error.message}`);
    }
  }

  /**

   * Get all media files

   */
  async getMediaFiles(category = null) {
    try {
      const mediaCollection = collection(this.db, 'media');
      let q = mediaCollection;

      if (category) {
        q = query(mediaCollection, where('category', '==', category));
      }

      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Failed to get media files:', error);
      throw error;
    }
  }

  /**

   * Delete file from storage and database

   */
  async deleteFile(fileId, filePath) {
    try {
      // Delete from Storage
      const fileRef = ref(this.storage, filePath);
      await deleteObject(fileRef);

      // Delete from Firestore
      await deleteDoc(doc(this.db, 'media', fileId));

      return true;
    } catch (error) {
      console.error('Delete failed:', error);
      throw error;
    }
  }
}

export default new FirebaseUploadService();

```

### **3. Update Admin Upload Function**

Update `src/admin/admin.js` uploadFile method:

```javascript

/**

 * Upload single file to Firebase Storage

 */
async uploadFile(file, category, description) {
  try {
    // Import Firebase upload service
    const { default: uploadService } = await import('../js/firebase-upload-service.js');
    
    // Upload to Firebase
    const result = await uploadService.uploadFile(file, category, description);
    
    console.log('Upload successful:', result);
    return result;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

```

---

## 🛠️ Firebase Security Rules

### **Storage Rules**

Update `storage.rules`:

```javascript

rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow authenticated users to upload
    match /safety/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null 
        && request.resource.size < 100 * 1024 * 1024 // 100MB limit
        && request.resource.contentType.matches('image/.*|video/.*');
    }
    
    match /marksmanship/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null 
        && request.resource.size < 100 * 1024 * 1024
        && request.resource.contentType.matches('image/.*|video/.*');
    }
    
    match /tactical/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null 
        && request.resource.size < 100 * 1024 * 1024
        && request.resource.contentType.matches('image/.*|video/.*');
    }
    
    // Add other categories as needed
    match /{category}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null 
        && request.resource.size < 100 * 1024 * 1024
        && request.resource.contentType.matches('image/.*|video/.*');
    }
  }
}

```

### **Firestore Rules**

Update `firestore.rules`:

```javascript

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Media collection
    match /media/{document} {
      allow read: if true;
      allow create, update, delete: if request.auth != null;
    }
    
    // Existing rules...
  }
}

```

---

## 📱 Admin Interface Integration

### **Update Gallery Manager**

Modify `src/js/gallery.js` to use Firebase:

```javascript

/**

 * Load photos from Firebase

 */
async loadPhotos() {
  try {
    this.isLoading = true;
    this.updateLoadingState();

    // Import upload service
    const { default: uploadService } = await import('./firebase-upload-service.js');
    
    // Get photos from Firebase
    const mediaFiles = await uploadService.getMediaFiles();
    this.photos = mediaFiles.filter(file => file.type.startsWith('image/'));
    
    this.renderPhotoGallery();
  } catch (error) {
    console.error('Failed to load photos:', error);
    this.handleError('Failed to load photos');
  } finally {
    this.isLoading = false;
    this.updateLoadingState();
  }
}

/**

 * Load videos from Firebase

 */
async loadVideos() {
  try {
    this.isLoading = true;
    this.updateLoadingState();

    const { default: uploadService } = await import('./firebase-upload-service.js');
    const mediaFiles = await uploadService.getMediaFiles();
    this.videos = mediaFiles.filter(file => file.type.startsWith('video/'));
    
    this.renderVideoGallery();
  } catch (error) {
    console.error('Failed to load videos:', error);
    this.handleError('Failed to load videos');
  } finally {
    this.isLoading = false;
    this.updateLoadingState();
  }
}

```

---

## 🚀 Deployment Steps

### **1. Firebase Project Setup**

```bash

# Install Firebase CLI

npm install -g firebase-tools

# Login to Firebase

firebase login

# Initialize Firebase in project

firebase init

# Select Storage and Firestore

# Configure rules and indexes

```

### **2. Deploy Storage Rules**

```bash

# Deploy storage rules

firebase deploy --only storage

# Deploy Firestore rules

firebase deploy --only firestore:rules

```

### **3. Environment Variables**

Create `.env.production`:

```env

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

```

### **4. Full Deployment**

```bash

# Build and deploy everything

npm run build
firebase deploy

```

---

## 🔍 Testing & Validation

### **Upload Testing Checklist**

- [ ] Upload small image (< 1MB)
- [ ] Upload large image (5-10MB)
- [ ] Upload video file (< 50MB)
- [ ] Test multiple file upload
- [ ] Verify files appear in gallery
- [ ] Test file deletion
- [ ] Check mobile upload functionality

### **Security Testing**

- [ ] Verify unauthenticated users cannot upload
- [ ] Test file size limits
- [ ] Test file type restrictions
- [ ] Verify proper access controls

---

## 🚨 Production Considerations

### **Performance Optimization**

1. **Image Optimization**: Automatically resize and compress uploaded images
2. **CDN Integration**: Use Firebase CDN for global distribution
3. **Lazy Loading**: Implement progressive loading for large galleries
4. **Caching**: Set appropriate cache headers

### **Monitoring & Analytics**

1. **Storage Usage**: Monitor storage consumption
2. **Upload Success Rate**: Track upload failures
3. **Performance Metrics**: Monitor load times
4. **Error Logging**: Implement comprehensive error tracking

### **Backup Strategy**

1. **Regular Backups**: Automated daily backups
2. **Version Control**: Keep previous versions of critical files
3. **Disaster Recovery**: Plan for data recovery scenarios

---

## 🎯 Success Metrics

### **Technical KPIs**

- Upload success rate > 98%
- Average upload time < 30 seconds
- Gallery load time < 3 seconds
- Mobile compatibility 100%

### **User Experience Goals**

- Intuitive upload interface
- Real-time progress feedback
- Error handling and recovery
- Seamless gallery browsing

---

*This integration guide ensures scalable, secure, and performant media management for the Liberty Ridge Training Grounds website.*