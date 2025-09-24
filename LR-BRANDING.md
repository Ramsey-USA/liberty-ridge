# Liberty Ridge Branding Guide 🎯

**LR Theme Official Brand Standards & Guidelines**  
*Sleek Black & White Design System with Strategic Red/Blue Highlights*

---

## 🏆 Brand Overview

Liberty Ridge Training Grounds utilizes the **LR Theme** - a revolutionary black and white design system that embodies professionalism, precision, and tactical excellence through clean aesthetics and strategic color usage.

### Brand Mission

> "Elite tactical training through sleek, professional design that reflects our commitment to precision and excellence."

### Design Philosophy

- **Sleek & Professional**: Clean, minimal aesthetic that commands respect
- **Strategic Color Usage**: Red and blue exclusively for emphasis and calls-to-action
- **Sharp Precision**: Clean lines, minimal radius, and professional typography
- **Two-Tone Excellence**: Black and white foundation with strategic highlights

---

## 🎨 LR Theme Color System

### Primary Foundation Colors

| Color | Hex Code | RGB Values | CSS Variable | Usage |
|-------|----------|------------|--------------|-------|
| **Pure Black** | `000000` | `0, 0, 0` | `--pure-black` | Primary dark foundation, text, backgrounds |
| **Pure White** | `ffffff` | `255, 255, 255` | `--pure-white` | Primary light foundation, text, backgrounds |
| **Off Black** | `080808` | `8, 8, 8` | `--off-black` | Subtle black variant for surfaces |
| **Off White** | `f8f8f8` | `248, 248, 248` | `--off-white` | Subtle white variant for surfaces |

### Strategic Highlight Colors

| Color | Hex Code | RGB Values | CSS Variable | Usage |
|-------|----------|------------|--------------|-------|
| **Patriot Red** | `dc2626` | `220, 38, 38` | `--patriot-red` | Primary CTAs, highlights, emphasis |
| **Patriot Blue** | `2563eb` | `37, 99, 235` | `--patriot-blue` | Secondary CTAs, highlights, links |
| **Patriot Navy** | `0f172a` | `15, 23, 42` | `--patriot-navy` | Deep accent for contrast |

### Minimal Gray Scale (9-Tone System)

| Shade | Hex Code | CSS Variable | Usage |
|-------|----------|--------------|-------|
| Gray 50 | `fafafa` | `--gray-50` | Lightest surfaces |
| Gray 100 | `f5f5f5` | `--gray-100` | Very light backgrounds |
| Gray 200 | `e5e5e5` | `--gray-200` | Light borders |
| Gray 300 | `d4d4d4` | `--gray-300` | Medium light accents |
| Gray 400 | `a3a3a3` | `--gray-400` | Medium borders |
| Gray 500 | `737373` | `--gray-500` | True medium gray |
| Gray 600 | `525252` | `--gray-600` | Medium dark text |
| Gray 700 | `404040` | `--gray-700` | Dark text |
| Gray 800 | `262626` | `--gray-800` | Very dark surfaces |
| Gray 900 | `171717` | `--gray-900` | Almost black |

---

## 🔲 LR Theme Design Elements

### Border Radius System

| Size | Value | CSS Variable | Usage |
|------|-------|--------------|-------|
| **None** | `0px` | `--radius-none` | Pure sharp corners |
| **XS** | `2px` | `--radius-xs` | Minimal radius |
| **SM** | `4px` | `--radius-sm` | Buttons, inputs |
| **MD** | `6px` | `--radius-md` | Standard cards |
| **LG** | `8px` | `--radius-lg` | Large elements |
| **XL** | `12px` | `--radius-xl` | Hero sections |
| **2XL** | `16px` | `--radius-2xl` | Maximum radius |

### Shadow System

| Type | CSS Variable | Value | Usage |
|------|--------------|-------|-------|
| **Sharp SM** | `--shadow-sm` | `0 1px 3px 0 rgb(0 0 0 / 0.1)` | Subtle depth |
| **Sharp MD** | `--shadow-md` | `0 2px 8px 0 rgb(0 0 0 / 0.15)` | Standard elevation |
| **Sharp LG** | `--shadow-lg` | `0 4px 16px 0 rgb(0 0 0 / 0.2)` | High elevation |
| **Sharp** | `--shadow-sharp` | `0 0 0 1px rgb(0 0 0 / 0.1)` | Clean border shadow |
| **Inset** | `--shadow-inset` | `inset 0 1px 2px 0 rgb(0 0 0 / 0.1)` | Button pressed state |

