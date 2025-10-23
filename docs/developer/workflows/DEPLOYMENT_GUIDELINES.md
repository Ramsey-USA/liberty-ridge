# 🚀 Deployment & Environment Guidelines

> **Navigation**: [📋 Main README](../../../README.md) → [📚 Documentation Index](../../DOCUMENTATION_INDEX.md) → [🎯 Developer Guide](../DEVELOPER_GUIDE.md) → **Deployment Guidelines**

## 🎯 Deployment Overview

Liberty Ridge follows a **military-grade deployment strategy** with multiple environments, automated testing, and zero-downtime deployments.

## 🌍 Environment Configuration

### Development Environment

**Purpose**: Local development and testing

```bash

# Environment Variables

NODE_ENV=development
DEBUG=true
FIREBASE_PROJECT=liberty-ridge-dev
API_BASE_URL=http://localhost:8080
PERFORMANCE_MONITORING=true
ERROR_LOGGING=console

```

**Features**:

- Hot reloading enabled
- Source maps available
- Debug logging active
- Performance monitoring
- Local Firebase emulators

**Setup**:

```bash

# Install dependencies

npm install

# Start development server

python3 dev-server.py

# Run with Firebase emulators

firebase emulators:start

# Monitor performance

node lighthouse-audit.js --url=http://localhost:8080

```

### Staging Environment

**Purpose**: Pre-production testing and client previews

```bash

# Environment Variables

NODE_ENV=staging
DEBUG=false
FIREBASE_PROJECT=liberty-ridge-staging
API_BASE_URL=https://staging.libertyridgetraininggrounds.com
PERFORMANCE_MONITORING=true
ERROR_LOGGING=firebase

```

**Features**:

- Production-like environment
- Performance monitoring
- Error tracking enabled
- Client access for testing
- Automated testing pipeline

**Deployment**:

```bash

# Build for staging

NODE_ENV=staging node build-optimized.js

# Deploy to staging

firebase use staging
firebase deploy

# Verify deployment

curl -f https://staging.libertyridgetraininggrounds.com/health

```

### Production Environment

**Purpose**: Live production website

```bash

# Environment Variables

NODE_ENV=production
DEBUG=false
FIREBASE_PROJECT=liberty-ridge-production
API_BASE_URL=https://libertyridgetraininggrounds.com
PERFORMANCE_MONITORING=true
ERROR_LOGGING=firebase
ANALYTICS_ENABLED=true

```

**Features**:

- Maximum optimization
- CDN distribution
- Monitoring & alerting
- Backup procedures
- Security hardening

## 🔧 Build Process

### Production Build Script

