# 🏗️ Project Architecture & Structure

> **Navigation**: [📋 Main README](../../../README.md) → [📚 Documentation Index](../../DOCUMENTATION_INDEX.md) → [🎯 Developer Guide](../DEVELOPER_GUIDE.md) → **Project Architecture**

## 📁 Standard Project Structure

Liberty Ridge follows a **military-precise file organization** that ensures maintainability, scalability, and developer efficiency.

### Root Directory Layout

```text

liberty-ridge/
├── 📄 README.md                    # Main project documentation
├── 📄 package.json                 # Dependencies and scripts
├── 📄 firebase.json                # Firebase configuration
├── 📄 .gitignore                   # Git ignore rules
├── 📄 .eslintrc.json              # Code quality rules
├── 📄 dev-server.py               # Development server
├── 📄 build-optimized.js          # Production build script
├── 📄 optimize-images.js          # Image optimization
├── 📄 lighthouse-audit.js         # Performance testing
├── 📁 src/                        # Source code
├── 📁 docs/                       # Documentation
├── 📁 scripts/                    # Build and utility scripts
├── 📁 lighthouse-reports/         # Performance reports
└── 📁 .firebase/                  # Firebase deployment cache

```

### Source Code Organization

```text

src/
├── 📄 index.html                  # Main application entry
├── 📄 service-worker.js           # PWA caching strategy
├── 📁 css/                        # Stylesheets
│   ├── 📄 critical.css            # Critical path styles
│   ├── 📄 critical.min.css        # Minified critical CSS
│   ├── 📄 main.css                # Main stylesheet (development)
│   ├── 📄 main.min.css            # Minified main styles
│   ├── 📄 lazy-images.css         # Image loading styles
│   └── 📄 lazy-images.min.css     # Minified image styles
├── 📁 js/                         # JavaScript modules
│   ├── 📄 main.js                 # Main application logic
│   ├── 📄 lazy-images.js          # Image optimization
│   ├── 📄 performance-monitor.js  # Performance tracking
│   ├── 📄 firebase-config.js      # Firebase initialization
│   ├── 📄 firebase-data-service.js # Data layer abstraction
│   ├── 📁 dist/                   # Compiled/bundled files
│   │   ├── 📄 app-bundle.js       # Main application bundle
│   │   ├── 📄 lazy-images.js      # Image loader bundle
│   │   └── 📄 performance-monitor.js # Performance bundle
│   ├── 📁 components/             # Reusable UI components
│   ├── 📁 utils/                  # Utility functions
│   └── 📁 services/               # API and external services
├── 📁 assets/                     # Static assets
│   ├── 📁 images/                 # Optimized images
│   │   ├── 📁 originals/          # Original image files
│   │   ├── 📁 webp/               # WebP optimized
│   │   ├── 📁 avif/               # AVIF optimized
│   │   └── 📁 thumbnails/         # Thumbnail versions
│   ├── 📁 videos/                 # Video content
│   ├── 📁 fonts/                  # Custom fonts
│   └── 📁 icons/                  # Icon assets
└── 📁 admin/                      # Admin interface
    ├── 📄 index.html              # Admin dashboard
    ├── 📄 admin.js                # Admin functionality
    ├── 📄 admin.css               # Admin styles
    └── 📁 components/             # Admin-specific components

```

### Documentation Structure

