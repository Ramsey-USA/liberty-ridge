# Liberty Ridge Training Grounds 🎯

## Professional Firearms Training Platform - Pasco, WA

[![Performance](https://img.shields.io/badge/Lighthouse-95%2B-brightgreen.svg)](docs/optimization/)
[![Bundle Size](https://img.shields.io/badge/Bundle-9.9KB-blue.svg)](docs/optimization/)
[![Uptime](https://img.shields.io/badge/Uptime-99.9%25-green.svg)](https://libertyridgetraininggrounds.com)

> Expert firearms training by Army veteran Zach. Professional, safe, one-on-one instruction for responsible gun owners in the Pacific Northwest.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Ramsey-USA/liberty-ridge.git
cd liberty-ridge

# Install dependencies
npm install

# Start development server
python3 dev-server.py

# Build optimized bundles
node build-optimized.js

# Generate optimized images
node optimize-images.js
```

Note: Some cloud builders expect a `build.js` entrypoint. This repo now includes a small compatibility shim `build.js` that forwards to `build-optimized.js` so `npm run build` works in those environments.

If you need to skip running package.json scripts during a Google Cloud build, set the following environment variable in your build config:

```bash
# Disable running package.json scripts during Google Cloud builds
GOOGLE_NODE_RUN_SCRIPTS=
```

**Live Site**: [www.libertyridgetraininggrounds.com](https://www.libertyridgetraininggrounds.com)
**Development**: [http://localhost:8080](http://localhost:8080)

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Performance Optimization](#-performance-optimization)
- [Technology Stack](#-technology-stack)
- [Features](#-features)
- [Developer Experience](#️-developer-experience)
- [Architecture](#-architecture)
- [Development](#-development)
- [Deployment](#-deployment)
- [Documentation](#-documentation)
- [Optimization Results](#-optimization-results)

## 🎯 Project Overview

Liberty Ridge Training Grounds is a high-performance web platform designed to connect instructor Zach (Army veteran) with individuals seeking expert firearms training. The platform focuses on converting visitors into scheduled consultations through an optimized user experience.

### Core Mission

- Promote safe, professional firearms training
- Build a community of responsible gun owners
- Provide personalized, military-grade instruction
- Convert visitors to scheduled consultations

### Key Objectives

- **Performance**: Lighthouse score 95+/100
- **Conversion**: Seamless consultation scheduling
- **Management**: Integrated CRM workflow
- **Experience**: Professional, responsive design

## ⚡ Performance Optimization

### Current Performance Metrics

- **Lighthouse Score**: 95+/100 Performance
- **Bundle Size**: 9.9KB compressed (75% reduction)
- **Load Time**: <2.5s LCP, <100ms FID
- **Compression**: Gzip 66-80% reduction

### Optimizations Implemented

```text
📦 Bundle Sizes (Production):
├── app-bundle.js      → 9.4K (3.3K compressed)
├── lazy-images.js     → 3.5K (1.0K compressed)
├── performance-monitor.js → 5.1K (1.7K compressed)
├── main.min.css       → 16K (3.2K compressed)
├── critical.min.css   → 3.0K (inlined)
└── lazy-images.min.css → 2.2K (0.7K compressed)

🏆 Total: 39.2K → 9.9K compressed
```

### Performance Features

- ✅ **Critical CSS Inlining**: Instant above-fold rendering
- ✅ **Async Loading**: Non-blocking CSS/JS delivery
- ✅ **Modern Images**: WebP/AVIF with fallbacks
- ✅ **Lazy Loading**: Intersection Observer implementation
- ✅ **Service Worker**: Comprehensive caching strategy
- ✅ **Dead Code Elimination**: Zero unused code
- ✅ **Real-time Monitoring**: Core Web Vitals tracking

## 🛠 Technology Stack

### Frontend

- **HTML5**: Semantic, accessible markup
- **CSS3**: Modern variables, grid, flexbox
- **JavaScript ES6+**: Modular, optimized bundles
- **Material Icons**: Consistent iconography
- **Roboto Font**: Professional typography

### Backend & Database

- **Firebase Authentication**: Secure admin access
- **Cloud Firestore**: NoSQL database for appointments
- **Cloud Storage**: Media hosting and management
- **Firebase Hosting**: Static site deployment

### Infrastructure

- **Cloudflare**: Global CDN, DNS, SSL/TLS
- **HighLevel CRM**: Lead management integration
- **Lighthouse CI**: Performance monitoring
- **GitHub Actions**: Automated deployment

### Development Tools

- **ESBuild**: Fast JavaScript bundling
- **Python Server**: Development with compression
- **Image Optimization**: WebP/AVIF conversion
- **Performance Monitoring**: Real-time metrics

## 🎨 Features

### 📅 Interactive Consultation Scheduling

- Integrated calendar interface
- Real-time availability checking
- Automated CRM integration
- Email confirmation system

### 🖼 Dynamic Media Galleries

- Photo and video showcases
- Drag-and-drop admin uploads
- Automatic image optimization
- Responsive gallery layouts

### 🔐 Admin Dashboard

- Secure, password-protected access
- Media management interface
- Schedule management tools
- Performance analytics

### 💬 Intelligent Chatbot

- FAQ automation system
- Consultation guidance
- Non-intrusive floating design
- Mobile-optimized interface

### 🎯 User Experience

- **Dark/Light Mode**: User preference toggle
- **Responsive Design**: Mobile-first approach
- **Fast Loading**: <3s page load time
- **Accessibility**: WCAG 2.1 compliant

## 🎖️ Developer Experience

### Military-Grade Development Standards

- **[🎨 Brand System](docs/developer/branding/LR_BRAND_STANDARDS.md)**: Strict black, white, grey palette with military precision
- **[⚡ Performance First](docs/developer/guidelines/PERFORMANCE_STANDARDS.md)**: 95+ Lighthouse score requirements
- **[🧩 Component Library](docs/developer/components/COMPONENT_LIBRARY.md)**: Professional UI components following LR standards
- **[🏗️ Clean Architecture](docs/developer/guidelines/PROJECT_ARCHITECTURE.md)**: Scalable, maintainable code patterns

### Development Tools & Workflow

```bash
# Quality Control
npm run lint              # Code quality (30 warning limit)
npm run lint:fix          # Auto-fix formatting
npm run test              # Run test suite

# Performance Monitoring
npm run lighthouse        # Performance audit
npm run analyze           # Bundle analysis

# Professional Deployment
npm run build:production  # Optimized build
npm run deploy:staging    # Staging deployment
npm run deploy:prod       # Production deployment
```

### Code Standards

- **JavaScript**: ES6+ modules, async/await patterns
- **CSS**: BEM methodology with `lr-` prefix, custom properties
- **HTML**: Semantic, accessible markup (WCAG 2.1 AA)
- **Performance**: <20KB JS, <10KB CSS compressed
- **Testing**: 85%+ coverage, comprehensive error handling

**[🚀 Get Started: Developer Guide →](docs/developer/DEVELOPER_GUIDE.md)**

## 🏗 Architecture

### File Structure

```text
liberty-ridge/
├── src/                          # Source code
│   ├── index.html               # Main application
│   ├── css/                     # Stylesheets
│   │   ├── critical.min.css     # Critical path CSS
│   │   ├── main.min.css         # Main styles
│   │   └── lazy-images.min.css  # Image loading styles
│   ├── js/                      # JavaScript
│   │   ├── dist/                # Compiled bundles
│   │   ├── main.js              # Main application logic
│   │   ├── lazy-images.js       # Image optimization
│   │   ├── performance-monitor.js # Metrics tracking
│   │   ├── firebase-config.js   # Firebase setup
│   │   └── firebase-data-service.js # Data layer
│   ├── assets/images/           # Optimized media
│   ├── admin/                   # Admin interface
│   └── service-worker.js        # Caching strategy
├── docs/                        # Documentation
│   ├── developer/               # Developer resources
│   │   ├── DEVELOPER_GUIDE.md   # Main developer index
│   │   ├── branding/            # Brand standards
│   │   ├── workflows/           # Development processes
│   │   ├── components/          # Component library
│   │   └── guidelines/          # Best practices
│   ├── optimization/            # Performance guides
│   ├── setup/                   # Installation guides
│   ├── guides/                  # Usage instructions
│   └── maintenance/             # Maintenance docs
├── build-optimized.js           # Production build
├── optimize-images.js           # Image processing
├── lighthouse-audit.js          # Performance testing
├── dev-server.py               # Development server
└── package.json                # Dependencies
```

### Data Flow

1. **Visitor** → Landing page with optimized loading
2. **Engagement** → Chatbot provides guidance
3. **Interest** → Consultation scheduling interface
4. **Conversion** → CRM integration and follow-up
5. **Admin** → Content management and analytics

## 🚀 Development

### Prerequisites

```bash
# Required tools
node.js >= 16.0.0
python >= 3.8
firebase-cli
```

### Setup

```bash
# Install dependencies
npm install

# Configure Firebase
firebase login
firebase use --add

# Set environment variables
cp .env.example .env.local
# Edit .env.local with your Firebase config
```

### Development Commands

```bash
# Start development server
python3 dev-server.py

# Build optimized bundles
node build-optimized.js

# Generate responsive images
node optimize-images.js

# Run performance audit
node lighthouse-audit.js

# Code quality and linting
npm run lint              # Check code quality (allows 30 warnings)
npm run lint:fix          # Auto-fix formatting and issues
npm run lint:strict       # Zero-tolerance linting
npm run lint:report       # Generate detailed report

# Deploy to Firebase
firebase deploy
```

**[🔧 Scripts Documentation →](scripts/SCRIPTS_INDEX.md)** - Complete development scripts reference

### Performance Testing

```bash
# Local Lighthouse audit
npm run lighthouse

# Core Web Vitals monitoring
# Open browser console:
window.performanceMonitor.getSummary()
```

## 📈 Deployment

### Production Checklist

- ✅ Environment variables configured
- ✅ Firebase project initialized
- ✅ Cloudflare DNS configured
- ✅ SSL certificates active
- ✅ Performance monitoring enabled
- ✅ CRM integration tested

### Deployment Process

```bash
# Build production assets
NODE_ENV=production node build-optimized.js

# Deploy to Firebase
firebase deploy

# Verify deployment
lighthouse https://libertyridgetraininggrounds.com
```

### Monitoring

- **Lighthouse CI**: Automated performance checks
- **Firebase Analytics**: User behavior tracking
- **Cloudflare Analytics**: Traffic and security metrics
- **HighLevel CRM**: Conversion tracking

## 📚 Documentation

Comprehensive documentation is organized in the `docs/` folder with specialized sections for different audiences:

**[📚 Complete Documentation Index →](docs/DOCUMENTATION_INDEX.md)**

### 🎯 [Developer Documentation](docs/developer/DEVELOPER_GUIDE.md)

**Complete development resources following LR's military-grade standards:**

- **[🎨 Brand Standards](docs/developer/branding/LR_BRAND_STANDARDS.md)** - LR's black, white, grey design system and military-inspired principles
- **[💻 Development Standards](docs/developer/workflows/DEVELOPMENT_STANDARDS.md)** - Coding conventions, Git workflow, and quality standards
- **[🧩 Component Library](docs/developer/components/COMPONENT_LIBRARY.md)** - Reusable UI components with LR branding
- **[⚡ Performance Guidelines](docs/developer/guidelines/PERFORMANCE_STANDARDS.md)** - 95+ Lighthouse score requirements and optimization
- **[🏗️ Project Architecture](docs/developer/guidelines/PROJECT_ARCHITECTURE.md)** - Code organization and architectural patterns
- **[🚀 Deployment Guidelines](docs/developer/workflows/DEPLOYMENT_GUIDELINES.md)** - Environment setup and release procedures

**[📖 Start Here: Complete Developer Guide →](docs/developer/DEVELOPER_GUIDE.md)**

### 📁 [Optimization Documentation](docs/optimization/)

- **Performance Results**: Lighthouse optimization outcomes
- **Bundle Analysis**: JavaScript and CSS optimization
- **Image Optimization**: WebP/AVIF conversion guide
- **Caching Strategy**: Service worker implementation

### 📁 [Setup & Configuration](docs/setup/)

- **Firebase Integration**: Complete setup guide
- **Environment Configuration**: Variables and secrets
- **Local Development**: Development environment setup
- **Linting Setup**: Code quality configuration

### 📁 [User Guides](docs/guides/)

- **Admin Usage**: Content management instructions
- **Upload System**: Media upload functionality
- **Consultation Scheduling**: Calendar integration guide
- **CRM Integration**: HighLevel setup and configuration

### 📁 [Maintenance Procedures](docs/maintenance/)

- **Performance Monitoring**: Ongoing optimization
- **Security Updates**: Maintenance procedures
- **Backup Procedures**: Data protection strategies
- **Troubleshooting**: Common issues and solutions

## 🏆 Optimization Results

### Before vs After

| Metric               | Before  | After   | Improvement   |
| -------------------- | ------- | ------- | ------------- |
| **Lighthouse Score** | 86/100  | 95+/100 | +9-14 points  |
| **Bundle Size**      | 156KB   | 39.2KB  | 75% reduction |
| **Compressed Size**  | N/A     | 9.9KB   | 66-80% gzip   |
| **LCP**              | Unknown | <2.5s   | Optimized     |
| **FID**              | Unknown | <100ms  | Optimized     |
| **CLS**              | Unknown | <0.1    | Optimized     |

### Key Achievements

- 🎯 **Target Met**: 95+/100 Lighthouse Performance Score
- 📦 **Bundle Optimized**: 75% size reduction achieved
- 🚀 **Load Speed**: Sub-3 second page loads
- 💾 **Memory Efficient**: Minimal JavaScript footprint
- 🔄 **Offline Ready**: Service worker caching
- 📱 **Mobile Optimized**: Perfect mobile experience
- ♿ **Accessible**: WCAG 2.1 AA compliant
- 🔒 **Secure**: Best-practice security headers

### Upload System Compatibility

- ✅ **Zero Breaking Changes**: All functionality preserved
- ✅ **Enhanced Performance**: Automatic image optimization
- ✅ **Pro User Features**: 100% compatibility maintained
- ✅ **Admin Interface**: Fully functional with optimized assets

---

## 📞 Support & Contact

### 🎯 For Developers

- **[🚀 Developer Guide](docs/developer/DEVELOPER_GUIDE.md)** - Complete development documentation
- **[🎨 Brand Standards](docs/developer/branding/LR_BRAND_STANDARDS.md)** - LR design system and branding guidelines
- **[🧩 Component Library](docs/developer/components/COMPONENT_LIBRARY.md)** - Reusable UI components
- **[Repository Issues](https://github.com/Ramsey-USA/liberty-ridge/issues)** - Report bugs and request features

### 🌐 General Information

- **Website**: [libertyridgetraininggrounds.com](https://libertyridgetraininggrounds.com)
- **Instructor**: Zach (Army Veteran)
- **Location**: Pasco, WA
- **Repository**: [github.com/Ramsey-USA/liberty-ridge](https://github.com/Ramsey-USA/liberty-ridge)

## 📄 License

This project is proprietary software for Liberty Ridge Training Grounds. All rights reserved.

---

Built with ⚡ performance and 🎯 conversion in mind
Optimized for 95+ Lighthouse Performance Score
