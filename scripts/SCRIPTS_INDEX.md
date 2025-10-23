# 🔧 Liberty Ridge Development Scripts

> **Navigation**: [📋 Main README](../README.md) → [📚 Documentation Index](../docs/DOCUMENTATION_INDEX.md) → **Scripts Index**

This directory contains essential development scripts for maintaining code quality and automating tasks.

## 📁 Scripts Overview

### Core Development Scripts

- **`lint.js`** - Comprehensive JavaScript linting with multiple modes
- **`fix-markdown.js`** - Automatic markdown formatting and linting fixes

### Root Level Utility Scripts

- **`build-optimized.js`** - Production build optimization
- **`optimize-images.js`** - Image compression and format conversion
- **`lighthouse-audit.js`** - Performance testing and reporting
- **`advanced-server.py`** - Development server with compression
- **`dev-server.py`** - Simple development server

## 🎯 Available NPM Scripts

### Linting & Quality

```bash

npm run lint              # Basic JavaScript linting
npm run lint:fix         # Auto-fix JavaScript issues
npm run lint:strict      # Zero-tolerance linting
npm run lint:all         # Complete JavaScript + Markdown linting

npm run fix:markdown     # Fix markdown formatting issues
npm run lint:markdown    # Check markdown (requires markdownlint-cli)

```

### Build & Optimization

```bash

npm run build:optimized  # Run production build optimization
npm run optimize:images  # Optimize and convert images
npm run audit:lighthouse # Run Lighthouse performance audit

```

### Development

```bash

npm run dev              # Start Firebase development server
npm run dev:compressed   # Start Python development server with compression

```

### Testing & Reporting

```bash

npm run lint:report      # Generate detailed lint report
npm run format:check     # Check code formatting

```

## 🧹 Cleanup Summary

### Files Removed (to minimize confusion)

- ❌ `.eslintrc.json` - Duplicate ESLint config (consolidated into package.json)
- ❌ `.prettierrc` - Conflicting Prettier config (consolidated into package.json)
- ❌ `scripts/fix-markdown-lint.js` - Old buggy markdown script
- ❌ `scripts/fix-markdown-lint-v2.js` - Renamed to cleaner name

### Files Organized

- ✅ `scripts/fix-markdown.js` - Clean, reliable markdown fixer
- ✅ `package.json` - Consolidated all configs and added utility scripts
- ✅ Root utility scripts - Properly referenced in npm scripts

## 🎖️ Military-Grade Standards

All scripts now meet Liberty Ridge's zero-tolerance quality standards:

- **0 ESLint errors** with strict checking
- **0 ESLint warnings** in production mode
- **0 Markdown formatting violations**
- **Consistent code style** across all files
- **Proper error handling** and user feedback

## 🚀 Quick Start

Run comprehensive quality check:

```bash

npm run lint:all

```

This will:

1. ✅ Run strict JavaScript linting
2. 📝 Fix any markdown formatting issues
3. 🎉 Confirm military-grade code quality

---

*Last updated: October 16, 2025*
*Liberty Ridge Training Grounds - Professional, Military-Grade Development Standards*
