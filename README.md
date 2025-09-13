# Liberty Ridge Training Grounds

Liberty Ridge Training Grounds LLC - Professional Tactical Training Website

## Project Overview

This project is a website for Liberty Ridge Training Grounds LLC, a tactical training course founded and led by owner Zach Gaudette, a former Army veteran. The website's primary purpose is to inform potential students about the self-defense and firearm training courses offered, with a phased rollout plan. The website's domain will be libertyridegetraininggrounds.com.

### Development Phases

**Phase One (November):** Classroom-only courses covering firearm safety and unique personal firearm training. Integration of High Level CRM platform for lead management, automated communications, and streamlined student sign-ups.

**Phase Two (Upcoming):** E-commerce functionality to sell tactical gear and accessories, with focus on brands like Vortex and Sig Sauer.

**Phase Three (Future):** Live firearm training sessions once land is acquired.

## Technology Stack

- **Frontend:** Next.js 15.5.3 with TypeScript
- **Styling:** Tailwind CSS with custom components
- **Backend & Hosting:** Firebase App
- **Database:** Firestore Database
- **CRM:** High Level for lead management
- **Version Control:** GitHub

## Code Organization & Architecture

### File Structure
```
src/
├── app/                    # Next.js 13+ App Router pages
├── components/             # Reusable React components
│   ├── cards/             # Card component library
│   ├── Header.tsx         # Site navigation
│   ├── Footer.tsx         # Site footer
│   └── BulletHero.tsx     # Hero section component
├── data/                  # Static data constants
│   ├── courses.ts         # Course information
│   ├── testimonials.ts    # Customer testimonials
│   ├── navigation.ts      # Navigation structure
│   ├── team.ts           # Team member data
│   └── rankings.ts        # Competition rankings
└── lib/                   # Utility functions & configs
```

### Component Standards

#### Page Structure Template
Every page should follow this consistent structure:
1. **Imports** - Organized by: React/Next.js, Components, Data, Types
2. **Type Definitions** - Props interfaces and component types
3. **Data Constants** - Import from `/src/data/` folder
4. **Component Definition** - Functional component with descriptive name
5. **Export** - Default export of main component

#### Reusable Components
- **CourseCard** - Standardized course display with pricing, features, CTA
- **FeatureCard** - Benefit/feature highlighting with icons and descriptions  
- **TestimonialCard** - Customer reviews with ratings and verification
- **StatsCard** - Achievement metrics with animations
- **HeroSection** - Consistent hero layout across pages

### CSS Organization (Optimized)

The `globals.css` file is organized into logical sections:
- **Reset & Base Styles** - Global resets and typography
- **Animations** - Keyframe animations used across components
- **Buttons** - Primary, secondary, and outline button styles
- **Card Components** - Reusable card styling with hover effects
- **Flip Cards** - 3D flip animations for core values
- **Hero Sections** - Background gradients and hero styling
- **Utilities** - Helper classes and text effects
- **Grid Layouts** - Responsive grid systems

### Design System

#### Color Palette
- **Patriotic Red:** `#dc2626` - Primary action color
- **Patriotic Blue:** `#1e40af` - Secondary brand color
- **Tactical Dark:** `#1f2937` - Text and dark elements
- **Tactical Gray:** `#111827` - Improved contrast text
- **Tactical Light:** `#f9fafb` - Background sections

#### Typography
- **Font Family:** Inter (Google Fonts)
- **Headings:** Bold, patriotic colors, responsive sizing
- **Body Text:** Improved contrast with `#111827` for readability

#### Animation Standards
- **Slide-in animations** for content entrance
- **Hover effects** with scale and shadow transforms
- **Patriotic gradients** with flowing animations
- **3D flip cards** for interactive content

## Core Values

Rooted in U.S. Army veteran principles:
- **Loyalty:** Commitment to students and community
- **Duty:** Professional training with highest standards
- **Respect:** Professional environment for all
- **Selfless Service:** Student safety and readiness focus
- **Honor:** Operations with integrity and moral compass
- **Integrity:** Transparency and honesty
- **Personal Courage:** Empowering confident, skilled action