```javascript

// build-production.js
const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

async function buildProduction() {
    console.log('🚀 Starting production build...');

    // 1. Clean previous build
    const distDir = 'src/js/dist';
    if (fs.existsSync(distDir)) {
        fs.rmSync(distDir, { recursive: true });
    }
    fs.mkdirSync(distDir, { recursive: true });

    // 2. Build JavaScript bundles
    const buildConfig = {
        entryPoints: [
            'src/js/main.js',
            'src/js/lazy-images.js',
            'src/js/performance-monitor.js'
        ],
        bundle: true,
        minify: true,
        target: 'es2019',
        format: 'esm',
        outdir: distDir,
        splitting: true,
        chunkNames: '[name]-[hash]',
        metafile: true,

        // Production optimizations
        treeShaking: true,
        mangleProps: /^_/,
        drop: ['console', 'debugger'],
        define: {
            'process.env.NODE_ENV': '"production"',
            'process.env.DEBUG': 'false'
        },

        // Asset optimization
        loader: {
            '.png': 'dataurl',
            '.jpg': 'dataurl',
            '.svg': 'text'
        }
    };

    try {
        const result = await esbuild.build(buildConfig);

        // 3. Generate bundle analysis
        if (result.metafile) {
            const analysis = await esbuild.analyzeMetafile(result.metafile);
            fs.writeFileSync('bundle-analysis.txt', analysis);
            console.log('📊 Bundle analysis saved to bundle-analysis.txt');
        }

        // 4. Optimize CSS
        await optimizeCSS();

        // 5. Generate service worker
        await generateServiceWorker();

        // 6. Validate build
        await validateBuild();

        console.log('✅ Production build completed successfully');

    } catch (error) {
        console.error('❌ Build failed:', error);
        process.exit(1);
    }
}

async function optimizeCSS() {
    console.log('🎨 Optimizing CSS...');

    const cssnano = require('cssnano');
    const postcss = require('postcss');

    const cssFiles = [
        'src/css/main.css',
        'src/css/lazy-images.css'
    ];

    for (const file of cssFiles) {
        const css = fs.readFileSync(file, 'utf8');
        const result = await postcss([
            cssnano({
                preset: ['default', {
                    discardComments: { removeAll: true },
                    normalizeWhitespace: true,
                    mergeRules: true
                }]
            })
        ]).process(css, { from: file });

        const minFile = file.replace('.css', '.min.css');
        fs.writeFileSync(minFile, result.css);
        console.log(`  ✓ ${minFile} created`);
    }
}

async function generateServiceWorker() {
    console.log('🔧 Generating service worker...');

    const workbox = require('workbox-build');

    const { count, size } = await workbox.generateSW({
        globDirectory: 'src/',
        globPatterns: [
            '**/*.{html,js,css,png,jpg,jpeg,svg,webp,avif,woff2}'
        ],
        swDest: 'src/service-worker.js',
        skipWaiting: true,
        clientsClaim: true,

        runtimeCaching: [
            {
                urlPattern: /^https:\/\/fonts\.googleapis\.com/,
                handler: 'StaleWhileRevalidate',
                options: {
                    cacheName: 'google-fonts-stylesheets'
                }
            },
            {
                urlPattern: /^https:\/\/fonts\.gstatic\.com/,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'google-fonts-webfonts',
                    expiration: {
                        maxEntries: 30,
                        maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
                    }
                }
            },
            {
                urlPattern: /\.(?:png|jpg|jpeg|svg|webp|avif)$/,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'images',
                    expiration: {
                        maxEntries: 100,
                        maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
                    }
                }
            }
        ]
    });

    console.log(`  ✓ Service worker generated - ${count} files, ${size} bytes`);
}

async function validateBuild() {
    console.log('🔍 Validating build...');

    // Check if critical files exist
    const criticalFiles = [
        'src/js/dist/main.js',
        'src/css/main.min.css',
        'src/service-worker.js'
    ];

    for (const file of criticalFiles) {
        if (!fs.existsSync(file)) {
            throw new Error(`Critical file missing: ${file}`);
        }
    }

    // Check bundle sizes
    const stats = fs.statSync('src/js/dist/main.js');
    const sizeKB = Math.round(stats.size / 1024);

    if (sizeKB > 50) { // 50KB limit
        console.warn(`⚠️ Main bundle is large: ${sizeKB}KB`);
    }

    console.log(`  ✓ Main bundle: ${sizeKB}KB`);
    console.log('  ✓ Build validation passed');
}

// Run build if called directly
if (require.main === module) {
    buildProduction();
}

module.exports = { buildProduction };

```

## 🔄 Deployment Pipeline

### GitHub Actions Workflow

```yaml

# .github/workflows/deploy.yml

name: Deploy to Firebase

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:

      - uses: actions/checkout@v3
      - name: Setup Node.js

        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies

        run: npm ci

      - name: Run linting

        run: npm run lint:strict

      - name: Run tests

        run: npm test

      - name: Build project

        run: npm run build:production

      - name: Run Lighthouse audit

        run: |
          npm install -g @lhci/cli
          lhci autorun --collect.staticDistDir=src
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}

  deploy-staging:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    environment: staging

    steps:

      - uses: actions/checkout@v3
      - name: Setup Node.js

        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies

        run: npm ci

      - name: Build for staging

        run: NODE_ENV=staging npm run build:production

      - name: Deploy to Firebase Staging

        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_STAGING }}'
          projectId: liberty-ridge-staging
          channelId: live

  deploy-production:
    needs: [test, deploy-staging]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    environment: production

    steps:

      - uses: actions/checkout@v3
      - name: Setup Node.js

        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies

        run: npm ci

      - name: Build for production

        run: NODE_ENV=production npm run build:production

      - name: Deploy to Firebase Production

        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_PRODUCTION }}'
          projectId: liberty-ridge-production
          channelId: live

      - name: Post-deployment verification

        run: |
          sleep 30  # Wait for deployment to propagate
          curl -f https://libertyridgetraininggrounds.com/health
          node scripts/verify-deployment.js

```

### Manual Deployment Process

```bash

# 1. Pre-deployment checklist

npm run lint:strict          # Code quality check
npm test                     # Run test suite
npm run build:production     # Create production build
node lighthouse-audit.js     # Performance validation

# 2. Deploy to staging

firebase use staging
firebase deploy
curl -f https://staging.libertyridgetraininggrounds.com/health

# 3. Client approval and testing

# (Manual testing phase)

# 4. Deploy to production

firebase use production
firebase deploy

# 5. Post-deployment verification

curl -f https://libertyridgetraininggrounds.com/health
node scripts/verify-deployment.js

```

## 🔐 Environment Security

### Firebase Security Rules