---

## 🎯 Component Standards

### Button System

#### Primary Button (.btn-primary)

- **Background**: Patriot Red (`dc2626`)
- **Text**: Pure White (`ffffff`)
- **Border**: 2px solid Patriot Red
- **Hover**: Darker red with lift effect
- **Usage**: Main CTAs, primary actions

#### Secondary Button (.btn-secondary)

- **Background**: Pure White (`ffffff`)
- **Text**: Patriot Blue (`2563eb`)
- **Border**: 2px solid Patriot Blue
- **Hover**: Blue background with white text
- **Usage**: Secondary actions, alternative CTAs

#### Black Button (.btn-black)

- **Background**: Pure Black (`000000`)
- **Text**: Pure White (`ffffff`)
- **Border**: 2px solid Pure Black
- **Hover**: Dark gray with lift effect
- **Usage**: Professional actions, subtle emphasis

### Card System

#### Standard Card (.card)

- **Background**: Surface color (adapts to theme)
- **Border**: 1px solid border color
- **Radius**: 6px (--radius-lg)
- **Shadow**: Sharp shadow for clean depth
- **Hover**: Subtle lift with enhanced shadow

#### Primary Card (.card-primary)

- **Background**: Pure White
- **Border**: 2px solid Patriot Red
- **Hover**: Red background with white text transition

#### Secondary Card (.card-secondary)

- **Background**: Pure White
- **Border**: 2px solid Patriot Blue
- **Hover**: Blue background with white text transition

---

## 🔤 Typography System

### Font Stack

**Primary**: Roboto (Google Fonts)  
**Fallback**: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

### Type Scale & Weight Hierarchy

| Class | Font Size | Line Height | Weight | Usage |
|-------|-----------|-------------|---------|-------|
| `.heading-primary` | `text-4xl lg:text-5xl` | `leading-tight` | `font-weight: 900` (Black) | Main page headings |
| `.heading-secondary` | `text-3xl lg:text-4xl` | `leading-tight` | `font-weight: 700` (Bold) | Section headings |
| `.heading-tertiary` | `text-2xl lg:text-3xl` | `leading-snug` | `font-weight: 500` (Medium) | Subsection headings |
| `.text-compact` | `text-base lg:text-lg` | `leading-normal` | `font-weight: 500` (Medium) | Important body text |
| `.text-body` | `text-sm lg:text-base` | `leading-relaxed` | `font-weight: 400` (Regular) | Standard body text |
| `.text-caption` | `text-xs lg:text-sm` | `leading-tight` | `font-weight: 500` (Medium) | Labels, captions |

### Enhanced Typography Classes

| Class | Font Weight | Usage |
|-------|-------------|-------|
| `.hero-title-enhanced` | `font-weight: 900` (Black) | Maximum impact hero titles |
| `.stats-counter` | `font-weight: 900` (Black) | Statistics and counters |
| `.heading-card` | `font-weight: 700` (Bold) | Card headings |
| `.btn-enhanced` | `font-weight: 700` (Bold) | Button text |
| `.text-enhanced` | `font-weight: 400` (Regular) | Enhanced body text |

### Color Applications

| Class | Color | Usage |
|-------|-------|-------|
| `.text-red-highlight` | Patriot Red | Important emphasis, warnings |
| `.text-blue-highlight` | Patriot Blue | Links, secondary emphasis |
| `.text-text-primary` | Theme-adaptive | Primary text content |
| `.text-text-secondary` | Theme-adaptive | Secondary text content |
| `.text-text-muted` | Theme-adaptive | Subtle text, descriptions |

---

## 🎨 Icon System

### Serious Tactical Icon Standards

LR Theme implements a comprehensive tactical icon system maintaining professional military training aesthetics:

#### Primary Tactical Icons

