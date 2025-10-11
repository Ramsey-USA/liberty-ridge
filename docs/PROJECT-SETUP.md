# Project Setup Guide ⚙️

**Liberty Ridge Training Grounds - Complete Installation & Configuration**

*Step-by-step guide for setting up the development environment, configuring tools, and deploying the application*

---

## 🚀 Quick Start

### Prerequisites

Before beginning, ensure you have the following installed:

- **Node.js**: Version 18.17 or higher ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js (verify with `npm --version`)
- **Git**: For version control ([Download](https://git-scm.com/))
- **VS Code**: Recommended editor ([Download](https://code.visualstudio.com/))
- **Firebase CLI**: For deployment (`npm install -g firebase-tools`)

### Installation Commands

```bash
# Clone the repository
git clone https://github.com/Ramsey-USA/liberty-ridge.git
cd liberty-ridge

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

---

## 🛠️ Detailed Setup

### 1. Environment Configuration

#### Create Environment File

```bash
# Copy the example environment file
cp .env.local.example .env.local
```

#### Configure Environment Variables

Edit `.env.local` with your Firebase configuration:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Optional: Analytics
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Development Settings
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 2. Firebase Setup

#### Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create a project"
3. Enter project name: `liberty-ridge-training`
4. Enable Google Analytics (recommended)
5. Choose or create Analytics account

#### Enable Firebase Services

```bash
# Login to Firebase
firebase login

# Initialize Firebase in project
firebase init

# Select these services:
# ✓ Firestore
# ✓ Hosting
# ✓ Storage (optional for future use)
```

#### Configure Firestore

1. In Firebase Console, go to Firestore Database
2. Click "Create database"
3. Choose "Start in test mode" (we'll add security rules later)
4. Select your preferred location

#### Add Security Rules

Create `firestore.rules` with secure rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to courses for all users
    match /courses/{courseId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Allow authenticated users to submit contact forms
    match /contacts/{contactId} {
      allow create: if true;
      allow read, write: if request.auth != null;
    }
    
    // Allow authenticated users to view registrations
    match /registrations/{registrationId} {
      allow create: if true;
      allow read, write: if request.auth != null;
    }
  }
}
```

#### Configure Hosting

Update `firebase.json`:

```json
{
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  },
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=3600"
          }
        ]
      }
    ]
  }
}
```

### 3. VS Code Configuration

#### Install Required Extensions

Use the VS Code Extensions panel or run these commands:

```bash
# Core extensions for development
code --install-extension bradlc.vscode-tailwindcss
code --install-extension esbenp.prettier-vscode
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension heybourn.headwind

# Additional helpful extensions
code --install-extension ms-vscode.vscode-json
code --install-extension ms-vscode.vscode-yaml
code --install-extension christian-kohler.path-intellisense
code --install-extension bradlc.vscode-tailwindcss
```

#### Configure VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "headwind.runOnSave": true,
  "headwind.sortTailwindClasses": true,
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
    ["className\\s*:\\s*['\"`]([^'\"`]*)['\"`]", "([a-zA-Z0-9\\-\\s]+)"]
  ]
}
```

#### Configure Workspace Extensions

Create `.vscode/extensions.json`:

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "heybourn.headwind",
    "ms-vscode.vscode-json",
    "christian-kohler.path-intellisense"
  ]
}
```

---

## 🏗️ Project Structure

### Technology Stack

- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with LR Theme custom properties
- **Backend**: Firebase (Firestore, Hosting, Authentication)
- **Development**: ESLint, Prettier, Headwind for code quality

### Key Directories

```text
liberty-ridge/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # LR Theme CSS
│   │   └── [page]/page.tsx    # Individual pages
│   ├── components/            # Reusable components
│   │   ├── cards/             # Card components
│   │   ├── Header.tsx         # Site navigation
│   │   └── Footer.tsx         # Site footer
│   ├── contexts/              # React contexts
│   ├── data/                  # Static data and constants
│   └── lib/                   # Utilities and configuration
├── public/                    # Static assets
├── docs/                      # Documentation files
├── .vscode/                   # VS Code configuration
├── firebase.json              # Firebase configuration
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

### Configuration Files

#### Next.js Configuration (`next.config.js`)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    typedRoutes: true
  }
}

module.exports = nextConfig
```

#### Tailwind Configuration (`tailwind.config.js`)

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      colors: {
        // LR Theme color system
        'pure-black': 'rgb(var(--pure-black))',
        'pure-white': 'rgb(var(--pure-white))',
        'patriot-red': 'rgb(var(--patriot-red))',
        'patriot-blue': 'rgb(var(--patriot-blue))',
        'background': 'rgb(var(--background))',
        'surface': 'rgb(var(--surface))',
        'border': 'rgb(var(--border))',
        'text-primary': 'rgb(var(--text-primary))',
        'text-secondary': 'rgb(var(--text-secondary))',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out',
        'two-tone-pulse': 'two-tone-pulse 2s ease-in-out infinite',
        'smooth-hover': 'smooth-hover 0.2s ease-out',
      }
    },
  },
  plugins: [],
}
```

#### TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## 📋 Development Commands

### Core Commands

```bash
# Development server with hot reload
npm run dev

