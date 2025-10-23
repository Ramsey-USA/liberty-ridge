# 🎯 Liberty Ridge (LR) Brand Standards

> **Navigation**: [📋 Main README](../../../README.md) → [📁 Developer Guide](../DEVELOPER_GUIDE.md) → **Brand Standards**

## 🖤 Color Palette

### Primary Colors

Liberty Ridge follows a strict **black, white, and grey** color scheme that conveys professionalism, precision, and military discipline.

```css

/* PRIMARY PALETTE */
--color-primary: #1a1a1a;        /* Deep Black - Primary brand color */
--color-secondary: #2c2c2c;      /* Charcoal - Secondary elements */
--color-accent: #4a4a4a;         /* Medium Grey - Accent elements */

/* TEXT COLORS */
--color-text-primary: #1a1a1a;   /* Primary text - high contrast */
--color-text-secondary: #6b6b6b; /* Secondary text - medium contrast */
--color-text-muted: #888888;     /* Muted text - subtle elements */

/* BACKGROUND COLORS */
--color-background: #ffffff;           /* Pure White - Main background */
--color-background-secondary: #f8f9fa; /* Light Grey - Secondary background */
--color-background-tertiary: #f1f3f4;  /* Lighter Grey - Tertiary background */

/* BORDER COLORS */
--color-border: #e0e0e0;         /* Standard borders */
--color-border-light: #f0f0f0;   /* Light borders */

```

### Functional Colors

**Use sparingly and only for essential UI feedback:**

```css

/* FUNCTIONAL COLORS - USE MINIMALLY */
--color-success: #4caf50;        /* Green - Success states only */
--color-warning: #ff9800;        /* Orange - Warning states only */
--color-error: #f44336;          /* Red - Error states only */
--color-info: #2196f3;           /* Blue - Information only */

```

### ❌ Colors to AVOID

- Bright colors
- Saturated blues, reds, purples
- Gradients (except subtle grey gradients)
- Multiple accent colors
- Brand colors from other companies

## 🔤 Typography

### Font Family

```css

--font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

```

**Primary**: Roboto - Clean, professional, military-inspired
**Fallbacks**: System fonts for performance

### Font Weights

```css

--font-weight-light: 300;    /* Subtle text, captions */
--font-weight-regular: 400;  /* Body text, paragraphs */
--font-weight-medium: 500;   /* Subheadings, emphasis */
--font-weight-bold: 700;     /* Headings, strong emphasis */

```

### Font Sizes

```css

--font-size-xs: 0.75rem;     /* 12px - Small labels */
--font-size-sm: 0.875rem;    /* 14px - Secondary text */
--font-size-base: 1rem;      /* 16px - Body text */
--font-size-lg: 1.125rem;    /* 18px - Large body text */
--font-size-xl: 1.25rem;     /* 20px - Subheadings */
--font-size-2xl: 1.5rem;     /* 24px - Section headings */
--font-size-3xl: 1.875rem;   /* 30px - Page headings */
--font-size-4xl: 2.25rem;    /* 36px - Hero headings */
--font-size-5xl: 3rem;       /* 48px - Large hero text */

```

### Line Heights

```css

--line-height-tight: 1.25;   /* Headings */
--line-height-normal: 1.5;   /* Body text */
--line-height-relaxed: 1.75; /* Long-form content */

```

## 📏 Spacing & Layout

### Spacing Scale

```css

--spacing-xs: 0.25rem;   /* 4px - Tight spacing */
--spacing-sm: 0.5rem;    /* 8px - Small spacing */
--spacing-md: 1rem;      /* 16px - Standard spacing */
--spacing-lg: 1.5rem;    /* 24px - Large spacing */
--spacing-xl: 2rem;      /* 32px - Extra large spacing */
--spacing-2xl: 3rem;     /* 48px - Section spacing */
--spacing-3xl: 4rem;     /* 64px - Large section spacing */
--spacing-4xl: 6rem;     /* 96px - Hero section spacing */

```

### Container Widths

```css

--max-width: 1200px;     /* Maximum content width */

```

## 🎨 Shadows & Effects

### Shadow Hierarchy

