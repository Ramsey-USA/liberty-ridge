# Liberty Ridge Branding Guide

**LR Theme Official Brand Standards & Guidelines**  
*Sleek Black & White Design System with Strategic Red/Blue Highlights*

---

## Brand Overview

Liberty Ridge Training Grounds utilizes the **LR Theme** - a welcoming black and white design
system that embodies professionalism, precision, and firearms excellence through clean aesthetics
and strategic color usage.

### Brand Mission

> "The site's core mission is to promote safe, professional, and comprehensive firearms training
> while building a community of responsible gun owners."

### Design Philosophy

The design philosophy is **Modern, Sleek, and Tightly Spaced**, reflecting the precision and
professionalism of the training offered.

- **Modern & Sleek**: Clean, contemporary aesthetic that welcomes all skill levels
- **Tightly Spaced**: Compact, precise spacing that reflects training precision
- **Strategic Color Usage**: Red and blue exclusively for emphasis and calls-to-action
- **Clean Precision**: Clean lines, minimal radius, and approachable typography
- **Two-Tone Excellence**: Black and white foundation with strategic highlights

### Target Audience

**Primary Demographics**: Civilians, Law Enforcement, Military personnel, Competitive Shooters (PRS, USPSA, IDPA).

Our comprehensive training programs serve a diverse community of responsible gun owners, from
first-time shooters seeking foundational safety knowledge to competitive athletes pursuing
precision excellence and professionals requiring specialized skills.

---

## LR Theme Color System

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

## LR Theme Design Elements

### Border Radius System

| Size | Value | CSS Variable | Usage |
|------|-------|--------------|-------|
| **None** | `0px` | `--radius-none` | **BUTTONS (square design)**, pure clean corners |
| **XS** | `2px` | `--radius-xs` | Minimal radius for small elements |
| **SM** | `4px` | `--radius-sm` | Input fields, small components |
| **MD** | `6px` | `--radius-md` | Standard cards |
| **LG** | `8px` | `--radius-lg` | Large elements |
| **XL** | `12px` | `--radius-xl` | Hero sections |
| **2XL** | `16px` | `--radius-2xl` | Maximum radius |

**Button Standard**: All buttons use `border-radius: 0px` for consistent square appearance.

### Shadow System

| Type | CSS Variable | Value | Usage |
|------|--------------|-------|-------|
| **Clean SM** | `--shadow-sm` | `0 1px 3px 0 rgb(0 0 0 / 0.1)` | Subtle depth |
| **Clean MD** | `--shadow-md` | `0 2px 8px 0 rgb(0 0 0 / 0.15)` | Standard elevation |
| **Clean LG** | `--shadow-lg` | `0 4px 16px 0 rgb(0 0 0 / 0.2)` | High elevation |
| **Clean** | `--shadow-clean` | `0 0 0 1px rgb(0 0 0 / 0.1)` | Clean border shadow |
| **Inset** | `--shadow-inset` | `inset 0 1px 2px 0 rgb(0 0 0 / 0.1)` | Button pressed state |

---

## Component Standards

### Button System

All buttons follow a **square design with consistent outlines** and full **dark/light mode compatibility**.

#### Button Design Standards

- **Shape**: Square corners (border-radius: 0px) for clean, precise appearance
- **Border**: 2px solid outline on all buttons for consistency
- **Padding**: Equal padding (px-6 py-3) for square proportions
- **Typography**: Bold font weight for enhanced readability
- **Transitions**: Smooth hover effects with color and scale changes
- **Dark/Light Mode**: Automatic color inversion for optimal contrast

#### Primary Button (.btn-primary)

**Light Mode:**

- **Background**: Pure Black (`000000`)
- **Text**: Pure White (`ffffff`)
- **Border**: 2px solid Pure Black (`000000`)

**Dark Mode:**

- **Background**: Pure White (`ffffff`)
- **Text**: Pure Black (`000000`)
- **Border**: 2px solid Pure White (`ffffff`)