```text

docs/
├── 📄 LINTING_GUIDE.md            # Code quality guidelines
├── 📄 LINTING_COMPLETION_SUMMARY.md # Linting setup results
├── 📁 developer/                  # Developer documentation
│   ├── 📄 DEVELOPER_GUIDE.md      # Main developer index
│   ├── 📁 branding/               # Brand guidelines
│   │   └── 📄 LR_BRAND_STANDARDS.md # Design system
│   ├── 📁 workflows/              # Development processes
│   │   └── 📄 DEVELOPMENT_STANDARDS.md # Coding standards
│   ├── 📁 components/             # Component library
│   │   └── 📄 COMPONENT_LIBRARY.md # UI components
│   └── 📁 guidelines/             # Best practices
│       └── 📄 PERFORMANCE_STANDARDS.md # Performance rules
├── 📁 setup/                      # Setup and configuration
│   ├── 📄 FIREBASE_INTEGRATION_GUIDE.md # Firebase setup
│   ├── 📄 LINT_SETUP_COMPLETE.md  # Linting configuration
│   └── 📄 LINTING_GUIDE.md        # Linting instructions
├── 📁 optimization/               # Performance documentation
│   ├── 📄 LIGHTHOUSE_PHASE1_COMPLETE.md # Optimization results
│   ├── 📄 OPTIMIZATION_COMPLETE.md # Final optimization summary
│   ├── 📄 CLEANUP_COMPLETE.md     # Code cleanup results
│   └── 📄 FINAL_OPTIMIZATION_SUMMARY.md # Complete summary
├── 📁 guides/                     # User guides
├── 📁 maintenance/                # Maintenance procedures
└── 📁 deployment/                 # Deployment guides

```

### Scripts Directory

```text

scripts/
├── 📄 lint.js                     # Code quality checker
├── 📄 test.js                     # Test runner
├── 📄 deploy.js                   # Deployment automation
├── 📄 backup.js                   # Backup procedures
└── 📄 optimize.js                 # Asset optimization

```

## 🎯 Architectural Patterns

### Module Organization

#### 1. Component-Based Architecture

```javascript

// components/consultation-form/index.js
export class ConsultationForm {
    constructor(container, options = {}) {
        this.container = container;
        this.options = { ...this.defaultOptions, ...options };
        this.state = {
            isSubmitting: false,
            errors: {},
            data: {}
        };

        this.init();
    }

    get defaultOptions() {
        return {
            validateOnBlur: true,
            submitEndpoint: '/api/consultations',
            successMessage: 'Consultation scheduled successfully!'
        };
    }

    init() {
        this.render();
        this.bindEvents();
        this.setupValidation();
    }

    render() {
        this.container.innerHTML = this.getTemplate();
        this.cacheElements();
    }

    getTemplate() {
        return `
            <form class="lr-form consultation-form">
                <div class="lr-form-group">
                    <label for="client-name" class="lr-label">Full Name</label>
                    <input type="text" id="client-name" name="name"
                           class="lr-input" required>
                </div>
                <!-- Additional form fields -->
                <button type="submit" class="lr-button lr-button--primary">
                    Schedule Consultation
                </button>
            </form>
        `;
    }

    // Additional methods...
}

// Usage
import { ConsultationForm } from './components/consultation-form/index.js';

const formContainer = document.querySelector('#consultation-form');
const consultationForm = new ConsultationForm(formContainer, {
    submitEndpoint: '/api/schedule-consultation'
});

```

#### 2. Service Layer Pattern

```javascript

// services/firebase-service.js
export class FirebaseService {
    constructor() {
        this.auth = firebase.auth();
        this.db = firebase.firestore();
        this.storage = firebase.storage();
        this.functions = firebase.functions();
    }

    // Authentication methods
    async signIn(email, password) {
        try {
            const result = await this.auth.signInWithEmailAndPassword(email, password);
            return { success: true, user: result.user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // Database methods
    async createConsultation(data) {
        try {
            const docRef = await this.db.collection('consultations').add({
                ...data,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                status: 'pending'
            });
            return { success: true, id: docRef.id };
        } catch (error) {
            console.error('Error creating consultation:', error);
            return { success: false, error: error.message };
        }
    }

    // Storage methods
    async uploadImage(file, path) {
        try {
            const storageRef = this.storage.ref().child(path);
            const snapshot = await storageRef.put(file);
            const downloadURL = await snapshot.ref.getDownloadURL();
            return { success: true, url: downloadURL };
        } catch (error) {
            console.error('Error uploading image:', error);
            return { success: false, error: error.message };
        }
    }
}

// Singleton pattern for global access
const firebaseService = new FirebaseService();
export default firebaseService;

```

