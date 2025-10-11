# Component Library 🧩

**Liberty Ridge Training Grounds - React Component Documentation**

*Comprehensive guide to all components, their usage, props, and LR Theme implementation patterns*

---

## 🎯 Component Library Overview

### Design System Integration

All components are built following the **LR Theme** design system, featuring:

- **Pure black and white foundation** with strategic red/blue highlights
- **Roboto typography** with proper weight hierarchy (Black 900, Bold 700, Medium 500, Regular 400)
- **Clean, professional styling** with minimal border radius and compact spacing
- **Responsive design** that maintains LR Theme consistency across all devices
- **Professional interactions** with clean hover states and smooth transitions

### Component Architecture

- **TypeScript-first**: All components include comprehensive TypeScript interfaces
- **Reusable**: Components designed for maximum reusability across pages
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels
- **Performant**: Optimized with React best practices and minimal re-renders
- **Testable**: Clean component structure for easy testing

---

## 🧭 Navigation Components

### Header Component

**File**: `src/components/Header.tsx`

Main site navigation with LR Theme styling and responsive design.

#### Features

- **Fixed positioning** with scroll-based background effects
- **LR Theme reticle logo** with interactive hover animations
- **Responsive navigation menu** that adapts to all screen sizes
- **Professional action buttons** (Book Now, Menu toggle)
- **Theme toggle integration** for light/dark mode switching
- **Clean hamburger menu** with professional navigation items

#### Props

The Header component takes no props and manages its own state.

#### Usage

```typescript
import Header from '@/components/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-28">
        {children}
      </main>
    </>
  )
}
```

#### Styling Classes

Key CSS classes used in Header:

#### Button Classes

- `.btn-hero-primary` - Primary call-to-action button with LR Red background
- `.btn-hero-secondary` - Secondary button with outline styling
- `.btn-card` - Compact button for use in cards and components

### Footer Component

**File**: `src/components/Footer.tsx`

Professional site footer with contact information and legal links.

#### Features

- **Contact information** with professional formatting
- **Social media links** (when applicable)
- **Legal pages** (Privacy, Terms, etc.)
- **Business hours** and location information
- **Newsletter signup** (future implementation)

#### Props

```typescript
interface FooterProps {
  className?: string
}
```

#### Usage

```typescript
import Footer from '@/components/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
```

---

## 🎛️ Utility Components

### ThemeToggle Component

**File**: `src/components/ThemeToggle.tsx`

Professional light/dark mode toggle that integrates seamlessly with LR Theme.

#### Features

- **Smooth transitions** between light and dark modes
- **Visual feedback** with professional toggle animation
- **Persistent preference** using localStorage
- **Accessible** with proper ARIA labels and keyboard support

#### Props

```typescript
interface ThemeToggleProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}
```

#### Usage

```typescript
import ThemeToggle from '@/components/ThemeToggle'

export default function Settings() {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-text-secondary">Theme:</span>
      <ThemeToggle size="md" />
    </div>
  )
}
```

### BulletHero Component

**File**: `src/components/BulletHero.tsx`

Professional hero section with advanced animations and LR Theme styling.

#### Features

- **Professional animations** with staggered entrance effects
- **LR Theme compliance** with proper color usage and typography
- **Responsive design** that adapts to all screen sizes
- **Call-to-action integration** with professional button styling
- **Background effects** with gradient and overlay support

#### Props

```typescript
interface BulletHeroProps {
  title: string
  subtitle?: string
  description: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  backgroundImage?: string
  variant?: 'default' | 'dark' | 'gradient'
  className?: string
}
```

#### Usage

```typescript
import BulletHero from '@/components/BulletHero'

export default function HomePage() {
  return (
    <BulletHero
      title="Professional Firearms Training"
      subtitle="Liberty Ridge Training Grounds"
      description="Master safe, effective firearms handling with professional instruction from Regional #12 instructor Zach Gaudette."
      primaryCTA={{
        text: "Start Training",
        href: "/courses"
      }}
      secondaryCTA={{
        text: "Learn More",
        href: "/about"
      }}
      variant="gradient"
    />
  )
}
```

---

## 🎴 Card Components

### CourseCard Component

**File**: `src/components/cards/CourseCard.tsx`

Professional course display card with LR Theme styling and complete course information.

#### Features

- **Course information display** with pricing, duration, and level
- **Professional gradient backgrounds** based on course category
- **Badge system** for popular, featured, or advanced courses
- **Course highlights** with checkmark indicators
- **Enrollment CTA** with professional button styling
- **Responsive design** that works on all devices

#### Props

