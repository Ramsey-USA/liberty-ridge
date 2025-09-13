# Firebase Deployment Guide

## Prerequisites
1. Firebase CLI installed globally: `npm install -g firebase-tools`
2. Firebase project created at [Firebase Console](https://console.firebase.google.com)
3. Firebase configuration added to `.env.local`

## Quick Deployment Steps

### 1. One-Time Setup
```bash
# Login to Firebase
firebase login

# Initialize Firebase project (if not done)
firebase init

# Select:
# - Hosting: Configure files for Firebase Hosting
# - Firestore: Configure security rules and indexes
# - Use existing project: liberty-ridge-training
# - Public directory: out
# - Single-page app: Yes
# - Set up automatic builds with GitHub: No
```

### 2. Build and Deploy
```bash
# Build the static site
npm run build

# Deploy to Firebase
firebase deploy

# Or use the combined script
npm run deploy
```

### 3. Custom Domain Setup (Optional)
1. In Firebase Console, go to Hosting
2. Click "Add custom domain"
3. Follow DNS configuration instructions

## Environment Variables
Make sure your `.env.local` has real Firebase config values:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_actual_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_actual_app_id
```

## Firestore Setup
1. Enable Firestore in Firebase Console
2. Deploy security rules: `firebase deploy --only firestore:rules`
3. The following collections will be created automatically:
   - `enrollments` - Course registrations
   - `contacts` - Contact form submissions
   - `team_applications` - Team applications
   - `newsletter_subscribers` - Newsletter signups

## Testing Locally
```bash
# Serve static build locally
firebase serve

# Test on http://localhost:5000
```

## Continuous Deployment
The site is configured for manual deployment. For automatic deployment:
1. Set up GitHub Actions
2. Add Firebase secrets to GitHub repository
3. Deploy on push to main branch

## Performance
- Static export optimized for Firebase Hosting
- Automatic CDN distribution
- Optimized images and assets
- First Load JS: ~109kB per page
- All pages under 5kB route size

## Monitoring
- Firebase Analytics automatically configured
- Performance monitoring available in Firebase Console
- Real-time visitor tracking
- Form submission tracking in Firestore