#### 3. State Management Pattern

```javascript

// utils/state-manager.js
export class StateManager {
    constructor(initialState = {}) {
        this.state = { ...initialState };
        this.subscribers = new Map();
        this.history = [{ ...this.state }];
        this.historyIndex = 0;
    }

    getState() {
        return { ...this.state };
    }

    setState(updates, source = 'unknown') {
        const prevState = { ...this.state };
        this.state = { ...this.state, ...updates };

        // Add to history
        this.history = this.history.slice(0, this.historyIndex + 1);
        this.history.push({ ...this.state });
        this.historyIndex = this.history.length - 1;

        // Notify subscribers
        this.notifySubscribers(prevState, this.state, source);
    }

    subscribe(key, callback) {
        if (!this.subscribers.has(key)) {
            this.subscribers.set(key, []);
        }
        this.subscribers.get(key).push(callback);

        // Return unsubscribe function
        return () => {
            const callbacks = this.subscribers.get(key);
            const index = callbacks.indexOf(callback);
            if (index > -1) {
                callbacks.splice(index, 1);
            }
        };
    }

    notifySubscribers(prevState, newState, source) {
        for (const [key, callbacks] of this.subscribers) {
            if (this.hasChanged(prevState[key], newState[key])) {
                callbacks.forEach(callback => {
                    callback(newState[key], prevState[key], source);
                });
            }
        }
    }

    hasChanged(prev, current) {
        return JSON.stringify(prev) !== JSON.stringify(current);
    }

    // Time travel debugging
    undo() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            this.state = { ...this.history[this.historyIndex] };
            this.notifySubscribers({}, this.state, 'undo');
        }
    }

    redo() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            this.state = { ...this.history[this.historyIndex] };
            this.notifySubscribers({}, this.state, 'redo');
        }
    }
}

// Global application state
export const appState = new StateManager({
    user: null,
    isAuthenticated: false,
    consultations: [],
    loading: false,
    notifications: []
});

```

### Error Handling Architecture

```javascript

// utils/error-handler.js
export class ErrorHandler {
    constructor() {
        this.errorQueue = [];
        this.maxQueueSize = 100;
        this.setupGlobalHandlers();
    }

    setupGlobalHandlers() {
        // Catch unhandled JavaScript errors
        window.addEventListener('error', (event) => {
            this.handleError({
                type: 'javascript',
                message: event.message,
                filename: event.filename,
                line: event.lineno,
                column: event.colno,
                stack: event.error?.stack
            });
        });

        // Catch unhandled promise rejections
        window.addEventListener('unhandledrejection', (event) => {
            this.handleError({
                type: 'promise',
                message: event.reason?.message || 'Unhandled promise rejection',
                reason: event.reason
            });
        });

        // Catch resource loading errors
        window.addEventListener('error', (event) => {
            if (event.target !== window) {
                this.handleError({
                    type: 'resource',
                    message: `Failed to load resource: ${event.target.src || event.target.href}`,
                    element: event.target.tagName,
                    src: event.target.src || event.target.href
                });
            }
        }, true);
    }

    handleError(error) {
        // Add timestamp and ID
        const errorWithMeta = {
            ...error,
            id: this.generateErrorId(),
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href
        };

        // Add to queue
        this.errorQueue.push(errorWithMeta);
        if (this.errorQueue.length > this.maxQueueSize) {
            this.errorQueue.shift();
        }

        // Log to console in development
        if (process.env.NODE_ENV === 'development') {
            console.group('🚨 Error Caught');
            console.error('Type:', error.type);
            console.error('Message:', error.message);
            console.error('Details:', error);
            console.groupEnd();
        }

        // Report to error tracking service
        this.reportError(errorWithMeta);

        // Show user-friendly message for critical errors
        if (this.isCriticalError(error)) {
            this.showUserNotification(error);
        }
    }

    isCriticalError(error) {
        const criticalPatterns = [
            /firebase/i,
            /network/i,
            /authentication/i,
            /payment/i
        ];

        return criticalPatterns.some(pattern =>
            pattern.test(error.message) || pattern.test(error.type)
        );
    }

    showUserNotification(error) {
        // Show user-friendly error message
        const notification = document.createElement('div');
        notification.className = 'lr-alert lr-alert--error';
        notification.innerHTML = `
            <div class="lr-alert__content">
                <h4 class="lr-alert__title">Something went wrong</h4>
                <p class="lr-alert__message">
                    We're experiencing technical difficulties. Please try again in a moment.
                </p>
            </div>
        `;

        document.body.appendChild(notification);

        // Auto-remove after 5 seconds
        setTimeout(() => notification.remove(), 5000);
    }

    reportError(error) {
        // Report to Firebase or external service
        if (typeof gtag !== 'undefined') {
            gtag('event', 'exception', {
                description: error.message,
                fatal: this.isCriticalError(error)
            });
        }
    }

    generateErrorId() {
        return Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    }

    getErrorHistory() {
        return [...this.errorQueue];
    }
}

// Initialize global error handler
export const errorHandler = new ErrorHandler();

```

