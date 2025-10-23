# 💻 Development Workflow & Standards

> **Navigation**: [📋 Main README](../../../README.md) → [📚 Documentation Index](../../DOCUMENTATION_INDEX.md) → [🎯 Developer Guide](../DEVELOPER_GUIDE.md) → **Development Standards**

## 🚀 Getting Started

### Prerequisites

```bash

# Required tools for LR development

node.js >= 16.0.0
python >= 3.8
git >= 2.30.0
firebase-cli >= 11.0.0

```

### Initial Setup

```bash

# Clone and setup LR project

git clone https://github.com/Ramsey-USA/liberty-ridge.git
cd liberty-ridge

# Install dependencies

npm install

# Configure Firebase

firebase login
firebase use --add

# Start development

python3 dev-server.py

```

## 📁 File Organization Standards

### Naming Conventions

#### Files & Folders

```bash

# ✅ CORRECT

main.js
firebase-config.js
admin-dashboard.css
user-profile.html
OPTIMIZATION_COMPLETE.md

# ❌ INCORRECT

Main.js
firebaseConfig.js
AdminDashboard.css
userProfile.html
optimization_complete.md

```

**Rules:**

- **JavaScript/CSS/HTML**: `kebab-case`
- **Documentation**: `UPPER_SNAKE_CASE.md`
- **Folders**: `kebab-case` (lowercase)
- **Constants**: `UPPER_SNAKE_CASE`

#### JavaScript Variables & Functions

```javascript

// ✅ CORRECT - camelCase
const userName = 'zach';
const firebaseConfig = {...};
function scheduleConsultation() {}
class AdminDashboard {}

// ✅ CORRECT - Constants
const API_ENDPOINTS = {...};
const CACHE_DURATION = 3600;

// ❌ INCORRECT
const user_name = 'zach';        // snake_case
const UserName = 'zach';         // PascalCase for variables
function ScheduleConsultation() {} // PascalCase for functions

```

#### CSS Classes

```css

/* ✅ CORRECT - BEM methodology with LR prefix */
.lr-button {}
.lr-button--primary {}
.lr-button--secondary {}
.lr-button__icon {}
.lr-card {}
.lr-card--elevated {}
.lr-card__header {}
.lr-card__content {}

/* ✅ CORRECT - Utility classes */
.text-center {}
.flex-column {}
.m-lg {}
.p-md {}

/* ❌ INCORRECT */
.Button {}              // PascalCase
.lr_button {}          // snake_case
.lrButton {}           // camelCase
.primary-button {}     // No LR prefix

```

### Folder Structure Standards

```text

src/
├── index.html           # Main entry point
├── css/                 # Stylesheets
│   ├── critical.css     # Critical path CSS
│   ├── main.css         # Main styles
│   └── components/      # Component-specific styles
├── js/                  # JavaScript
│   ├── main.js          # Main application
│   ├── components/      # Reusable components
│   ├── utils/           # Utility functions
│   └── services/        # API/Firebase services
├── assets/              # Static assets
│   ├── images/          # Optimized images
│   └── videos/          # Video content
└── admin/               # Admin interface
    ├── index.html
    ├── admin.js
    └── admin.css

```

## 📝 Code Standards

### HTML Standards

#### Document Structure

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liberty Ridge Training Grounds</title>

    <!-- Critical CSS inlined -->
    <style>/* Critical CSS here */</style>

    <!-- Preload important resources -->
    <link rel="preload" href="/css/main.min.css" as="style">
</head>
<body>
    <!-- Semantic HTML structure -->
    <header class="lr-header">
        <nav class="lr-nav" aria-label="Main navigation">
            <!-- Navigation content -->
        </nav>
    </header>

    <main class="lr-main">
        <!-- Main content -->
    </main>

    <footer class="lr-footer">
        <!-- Footer content -->
    </footer>

    <!-- JavaScript at bottom -->
    <script src="/js/main.js" defer></script>
</body>
</html>

```

#### Accessibility Requirements

```html

