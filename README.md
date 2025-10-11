# Liberty Ridge Training Grounds 🎯

> Professional Firearms Training Website

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange?style=for-the-badge&logo=firebase)](https://firebase.google.com)

## 🎯 Project Overview

Liberty Ridge Training Grounds is a professional firearms training website built with modern web
technologies and the **LR Theme** design system. Founded by Army veteran Zach Gaudette (Regional
\#12 instructor), the platform serves civilians, law enforcement, military personnel, and
competitive shooters.

### Key Features

- **Professional Training Courses** - Comprehensive curriculum from basic safety to advanced tactics
- **LR Theme Design System** - Sleek black and white aesthetic with strategic red/blue highlights
- **Responsive Excellence** - Mobile-first design that works on all devices
- **Firebase Integration** - Real-time data, hosting, and authentication
- **Performance Optimized** - Fast loading with 90+ Lighthouse scores

### Technology Stack

- **Framework**: Next.js 15.5.3 with TypeScript and App Router
- **Styling**: Tailwind CSS with custom LR Theme properties
- **Backend**: Firebase (Firestore, Hosting, Authentication)
- **Deployment**: Static export optimized for Firebase Hosting

---

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/Ramsey-USA/liberty-ridge.git
cd liberty-ridge
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

For detailed setup instructions, see [PROJECT-SETUP.md](./docs/PROJECT-SETUP.md).

---

## 📚 Documentation

This project includes comprehensive documentation to ensure consistency and quality across all development:

### 📖 [Documentation Index](./docs/DOCS-INDEX.md)

Complete guide to all documentation with descriptions and usage guidelines.

### 🛠️ [Development Guidelines](./docs/DEVELOPMENT.md)

- Coding standards and best practices
- Component architecture patterns
- TypeScript implementation guidelines
- Performance optimization techniques
- LR Theme compliance requirements

### ⚙️ [Project Setup](./docs/PROJECT-SETUP.md)

- Installation and configuration
- Environment setup
- Firebase configuration
- VS Code setup and extensions
- Deployment procedures

### 📝 [Content Guidelines](./docs/CONTENT-GUIDELINES.md)

- Writing standards and tone guidelines
- Professional messaging framework
- Content creation templates
- Brand voice and terminology
- SEO and accessibility guidelines

### 🧩 [Component Library](./docs/COMPONENTS.md)

- Complete component documentation
- Props interfaces and usage examples
- LR Theme implementation patterns
- Responsive design guidelines
- Testing and optimization patterns

### 🧪 [Testing & QA](./docs/TESTING.md)

- Unit and integration testing procedures
- End-to-end testing strategies
- Visual regression testing
- Performance and accessibility testing
- Quality assurance checklists

### 🎨 [LR Theme Design System](./docs/LR-BRANDING.md)

- Complete LR Theme design system documentation
- Color palette, typography, and CSS variables
- Component styling standards and examples
- Professional icon system and usage guidelines
- Brand compliance requirements and implementation

---

---

## 🎨 LR Theme Design System

The website implements the **LR Theme** - a professional black and white design system with strategic red/blue highlights:

### Core Principles

- **Pure Black & White Foundation** - Clean, professional aesthetic
- **Strategic Color Usage** - Red (#dc2626) and blue (#2563eb) for emphasis only
- **Roboto Typography** - Professional font hierarchy (Black 900, Bold 700, Medium 500, Regular 400)
- **Clean Geometry** - Minimal border radius (0-8px) and compact spacing
- **Professional Icons** - Only 🎯, ⚔️, 🛡️, 🎖️, 🏆 for training context

### Implementation

```typescript
// Example LR Theme component
<div className="bg-surface border border-border rounded-lg p-6 shadow-clean hover:border-patriot-red transition-all">
  <h3 className="text-xl font-bold text-text-primary mb-2">Professional Title</h3>
  <p className="text-text-secondary">Content with proper contrast and typography</p>
  <button className="btn-primary">Strategic Red CTA</button>
</div>
```

---

## 🏗️ Project Structure

```text
liberty-ridge/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── globals.css        # LR Theme CSS variables
│   │   └── [page]/page.tsx    # Individual pages
│   ├── components/            # Reusable components
│   │   ├── cards/             # Card component library
│   │   ├── Header.tsx         # Site navigation
│   │   └── Footer.tsx         # Site footer
│   ├── contexts/              # React contexts (theme, etc.)
│   ├── data/                  # Static data and constants
│   └── lib/                   # Utilities and configuration
├── docs/                      # Comprehensive documentation
├── public/                    # Static assets
└── [config files]            # Next.js, TypeScript, Tailwind configs
```

---

## 🚀 Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server

# Code Quality
npm run lint         # ESLint code checking
npm run type-check   # TypeScript validation

# Deployment
npm run deploy       # Build and deploy to Firebase
```

---

## 🎖️ Professional Standards

### Code Quality

- **TypeScript**: Strict mode with comprehensive interfaces
- **ESLint**: Configured for Next.js and React best practices
- **Prettier**: Consistent code formatting
- **Testing**: Comprehensive unit, integration, and E2E tests

### Performance

- **Lighthouse Score**: 90+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Time**: < 3 seconds on 3G connections
- **SEO**: Optimized meta tags and structured data

### Accessibility

- **WCAG AA Compliance**: Color contrast and keyboard navigation
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Screen Reader Support**: ARIA labels and descriptive content

---

## 🔧 Contributing

### Before Contributing

1. Read [DEVELOPMENT.md](./docs/DEVELOPMENT.md) for coding standards
2. Review [CONTENT-GUIDELINES.md](./docs/CONTENT-GUIDELINES.md) for content standards
3. Check [TESTING.md](./docs/TESTING.md) for testing requirements
4. Ensure [LR-BRANDING.md](./docs/LR-BRANDING.md) compliance

### Development Workflow

1. **Create Feature Branch**: `git checkout -b feature/description`
2. **Follow Standards**: Implement using documentation guidelines
3. **Test Thoroughly**: Run all tests and check LR Theme compliance
4. **Create Pull Request**: Include description and testing evidence

---

## 📞 Contact & Support

### Liberty Ridge Training Grounds

- **Website**: [libertyridegetraininggrounds.com](https://libertyridegetraininggrounds.com)
- **Founder**: Zach Gaudette, Regional #12 Instructor
- **Email**: [info@libertyridgetraining.com](mailto:info@libertyridgetraining.com)

### Development Support

- **Repository**: [github.com/Ramsey-USA/liberty-ridge](https://github.com/Ramsey-USA/liberty-ridge)
- **Issues**: Use GitHub Issues for bug reports and feature requests
- **Documentation**: Refer to comprehensive docs in this repository

---

## 📄 License

This project is proprietary to Liberty Ridge Training Grounds LLC. All rights reserved.

---

---

**Liberty Ridge Training Grounds**  
*Professional Excellence Through Modern Technology*