- **🎯** - Target/Precision Training, Course Navigation, Achievement Markers
- **⚔️** - Combat Operations, Team Training, Advanced Skills  
- **🛡️** - Protection Training, Defense Courses, Safety Records
- **🎖️** - Military Achievement, Instructor Credentials, Honor System
- **🏆** - Excellence, Competition Results, Championship Records

#### Icon Implementation Guidelines

#### Serious Military Aesthetic Only

- NO casual emojis (🚀, 💪, 👥, 🌟, 📞, 💥, ⚡, 🔥, 💬, ❓, 📊)
- ALL icons must convey tactical professionalism
- Consistent with military training environment
- Emphasizes precision, honor, and combat readiness

#### CSS Icon Classes

- `.icon-xs` - 1rem (16px)
- `.icon-sm` - 1.25rem (20px)
- `.icon-md` - 1.5rem (24px)
- `.icon-lg` - 2rem (32px)
- `.icon-xl` - 2.5rem (40px)
- `.icon-2xl` - 3rem (48px)
- `.icon-3xl` - 4rem (64px)

#### Icon Color Variants

- `.icon-primary` - Patriot Red
- `.icon-secondary` - Patriot Blue
- `.icon-accent` - Pure Black (light mode) / Pure White (dark mode)

---

## 🌓 Light/Dark Mode System

### Automatic Theme Switching

The LR Theme automatically adapts between light and dark modes:

#### Light Mode (Default)

- **Background**: Pure White (`ffffff`) - All sections use consistent white backgrounds
- **Text**: Pure Black (`000000`)
- **Surface**: Pure White (`ffffff`) - Updated from off-white for consistency
- **Borders**: Light Gray (`e5e5e5`)

#### Dark Mode

- **Background**: Pure Black (`000000`)
- **Text**: Pure White (`ffffff`)
- **Surface**: Off Black (`080808`)
- **Borders**: Dark Gray (`262626`)

#### Consistent Elements

- **Patriot Red**: `dc2626` (consistent across modes)
- **Patriot Blue**: `2563eb` (consistent across modes)
- **Hover Effects**: Adapted shadow colors for each mode

---

## ⚡ Animation Standards

### LR Theme Animations

| Animation | Duration | Easing | Usage |
|-----------|----------|---------|-------|
| `animate-fadeIn` | `0.5s` | `ease-out` | Content entrance |
| `animate-two-tone-pulse` | `2s` | `ease-in-out infinite` | Attention elements |
| `animate-sharp-hover` | `0.2s` | `ease-out` | Interactive feedback |
| `hover:scale-102` | `0.3s` | `ease` | Button hover |
| `hover:scale-105` | `0.3s` | `ease` | Card hover |

### Transition Standards

- **Duration**: 0.15s - 0.3s for interactions
- **Easing**: `ease-out` for entrances, `ease` for interactions
- **Properties**: `all` for comprehensive transitions
- **Transform**: Minimal scale changes (1.02 - 1.05)

---

## 📋 Usage Guidelines

### ✅ Do's

- **Use pure black and white** as primary colors
- **Limit red/blue usage** to highlights and CTAs only
- **Maintain sharp corners** with minimal border radius (0px-8px)
- **Apply consistent spacing** using the compact system
- **Ensure high contrast** for accessibility
- **Use two-tone interactions** for professional feedback
- **Implement clean shadows** for subtle depth
- **Follow typography hierarchy** for clear communication

### ❌ Don'ts

- **Avoid colorful backgrounds** - stick to black/white foundation
- **Don't overuse red/blue** - reserve for strategic emphasis
- **Avoid large border radius** - maintain sharp, professional appearance
- **Don't use complex gradients** - keep backgrounds clean
- **Avoid bright colors** outside of red/blue system
- **Don't mix inconsistent shadows** - use LR Theme shadow system
- **Avoid busy patterns** - maintain clean, minimal aesthetic
- **Don't compromise contrast** - ensure readability in all modes

---

## 🛠️ Implementation Examples

### CSS Variable Usage

```css
/* Background colors */
background-color: rgb(var(--pure-black));
background-color: rgb(var(--pure-white));

/* Text colors */
color: rgb(var(--text-primary));
color: rgb(var(--patriot-red));

/* Borders */
border-color: rgb(var(--border));
border-radius: var(--radius-sm);

/* Shadows */
box-shadow: var(--shadow-sharp);
```