```typescript
interface CourseCardProps {
  course: Course
  featured?: boolean
  className?: string
}

interface Course {
  id: string
  title: string
  subtitle?: string
  description: string
  price: string
  originalPrice?: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  category: 'safety' | 'tactical' | 'marksmanship'
  maxStudents?: number
  icon: string
  highlights?: string[]
  popular?: boolean
}
```

#### Usage

```typescript
import { CourseCard } from '@/components/cards'
import { courses } from '@/data/courses'

export default function CoursesPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          featured={course.popular}
        />
      ))}
    </div>
  )
}
```

### FeatureCard Component

**File**: `src/components/cards/FeatureCard.tsx`

Professional feature display card for highlighting key benefits and capabilities.

#### Props

```typescript
interface FeatureCardProps {
  icon: string
  title: string
  description: string
  features?: string[]
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}
```

#### Usage

```typescript
import { FeatureCard } from '@/components/cards'

export default function AboutPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FeatureCard
        icon="🎯"
        title="Precision Training"
        description="Develop accurate marksmanship with professional instruction and proven techniques."
        features={[
          "Professional instruction",
          "Proven techniques",
          "Measurable results"
        ]}
        variant="primary"
      />
    </div>
  )
}
```

### TestimonialCard Component

**File**: `src/components/cards/TestimonialCard.tsx`

Professional testimonial display with proper attribution and LR Theme styling.

#### Props

```typescript
interface TestimonialCardProps {
  quote: string
  author: {
    name: string
    title?: string
    course?: string
    rating?: number
  }
  variant?: 'default' | 'featured'
  className?: string
}
```

#### Usage

```typescript
import { TestimonialCard } from '@/components/cards'

export default function TestimonialsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <TestimonialCard
        quote="Outstanding instruction and professional approach. I feel confident and safe with my firearm."
        author={{
          name: "Sarah Johnson",
          course: "Basic Firearm Safety",
          rating: 5
        }}
        variant="featured"
      />
    </div>
  )
}
```

### StatsCard Component

**File**: `src/components/cards/StatsCard.tsx`

Professional statistics display card with clean typography and animations.

#### Props

```typescript
interface StatsCardProps {
  value: string | number
  label: string
  description?: string
  icon?: string
  variant?: 'default' | 'highlighted'
  animate?: boolean
  className?: string
}
```

#### Usage

```typescript
import { StatsCard } from '@/components/cards'

export default function AboutPage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatsCard
        value="100+"
        label="Students Trained"
        description="Successfully trained students"
        icon="🎖️"
        animate={true}
        variant="highlighted"
      />
      <StatsCard
        value="100%"
        label="Safety Record"
        description="Zero incidents to date"
        icon="🛡️"
        animate={true}
      />
    </div>
  )
}
```

### ContactCard Component

**File**: `src/components/cards/ContactCard.tsx`

Professional contact information display card with interactive elements.

#### Props

```typescript
interface ContactCardProps {
  type: 'phone' | 'email' | 'address' | 'hours'
  icon: string
  title: string
  content: string | string[]
  link?: string
  className?: string
}
```

#### Usage

```typescript
import { ContactCard } from '@/components/cards'

export default function ContactPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ContactCard
        type="phone"
        icon="📞"
        title="Call Us"
        content="(509) 555-0123"
        link="tel:+15095550123"
      />
      <ContactCard
        type="email"
        icon="✉️"
        title="Email Us"
        content="info@libertyridgetraining.com"
        link="mailto:info@libertyridgetraining.com"
      />
    </div>
  )
}
```

### PositionCard Component

**File**: `src/components/cards/PositionCard.tsx`

Professional team member or position display card for team pages.

#### Props

```typescript
interface PositionCardProps {
  name: string
  title: string
  description: string
  image?: string
  credentials?: string[]
  specialties?: string[]
  contact?: {
    email?: string
    phone?: string
  }
  className?: string
}
```

#### Usage

```typescript
import { PositionCard } from '@/components/cards'

export default function TeamPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PositionCard
        name="Zach Gaudette"
        title="Founder & Lead Instructor"
        description="Army veteran with extensive training in firearms instruction and safety protocols."
        credentials={[
          "Regional #12 Instructor",
          "U.S. Army Veteran",
          "100+ Students Trained"
        ]}
        specialties={[
          "Basic Safety Training",
          "Advanced Marksmanship",
          "Tactical Applications"
        ]}
      />
    </div>
  )
}
```

### ProductCard Component

**File**: `src/components/cards/ProductCard.tsx`

Professional product display card for shop/equipment pages.

#### Props

```typescript
interface ProductCardProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    image?: string
    category: string
    inStock: boolean
    features?: string[]
  }
  variant?: 'default' | 'featured'
  className?: string
}
```

#### Usage