**Hover**: Scale 1.02 with background darkening (light) / lightening (dark)  
**Usage**: Main CTAs, primary actions

#### Secondary Button (.btn-secondary)

**Light Mode:**

- **Background**: Transparent
- **Text**: Pure Black (`000000`)
- **Border**: 2px solid Pure Black (`000000`)

**Dark Mode:**

- **Background**: Transparent
- **Text**: Pure White (`ffffff`)
- **Border**: 2px solid Pure White (`ffffff`)

**Hover**: Background fills with border color, text inverts  
**Usage**: Secondary actions, alternative CTAs

#### Gray Button (.btn-gray)

**Light Mode:**

- **Background**: Transparent
- **Text**: Gray-600 (`525252`)
- **Border**: 2px solid Gray-400 (`a3a3a3`)

**Dark Mode:**

- **Background**: Transparent
- **Text**: Gray-400 (`a3a3a3`)
- **Border**: 2px solid Gray-600 (`525252`)

**Hover**: Background fills with border color, text becomes white/black  
**Usage**: Neutral actions, form buttons

#### Disabled Button (.btn-disabled)

**Light Mode:**

- **Background**: Transparent
- **Text**: Gray-300 (`d4d4d4`)
- **Border**: 2px solid Gray-200 (`e5e5e5`)

**Dark Mode:**

- **Background**: Transparent
- **Text**: Gray-700 (`404040`)
- **Border**: 2px solid Gray-800 (`262626`)

**Hover**: No hover effects  
**Usage**: Disabled states, inactive buttons

### Card System

#### Standard Card (.card)

- **Background**: Surface color (adapts to theme)
- **Border**: 1px solid border color
- **Radius**: 6px (--radius-lg)
- **Shadow**: Clean shadow for clean depth
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

## Icon System

### Material Icons Only

LR Theme exclusively uses Material Icons for all visual elements. **NO EMOJIS** are permitted anywhere in the design system.

#### Core Material Icons

- **target** - Target/Precision Training, Course Navigation, Achievement Markers
- **balance** - Professional Training, Community Programs, Skill Development  
- **shield** - Safety Training, Defense Courses, Safety Records
- **military_tech** - Professional Achievement, Instructor Credentials, Honor System
- **emoji_events** - Excellence, Competition Results, Achievement Records
- **group** - Community, Team Building, Group Training
- **schedule** - Timing, Course Schedules, Training Sessions
- **location_on** - Location Services, Range Information
- **phone** - Contact Information
- **email** - Communication, Contact Forms

#### Icon Implementation Guidelines

##### Professional Standards Only

- **ONLY Material Icons** - No emojis, custom icons, or third-party icon sets
- **Consistent sizing** - Use Material Icons standard sizing system
- **Semantic meaning** - Icons must clearly represent their function
- **Accessibility** - All icons include proper aria-labels and alt text
- **Color consistency** - Icons follow the established color system

#### Material Icons Classes

- `.material-icons-outlined` - Outlined style (preferred)
- `.material-icons` - Filled style (for emphasis)
- `.material-icons-round` - Rounded style (for softer appearance)
- `.material-icons-sharp` - Sharp style (for precision contexts)

#### Icon Size Classes

- `.icon-xs` - 1rem (16px)
- `.icon-sm` - 1.25rem (20px)
- `.icon-md` - 1.5rem (24px)
- `.icon-lg` - 2rem (32px)
- `.icon-xl` - 2.5rem (40px)
- `.icon-2xl` - 3rem (48px)
- `.icon-3xl` - 4rem (64px)

#### Icon Color Variants

- `.icon-primary` - Pure Black (light mode) / Pure White (dark mode)
- `.icon-secondary` - Gray-600
- `.icon-muted` - Gray-400
- `.icon-accent` - Red or Blue (sparingly used)

---

