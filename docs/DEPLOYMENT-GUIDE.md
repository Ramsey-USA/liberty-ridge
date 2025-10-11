# Liberty Ridge Deployment Guide

> **Complete guide for deploying the Liberty Ridge Training Grounds platform to production**

## 🎯 Overview

This guide covers deploying the completed Liberty Ridge platform to production. The platform is fully ready for deployment with all features complete:

- ✅ Personal consultation platform for Zach Gaudette
- ✅ Firebase CMS for media management
- ✅ Professional LR Theme design system
- ✅ Mobile-responsive design
- ✅ Performance optimized

## 🚀 Recommended: Firebase Hosting

Firebase Hosting is the optimal choice because the platform already uses Firebase for:

- Authentication (admin access)
- Firestore database (media metadata)
- Storage (photos and videos)
- Analytics and monitoring

### Step 1: Prepare Firebase Project

1. **Create Firebase Project** (if not already created):
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create new project: "liberty-ridge-production"
   - Enable Google Analytics (recommended)

2. **Configure Firebase Services**:
   ```bash
   # Enable required services
   - Authentication (Email/Password)
   - Firestore Database
   - Storage
   - Hosting
   ```

3. **Set Up Authentication**:
   - Enable Email/Password provider
   - Add Zach's admin email to authorized users
   - Configure security rules

### Step 2: Environment Configuration

Create production environment variables:

```bash
# .env.production
NEXT_PUBLIC_FIREBASE_API_KEY=your_production_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=liberty-ridge-production.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=liberty-ridge-production
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=liberty-ridge-production.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Step 3: Deploy to Firebase Hosting

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase hosting in project
firebase init hosting

# Select options:
# - Use existing project: liberty-ridge-production
# - Public directory: out
# - Single-page app: Yes
# - Overwrite index.html: No

# Build the application
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

### Step 4: Custom Domain Setup

1. **Purchase Domain**: `libertyridegetraininggrounds.com`
2. **Add Custom Domain**:
   - Firebase Console → Hosting → Add custom domain
   - Follow DNS configuration instructions
   - SSL certificate will be automatically provisioned

### Step 5: Production Testing

After deployment, test all features:

- [ ] Homepage loads correctly
- [ ] About page displays Zach's personal brand
- [ ] Consultation page shows all service levels
- [ ] Gallery displays media (with sample data initially)
- [ ] Contact forms work properly
- [ ] Admin login functions
- [ ] CMS upload and management works
- [ ] Mobile responsiveness
- [ ] Page load speeds (< 3 seconds)

## 🔧 Alternative: Vercel Deployment

Vercel offers excellent Next.js optimization:

### Quick Vercel Deploy

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (follow prompts)
vercel

# Or connect GitHub repository at vercel.com for automatic deployments
```

### Vercel Environment Variables

Add these in Vercel dashboard under Project Settings → Environment Variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
```

## 🌐 Domain and DNS Configuration

### Recommended Domain Structure

- **Primary**: `libertyridegetraininggrounds.com`
- **Redirect**: `www.libertyridegetraininggrounds.com` → primary
- **Email**: `zach@libertyridegetraininggrounds.com`

### DNS Configuration Example

```dns
# A Record (if using Vercel)
@ → 76.76.19.61

# CNAME Records
www → libertyridegetraininggrounds.com

# For Firebase Hosting
@ → liberty-ridge-production.web.app
www → liberty-ridge-production.web.app
```

## 📊 Post-Deployment Setup

### 1. Analytics Setup

**Google Analytics 4**:
```javascript
// Add to environment variables
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Firebase Analytics** (already included):
- Automatic page views
- User engagement tracking
- Performance monitoring

### 2. SEO Configuration

**Google Search Console**:
1. Add property for `libertyridegetraininggrounds.com`
2. Verify ownership
3. Submit sitemap: `/sitemap.xml`

**Meta Tags** (already implemented):
- Open Graph for social sharing
- Twitter Cards
- Structured data for local business

### 3. Performance Monitoring

**Firebase Performance**:
- Real user monitoring
- Page load times
- Network request tracking

**Lighthouse Scores** (target):
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

## 🔒 Security and Backup

### Firebase Security Rules

**Firestore Rules**:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Media collection - public read, admin write
    match /media/{document} {
      allow read: if resource.data.isVisible == true;
      allow write: if request.auth != null && request.auth.token.email == 'zach@libertyridegetraininggrounds.com';
    }
    
    // Other collections - admin only
    match /{document=**} {
      allow read, write: if request.auth != null && request.auth.token.email == 'zach@libertyridegetraininggrounds.com';
    }
  }
}
```

**Storage Rules**:
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.email == 'zach@libertyridegetraininggrounds.com';
    }
  }
}
```

### Backup Strategy

1. **Firestore Backup**:
   - Enable automatic daily backups
   - Export data monthly for local backup

2. **Storage Backup**:
   - Media files backed up to Google Cloud Storage
   - Consider additional backup to AWS S3

## 📞 Support and Maintenance

### Monitoring Setup

1. **Uptime Monitoring**:
   - UptimeRobot or Pingdom
   - Alert if site is down > 2 minutes

2. **Error Tracking**:
   - Firebase Crashlytics
   - Email alerts for critical errors

### Regular Maintenance Tasks

**Weekly**:
- Review site performance metrics
- Check for broken links
- Monitor CMS usage

**Monthly**:
- Update dependencies
- Review security logs
- Backup critical data

**Quarterly**:
- Full security audit
- Performance optimization review
- Content strategy evaluation

## 🎯 Launch Checklist

Before going live, complete this checklist:

### Technical
- [ ] Domain configured and SSL active
- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] CMS authentication works
- [ ] Mobile responsiveness confirmed
- [ ] Performance scores meet targets
- [ ] SEO meta tags implemented
- [ ] Analytics tracking active

### Content
- [ ] All placeholder content replaced
- [ ] Zach's bio and credentials current
- [ ] Service pricing confirmed
- [ ] Contact information accurate
- [ ] Legal pages (privacy, terms) added
- [ ] Professional photos uploaded via CMS

### Business
- [ ] Payment processing configured (future phase)
- [ ] Email notifications set up
- [ ] Social media accounts created
- [ ] Google Business Profile claimed
- [ ] Business cards and marketing materials updated

## 🚀 Going Live

Once all checks are complete:

1. **Final deployment** to production domain
2. **DNS propagation** (24-48 hours)
3. **Search engine submission**
4. **Social media announcement**
5. **Email signature updates**
6. **Marketing material updates**

The Liberty Ridge platform is now live and ready to help Zach grow his consultation business!

---

**Need Help?**
- Technical issues: Review logs in Firebase Console
- Deployment questions: Check Firebase/Vercel documentation
- Content updates: Use the CMS or refer to [USER-GUIDE.md](./USER-GUIDE.md)