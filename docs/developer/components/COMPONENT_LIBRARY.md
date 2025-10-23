# 🧩 LR Component Library

> **Navigation**: [📋 Main README](../../../README.md) → [📁 Developer Guide](../DEVELOPER_GUIDE.md) → **Component Library**

## 🎯 Design System Overview

Liberty Ridge's component library follows a **black, white, and grey** design system with military-inspired precision and professionalism. All components are built for performance, accessibility, and mobile-first responsive design.

## 🔘 Buttons

### Primary Button

**Usage**: Main actions, form submissions, call-to-action

```html

<button class="lr-button lr-button--primary">
    Schedule Consultation
</button>

```

```css

.lr-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-sm) var(--spacing-lg);
    border: none;
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 2px; /* Minimal rounding */
}

.lr-button--primary {
    background-color: var(--color-primary);
    color: var(--color-background);
}

.lr-button--primary:hover {
    background-color: var(--color-secondary);
    transform: translateY(-1px);
    box-shadow: var(--shadow-medium);
}

.lr-button--primary:active {
    transform: translateY(0);
}

```

### Secondary Button

**Usage**: Secondary actions, cancel buttons

```html

<button class="lr-button lr-button--secondary">
    Learn More
</button>

```

```css

.lr-button--secondary {
    background-color: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
}

.lr-button--secondary:hover {
    background-color: var(--color-primary);
    color: var(--color-background);
}

```

### Ghost Button

**Usage**: Minimal actions, navigation links

```html

<button class="lr-button lr-button--ghost">
    View Gallery
</button>

```

```css

.lr-button--ghost {
    background-color: transparent;
    color: var(--color-text-secondary);
    border: none;
    padding: var(--spacing-xs) var(--spacing-sm);
}

.lr-button--ghost:hover {
    color: var(--color-primary);
    background-color: var(--color-background-secondary);
}

```

## 📝 Forms

### Form Container

```html

<form class="lr-form">
    <!-- Form content -->
</form>

```

```css

.lr-form {
    max-width: 600px;
    margin: 0 auto;
    padding: var(--spacing-lg);
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-small);
}

```

### Input Fields

```html

<div class="lr-form-group">
    <label for="user-name" class="lr-label">Full Name</label>
    <input
        type="text"
        id="user-name"
        name="userName"
        class="lr-input"
        placeholder="Enter your full name"
        required
    >
    <div class="lr-help-text">
        This will be used for your consultation appointment
    </div>
</div>

```

```css

.lr-form-group {
    margin-bottom: var(--spacing-lg);
}

.lr-label {
    display: block;
    margin-bottom: var(--spacing-xs);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-primary);
}

.lr-input {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
    border: 2px solid var(--color-border);
    background-color: var(--color-background);
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    transition: border-color 0.2s ease;
}

.lr-input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(26, 26, 26, 0.1);
}

.lr-input::placeholder {
    color: var(--color-text-muted);
}

.lr-help-text {
    margin-top: var(--spacing-xs);
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
}

```

### Select Dropdown

```html

<div class="lr-form-group">
    <label for="training-type" class="lr-label">Training Type</label>
    <select id="training-type" name="trainingType" class="lr-select">
        <option value="">Select training type</option>
        <option value="basic">Basic Firearms Safety</option>
        <option value="advanced">Advanced Tactical Training</option>
        <option value="concealed">Concealed Carry Prep</option>
    </select>
</div>

```

```css

.lr-select {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
    border: 2px solid var(--color-border);
    background-color: var(--color-background);
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right var(--spacing-sm) center;
    background-size: 16px;
    padding-right: calc(var(--spacing-md) + 24px);
}

.lr-select:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(26, 26, 26, 0.1);
}

```

## 🃏 Cards

### Basic Card

```html

<div class="lr-card">
    <div class="lr-card__header">
        <h3 class="lr-card__title">Consultation Scheduled</h3>
    </div>
    <div class="lr-card__content">
        <p>Your consultation with Zach has been scheduled for March 15th at 2:00 PM.</p>
    </div>
    <div class="lr-card__footer">
        <button class="lr-button lr-button--secondary">Reschedule</button>
        <button class="lr-button lr-button--primary">Confirm</button>
    </div>
</div>

```