<!-- ✅ CORRECT - Accessible forms -->
<form class="lr-form">
    <label for="user-name" class="lr-label">Full Name</label>
    <input
        type="text"
        id="user-name"
        name="userName"
        class="lr-input"
        required
        aria-describedby="name-help"
    >
    <div id="name-help" class="lr-help-text">
        Enter your full name for the consultation
    </div>
</form>

<!-- ✅ CORRECT - Accessible buttons -->
<button
    type="button"
    class="lr-button lr-button--primary"
    aria-label="Schedule consultation with Zach"
>
    Schedule Consultation
</button>

<!-- ✅ CORRECT - Image accessibility -->
<img
    src="/assets/images/zach-training.webp"
    alt="Zach providing one-on-one firearms training at Liberty Ridge"
    class="lr-image"
    loading="lazy"
>

```

### CSS Standards

#### Organization

```css

/* 1. CSS Custom Properties */
:root {
    --color-primary: #1a1a1a;
    --spacing-md: 1rem;
}

/* 2. Reset/Base styles */

* {

    box-sizing: border-box;
}

/* 3. Layout components */
.lr-container {
    max-width: var(--max-width);
    margin: 0 auto;
}

/* 4. UI components */
.lr-button {
    /* Base button styles */
}

.lr-button--primary {
    /* Primary button modifier */
}

/* 5. Utility classes */
.text-center {
    text-align: center;
}

/* 6. Media queries */
@media (max-width: 768px) {
    .lr-container {
        padding: var(--spacing-sm);
    }
}

```

#### Performance Best Practices

```css

/* ✅ CORRECT - Efficient selectors */
.lr-button {}
.lr-card__header {}

/* ✅ CORRECT - Hardware acceleration */
.lr-modal {
    transform: translateZ(0);
    will-change: transform;
}

/* ✅ CORRECT - Optimize animations */
.lr-fade-in {
    animation: fadeIn 0.3s ease-out;
}

/* ❌ INCORRECT - Inefficient selectors */
div.container > ul li a {}

* + * {}

```

### JavaScript Standards

#### Module Organization

```javascript

// ✅ CORRECT - ES6 modules
// firebase-service.js
export class FirebaseService {
    constructor() {
        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }

    async scheduleConsultation(data) {
        try {
            const result = await this.db.collection('consultations').add(data);
            return { success: true, id: result.id };
        } catch (error) {
            console.error('Consultation scheduling failed:', error);
            return { success: false, error: error.message };
        }
    }
}

// main.js
import { FirebaseService } from './firebase-service.js';

const firebaseService = new FirebaseService();

```

#### Error Handling

```javascript

// ✅ CORRECT - Comprehensive error handling
async function uploadImage(file) {
    try {
        // Validate file
        if (!file || !file.type.startsWith('image/')) {
            throw new Error('Invalid file type');
        }

        // Check file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            throw new Error('File too large (max 5MB)');
        }

        // Upload file
        const result = await uploadToFirebase(file);
        return { success: true, url: result.downloadURL };

    } catch (error) {
        console.error('Upload failed:', error);
        showUserMessage('Upload failed. Please try again.', 'error');
        return { success: false, error: error.message };
    }
}

// ✅ CORRECT - User feedback
function showUserMessage(message, type = 'info') {
    const messageEl = document.createElement('div');
    messageEl.className = `lr-message lr-message--${type}`;
    messageEl.textContent = message;

    document.body.appendChild(messageEl);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageEl.remove();
    }, 5000);
}

```

#### Performance Optimization

```javascript

// ✅ CORRECT - Debounced search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const searchInput = document.querySelector('#search');
const debouncedSearch = debounce(performSearch, 300);
searchInput.addEventListener('input', debouncedSearch);