## Page Optimization Checklist

### Pre-Optimization
- [ ] Extract hardcoded data to `/src/data/` files
- [ ] Create reusable component library in `/src/components/cards/`
- [ ] Define TypeScript interfaces for data structures

### Page Structure
- [ ] Consistent import organization
- [ ] TypeScript prop interfaces
- [ ] Data imported from constants
- [ ] Logical section organization
- [ ] Reusable components implementation
- [ ] Responsive design patterns
- [ ] SEO meta data
- [ ] Accessibility considerations

### Performance
- [ ] Minimize component re-renders
- [ ] Optimize image loading
- [ ] Code splitting where appropriate
- [ ] Remove unused imports and code

## Website Structure

### Core Pages
- **Homepage (/)** - Primary entry point with hero, courses overview, rankings highlight
- **Courses (/courses)** - Detailed course descriptions with pricing and registration
- **About (/about)** - Founder background, mission, values, credentials
- **Contact (/contact)** - Location info and direct signup links
- **Shop (/shop)** - E-commerce for tactical gear (Phase Two)

### Specialized Pages  
- **Team (/team)** - Team member profiles and specializations
- **Rankings (/rankings)** - Zach's competitive shooting achievements
- **Join Team (/join)** - Veteran recruitment page
- **FAQ (/faq)** - Common questions and answers
- **Course Sign-Up (/signup)** - Registration forms and process

### Future Pages
- **Live Training (/live-training)** - Phase Three preparation page

## Development Guidelines

### Code Quality
- Use TypeScript for type safety
- Follow consistent naming conventions
- Implement proper error handling
- Write descriptive comments for complex logic
- Use semantic HTML elements

### Performance
- Optimize images and assets
- Implement lazy loading where appropriate
- Minimize CSS and JavaScript bundle sizes
- Use efficient animation techniques

### Accessibility
- Maintain proper color contrast ratios
- Implement keyboard navigation
- Use descriptive alt text for images
- Ensure screen reader compatibility

## Deployment

- **Development:** `npm run dev` - Local development server
- **Build:** `npm run build` - Production build with static export
- **Start:** `npm start` - Production server
- **Export:** `npm run export` - Static site generation for hosting
- **Deploy:** `npm run deploy` - Build and deploy to Firebase
- **Hosting:** Firebase Hosting for production deployment

## Firebase Deployment

### Quick Deployment
```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Build and deploy
npm run deploy
```

### Environment Setup
1. Create Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Copy `.env.local.example` to `.env.local`
3. Replace demo values with your actual Firebase config
4. Enable Firestore and Hosting in Firebase Console

### Production Ready
- ✅ Static export optimization for Firebase Hosting
- ✅ Firestore security rules configured
- ✅ Form submissions to Firebase collections
- ✅ Performance monitoring integrated
- ✅ CDN distribution worldwide
- ✅ ~109kB First Load JS optimized

See [FIREBASE_DEPLOYMENT.md](./FIREBASE_DEPLOYMENT.md) for detailed setup instructions.

## Current Status

### ✅ Completed Optimization
- **CSS:** 46% reduction (710 → 380 lines) with logical organization
- **Components:** 6 reusable cards (Course, Feature, Testimonial, Stats, Product, Position, Contact)
- **Data:** 8 organized constant files with TypeScript interfaces
- **Pages:** All 9 pages optimized (40-60% code reduction per page)
- **Performance:** Production build optimized for Firebase Hosting
- **Firebase:** Ready for deployment with security rules and collections

### Features
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Type Safety:** Full TypeScript implementation
- **Performance:** Static generation with optimized assets
- **SEO Ready:** Proper meta tags and semantic HTML
- **Form Integration:** Firebase Firestore backend ready
- **CRM Ready:** High Level integration prepared
