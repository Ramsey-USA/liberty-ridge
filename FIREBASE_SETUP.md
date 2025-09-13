# Firebase Setup Guide for Liberty Ridge Training Grounds

## Current Status
✅ Firebase SDK installed and configured
✅ Firebase configuration files created
✅ Environment variables template created
✅ Firestore utility functions ready
✅ Authentication utility functions ready
✅ Forms prepared for Firebase integration

## To Complete Firebase Setup:

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Name: "Liberty Ridge Training Grounds"
4. Enable Google Analytics (recommended)

### 2. Enable Required Services

#### Firestore Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (change to production rules later)
4. Select location (us-central1 recommended for US)

#### Authentication (Optional for Phase 1)
1. Go to "Authentication" → "Sign-in method"
2. Enable "Email/Password" for admin access

#### Storage (For future image uploads)
1. Go to "Storage"
2. Click "Get started"
3. Use default security rules for now

### 3. Get Configuration Keys
1. Go to Project Settings (gear icon)
2. In "General" tab, scroll to "Your apps"
3. Click "Web app" (</>) icon
4. Register app with name "Liberty Ridge Website"
5. Copy the firebaseConfig object

### 4. Update Environment Variables
1. Copy `.env.local.example` to `.env.local`
2. Replace the demo values with your actual Firebase config:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_actual_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_actual_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_actual_app_id
   ```

### 5. Enable Firebase Integration in Forms
1. Uncomment the import line in `/src/app/signup/page.tsx`:
   ```typescript
   import { enrollStudent } from '@/lib/firestore';
   ```
2. Uncomment the Firebase integration line in the handleSubmit function:
   ```typescript
   const enrollmentId = await enrollStudent(formData);
   ```

### 6. Set Up Firestore Collections
The following collections will be automatically created when first used:
- `enrollments` - Course registrations
- `contacts` - Contact form submissions
- `team_applications` - Team member applications
- `newsletter_subscribers` - Newsletter signups
- `courses` - Course information (manually add)

### 7. Production Security Rules
Before going live, update Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to courses for everyone
    match /courses/{document} {
      allow read: if true;
    }
    
    // Allow write access to forms for authenticated users only
    match /enrollments/{document} {
      allow create: if true; // Allow public form submissions
      allow read, update, delete: if request.auth != null;
    }
    
    match /contacts/{document} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
    
    match /team_applications/{document} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
    
    match /newsletter_subscribers/{document} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

## Integration with High Level CRM
Once you have your High Level API credentials, you can integrate both Firebase (for backup/analytics) and High Level (for CRM workflow) by updating the form submission functions.

## Testing
The website works perfectly without Firebase configured. Firebase integration is optional and can be enabled when you're ready to set up the backend services.

## Current Functionality Without Firebase
- ✅ All pages render correctly
- ✅ Forms collect data and show confirmation
- ✅ Navigation works perfectly
- ✅ Responsive design implemented
- ✅ Ready for production deployment