# Production build with static export
npm run build

# Start production server locally
npm start

# Run ESLint for code quality
npm run lint

# Run Prettier for code formatting
npm run format

# Type checking without emitting files
npm run type-check
```

### Build Commands

```bash
# Build for production deployment
npm run build

# Export static files for hosting
npm run export

# Preview production build locally
npm run preview
```

### Development Tools

```bash
# Install new dependency
npm install [package-name]

# Install development dependency
npm install -D [package-name]

# Update all dependencies
npm update

# Check for outdated packages
npm outdated

# Audit security vulnerabilities
npm audit
```

---

## 🚀 Deployment

### Firebase Deployment

#### Automatic Deployment

```bash
# Build and deploy in one command
npm run deploy
```

#### Manual Deployment

```bash
# Build the application
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting

# Deploy with custom message
firebase deploy --only hosting -m "Updated homepage with new courses"
```

#### Preview Deployment

```bash
# Create preview channel for testing
firebase hosting:channel:deploy preview

# Deploy to staging environment
firebase hosting:channel:deploy staging
```

### Environment-Specific Deployment

#### Production Deployment

```bash
# Set production environment
export NODE_ENV=production

# Build for production
npm run build

# Deploy to production
firebase deploy --only hosting --project production
```

#### Staging Deployment

```bash
# Deploy to staging project
firebase deploy --only hosting --project staging
```

### Deployment Verification

After deployment, verify:

1. **Functionality**: All pages load correctly
2. **Performance**: Lighthouse scores >90
3. **SEO**: Meta tags and structured data
4. **Analytics**: Firebase Analytics tracking
5. **Forms**: Contact and registration forms work

---

## 🔧 Troubleshooting

### Common Setup Issues

#### Node.js Version Conflicts

```bash
# Check Node.js version
node --version

# If using nvm, switch to correct version
nvm use 18.17.0

# Or install specific version
nvm install 18.17.0
```

#### Firebase Configuration Issues

```bash
# Check Firebase project
firebase projects:list

# Switch to correct project
firebase use liberty-ridge-training

# Check current configuration
firebase project:info
```

#### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### TypeScript Errors

```bash
# Run type checking
npm run type-check

# Generate Next.js types
npx next build

# Check specific file
npx tsc --noEmit src/components/Component.tsx
```

### Development Server Issues

#### Port Already in Use

```bash
# Check what's using port 3000
lsof -ti:3000

# Kill process using port 3000
kill -9 $(lsof -ti:3000)

# Start on different port
npm run dev -- -p 3001
```

#### Hot Reload Not Working

1. Check file watchers limit:

   ```bash
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
   sudo sysctl -p
   ```

2. Restart development server:

   ```bash
   npm run dev
   ```

### Firebase Issues

#### Authentication Errors

```bash
# Re-login to Firebase
firebase logout
firebase login

# Check authentication status
firebase login:list
```

#### Deployment Failures

```bash
# Check Firebase CLI version
firebase --version

# Update Firebase CLI
npm install -g firebase-tools@latest

# Check project configuration
firebase projects:list
```

---

## 🔒 Security Setup

### Environment Variables Security

- Never commit `.env.local` files
- Use different Firebase projects for development/production
- Rotate API keys regularly
- Use Firebase security rules to protect data

### Firestore Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Secure read access
    match /courses/{courseId} {
      allow read: if true;
      allow write: if request.auth != null && 
        request.auth.token.admin == true;
    }
    
    // Rate-limited contact submissions
    match /contacts/{contactId} {
      allow create: if request.time > resource.data.lastSubmission + duration.value(1, 'm');
    }
  }
}
```

### Content Security Policy

Add to `next.config.js`:

```javascript
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
```

---

## 📊 Performance Monitoring

### Firebase Performance

```typescript
// Add to lib/firebase.ts
import { getPerformance } from 'firebase/performance';

const perf = getPerformance(app);
```

### Web Vitals Tracking

```typescript
// Add to app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Performance Testing

```bash
# Lighthouse CI for performance testing
npm install -g @lhci/cli

# Run Lighthouse
lhci autorun

# Test specific URL
lighthouse https://libertyridegetraininggrounds.com --view
```

---

## 📚 Additional Resources

### Documentation Links

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [React Documentation](https://react.dev)

### Liberty Ridge Specific Docs

- [`DEVELOPMENT.md`](./DEVELOPMENT.md) - Development guidelines and standards
- [`LR-BRANDING.md`](./LR-BRANDING.md) - Design system and branding guidelines
- [`COMPONENTS.md`](./COMPONENTS.md) - Component library documentation
- [`TESTING.md`](./TESTING.md) - Testing procedures and quality assurance

### Support

For technical issues or questions:

1. Check existing documentation
2. Search GitHub issues
3. Create new issue with detailed description
4. Contact project maintainer

---

**Liberty Ridge Training Grounds**  
*Professional Setup for Professional Results*

---

*This setup guide ensures consistent development environments and smooth deployment processes.
Follow these steps exactly for the best development experience.*
