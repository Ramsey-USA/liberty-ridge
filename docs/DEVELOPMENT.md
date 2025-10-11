# Development Guidelines 🛠️

**Liberty Ridge Training Grounds - Developer Standards & Best Practices**

*Comprehensive technical guidelines for maintaining code quality, consistency, and adherence to LR Theme standards*

---

## 🎯 Core Development Principles

### Code Quality Standards

- **TypeScript Excellence**: Strict type safety with comprehensive interfaces
- **Component Architecture**: Functional components with modern React patterns
- **LR Theme Compliance**: All components must follow LR Theme design system
- **Performance First**: Optimized code with minimal re-renders and efficient bundling
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

### Development Philosophy

- **Professional First**: Every component and page should reflect professional firearms training standards
- **Consistent Experience**: Uniform user experience across all devices and pages
- **Maintainable Code**: Clean, documented code that's easy to understand and modify
- **Data-Driven**: Centralized data management with proper TypeScript definitions

---

## 🏗️ Project Architecture

### File Structure Standards

```typescript
src/
├── app/                    # Next.js 15+ App Router
│   ├── page.tsx           # Home page following LR Theme standards
│   ├── layout.tsx         # Root layout with theme provider
│   ├── globals.css        # LR Theme CSS variables and components
│   └── [page]/page.tsx    # Individual pages with consistent structure
├── components/             # Reusable component library
│   ├── cards/             # LR Theme card components
│   ├── Header.tsx         # Navigation with LR Theme styling
│   ├── Footer.tsx         # Footer with professional design
│   └── [Component].tsx    # Individual components
├── contexts/              # React contexts for state management
│   └── ThemeContext.tsx   # Light/dark mode theme context
├── data/                  # Centralized data management
│   ├── [content].ts       # Content constants with TypeScript interfaces
│   └── navigation.ts      # Site navigation structure
└── lib/                   # Utility functions and configuration
    ├── firebase.ts        # Firebase configuration
    └── [utility].ts       # Helper functions
```

### Component Organization

#### Component Naming Convention

- **PascalCase**: All component files use PascalCase (`CourseCard.tsx`)
- **Descriptive Names**: Clear, descriptive component names that indicate purpose
- **Feature Grouping**: Related components grouped in subdirectories
- **Index Files**: Use `index.ts` for clean exports from component directories

#### File Organization Rules

1. **React/Next.js imports first**
2. **Component imports second**
3. **Data/utility imports last**
4. **Consistent export structure** with default exports

---

## 🎨 LR Theme Implementation

### Component Standards

#### Required LR Theme Elements

Every component must implement:

- **LR Theme Colors**: Only black, white, red (`#dc2626`), blue (`#2563eb`)
- **Roboto Typography**: Proper font weight hierarchy (Black 900, Bold 700, Medium 500, Regular 400)
- **Clean Spacing**: Compact spacing system with minimal padding/margins
- **Professional Icons**: Only approved professional icons (🎯, ⚔️, 🛡️, 🎖️, 🏆)
- **Responsive Design**: Mobile-first approach with LR Theme consistency

#### Component Template

```typescript
import React from 'react'

// Define comprehensive TypeScript interfaces
interface ComponentProps {
  title: string
  description: string
  variant?: 'primary' | 'secondary' | 'accent'
  className?: string
}

// Import centralized data when applicable
import { exampleData } from '@/data/example'

const Component: React.FC<ComponentProps> = ({ 
  title, 
  description, 
  variant = 'primary',
  className = '' 
}) => {
  return (
    <div className={`
      bg-surface border border-border rounded-lg p-6
      hover:shadow-md transition-all duration-300
      ${variant === 'primary' ? 'border-patriot-red' : ''}
      ${variant === 'secondary' ? 'border-patriot-blue' : ''}
      ${className}
    `}>
      <h3 className="text-xl font-bold text-text-primary mb-2">
        {title}
      </h3>
      <p className="text-base text-text-secondary">
        {description}
      </p>
    </div>
  )
}

export default Component
```