```typescript
import { ProductCard } from '@/components/cards'

export default function ShopPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard
        product={{
          id: "1",
          name: "Training Manual",
          description: "Comprehensive firearms safety and training manual",
          price: 29.99,
          category: "Educational",
          inStock: true,
          features: [
            "120 pages",
            "Professional illustrations",
            "Safety protocols"
          ]
        }}
        variant="featured"
      />
    </div>
  )
}
```

---

## 🎨 LR Theme Implementation Patterns

### Color Usage Patterns

#### Background Colors

```typescript
// Use theme-adaptive background colors
<div className="bg-surface border border-border">
  // Pure white in light mode, off-black in dark mode
</div>

<div className="bg-background">
  // Main background color
</div>
```

#### Text Colors

```typescript
// Use semantic text colors for proper contrast
<h2 className="text-text-primary">Primary Heading</h2>
<p className="text-text-secondary">Secondary content</p>

// Use highlight colors sparingly for emphasis
<span className="text-patriot-red">Important highlight</span>
<a href="#" className="text-patriot-blue hover:text-patriot-red">Link</a>
```

#### Border and Shadow Patterns

```typescript
// Use clean, professional borders and shadows
<div className="border border-border shadow-clean hover:shadow-md">
  // Clean border with subtle shadow
</div>

<div className="border-2 border-patriot-red shadow-sharp">
  // Emphasized border with sharp shadow
</div>
```

### Typography Patterns

#### Heading Hierarchy

```typescript
// Use Roboto font weights for proper hierarchy
<h1 className="text-4xl lg:text-5xl font-black text-text-primary">
  Main Title (Roboto Black 900)
</h1>

<h2 className="text-2xl lg:text-3xl font-bold text-text-primary">
  Section Heading (Roboto Bold 700)
</h2>

<h3 className="text-xl font-medium text-text-primary">
  Subsection (Roboto Medium 500)
</h3>

<p className="text-base font-normal text-text-secondary">
  Body text (Roboto Regular 400)
</p>
```

#### Professional Text Styling

```typescript
// Professional text patterns for different contexts
<div className="space-y-4">
  <h2 className="text-2xl font-bold text-text-primary">
    Professional Course Title
  </h2>
  <p className="text-lg text-text-secondary leading-relaxed">
    Course description with proper line height and color contrast.
  </p>
  <div className="flex items-center space-x-2">
    <span className="text-sm font-medium text-patriot-red">Duration:</span>
    <span className="text-sm text-text-secondary">4 hours</span>
  </div>
</div>
```

### Interactive Patterns

#### Button Styling

```typescript
// Primary button pattern
<button className="px-6 py-3 bg-patriot-red text-pure-white font-bold rounded-sm border-2 border-patriot-red hover:bg-patriot-red/90 hover:scale-102 transition-all duration-300 transform">
  Primary Action
</button>

// Secondary button pattern
<button className="px-6 py-3 bg-surface text-patriot-blue font-bold rounded-sm border-2 border-patriot-blue hover:bg-patriot-blue hover:text-pure-white hover:scale-102 transition-all duration-300 transform">
  Secondary Action
</button>
```

#### Card Hover Effects

```typescript
// Professional card hover pattern
<div className="bg-surface border border-border rounded-lg p-6 shadow-clean hover:shadow-md hover:border-patriot-red hover:scale-102 transition-all duration-300 transform group">
  <h3 className="text-xl font-bold text-text-primary group-hover:text-patriot-red transition-colors duration-300">
    Card Title
  </h3>
  <p className="text-text-secondary mt-2">
    Card content with professional hover effects
  </p>
</div>
```

---

## 📱 Responsive Design Patterns

### Mobile-First Approach

All components use mobile-first responsive design:

```typescript
// Mobile-first responsive classes
<div className="
  p-4 text-sm space-y-2          // Mobile: compact spacing and text
  md:p-6 md:text-base md:space-y-4  // Tablet: moderate spacing
  lg:p-8 lg:text-lg lg:space-y-6    // Desktop: full spacing
">
  Content that adapts to screen size
</div>
```

### Grid Patterns

```typescript
// Responsive grid patterns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {/* Cards automatically adapt to grid */}
</div>

// Responsive card sizing
<div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
  {/* Card that grows with screen size */}
</div>
```

### Responsive Typography

```typescript
// Responsive text sizing
<h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black">
  Responsive Heading
</h1>

<p className="text-sm md:text-base lg:text-lg leading-relaxed">
  Responsive body text with proper line height
</p>
```

---

## 🧪 Testing Patterns

### Component Testing Template

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import { CourseCard } from '@/components/cards'

const mockCourse = {
  id: '1',
  title: 'Basic Firearm Safety',
  description: 'Comprehensive safety training course',
  price: '$150',
  duration: '4 hours',
  level: 'Beginner' as const,
  category: 'safety' as const,
  icon: '🎯',
  maxStudents: 8
}