## 🔄 Data Flow Architecture

### Request/Response Flow

```text

User Interaction
      ↓
   UI Component
      ↓
   State Manager
      ↓
   Service Layer
      ↓
   Firebase API
      ↓
   Response Handler
      ↓
   State Update
      ↓
   UI Re-render

```

### Event-Driven Architecture

```javascript

// utils/event-bus.js
export class EventBus {
    constructor() {
        this.events = new Map();
        this.middlewares = [];
    }

    // Register event listener
    on(event, callback, options = {}) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }

        const listener = {
            callback,
            once: options.once || false,
            priority: options.priority || 0
        };

        this.events.get(event).push(listener);

        // Sort by priority (higher first)
        this.events.get(event).sort((a, b) => b.priority - a.priority);

        // Return unsubscribe function
        return () => this.off(event, callback);
    }

    // Remove event listener
    off(event, callback) {
        if (!this.events.has(event)) return;

        const listeners = this.events.get(event);
        const index = listeners.findIndex(l => l.callback === callback);

        if (index > -1) {
            listeners.splice(index, 1);
        }
    }

    // Emit event
    emit(event, data = {}) {
        // Run through middlewares first
        let processedData = data;
        for (const middleware of this.middlewares) {
            processedData = middleware(event, processedData);
        }

        if (!this.events.has(event)) return;

        const listeners = this.events.get(event);
        const toRemove = [];

        listeners.forEach((listener, index) => {
            try {
                listener.callback(processedData);

                // Remove 'once' listeners after execution
                if (listener.once) {
                    toRemove.push(index);
                }
            } catch (error) {
                console.error(`Error in event listener for '${event}':`, error);
            }
        });

        // Remove 'once' listeners
        toRemove.reverse().forEach(index => {
            listeners.splice(index, 1);
        });
    }

    // Add middleware for event processing
    use(middleware) {
        this.middlewares.push(middleware);
    }

    // Clear all listeners for an event
    clear(event) {
        this.events.delete(event);
    }

    // Get all registered events
    getEvents() {
        return Array.from(this.events.keys());
    }
}

// Global event bus
export const eventBus = new EventBus();

// Common application events
export const EVENTS = {
    USER_LOGIN: 'user:login',
    USER_LOGOUT: 'user:logout',
    CONSULTATION_CREATED: 'consultation:created',
    CONSULTATION_UPDATED: 'consultation:updated',
    IMAGE_UPLOADED: 'image:uploaded',
    ERROR_OCCURRED: 'error:occurred',
    PERFORMANCE_METRIC: 'performance:metric'
};

```

## 🧪 Testing Architecture

### Test Structure