### CSS Standards

#### LR Theme CSS Variable Usage

```css
/* Background colors - use theme-adaptive variables */
background-color: rgb(var(--surface));
background-color: rgb(var(--background));

/* Text colors - use semantic color variables */
color: rgb(var(--text-primary));
color: rgb(var(--text-secondary));

/* Highlight colors - use strategic red/blue */
color: rgb(var(--patriot-red));
color: rgb(var(--patriot-blue));

/* Borders and shadows */
border-color: rgb(var(--border));
box-shadow: var(--shadow-clean);
```

#### Required CSS Classes

- **Backgrounds**: Use `bg-surface`, `bg-background` for theme adaptation
- **Text**: Use `text-text-primary`, `text-text-secondary` for proper contrast
- **Borders**: Use `border-border` for theme-adaptive borders
- **Shadows**: Use `shadow-clean`, `shadow-sm`, `shadow-md` for LR Theme shadows
- **Spacing**: Use Tailwind spacing classes with compact values (`p-4`, `m-2`)

---

## 📝 TypeScript Standards

### Interface Definitions

#### Component Props Interface

```typescript
// Required for all components
interface ComponentProps {
  // Required props without defaults
  title: string
  description: string
  
  // Optional props with clear types
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  
  // Array props with proper typing
  items?: Array<{
    id: string
    name: string
    value: string
  }>
}
```

#### Data Structure Interfaces

```typescript
// Define interfaces for all data structures
interface Course {
  id: string
  title: string
  description: string
  duration: string
  price: number
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  features: string[]
  instructor: string
}

interface ContactInfo {
  type: 'phone' | 'email' | 'address'
  label: string
  value: string
  icon: string
  href?: string
}
```

### Error Handling

#### Null Safety

```typescript
// Always check for array existence and length
{courses && courses.length > 0 ? (
  courses.map((course) => (
    <CourseCard key={course.id} course={course} />
  ))
) : (
  <div className="text-text-secondary">No courses available</div>
)}

// Use optional chaining for nested properties
<h2>{course?.instructor?.name || 'TBD'}</h2>
```

#### Type Guards

```typescript
// Create type guards for complex validation
const isValidCourse = (course: any): course is Course => {
  return (
    typeof course === 'object' &&
    typeof course.id === 'string' &&
    typeof course.title === 'string' &&
    typeof course.price === 'number'
  )
}
```

---

## 🚀 Performance Standards

### Component Optimization

#### React Best Practices

```typescript
// Use React.memo for components that receive stable props
const CourseCard = React.memo<CourseCardProps>(({ course }) => {
  return (
    // Component JSX
  )
})

// Use useCallback for event handlers passed to children
const handleCourseSelect = useCallback((courseId: string) => {
  // Handler logic
}, [])

// Use useMemo for expensive calculations
const filteredCourses = useMemo(() => {
  return courses.filter(course => course.level === selectedLevel)
}, [courses, selectedLevel])
```

#### Animation Performance

```typescript
// Use CSS transforms instead of changing layout properties
const animationClass = `
  transform transition-transform duration-300 ease-out
  hover:scale-105 hover:-translate-y-1
`

// Prefer CSS animations over JavaScript for simple animations
className="animate-fadeIn"  // Defined in globals.css
```

### Bundle Optimization

#### Import Optimization

```typescript
// Use specific imports instead of barrel imports
import { CourseCard } from '@/components/cards/CourseCard'
import { ContactCard } from '@/components/cards/ContactCard'

// Instead of:
// import { CourseCard, ContactCard } from '@/components/cards'
```

#### Dynamic Imports

```typescript
// Use dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded-lg" />
})
```

---

## 🧪 Code Quality Tools

### ESLint Configuration

#### Required Rules

```json
{
  "extends": [
    "next/core-web-vitals",
    "@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "prefer-const": "error",
    "no-var": "error"
  }
}
```