describe('CourseCard', () => {
  it('renders course information correctly', () => {
    render(<CourseCard course={mockCourse} />)
    
    expect(screen.getByText('Basic Firearm Safety')).toBeInTheDocument()
    expect(screen.getByText('$150')).toBeInTheDocument()
    expect(screen.getByText('Beginner')).toBeInTheDocument()
    expect(screen.getByText('Enroll Now')).toBeInTheDocument()
  })

  it('applies featured styling when featured prop is true', () => {
    render(<CourseCard course={mockCourse} featured={true} />)
    
    expect(screen.getByText('Featured')).toBeInTheDocument()
  })

  it('handles enrollment button click', () => {
    render(<CourseCard course={mockCourse} />)
    
    const enrollButton = screen.getByText('Enroll Now')
    expect(enrollButton.closest('a')).toHaveAttribute('href', '/signup')
  })
})
```

### Accessibility Testing

```typescript
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('Header Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has proper ARIA labels', () => {
    render(<Header />)
    
    expect(screen.getByLabelText('Toggle main navigation menu')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
```

---

## 🔧 Performance Optimization

### Component Optimization Patterns

#### React.memo Usage

```typescript
import { memo } from 'react'

interface CourseCardProps {
  course: Course
  featured?: boolean
}

const CourseCard = memo<CourseCardProps>(({ course, featured }) => {
  // Component implementation
}, (prevProps, nextProps) => {
  // Custom comparison for optimization
  return (
    prevProps.course.id === nextProps.course.id &&
    prevProps.featured === nextProps.featured
  )
})

export default CourseCard
```

#### useCallback for Event Handlers

```typescript
import { useCallback } from 'react'

const Header = () => {
  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  return (
    <button onClick={handleMenuToggle}>
      Toggle Menu
    </button>
  )
}
```

#### Lazy Loading Patterns

```typescript
import { lazy, Suspense } from 'react'

const HeavyComponent = lazy(() => import('./HeavyComponent'))

export default function Page() {
  return (
    <Suspense fallback={
      <div className="animate-pulse bg-gray-200 h-32 rounded-lg" />
    }>
      <HeavyComponent />
    </Suspense>
  )
}
```

---

## 📚 Best Practices

### Component Organization

1. **Single Responsibility**: Each component has one clear purpose
2. **Composition**: Build complex components from simpler ones
3. **Reusability**: Design for reuse across multiple pages
4. **Prop Interfaces**: Comprehensive TypeScript interfaces for all props
5. **Default Props**: Sensible defaults to reduce boilerplate

### Code Quality

1. **TypeScript**: Strict typing for all props and state
2. **ESLint**: Follow configured linting rules
3. **Prettier**: Consistent code formatting
4. **Comments**: Document complex logic and component purposes
5. **Error Handling**: Graceful handling of edge cases

### Performance

1. **Memoization**: Use React.memo for expensive components
2. **Event Handlers**: Use useCallback for stable references
3. **Expensive Calculations**: Use useMemo for complex computations
4. **Bundle Size**: Minimize component dependencies
5. **Image Optimization**: Use Next.js Image component when applicable

---

## 🎯 Component Creation Checklist

When creating new components, ensure:

### LR Theme Compliance

- [ ] **Colors**: Only black, white, red (#dc2626), blue (#2563eb)
- [ ] **Typography**: Roboto font with proper weight hierarchy
- [ ] **Spacing**: Compact spacing using LR Theme standards
- [ ] **Icons**: Professional icons only (🎯, ⚔️, 🛡️, 🎖️, 🏆)
- [ ] **Borders**: Clean corners with minimal radius (0px-8px)
- [ ] **Shadows**: Clean shadow system (shadow-clean, shadow-sm, shadow-md)

### Technical Quality

- [ ] **TypeScript**: Comprehensive interface definitions
- [ ] **Props**: All props properly typed and documented
- [ ] **Responsive**: Mobile-first responsive design
- [ ] **Accessibility**: Proper semantic HTML and ARIA labels
- [ ] **Performance**: Optimized for minimal re-renders
- [ ] **Testing**: Unit tests for component behavior

### Documentation

- [ ] **Props Interface**: Documented with examples
- [ ] **Usage Examples**: Clear implementation examples
- [ ] **Component Purpose**: Clear description of component's role
- [ ] **LR Theme Patterns**: Follows established design patterns
- [ ] **Code Comments**: Complex logic is commented

---

**Liberty Ridge Training Grounds**  
*Professional Components for Professional Training*

---

*This component library documentation ensures consistent, high-quality component development that
maintains LR Theme standards and professional excellence across the entire application.*