```css

.lr-card {
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-small);
    overflow: hidden;
}

.lr-card__header {
    padding: var(--spacing-lg);
    border-bottom: 1px solid var(--color-border);
    background-color: var(--color-background-secondary);
}

.lr-card__title {
    margin: 0;
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-primary);
}

.lr-card__content {
    padding: var(--spacing-lg);
}

.lr-card__footer {
    padding: var(--spacing-lg);
    border-top: 1px solid var(--color-border);
    background-color: var(--color-background-secondary);
    display: flex;
    gap: var(--spacing-sm);
    justify-content: flex-end;
}

```

### Elevated Card

**Usage**: Important content, featured items

```html

<div class="lr-card lr-card--elevated">
    <!-- Card content -->
</div>

```

```css

.lr-card--elevated {
    box-shadow: var(--shadow-large);
    transform: translateY(0);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.lr-card--elevated:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

```

## 🚨 Alerts & Messages

### Success Message

```html

<div class="lr-alert lr-alert--success">
    <div class="lr-alert__icon">✓</div>
    <div class="lr-alert__content">
        <h4 class="lr-alert__title">Consultation Scheduled</h4>
        <p class="lr-alert__message">Your appointment has been confirmed for March 15th.</p>
    </div>
</div>

```

```css

.lr-alert {
    display: flex;
    align-items: flex-start;
    padding: var(--spacing-md);
    border-left: 4px solid;
    background-color: var(--color-background-secondary);
    margin: var(--spacing-md) 0;
}

.lr-alert--success {
    border-left-color: var(--color-success);
    background-color: rgba(76, 175, 80, 0.05);
}

.lr-alert--warning {
    border-left-color: var(--color-warning);
    background-color: rgba(255, 152, 0, 0.05);
}

.lr-alert--error {
    border-left-color: var(--color-error);
    background-color: rgba(244, 67, 54, 0.05);
}

.lr-alert--info {
    border-left-color: var(--color-info);
    background-color: rgba(33, 150, 243, 0.05);
}

.lr-alert__icon {
    margin-right: var(--spacing-sm);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
}

.lr-alert__title {
    margin: 0 0 var(--spacing-xs) 0;
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
}

.lr-alert__message {
    margin: 0;
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
}

```

## 📊 Tables

### Data Table

```html

<div class="lr-table-container">
    <table class="lr-table">
        <thead class="lr-table__header">
            <tr>
                <th class="lr-table__th">Date</th>
                <th class="lr-table__th">Time</th>
                <th class="lr-table__th">Client</th>
                <th class="lr-table__th">Training Type</th>
                <th class="lr-table__th">Status</th>
            </tr>
        </thead>
        <tbody class="lr-table__body">
            <tr class="lr-table__row">
                <td class="lr-table__td">March 15, 2024</td>
                <td class="lr-table__td">2:00 PM</td>
                <td class="lr-table__td">John Smith</td>
                <td class="lr-table__td">Basic Safety</td>
                <td class="lr-table__td">
                    <span class="lr-badge lr-badge--success">Confirmed</span>
                </td>
            </tr>
        </tbody>
    </table>
</div>

```

```css

.lr-table-container {
    overflow-x: auto;
    border: 1px solid var(--color-border);
    background-color: var(--color-background);
}

.lr-table {
    width: 100%;
    border-collapse: collapse;
    font-size: var(--font-size-sm);
}

.lr-table__th {
    padding: var(--spacing-sm) var(--spacing-md);
    text-align: left;
    font-weight: var(--font-weight-medium);
    color: var(--color-text-primary);
    background-color: var(--color-background-secondary);
    border-bottom: 2px solid var(--color-border);
}

.lr-table__td {
    padding: var(--spacing-sm) var(--spacing-md);
    border-bottom: 1px solid var(--color-border-light);
}

.lr-table__row:hover {
    background-color: var(--color-background-tertiary);
}

```

## 🏷️ Badges & Tags

### Status Badges

```html

<span class="lr-badge lr-badge--success">Confirmed</span>
<span class="lr-badge lr-badge--warning">Pending</span>
<span class="lr-badge lr-badge--error">Cancelled</span>
<span class="lr-badge lr-badge--info">Rescheduled</span>

```