### Tailwind CSS Classes

```html
### Tailwind CSS Classes

```html
<!-- Primary button with Roboto Bold -->
<button class="px-6 py-3 font-bold transition-all rounded-sm bg-patriot-red text-pure-white hover:scale-102">
  Start Training
</button>

<!-- Two-tone card with Roboto typography -->
<div class="p-6 transition-all border rounded-lg bg-surface border-border shadow-sharp hover:shadow-md">
  <h3 class="mb-2 text-xl font-bold text-text-primary">Card Title</h3>
  <p class="text-base text-text-secondary">Card content with <span class="font-medium text-patriot-red">red highlight</span></p>
</div>

<!-- Hero title with Roboto Black -->
<h1 class="text-5xl font-black leading-tight text-pure-black lg:text-7xl">
  LIBERTY RIDGE TRAINING
</h1>

<!-- Icon with color -->
<div class="icon icon-lg icon-primary icon-star"></div>
```

### Roboto Font Implementation

```css
/* Import Roboto with full weight range */
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

/* Typography classes with Roboto weights */
.hero-title-enhanced {
  font-family: 'Roboto', sans-serif;
  font-weight: 900; /* Black */
}

.heading-card {
  font-family: 'Roboto', sans-serif;
  font-weight: 700; /* Bold */
}

.text-body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400; /* Regular */
}
```

## 📊 Brand Assets

### Logo Usage

- **Primary Logo**: Liberty Ridge Training Grounds wordmark
- **Colors**: Pure black on white backgrounds, pure white on black backgrounds
- **Accent Variations**: Red or blue highlights for special applications
- **Minimum Size**: 120px width for digital applications

### Typography Lock-ups

- **Tagline**: "Elite Tactical Training"
- **Subtitle**: "Professional • Veteran-Led • Results-Driven"
- **Colors**: Black/white primary, red/blue for emphasis

### Marketing Applications

- **Business Cards**: White background, black text, red accents
- **Letterhead**: Minimal design with LR Theme colors
- **Digital Applications**: Consistent LR Theme across all platforms
- **Social Media**: Black/white graphics with strategic red/blue highlights

---

## 🎯 Brand Compliance Checklist

### Design Review Checklist

- [ ] **Color Palette**: Only black, white, and strategic red/blue usage
- [ ] **Typography**: Roboto font family with proper weight hierarchy (Black 900, Bold 700, Medium 500, Regular 400)
- [ ] **Background Consistency**: Pure white backgrounds across all sections in light mode
- [ ] **Spacing**: Compact spacing system implementation
- [ ] **Borders**: Sharp corners with minimal radius (0px-8px)
- [ ] **Shadows**: Clean, minimal shadow system
- [ ] **Icons**: Serious tactical icons only (🎯, ⚔️, 🛡️, 🎖️, 🏆) - NO casual emojis
- [ ] **Icon Consistency**: All emojis must convey military professionalism and tactical training
- [ ] **Animations**: Smooth, professional transitions
- [ ] **Contrast**: High contrast ratios for accessibility
- [ ] **Responsive**: Consistent appearance across all devices
- [ ] **Light/Dark**: Proper adaptation between modes

### Quality Assurance

- [ ] **Performance**: Fast loading and smooth animations
- [ ] **Accessibility**: WCAG compliant contrast and navigation
- [ ] **Consistency**: Uniform application across all components
- [ ] **Mobile**: Responsive design maintaining brand integrity
- [ ] **Browser Support**: Cross-browser compatibility
- [ ] **Documentation**: Proper code comments and organization

---

**Liberty Ridge Training Grounds**  
*LR Theme - Professional Excellence Through Design*

**Contact**: Zach Gaudette, Founder & Lead Instructor  
**Phone**: (509) 555-0123  
**Email**: <info@libertyridgetraining.com>  
**Website**: <libertyridegetraininggrounds.com>

---

*This document serves as the official brand guide for Liberty Ridge Training Grounds LR Theme implementation. All design decisions should reference these standards to maintain brand consistency and professional excellence.*