## Light/Dark Mode System

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

## Animation Standards

### LR Theme Animations

| Animation | Duration | Easing | Usage |
|-----------|----------|---------|-------|
| `animate-fadeIn` | `0.5s` | `ease-out` | Content entrance |
| `animate-two-tone-pulse` | `2s` | `ease-in-out infinite` | Attention elements |
| `animate-clean-hover` | `0.2s` | `ease-out` | Interactive feedback |
| `hover:scale-102` | `0.3s` | `ease` | Button hover |
| `hover:scale-105` | `0.3s` | `ease` | Card hover |

### Transition Standards

- **Duration**: 0.15s - 0.3s for interactions
- **Easing**: `ease-out` for entrances, `ease` for interactions
- **Properties**: `all` for comprehensive transitions
- **Transform**: Minimal scale changes (1.02 - 1.05)

---

## Usage Guidelines

### Do's

- **Use pure black and white** as primary colors
- **Limit red/blue usage** to highlights and CTAs only
- **Use Material Icons exclusively** - no emojis anywhere
- **Maintain clean corners** with minimal border radius (0px-8px)
- **Apply consistent spacing** using the compact system
- **Ensure high contrast** for accessibility
- **Use black/white/gray button scheme** for professional appearance
- **Implement clean shadows** for subtle depth
- **Follow typography hierarchy** for clear communication

### Don'ts

- **NEVER use emojis** - Material Icons only
- **Avoid colorful backgrounds** - stick to black/white foundation
- **Don't overuse red/blue** - reserve for strategic emphasis
- **Avoid large border radius** - maintain clean, professional appearance
- **Don't use complex gradients** - keep backgrounds clean
- **Avoid bright colors** outside of red/blue system
- **Don't mix inconsistent shadows** - use LR Theme shadow system
- **Avoid busy patterns** - maintain clean, minimal aesthetic
- **Don't compromise contrast** - ensure readability in all modes

---

## Implementation Examples

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
box-shadow: var(--shadow-clean);
```

### Tailwind CSS Classes

```html
### Tailwind CSS Classes