```text

tests/
├── 📁 unit/                        # Unit tests
│   ├── 📁 components/              # Component tests
│   ├── 📁 services/                # Service tests
│   └── 📁 utils/                   # Utility tests
├── 📁 integration/                 # Integration tests
│   ├── 📁 api/                     # API tests
│   └── 📁 workflows/               # User workflow tests
├── 📁 e2e/                         # End-to-end tests
│   ├── 📁 user-journeys/           # Complete user flows
│   └── 📁 admin-flows/             # Admin functionality
├── 📁 performance/                 # Performance tests
├── 📁 fixtures/                    # Test data
└── 📁 helpers/                     # Test utilities

```

### Test Configuration

```javascript

// jest.config.js
module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
    testMatch: [
        '<rootDir>/tests/**/*.test.js',
        '<rootDir>/src/**/*.test.js'
    ],
    collectCoverageFrom: [
        'src/js/**/*.js',
        '!src/js/dist/**',
        '!src/js/**/*.test.js'
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    moduleNameMapping: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@components/(.*)$': '<rootDir>/src/js/components/$1',
        '^@services/(.*)$': '<rootDir>/src/js/services/$1',
        '^@utils/(.*)$': '<rootDir>/src/js/utils/$1'
    }
};

```

## 📦 Build Architecture

### Build Pipeline

```text

Source Code
    ↓
Linting (ESLint)
    ↓
Testing (Jest)
    ↓
Bundling (ESBuild)
    ↓
Optimization
    ↓
Asset Processing
    ↓
Performance Validation
    ↓
Deployment

```

### Build Configuration

```javascript

// build-config.js
export const buildConfig = {
    environments: {
        development: {
            minify: false,
            sourcemap: true,
            target: 'es2020',
            define: {
                'process.env.NODE_ENV': '"development"',
                'process.env.DEBUG': 'true'
            }
        },
        staging: {
            minify: true,
            sourcemap: true,
            target: 'es2019',
            define: {
                'process.env.NODE_ENV': '"staging"',
                'process.env.DEBUG': 'false'
            }
        },
        production: {
            minify: true,
            sourcemap: false,
            target: 'es2019',
            define: {
                'process.env.NODE_ENV': '"production"',
                'process.env.DEBUG': 'false'
            },
            drop: ['console', 'debugger']
        }
    },

    bundles: {
        main: {
            entry: 'src/js/main.js',
            output: 'src/js/dist/app-bundle.js'
        },
        lazyImages: {
            entry: 'src/js/lazy-images.js',
            output: 'src/js/dist/lazy-images.js'
        },
        performanceMonitor: {
            entry: 'src/js/performance-monitor.js',
            output: 'src/js/dist/performance-monitor.js'
        }
    }
};

```

## 📋 Architecture Guidelines

### ✅ Best Practices

#### Code Organization

- **Single Responsibility**: Each module has one clear purpose
- **Separation of Concerns**: UI, logic, and data layers separated
- **Dependency Injection**: Services injected rather than imported
- **Configuration Management**: Environment-specific configurations

#### Performance

- **Lazy Loading**: Load code/assets when needed
- **Code Splitting**: Separate bundles for different features
- **Caching Strategy**: Multiple caching layers implemented
- **Resource Optimization**: All assets optimized for performance

#### Maintainability

- **Consistent Patterns**: Same patterns used throughout
- **Documentation**: All major components documented
- **Error Handling**: Comprehensive error management
- **Testing**: High test coverage maintained

### ❌ Anti-Patterns to Avoid

- **Monolithic Files**: Keep files focused and manageable
- **Global Variables**: Use modules and proper state management
- **Tight Coupling**: Components should be loosely coupled
- **Blocking Operations**: Use async/await for I/O operations
- **Hardcoded Values**: Use configuration and constants
- **Memory Leaks**: Properly cleanup event listeners and observers

---

*This architecture ensures Liberty Ridge maintains a scalable, maintainable, and high-performance codebase that can grow with business needs while preserving military-grade standards.*