```css

.lr-badge {
    display: inline-flex;
    align-items: center;
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-radius: 2px;
}

.lr-badge--success {
    background-color: var(--color-success);
    color: white;
}

.lr-badge--warning {
    background-color: var(--color-warning);
    color: white;
}

.lr-badge--error {
    background-color: var(--color-error);
    color: white;
}

.lr-badge--info {
    background-color: var(--color-info);
    color: white;
}

```

## 🎛️ Loading & Progress

### Loading Spinner

```html

<div class="lr-spinner" aria-label="Loading">
    <div class="lr-spinner__circle"></div>
</div>

```

```css

.lr-spinner {
    display: inline-block;
    width: 24px;
    height: 24px;
    position: relative;
}

.lr-spinner__circle {
    width: 100%;
    height: 100%;
    border: 2px solid var(--color-border);
    border-top: 2px solid var(--color-primary);
    border-radius: 50%;
    animation: lr-spin 1s linear infinite;
}

@keyframes lr-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

```

### Progress Bar

```html

<div class="lr-progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="lr-progress__bar" style="width: 75%"></div>
</div>

```

```css

.lr-progress {
    width: 100%;
    height: 8px;
    background-color: var(--color-background-secondary);
    border: 1px solid var(--color-border);
    overflow: hidden;
}

.lr-progress__bar {
    height: 100%;
    background-color: var(--color-primary);
    transition: width 0.3s ease;
}

```

## 🖼️ Media Components

### Image with Lazy Loading

```html

<div class="lr-image-container">
    <img
        class="lr-image lr-image--lazy"
        data-src="/assets/images/zach-training.webp"
        alt="Zach providing one-on-one firearms training"
        loading="lazy"
    >
    <div class="lr-image__placeholder">
        <div class="lr-spinner">
            <div class="lr-spinner__circle"></div>
        </div>
    </div>
</div>

```

```css

.lr-image-container {
    position: relative;
    overflow: hidden;
    background-color: var(--color-background-secondary);
}

.lr-image {
    width: 100%;
    height: auto;
    display: block;
    transition: opacity 0.3s ease;
}

.lr-image--lazy {
    opacity: 0;
}

.lr-image--loaded {
    opacity: 1;
}

.lr-image__placeholder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}

```

## 🔧 Utility Classes

### Spacing Utilities

```css

/* Margin utilities */
.m-0 { margin: 0; }
.m-xs { margin: var(--spacing-xs); }
.m-sm { margin: var(--spacing-sm); }
.m-md { margin: var(--spacing-md); }
.m-lg { margin: var(--spacing-lg); }
.m-xl { margin: var(--spacing-xl); }

/* Padding utilities */
.p-0 { padding: 0; }
.p-xs { padding: var(--spacing-xs); }
.p-sm { padding: var(--spacing-sm); }
.p-md { padding: var(--spacing-md); }
.p-lg { padding: var(--spacing-lg); }
.p-xl { padding: var(--spacing-xl); }

/* Specific sides */
.mt-md { margin-top: var(--spacing-md); }
.mb-lg { margin-bottom: var(--spacing-lg); }
.pl-sm { padding-left: var(--spacing-sm); }
.pr-sm { padding-right: var(--spacing-sm); }

```

### Text Utilities

```css

/* Text alignment */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }

/* Text colors */
.text-primary { color: var(--color-text-primary); }
.text-secondary { color: var(--color-text-secondary); }
.text-muted { color: var(--color-text-muted); }

/* Font weights */
.font-light { font-weight: var(--font-weight-light); }
.font-normal { font-weight: var(--font-weight-regular); }
.font-medium { font-weight: var(--font-weight-medium); }
.font-bold { font-weight: var(--font-weight-bold); }

/* Font sizes */
.text-xs { font-size: var(--font-size-xs); }
.text-sm { font-size: var(--font-size-sm); }
.text-base { font-size: var(--font-size-base); }
.text-lg { font-size: var(--font-size-lg); }
.text-xl { font-size: var(--font-size-xl); }

```

### Layout Utilities