```javascript

// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Consultations - read/write for authenticated admin only
    match /consultations/{document} {
      allow read, write: if request.auth != null &&
                         request.auth.token.admin == true;
    }

    // Public read for approved content
    match /gallery/{document} {
      allow read: if true;
      allow write: if request.auth != null &&
                   request.auth.token.admin == true;
    }

    // Admin-only access to user management
    match /users/{document} {
      allow read, write: if request.auth != null &&
                         request.auth.token.admin == true;
    }
  }
}

```

```javascript

// storage.rules
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Images - read public, write admin only
    match /images/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null &&
                   request.auth.token.admin == true &&
                   request.resource.size < 5 * 1024 * 1024 && // 5MB limit
                   request.resource.contentType.matches('image/.*');
    }

    // Videos - admin only
    match /videos/{allPaths=**} {
      allow read, write: if request.auth != null &&
                         request.auth.token.admin == true &&
                         request.resource.size < 100 * 1024 * 1024; // 100MB limit
    }
  }
}

```

### Environment Variables Management

```bash

# .env.example - Template for environment variables

# Copy to .env.local and fill in actual values

# Firebase Configuration

FIREBASE_API_KEY=your_api_key_here
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id

# External Services

HIGHLEVEL_API_KEY=your_highlevel_api_key
GOOGLE_ANALYTICS_ID=your_ga_id

# Security

ADMIN_EMAIL=admin@libertyridgetraininggrounds.com
JWT_SECRET=your_jwt_secret

# Performance Monitoring

LIGHTHOUSE_CI_TOKEN=your_lhci_token
SENTRY_DSN=your_sentry_dsn

```

## 📊 Monitoring & Health Checks

### Health Check Endpoint

```javascript

// health-check.js
export function createHealthCheckEndpoint() {
    return {
        async handler(request, response) {
            const checks = await Promise.all([
                checkFirebaseConnection(),
                checkStorageAccess(),
                checkPerformanceMetrics(),
                checkSecurityHeaders()
            ]);

            const isHealthy = checks.every(check => check.status === 'ok');

            const healthData = {
                status: isHealthy ? 'healthy' : 'unhealthy',
                timestamp: new Date().toISOString(),
                version: process.env.npm_package_version,
                environment: process.env.NODE_ENV,
                checks: checks.reduce((acc, check) => {
                    acc[check.name] = check;
                    return acc;
                }, {})
            };

            response.status(isHealthy ? 200 : 503);
            response.json(healthData);
        }
    };
}

async function checkFirebaseConnection() {
    try {
        const db = firebase.firestore();
        await db.collection('health-check').doc('test').get();
        return { name: 'firebase', status: 'ok', responseTime: Date.now() };
    } catch (error) {
        return { name: 'firebase', status: 'error', error: error.message };
    }
}

async function checkStorageAccess() {
    try {
        const storage = firebase.storage();
        await storage.ref('health-check').getDownloadURL();
        return { name: 'storage', status: 'ok' };
    } catch (error) {
        return { name: 'storage', status: 'error', error: error.message };
    }
}

async function checkPerformanceMetrics() {
    const metrics = window.performanceMonitor?.getSummary();
    if (!metrics) {
        return { name: 'performance', status: 'unavailable' };
    }

    const score = metrics.score;
    return {
        name: 'performance',
        status: score >= 90 ? 'ok' : 'warning',
        score: score,
        metrics: metrics
    };
}

async function checkSecurityHeaders() {
    try {
        const response = await fetch(window.location.origin, { method: 'HEAD' });
        const headers = {
            csp: response.headers.get('content-security-policy'),
            xss: response.headers.get('x-xss-protection'),
            frameOptions: response.headers.get('x-frame-options'),
            contentType: response.headers.get('x-content-type-options')
        };

        const hasRequiredHeaders = headers.csp && headers.xss &&
                                 headers.frameOptions && headers.contentType;

        return {
            name: 'security',
            status: hasRequiredHeaders ? 'ok' : 'warning',
            headers: headers
        };
    } catch (error) {
        return { name: 'security', status: 'error', error: error.message };
    }
}

```

### Post-Deployment Verification