```css

--shadow-small: 0 2px 4px rgba(0, 0, 0, 0.1);   /* Subtle elevation */
--shadow-medium: 0 4px 12px rgba(0, 0, 0, 0.1); /* Cards, modals */
--shadow-large: 0 8px 24px rgba(0, 0, 0, 0.15); /* Floating elements */

```

### Border Radius

- **None**: Sharp, military precision (preferred)
- **Subtle**: 2-4px maximum for buttons/inputs
- **❌ Avoid**: Large rounded corners, pill shapes

## 🎯 Design Principles

### 1. **Precision & Discipline**

- Clean lines and sharp edges
- Consistent spacing and alignment
- Military-inspired attention to detail

### 2. **Professional Authority**

- High contrast for readability
- Serious, trustworthy appearance
- No playful or casual elements

### 3. **Performance First**

- Minimal visual complexity
- Fast-loading design elements
- Optimized for all devices

### 4. **Veteran Values**

- Honor through simplicity
- Strength through restraint
- Excellence through consistency

## 🚫 What NOT to Do

### ❌ Color Violations

```css

/* NEVER USE */
color: #ff0000;    /* Bright red */
color: #00ff00;    /* Bright green */
color: #0000ff;    /* Bright blue */
background: linear-gradient(...); /* Colorful gradients */

```

### ❌ Typography Violations

```css

/* AVOID */
font-family: 'Comic Sans', cursive;
font-family: 'Papyrus', fantasy;
text-decoration: underline; /* Use sparingly */
text-transform: uppercase; /* Use for small elements only */

```

### ❌ Layout Violations

- Cluttered layouts
- Inconsistent spacing
- Multiple visual hierarchies
- Overly decorative elements

## ✅ Brand Application Examples

### ✅ Correct Button Styling

```css

.button-primary {
  background-color: var(--color-primary);
  color: var(--color-background);
  border: none;
  padding: var(--spacing-sm) var(--spacing-lg);
  font-weight: var(--font-weight-medium);
  transition: background-color 0.2s ease;
}

.button-primary:hover {
  background-color: var(--color-secondary);
}

```

### ✅ Correct Card Design

```css

.card {
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-small);
  padding: var(--spacing-lg);
}

```

### ✅ Correct Text Hierarchy

```css

.heading-primary {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  line-height: var(--line-height-tight);
}

.text-body {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
  line-height: var(--line-height-normal);
}

.text-muted {
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
}

```

## 🎖️ Brand Voice & Messaging

### Tone

- **Professional**: Serious, authoritative
- **Respectful**: Honor military service
- **Trustworthy**: Safety-focused, reliable
- **Direct**: Clear, no-nonsense communication

### Key Messages

- Expert firearms training by Army veteran
- Professional, safe, one-on-one instruction
- Building responsible gun owners
- Military-grade precision and discipline

### Avoid

- Casual or playful language
- Aggressive or intimidating tone
- Political statements or controversies
- Overly technical jargon without explanation

---

## 📋 Brand Checklist

Before releasing any LR-branded content, verify:

- [ ] **Colors**: Only black, white, grey used
- [ ] **Typography**: Roboto font family applied
- [ ] **Spacing**: Consistent spacing scale used
- [ ] **Shadows**: Subtle, professional shadows only
- [ ] **Contrast**: High contrast for accessibility
- [ ] **Performance**: Optimized for fast loading
- [ ] **Tone**: Professional, authoritative messaging
- [ ] **Military Values**: Honors veteran background

---

---

## 🧭 Related Documentation

### 📖 Next Steps

- **[💻 Development Standards](../workflows/DEVELOPMENT_STANDARDS.md)** - Apply these brand standards in your code
- **[🧩 Component Library](../components/COMPONENT_LIBRARY.md)** - Use pre-built components with LR branding
- **[🎯 Developer Guide](../DEVELOPER_GUIDE.md)** - Complete development documentation

### 🔗 Quick Links

- **[⚡ Performance Guidelines](../guidelines/PERFORMANCE_STANDARDS.md)** - Optimize while maintaining brand standards
- **[🏗️ Project Architecture](../guidelines/PROJECT_ARCHITECTURE.md)** - Organize code following LR patterns
- **[📋 Main README](../../../README.md)** - Project overview and quick start

---

These brand standards ensure Liberty Ridge maintains its professional, military-inspired identity while providing an excellent user experience.