```css

/* Display */
.block { display: block; }
.inline { display: inline; }
.inline-block { display: inline-block; }
.flex { display: flex; }
.inline-flex { display: inline-flex; }
.grid { display: grid; }
.hidden { display: none; }

/* Flexbox */
.flex-row { flex-direction: row; }
.flex-column { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.items-center { align-items: center; }
.items-start { align-items: flex-start; }
.items-end { align-items: flex-end; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-end { justify-content: flex-end; }

/* Grid gaps */
.gap-xs { gap: var(--spacing-xs); }
.gap-sm { gap: var(--spacing-sm); }
.gap-md { gap: var(--spacing-md); }
.gap-lg { gap: var(--spacing-lg); }

```

## 📱 Responsive Design

### Breakpoints

```css

/* Mobile first approach */
@media (min-width: 768px) {
    /* Tablet and up */
    .lr-button {
        padding: var(--spacing-md) var(--spacing-xl);
    }
}

@media (min-width: 1024px) {
    /* Desktop and up */
    .lr-container {
        padding: 0 var(--spacing-lg);
    }
}

@media (min-width: 1200px) {
    /* Large desktop */
    .lr-container {
        max-width: var(--max-width);
        margin: 0 auto;
    }
}

```

### Responsive Utilities

```css

/* Responsive display utilities */
@media (max-width: 767px) {
    .hidden-mobile { display: none !important; }
}

@media (min-width: 768px) {
    .hidden-tablet { display: none !important; }
}

@media (min-width: 1024px) {
    .hidden-desktop { display: none !important; }
}

/* Show only utilities */
.show-mobile { display: block; }
.show-tablet { display: none; }
.show-desktop { display: none; }

@media (min-width: 768px) {
    .show-mobile { display: none; }
    .show-tablet { display: block; }
}

@media (min-width: 1024px) {
    .show-tablet { display: none; }
    .show-desktop { display: block; }
}

```

## ♿ Accessibility Features

### Focus States

```css

.lr-button:focus,
.lr-input:focus,
.lr-select:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(26, 26, 26, 0.3);
}

/* High contrast focus for better visibility */
@media (prefers-contrast: high) {
    .lr-button:focus,
    .lr-input:focus,
    .lr-select:focus {
        box-shadow: 0 0 0 3px var(--color-primary);
    }
}

```

### Screen Reader Support

```css

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    padding: inherit;
    margin: inherit;
    overflow: visible;
    clip: auto;
    white-space: normal;
}

```

---

## 📋 Component Usage Guidelines

### ✅ Do's

- Use consistent spacing from the spacing scale
- Follow LR brand colors (black, white, grey)
- Include proper ARIA labels and roles
- Test with keyboard navigation
- Optimize for mobile-first design
- Use semantic HTML elements

### ❌ Don'ts

- Mix different design patterns in one interface
- Use colors outside the approved palette
- Skip accessibility requirements
- Create overly complex component variants
- Ignore responsive design principles
- Use inline styles instead of CSS classes

---

---

## 🧭 Related Documentation

### 🎨 Design Resources

- **[🎨 Brand Standards](../branding/LR_BRAND_STANDARDS.md)** - Color palette, typography, and design principles
- **[💻 Development Standards](../workflows/DEVELOPMENT_STANDARDS.md)** - How to implement these components properly
- **[🎯 Developer Guide](../DEVELOPER_GUIDE.md)** - Complete development documentation

### 🚀 Implementation Guides

- **[⚡ Performance Guidelines](../guidelines/PERFORMANCE_STANDARDS.md)** - Optimize component performance
- **[🏗️ Project Architecture](../guidelines/PROJECT_ARCHITECTURE.md)** - Component organization patterns
- **[🚀 Deployment Guidelines](../workflows/DEPLOYMENT_GUIDELINES.md)** - Deploy components to production

### 📋 Quick References

- **[📋 Main README](../../../README.md)** - Project overview and setup
- **[🔧 Setup Guide](../../setup/FIREBASE_INTEGRATION_GUIDE.md)** - Environment configuration
- **[📊 Performance Reports](../../optimization/OPTIMIZATION_COMPLETE.md)** - Component optimization results

---

This component library ensures consistent, accessible, and performant UI elements that align with Liberty Ridge's professional brand and military values.