```javascript

// scripts/verify-deployment.js
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function verifyDeployment() {
    const url = 'https://libertyridgetraininggrounds.com';

    console.log('🔍 Verifying deployment...');

    // 1. Health check
    await verifyHealthCheck(url);

    // 2. Performance check
    await verifyPerformance(url);

    // 3. Security headers
    await verifySecurityHeaders(url);

    // 4. Core functionality
    await verifyCoreFeatures(url);

    console.log('✅ Deployment verification completed');
}

async function verifyHealthCheck(url) {
    console.log('  🏥 Checking health endpoint...');

    const response = await fetch(`${url}/health`);
    if (!response.ok) {
        throw new Error(`Health check failed: ${response.status}`);
    }

    const health = await response.json();
    if (health.status !== 'healthy') {
        throw new Error(`System unhealthy: ${JSON.stringify(health)}`);
    }

    console.log('    ✓ Health check passed');
}

async function verifyPerformance(url) {
    console.log('  ⚡ Running performance audit...');

    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    const result = await lighthouse(url, { port: chrome.port });
    await chrome.kill();

    const score = result.lhr.categories.performance.score * 100;
    if (score < 95) {
        throw new Error(`Performance score too low: ${score}/100`);
    }

    console.log(`    ✓ Performance score: ${score}/100`);
}

async function verifySecurityHeaders(url) {
    console.log('  🔒 Checking security headers...');

    const response = await fetch(url, { method: 'HEAD' });
    const requiredHeaders = [
        'content-security-policy',
        'x-frame-options',
        'x-content-type-options',
        'x-xss-protection'
    ];

    for (const header of requiredHeaders) {
        if (!response.headers.get(header)) {
            throw new Error(`Missing security header: ${header}`);
        }
    }

    console.log('    ✓ Security headers present');
}

async function verifyCoreFeatures(url) {
    console.log('  🎯 Testing core features...');

    // Test main page loads
    const mainResponse = await fetch(url);
    if (!mainResponse.ok) {
        throw new Error(`Main page failed to load: ${mainResponse.status}`);
    }

    // Test admin page exists
    const adminResponse = await fetch(`${url}/admin/`);
    if (!adminResponse.ok) {
        throw new Error(`Admin page failed to load: ${adminResponse.status}`);
    }

    // Test service worker
    const swResponse = await fetch(`${url}/service-worker.js`);
    if (!swResponse.ok) {
        throw new Error(`Service worker failed to load: ${swResponse.status}`);
    }

    console.log('    ✓ Core features working');
}

// Run verification
verifyDeployment().catch(error => {
    console.error('❌ Deployment verification failed:', error);
    process.exit(1);
});

```

## 🔄 Rollback Procedures

### Emergency Rollback

```bash

# 1. Identify last known good deployment

firebase hosting:versions:list

# 2. Rollback to previous version

firebase hosting:versions:rollback VERSION_ID

# 3. Verify rollback

curl -f https://libertyridgetraininggrounds.com/health

```

### Automated Rollback Triggers

```javascript

// scripts/auto-rollback.js
const { execSync } = require('child_process');

async function monitorDeployment() {
    const healthCheckUrl = 'https://libertyridgetraininggrounds.com/health';
    const maxRetries = 3;
    let attempts = 0;

    while (attempts < maxRetries) {
        try {
            const response = await fetch(healthCheckUrl);
            const health = await response.json();

            if (health.status === 'healthy') {
                console.log('✅ Deployment healthy');
                return;
            }

            console.log(`⚠️ Health check failed (attempt ${attempts + 1})`);

        } catch (error) {
            console.log(`❌ Health check error: ${error.message}`);
        }

        attempts++;
        await new Promise(resolve => setTimeout(resolve, 30000)); // Wait 30 seconds
    }

    // Trigger rollback
    console.log('🔄 Triggering automatic rollback...');
    execSync('firebase hosting:versions:rollback');

    // Notify team
    console.log('📧 Notifying team of rollback...');
    // Add notification logic here
}

module.exports = { monitorDeployment };

```

## 📋 Deployment Checklist

### Pre-Deployment

- [ ] **Code Review**: All changes reviewed and approved
- [ ] **Tests Passing**: Unit, integration, and e2e tests pass
- [ ] **Linting**: Code quality checks pass
- [ ] **Performance**: Lighthouse audit meets requirements
- [ ] **Security**: No security vulnerabilities detected
- [ ] **Dependencies**: All dependencies up to date
- [ ] **Environment Variables**: All required variables configured
- [ ] **Backup**: Current production state backed up

### Deployment Process

- [ ] **Build**: Production build created successfully
- [ ] **Staging Deploy**: Deployed to staging environment
- [ ] **Staging Test**: Manual testing completed on staging
- [ ] **Client Approval**: Client has approved staging changes
- [ ] **Production Deploy**: Deployed to production
- [ ] **Health Check**: Post-deployment health checks pass
- [ ] **Performance Verification**: Performance targets met
- [ ] **Monitoring**: All monitoring systems active

### Post-Deployment

- [ ] **Verification**: Core functionality tested
- [ ] **Performance Monitoring**: Real user metrics reviewed
- [ ] **Error Tracking**: No new errors detected
- [ ] **Analytics**: Traffic and conversion metrics normal
- [ ] **Documentation**: Deployment documented
- [ ] **Team Notification**: Team informed of successful deployment
- [ ] **Rollback Plan**: Rollback procedure confirmed ready

---

*These deployment guidelines ensure Liberty Ridge maintains reliable, secure, and high-performance production deployments with military-grade operational procedures.*