### Prettier Configuration

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```

### VS Code Extensions

#### Required Extensions

- **Headwind**: Automatic Tailwind CSS class sorting
- **Pretty TypeScript Errors**: Enhanced error messages
- **ESLint**: Code quality linting
- **Prettier**: Code formatting
- **Auto Rename Tag**: HTML tag pair renaming

#### Extension Settings

```json
{
  "headwind.runOnSave": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

---

## 📱 Responsive Design Standards

### Breakpoint Strategy

#### Mobile-First Approach

```typescript
// Always start with mobile styles, then enhance for larger screens
const responsiveClasses = `
  text-sm p-4 space-y-2
  md:text-base md:p-6 md:space-y-4
  lg:text-lg lg:p-8 lg:space-y-6
`
```

#### LR Theme Responsive Guidelines

- **Mobile (default)**: Compact spacing, smaller text, stacked layouts
- **Tablet (md:)**: Moderate spacing increase, medium text, grid layouts
- **Desktop (lg:)**: Full spacing, larger text, complex layouts
- **Large Desktop (xl:)**: Maximum spacing, largest text, wide layouts

### Component Responsiveness

#### Responsive Typography

```typescript
// Use responsive text classes following LR Theme hierarchy
<h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-primary">
  Hero Title
</h1>

<p className="text-sm md:text-base lg:text-lg text-text-secondary">
  Body content with responsive sizing
</p>
```

#### Responsive Layout

```typescript
// Use responsive grid and flexbox patterns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {courses.map((course) => (
    <CourseCard key={course.id} course={course} />
  ))}
</div>
```

---

## 🔧 Development Workflow

### Git Standards

#### Commit Message Format

```text
type(scope): description

Examples:
feat(courses): add new course card component
fix(header): resolve navigation menu mobile bug
style(globals): update LR Theme color variables
docs(readme): update installation instructions
```

#### Branch Naming

- **Feature**: `feature/course-catalog-page`
- **Bug Fix**: `fix/header-navigation-mobile`
- **Style**: `style/lr-theme-updates`
- **Documentation**: `docs/development-guidelines`

### Code Review Checklist

#### LR Theme Compliance

- [ ] **Colors**: Only black, white, red, blue used
- [ ] **Typography**: Roboto font with proper weight hierarchy
- [ ] **Spacing**: Compact spacing system implemented
- [ ] **Icons**: Professional icons only (🎯, ⚔️, 🛡️, 🎖️, 🏆)
- [ ] **Responsive**: Mobile-first with consistent LR Theme

#### Technical Quality

- [ ] **TypeScript**: Proper interfaces and type safety
- [ ] **Performance**: Optimized components with minimal re-renders
- [ ] **Accessibility**: Semantic HTML and ARIA labels
- [ ] **Error Handling**: Null checks and proper validation
- [ ] **Testing**: Components tested with various props/states

### Testing Strategy

#### Component Testing

```typescript
// Example component test structure
import { render, screen } from '@testing-library/react'
import CourseCard from '@/components/cards/CourseCard'

const mockCourse = {
  id: '1',
  title: 'Basic Firearm Safety',
  description: 'Comprehensive safety training',
  duration: '4 hours',
  price: 150,
  level: 'Beginner' as const,
  features: ['Safety Protocols', 'Handling Basics'],
  instructor: 'Zach Gaudette'
}

describe('CourseCard', () => {
  it('renders course information correctly', () => {
    render(<CourseCard course={mockCourse} />)
    
    expect(screen.getByText('Basic Firearm Safety')).toBeInTheDocument()
    expect(screen.getByText('$150')).toBeInTheDocument()
    expect(screen.getByText('Beginner')).toBeInTheDocument()
  })
})
```

---

## 🔒 Security Standards

### Data Validation

```typescript
// Always validate props and data
const validateCourse = (course: any): course is Course => {
  return (
    course &&
    typeof course.id === 'string' &&
    typeof course.title === 'string' &&
    typeof course.price === 'number' &&
    course.price >= 0
  )
}
```

### Firebase Security

```typescript
// Validate Firebase data before use
const fetchCourses = async (): Promise<Course[]> => {
  try {
    const snapshot = await db.collection('courses').get()
    const courses = snapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(validateCourse)
    
    return courses
  } catch (error) {
    console.error('Error fetching courses:', error)
    return []
  }
}
```

---

## 📚 Documentation Standards

### Code Documentation

#### Component Documentation

```typescript
/**
 * CourseCard component displays course information in LR Theme styling
 * 
 * @param course - Course object with all required properties
 * @param variant - Visual variant (primary, secondary, accent)
 * @param className - Additional CSS classes for customization
 * @returns JSX element with course information and professional styling
 * 
 * @example
 * <CourseCard 
 *   course={courseData} 
 *   variant="primary"
 *   className="mb-4"
 * />
 */
```

#### Complex Function Documentation

```typescript
/**
 * Filters courses based on multiple criteria with type safety
 * 
 * @param courses - Array of course objects to filter
 * @param filters - Object containing filter criteria
 * @param filters.level - Course difficulty level
 * @param filters.maxPrice - Maximum course price
 * @param filters.searchTerm - Text search term for title/description
 * @returns Filtered array of courses matching all criteria
 */
const filterCourses = (
  courses: Course[], 
  filters: {
    level?: Course['level']
    maxPrice?: number
    searchTerm?: string
  }
): Course[] => {
  // Implementation
}
```

---

## 🎯 Quality Assurance

### Pre-Deployment Checklist

#### Visual Quality

- [ ] **LR Theme Colors**: Correct black/white foundation with red/blue highlights
- [ ] **Typography**: Proper Roboto font weights and hierarchy
- [ ] **Spacing**: Compact, professional spacing throughout
- [ ] **Mobile Design**: Responsive and consistent across devices
- [ ] **Professional Icons**: No casual emojis, only approved professional icons

#### Technical Quality

- [ ] **TypeScript**: No type errors or warnings
- [ ] **Performance**: Lighthouse score >90 for all metrics
- [ ] **Accessibility**: WCAG AA compliance
- [ ] **Browser Testing**: Chrome, Firefox, Safari, Edge compatibility
- [ ] **Error Handling**: Graceful handling of edge cases

#### Content Quality

- [ ] **Professional Tone**: All content matches Liberty Ridge professional standards
- [ ] **Accuracy**: All information is current and accurate
- [ ] **Consistency**: Messaging consistent across all pages
- [ ] **Grammar**: Proper grammar and spelling throughout

---

## 🔧 Troubleshooting

### Common Issues

#### TypeScript Errors

```typescript
// Problem: Property 'title' does not exist on type 'unknown'
// Solution: Proper type guards and interfaces
if (isValidCourse(course)) {
  return <h3>{course.title}</h3>  // TypeScript knows course is valid
}
```

#### CSS Conflicts

```typescript
// Problem: Tailwind classes not applying correctly
// Solution: Use specific class names and check for conflicts
<div className="bg-surface text-text-primary border border-border">
  // Clear, semantic class names prevent conflicts
</div>
```

#### Performance Issues

```typescript
// Problem: Unnecessary re-renders
// Solution: Use React.memo and proper dependency arrays
const MemoizedComponent = React.memo(Component, (prevProps, nextProps) => {
  return prevProps.course.id === nextProps.course.id
})
```

### Debug Tools

#### React Developer Tools

- **Components tab**: Inspect props and state
- **Profiler tab**: Identify performance bottlenecks
- **Highlight updates**: Visualize component re-renders

#### Chrome DevTools

- **Performance tab**: Analyze runtime performance
- **Lighthouse**: Test performance, accessibility, SEO
- **Console**: Check for errors and warnings

---

**Liberty Ridge Training Grounds**  
*Development Excellence Through Professional Standards*

For questions about these development guidelines, refer to the project maintainer or create an issue in the repository.

---

*This document is the authoritative source for all development practices on the Liberty Ridge
Training Grounds project. All code should adhere to these standards to maintain consistency,
quality, and professional excellence.*