```html
<!-- Primary button - Square with outline, dark/light mode compatible -->
<button class="px-6 py-3 font-bold text-white transition-all bg-black border-2 border-black rounded-none hover:bg-gray-800 hover:scale-102 dark:bg-white dark:text-black dark:border-white dark:hover:bg-gray-100">
  Start Training
</button>

<!-- Secondary button - Square outline only -->
<button class="px-6 py-3 font-bold text-black transition-all bg-transparent border-2 border-black rounded-none hover:bg-black hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
  Learn More
</button>

<!-- Gray button - Square outline with gray theme -->
<button class="px-6 py-3 font-bold text-gray-600 transition-all bg-transparent border-2 border-gray-400 rounded-none hover:bg-gray-400 hover:text-white dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-black">
  View Details
</button>

<!-- Disabled button - Square outline, muted colors -->
<button class="px-6 py-3 font-bold text-gray-300 bg-transparent border-2 border-gray-200 rounded-none cursor-not-allowed dark:text-gray-700 dark:border-gray-800" disabled>
  Disabled
</button>

<!-- Material Icon implementation -->
<span class="material-icons-outlined icon-md icon-primary">target</span>
<span class="material-icons-outlined icon-lg icon-secondary">shield</span>

<!-- Card with clean styling and dark mode support -->
<div class="p-6 transition-all bg-white border border-gray-200 rounded-lg shadow-clean hover:shadow-md dark:bg-gray-900 dark:border-gray-700">
  <div class="flex items-center mb-4">
    <span class="mr-3 material-icons-outlined icon-lg icon-primary">military_tech</span>
    <h3 class="text-xl font-bold text-black dark:text-white">Card Title</h3>
  </div>
  <p class="text-base text-gray-600 dark:text-gray-400">Card content with Material Icons</p>
</div>

<!-- Hero title with clean typography -->
<h1 class="text-5xl font-black leading-tight text-black dark:text-white lg:text-7xl">
  LIBERTY RIDGE TRAINING
</h1>
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

## Brand Assets

### Logo Usage

- **Primary Logo**: Liberty Ridge Training Grounds wordmark
- **Colors**: Pure black on white backgrounds, pure white on black backgrounds
- **Accent Variations**: Red or blue highlights for special applications
- **Minimum Size**: 120px width for digital applications

### Typography Lock-ups

- **Tagline**: "Professional Firearms Training"
- **Subtitle**: "Professional • Veteran-Led • Results-Driven"
- **Colors**: Black/white primary, red/blue for emphasis

### Marketing Applications

- **Business Cards**: White background, black text, red accents
- **Letterhead**: Minimal design with LR Theme colors
- **Digital Applications**: Consistent LR Theme across all platforms
- **Social Media**: Black/white graphics with strategic red/blue highlights

---

## Brand Compliance Checklist

### Design Review Checklist

- [ ] **Color Palette**: Only black, white, and strategic red/blue usage
- [ ] **Typography**: Roboto font family with proper weight hierarchy (Black 900, Bold 700, Medium 500, Regular 400)
- [ ] **Background Consistency**: Pure white backgrounds across all sections in light mode
- [ ] **Spacing**: Compact spacing system implementation
- [ ] **Borders**: Clean corners with minimal radius (0px-8px)
- [ ] **Shadows**: Clean, minimal shadow system
- [ ] **Icons**: Material Icons only - NO emojis anywhere in the system
- [ ] **Button Design**: Square corners (border-radius: 0px) with 2px outlines
- [ ] **Button Colors**: Black, white, gray color scheme only
- [ ] **Dark/Light Mode**: All buttons adapt automatically to theme changes
- [ ] **Icon Consistency**: All visual elements use Material Icons exclusively
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

## Developer Quick Reference

### Material Icons Library

LR Theme uses Material Icons exclusively for all visual elements:

#### Core Icons for Training Context

- `target` - Training precision and accuracy
- `shield` - Safety and protection training  
- `military_tech` - Professional credentials and achievements
- `emoji_events` - Competition and excellence
- `balance` - Professional training standards
- `group` - Community and team building
- `schedule` - Training schedules and timing
- `location_on` - Range and facility locations
- `phone` - Contact and communication
- `email` - Electronic communication

#### Material Icons Implementation

```html
<!-- Outlined style (preferred) -->
<span class="material-icons-outlined">target</span>

<!-- With size and color classes -->
<span class="material-icons-outlined icon-lg icon-primary">shield</span>

<!-- In buttons -->
<button class="btn-primary">
  <span class="mr-2 material-icons-outlined">military_tech</span>
  Professional Training
</button>
```

#### Icon Size Classes

- `.icon-xs` - 1rem (16px)
- `.icon-sm` - 1.25rem (20px)  
- `.icon-md` - 1.5rem (24px)
- `.icon-lg` - 2rem (32px)
- `.icon-xl` - 2.5rem (40px)

### Quick Implementation Guide

**Colors**: Use primarily black (`#000000`), white (`#ffffff`), and gray shades.  
Red (`#dc2626`) and blue (`#2563eb`) sparingly for accents only.

**Buttons**: Black, white, and gray color schemes - no bright colors for buttons

**Icons**: Material Icons only - completely eliminate all emojis

**Typography**: Roboto family - Black (900), Bold (700), Medium (500), Regular (400)

**Animations**: `animate-fadeIn`, `animate-two-tone-pulse`, `animate-clean-hover`

**Shadows**: `shadow-clean` for borders, `shadow-sm/md/lg` for elevation

---

*This document serves as the official brand guide for Liberty Ridge Training Grounds LR Theme
implementation. All design decisions should reference these standards to maintain brand
consistency and professional excellence.*