// ✅ CORRECT - Efficient DOM operations
function updateScheduleDisplay(appointments) {
    // Use DocumentFragment for multiple DOM insertions
    const fragment = document.createDocumentFragment();

    appointments.forEach(appointment => {
        const appointmentEl = createAppointmentElement(appointment);
        fragment.appendChild(appointmentEl);
    });

    const container = document.querySelector('.lr-schedule');
    container.innerHTML = ''; // Clear existing
    container.appendChild(fragment);
}

```

## 🔧 Development Tools

### ESLint Configuration

```json

// .eslintrc.json
{
    "extends": [
        "eslint:recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2022,
        "sourceType": "module"
    },
    "rules": {
        "no-console": "warn",
        "no-unused-vars": "error",
        "prefer-const": "error",
        "no-var": "error"
    }
}

```

### Git Workflow

#### Commit Standards

```bash

# ✅ CORRECT - Conventional commits

git commit -m "feat: add consultation scheduling form"
git commit -m "fix: resolve mobile menu navigation issue"
git commit -m "perf: optimize image loading with lazy loading"
git commit -m "docs: update deployment guidelines"
git commit -m "style: update button styles for better contrast"

# Commit types:

# feat: New feature

# fix: Bug fix

# perf: Performance improvement

# docs: Documentation changes

# style: Code style changes

# refactor: Code refactoring

# test: Adding tests

```

#### Branch Naming

```bash

# ✅ CORRECT

feature/consultation-scheduling
fix/mobile-menu-navigation
perf/image-optimization
docs/developer-guidelines

# ❌ INCORRECT

Feature/ConsultationScheduling
fix_mobile_menu
performance
new-docs

```

#### Pull Request Template

```markdown

## 🎯 Description

Brief description of what this PR accomplishes.

## 🛠 Changes Made

- [ ] Added consultation scheduling form
- [ ] Updated mobile navigation
- [ ] Optimized image loading

## 🧪 Testing

- [ ] Tested on desktop browsers
- [ ] Tested on mobile devices
- [ ] Lighthouse performance check passed
- [ ] Accessibility review completed

## 📸 Screenshots

Before/after screenshots if applicable.

## 🔗 Related Issues

Closes #123

```

## 📊 Performance Standards

### Lighthouse Requirements

- **Performance**: 95+/100
- **Accessibility**: 100/100
- **Best Practices**: 100/100
- **SEO**: 95+/100

### Bundle Size Limits

```bash

# Target bundle sizes

JavaScript Total: < 20KB compressed
CSS Total: < 10KB compressed
Images: WebP/AVIF optimized
Fonts: Subsetting enabled

```

### Core Web Vitals Targets

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## 🔒 Security Standards

### Content Security Policy

```html

<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self' 'unsafe-inline' https://www.gstatic.com;
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
               font-src 'self' https://fonts.gstatic.com;">

```

### Input Validation

```javascript

// ✅ CORRECT - Server-side validation
function validateConsultationData(data) {
    const errors = [];

    // Required fields
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Name is required (minimum 2 characters)');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.push('Valid email is required');
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (data.phone && !phoneRegex.test(data.phone.replace(/\D/g, ''))) {
        errors.push('Valid 10-digit phone number required');
    }

    return errors;
}

```

## 📋 Code Review Checklist

### Before Submitting PR

- [ ] **Functionality**: Code works as expected
- [ ] **Performance**: No performance regressions
- [ ] **Accessibility**: WCAG 2.1 AA compliant
- [ ] **Brand Standards**: Follows LR design system
- [ ] **Mobile**: Responsive design tested
- [ ] **Security**: Input validation implemented
- [ ] **Documentation**: Code is well-documented
- [ ] **Testing**: Manual testing completed

### Review Criteria

- [ ] **Code Quality**: Clean, readable, maintainable
- [ ] **Performance**: Lighthouse score maintained
- [ ] **Consistency**: Follows established patterns
- [ ] **Security**: No security vulnerabilities
- [ ] **Accessibility**: Screen reader compatible
- [ ] **Brand Compliance**: Matches LR standards

---

*These development standards ensure Liberty Ridge maintains its high-quality, performant, and professional codebase while providing an excellent user experience.*
