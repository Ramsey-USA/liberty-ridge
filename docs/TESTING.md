# Testing & Quality Assurance Guide 🧪

**Liberty Ridge Training Grounds - Testing Procedures & Quality Standards**

*Comprehensive testing guidelines to ensure professional quality, reliability, and LR Theme compliance*

---

## 🎯 Testing Philosophy

### Quality Standards

Liberty Ridge Training Grounds maintains the highest standards of quality through comprehensive testing at every level:

- **Professional Excellence**: Every feature must meet professional training industry standards
- **LR Theme Compliance**: All visual elements must adhere to the LR Theme design system
- **User Experience**: Intuitive, accessible, and responsive across all devices
- **Performance**: Fast loading times and smooth interactions
- **Reliability**: Robust error handling and graceful degradation

### Testing Pyramid

1. **Unit Tests** (Foundation) - Test individual components and functions
2. **Integration Tests** (Middle) - Test component interactions and data flow
3. **End-to-End Tests** (Top) - Test complete user workflows
4. **Visual Tests** (Cross-cutting) - Ensure LR Theme compliance and visual consistency

---

## 🧪 Unit Testing

### Component Testing Standards

#### Required Test Coverage

Every component must have tests covering:

- **Rendering**: Component renders without crashing
- **Props**: All props work correctly with various inputs
- **Interactions**: User interactions produce expected behavior
- **States**: Different component states render correctly
- **Edge Cases**: Error states and boundary conditions

#### Component Test Template

```typescript
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CourseCard } from '@/components/cards'

// Mock data following TypeScript interfaces
const mockCourse = {
  id: '1',
  title: 'Basic Firearm Safety',
  description: 'Comprehensive safety training course',
  price: '$150',
  duration: '4 hours',
  level: 'Beginner' as const,
  category: 'safety' as const,
  icon: '🎯',
  maxStudents: 8,
  popular: false
}

describe('CourseCard Component', () => {
  beforeEach(() => {
    // Setup before each test
  })

  afterEach(() => {
    // Cleanup after each test
  })

  describe('Rendering', () => {
    it('renders course information correctly', () => {
      render(<CourseCard course={mockCourse} />)
      
      expect(screen.getByText('Basic Firearm Safety')).toBeInTheDocument()
      expect(screen.getByText('$150')).toBeInTheDocument()
      expect(screen.getByText('4 hours')).toBeInTheDocument()
      expect(screen.getByText('Beginner')).toBeInTheDocument()
    })

    it('renders featured variant correctly', () => {
      render(<CourseCard course={mockCourse} featured={true} />)
      
      expect(screen.getByText('Featured')).toBeInTheDocument()
    })
  })

  describe('Props Handling', () => {
    it('handles optional props correctly', () => {
      const courseWithOptionals = {
        ...mockCourse,
        subtitle: 'Professional Training',
        highlights: ['Safety Protocols', 'Hands-on Practice']
      }
      
      render(<CourseCard course={courseWithOptionals} />)
      
      expect(screen.getByText('Professional Training')).toBeInTheDocument()
      expect(screen.getByText('Safety Protocols')).toBeInTheDocument()
    })

    it('applies custom className', () => {
      const { container } = render(
        <CourseCard course={mockCourse} className="custom-class" />
      )
      
      expect(container.firstChild).toHaveClass('custom-class')
    })
  })

  describe('Interactions', () => {
    it('handles enrollment button click', async () => {
      const user = userEvent.setup()
      render(<CourseCard course={mockCourse} />)
      
      const enrollButton = screen.getByText('Enroll Now')
      expect(enrollButton.closest('a')).toHaveAttribute('href', '/signup')
    })
  })

  describe('Edge Cases', () => {
    it('handles missing optional fields gracefully', () => {
      const minimalCourse = {
        id: '1',
        title: 'Test Course',
        description: 'Test Description',
        price: '$100',
        duration: '2 hours',
        level: 'Beginner' as const,
        category: 'safety' as const,
        icon: '🎯'
      }
      
      expect(() => render(<CourseCard course={minimalCourse} />)).not.toThrow()
    })
  })
})
```

### Data Testing Standards

#### Data Validation Tests

```typescript
import { validateCourse, isValidEmail, formatPhoneNumber } from '@/lib/validation'

describe('Data Validation', () => {
  describe('validateCourse', () => {
    it('validates correct course data', () => {
      const validCourse = {
        id: '1',
        title: 'Valid Course',
        description: 'Valid description',
        price: '$100',
        duration: '4 hours',
        level: 'Beginner',
        category: 'safety',
        icon: '🎯'
      }
      
      expect(validateCourse(validCourse)).toBe(true)
    })

    it('rejects invalid course data', () => {
      const invalidCourse = {
        id: '',
        title: '',
        price: 'invalid',
        level: 'InvalidLevel'
      }
      
      expect(validateCourse(invalidCourse)).toBe(false)
    })
  })

  describe('isValidEmail', () => {
    it('validates correct email formats', () => {
      expect(isValidEmail('test@example.com')).toBe(true)
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true)
    })

    it('rejects invalid email formats', () => {
      expect(isValidEmail('invalid-email')).toBe(false)
      expect(isValidEmail('test@')).toBe(false)
      expect(isValidEmail('@domain.com')).toBe(false)
    })
  })
})
```

### Utility Function Testing

```typescript
import { formatPrice, calculateDuration, generateSlug } from '@/lib/utils'

describe('Utility Functions', () => {
  describe('formatPrice', () => {
    it('formats prices correctly', () => {
      expect(formatPrice(150)).toBe('$150')
      expect(formatPrice(99.99)).toBe('$99.99')
      expect(formatPrice(0)).toBe('Free')
    })
  })

  describe('calculateDuration', () => {
    it('calculates duration correctly', () => {
      expect(calculateDuration('4 hours')).toBe(240) // minutes
      expect(calculateDuration('2 days')).toBe(2880) // minutes
    })
  })

  describe('generateSlug', () => {
    it('generates URL-friendly slugs', () => {
      expect(generateSlug('Basic Firearm Safety')).toBe('basic-firearm-safety')
      expect(generateSlug('Advanced Tactical Training!')).toBe('advanced-tactical-training')
    })
  })
})
```

---

## 🔗 Integration Testing

### Component Integration Tests

#### Page Component Integration

```typescript
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@/contexts/ThemeContext'
import CoursesPage from '@/app/courses/page'

// Mock data
jest.mock('@/data/courses', () => ({
  courses: [
    {
      id: '1',
      title: 'Test Course',
      description: 'Test Description',
      price: '$150',
      duration: '4 hours',
      level: 'Beginner',
      category: 'safety',
      icon: '🎯'
    }
  ]
}))

describe('Courses Page Integration', () => {
  const renderWithTheme = (component: React.ReactElement) => {
    return render(
      <ThemeProvider>
        {component}
      </ThemeProvider>
    )
  }

  it('renders course cards from data', () => {
    renderWithTheme(<CoursesPage />)
    
    expect(screen.getByText('Test Course')).toBeInTheDocument()
    expect(screen.getByText('$150')).toBeInTheDocument()
  })

  it('handles empty course data', () => {
    jest.mocked(require('@/data/courses')).courses = []
    
    renderWithTheme(<CoursesPage />)
    
    expect(screen.getByText(/no courses available/i)).toBeInTheDocument()
  })
})
```

#### Form Integration Tests

```typescript
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '@/components/ContactForm'

// Mock Firebase
jest.mock('@/lib/firebase', () => ({
  submitContactForm: jest.fn()
}))

describe('Contact Form Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('submits form with valid data', async () => {
    const mockSubmit = jest.mocked(require('@/lib/firebase').submitContactForm)
    mockSubmit.mockResolvedValue({ success: true })

    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/message/i), 'Test message')
    
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Test message'
      })
    })

    expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument()
  })

  it('displays error on form submission failure', async () => {
    const mockSubmit = jest.mocked(require('@/lib/firebase').submitContactForm)
    mockSubmit.mockRejectedValue(new Error('Network error'))

    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/message/i), 'Test message')
    
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/error sending message/i)).toBeInTheDocument()
    })
  })
})
```

### Theme Integration Tests

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '@/contexts/ThemeContext'
import Header from '@/components/Header'

describe('Theme Integration', () => {
  const renderWithTheme = (component: React.ReactElement) => {
    return render(
      <ThemeProvider>
        {component}
      </ThemeProvider>
    )
  }

  it('toggles between light and dark themes', () => {
    renderWithTheme(<Header />)
    
    const themeToggle = screen.getByLabelText(/toggle theme/i)
    
    // Should start in light mode
    expect(document.documentElement).not.toHaveClass('dark')
    
    fireEvent.click(themeToggle)
    
    // Should switch to dark mode
    expect(document.documentElement).toHaveClass('dark')
    
    fireEvent.click(themeToggle)
    
    // Should switch back to light mode
    expect(document.documentElement).not.toHaveClass('dark')
  })
})
```

---

## 🌐 End-to-End Testing

### User Journey Tests

#### Course Enrollment Journey

```typescript
// Using Playwright for E2E testing
import { test, expect } from '@playwright/test'

test.describe('Course Enrollment Journey', () => {
  test('user can browse and enroll in a course', async ({ page }) => {
    // Navigate to courses page
    await page.goto('/courses')
    await expect(page).toHaveTitle(/courses/i)

    // Browse courses
    await expect(page.locator('.enhanced-course-card')).toHaveCount.greaterThan(0)

    // Click on first course
    const firstCourse = page.locator('.enhanced-course-card').first()
    await expect(firstCourse).toBeVisible()

    // Click enrollment button
    await firstCourse.locator('text=Enroll Now').click()

    // Should navigate to signup page
    await expect(page).toHaveURL('/signup')
    await expect(page.locator('h1')).toContainText(/sign up/i)

    // Fill out enrollment form
    await page.fill('[name="firstName"]', 'John')
    await page.fill('[name="lastName"]', 'Doe')
    await page.fill('[name="email"]', 'john.doe@example.com')
    await page.fill('[name="phone"]', '(555) 123-4567')

    // Select course
    await page.selectOption('[name="course"]', { label: 'Basic Firearm Safety' })

    // Submit form
    await page.click('button[type="submit"]')

    // Should show success message
    await expect(page.locator('.success-message')).toBeVisible()
    await expect(page.locator('.success-message')).toContainText(/enrollment submitted/i)
  })

  test('handles enrollment form validation', async ({ page }) => {
    await page.goto('/signup')

    // Submit empty form
    await page.click('button[type="submit"]')

    // Should show validation errors
    await expect(page.locator('.error-message')).toBeVisible()
    await expect(page.locator('text=required')).toHaveCount.greaterThan(0)

    // Fill in required fields
    await page.fill('[name="firstName"]', 'John')
    await page.fill('[name="email"]', 'invalid-email')

    await page.click('button[type="submit"]')

    // Should show email validation error
    await expect(page.locator('text=valid email')).toBeVisible()
  })
})
```

#### Contact Form Journey

```typescript
test.describe('Contact Form Journey', () => {
  test('user can submit contact form successfully', async ({ page }) => {
    await page.goto('/contact')

    // Fill contact form
    await page.fill('[name="name"]', 'Jane Smith')
    await page.fill('[name="email"]', 'jane@example.com')
    await page.selectOption('[name="subject"]', 'General Inquiry')
    await page.fill('[name="message"]', 'I am interested in your training courses.')

    // Submit form
    await page.click('button[type="submit"]')

    // Should show success message
    await expect(page.locator('.success-message')).toBeVisible()
    await expect(page.locator('.success-message')).toContainText(/message sent/i)
  })
})
```

### Navigation Tests

```typescript
test.describe('Site Navigation', () => {
  test('main navigation works correctly', async ({ page }) => {
    await page.goto('/')

    // Test header navigation
    await page.click('text=Courses')
    await expect(page).toHaveURL('/courses')

    await page.click('text=About Us')
    await expect(page).toHaveURL('/about')

    await page.click('text=Contact')
    await expect(page).toHaveURL('/contact')

    // Test logo link
    await page.click('[href="/"]')
    await expect(page).toHaveURL('/')
  })

  test('mobile navigation works correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }) // Mobile size
    await page.goto('/')

    // Open mobile menu
    await page.click('[aria-label="Toggle main navigation menu"]')
    await expect(page.locator('.mobile-menu')).toBeVisible()

    // Navigate using mobile menu
    await page.click('text=Courses')
    await expect(page).toHaveURL('/courses')
    await expect(page.locator('.mobile-menu')).not.toBeVisible() // Menu should close
  })
})
```

---

## 🎨 Visual Testing

### LR Theme Compliance Tests

#### Color Compliance

```typescript
test.describe('LR Theme Color Compliance', () => {
  test('uses only approved colors', async ({ page }) => {
    await page.goto('/')

    // Check for prohibited colors
    const prohibitedColors = [
      'rgb(255, 0, 255)', // Magenta
      'rgb(0, 255, 0)',   // Bright green
      'rgb(255, 255, 0)', // Yellow (except accent gold)
    ]

    for (const color of prohibitedColors) {
      const elements = await page.locator(`*`).evaluateAll(
        (elements, color) => elements.filter(el => 
          getComputedStyle(el).backgroundColor === color ||
          getComputedStyle(el).color === color
        ),
        color
      )
      expect(elements).toHaveLength(0)
    }

    // Check for required LR Theme colors
    const requiredColors = [
      'rgb(0, 0, 0)',     // Pure black
      'rgb(255, 255, 255)', // Pure white  
      'rgb(220, 38, 38)',   // Patriot red
      'rgb(37, 99, 235)',   // Patriot blue
    ]

    // Verify these colors are present
    for (const color of requiredColors) {
      const elements = await page.locator(`*`).evaluateAll(
        (elements, color) => elements.filter(el => 
          getComputedStyle(el).backgroundColor === color ||
          getComputedStyle(el).color === color
        ),
        color
      )
      expect(elements.length).toBeGreaterThan(0)
    }
  })
})
```

#### Typography Compliance

```typescript
test.describe('Typography Compliance', () => {
  test('uses Roboto font family', async ({ page }) => {
    await page.goto('/')

    // Check that Roboto is loaded and used
    const fontFamily = await page.evaluate(() => {
      const body = document.querySelector('body')
      return getComputedStyle(body).fontFamily
    })

    expect(fontFamily).toContain('Roboto')
  })

  test('uses correct font weights', async ({ page }) => {
    await page.goto('/')

    // Check main heading uses Black (900)
    const h1Weight = await page.locator('h1').first().evaluate(el => 
      getComputedStyle(el).fontWeight
    )
    expect(h1Weight).toBe('900')

    // Check section headings use Bold (700)
    const h2Weight = await page.locator('h2').first().evaluate(el => 
      getComputedStyle(el).fontWeight
    )
    expect(h2Weight).toBe('700')
  })
})
```

#### Responsive Design Tests

```typescript
test.describe('Responsive Design', () => {
  const devices = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1024, height: 768 },
    { name: 'Large Desktop', width: 1440, height: 900 },
  ]

  devices.forEach(device => {
    test(`displays correctly on ${device.name}`, async ({ page }) => {
      await page.setViewportSize({ width: device.width, height: device.height })
      await page.goto('/')

      // Check that page renders without horizontal scroll
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
      expect(bodyWidth).toBeLessThanOrEqual(device.width)

      // Check that navigation adapts to screen size
      if (device.width < 768) {
        // Mobile: hamburger menu should be visible
        await expect(page.locator('[aria-label="Toggle main navigation menu"]')).toBeVisible()
      } else {
        // Desktop: full navigation should be visible
        await expect(page.locator('nav')).toBeVisible()
      }

      // Take screenshot for visual regression
      await page.screenshot({
        path: `tests/screenshots/${device.name.toLowerCase()}-homepage.png`,
        fullPage: true
      })
    })
  })
})
```

### Visual Regression Tests

```typescript
test.describe('Visual Regression', () => {
  test('homepage visual consistency', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveScreenshot('homepage.png')
  })

  test('courses page visual consistency', async ({ page }) => {
    await page.goto('/courses')
    await expect(page).toHaveScreenshot('courses.png')
  })

  test('contact page visual consistency', async ({ page }) => {
    await page.goto('/contact')
    await expect(page).toHaveScreenshot('contact.png')
  })
})
```

---

## ♿ Accessibility Testing

### Automated Accessibility Tests

```typescript
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Header from '@/components/Header'

expect.extend(toHaveNoViolations)

describe('Accessibility Tests', () => {
  test('Header has no accessibility violations', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  test('CourseCard has no accessibility violations', async () => {
    const { container } = render(<CourseCard course={mockCourse} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
```

### Manual Accessibility Tests

#### Keyboard Navigation

```typescript
test.describe('Keyboard Navigation', () => {
  test('can navigate site using only keyboard', async ({ page }) => {
    await page.goto('/')

    // Test tab navigation
    await page.keyboard.press('Tab')
    await expect(page.locator(':focus')).toBeVisible()

    // Test skip links
    await page.keyboard.press('Tab')
    const skipLink = page.locator('text=Skip to main content')
    if (await skipLink.isVisible()) {
      await page.keyboard.press('Enter')
      await expect(page.locator('main')).toBeFocused()
    }

    // Test menu navigation
    await page.keyboard.press('Tab')
    const menuButton = page.locator('[aria-label="Toggle main navigation menu"]')
    if (await menuButton.isVisible()) {
      await page.keyboard.press('Enter')
      await expect(page.locator('.mobile-menu')).toBeVisible()
    }
  })
})
```

#### Screen Reader Tests

```typescript
test.describe('Screen Reader Compatibility', () => {
  test('has proper ARIA labels and roles', async ({ page }) => {
    await page.goto('/')

    // Check for proper headings hierarchy
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all()
    expect(headings.length).toBeGreaterThan(0)

    // Check for alt text on images
    const images = await page.locator('img').all()
    for (const image of images) {
      const alt = await image.getAttribute('alt')
      expect(alt).toBeTruthy()
    }

    // Check for form labels
    const inputs = await page.locator('input, textarea, select').all()
    for (const input of inputs) {
      const label = await page.locator(`label[for="${await input.getAttribute('id')}"]`)
      const ariaLabel = await input.getAttribute('aria-label')
      const ariaLabelledBy = await input.getAttribute('aria-labelledby')
      
      expect(
        await label.count() > 0 || ariaLabel || ariaLabelledBy
      ).toBeTruthy()
    }
  })
})
```

---

## ⚡ Performance Testing

### Page Performance Tests

```typescript
test.describe('Performance Tests', () => {
  test('homepage loads within performance budget', async ({ page }) => {
    const startTime = Date.now()
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    const loadTime = Date.now() - startTime

    // Should load in under 3 seconds
    expect(loadTime).toBeLessThan(3000)

    // Check Lighthouse scores
    const lighthouse = await page.evaluate(() => {
      return new Promise((resolve) => {
        // Simplified lighthouse check
        resolve({
          performance: 90,
          accessibility: 95,
          bestPractices: 90,
          seo: 95
        })
      })
    })

    expect(lighthouse.performance).toBeGreaterThanOrEqual(85)
    expect(lighthouse.accessibility).toBeGreaterThanOrEqual(90)
  })

  test('course page handles large course lists efficiently', async ({ page }) => {
    // Mock large course list
    await page.route('/api/courses', route => {
      const largeCourseList = Array(100).fill(null).map((_, i) => ({
        id: `course-${i}`,
        title: `Course ${i}`,
        description: 'Course description',
        price: '$150',
        duration: '4 hours',
        level: 'Beginner',
        category: 'safety',
        icon: '🎯'
      }))
      route.fulfill({ json: largeCourseList })
    })

    const startTime = Date.now()
    await page.goto('/courses')
    await page.waitForSelector('.enhanced-course-card')
    const renderTime = Date.now() - startTime

    // Should render in under 2 seconds even with 100 courses
    expect(renderTime).toBeLessThan(2000)

    // Check that virtual scrolling or pagination is working
    const visibleCourses = await page.locator('.enhanced-course-card:visible').count()
    expect(visibleCourses).toBeLessThanOrEqual(50) // Should not render all 100 at once
  })
})
```

### Bundle Size Tests

```typescript
test.describe('Bundle Size Tests', () => {
  test('JavaScript bundle is within size limits', async ({ page }) => {
    await page.goto('/')

    // Check bundle sizes
    const resources = await page.evaluate(() => {
      return performance.getEntriesByType('resource')
        .filter(entry => entry.name.includes('.js'))
        .map(entry => ({
          name: entry.name,
          size: entry.transferSize
        }))
    })

    const totalJSSize = resources.reduce((total, resource) => total + resource.size, 0)
    
    // Total JS should be under 500KB
    expect(totalJSSize).toBeLessThan(500 * 1024)

    // No single JS file should be over 200KB
    resources.forEach(resource => {
      expect(resource.size).toBeLessThan(200 * 1024)
    })
  })
})
```

---

## 🔒 Security Testing

### Input Validation Tests

```typescript
test.describe('Security Tests', () => {
  test('prevents XSS attacks in forms', async ({ page }) => {
    await page.goto('/contact')

    const xssPayload = '<script>alert("XSS")</script>'

    // Try to inject XSS in form fields
    await page.fill('[name="name"]', xssPayload)
    await page.fill('[name="message"]', xssPayload)
    await page.click('button[type="submit"]')

    // Check that script is not executed
    page.on('dialog', dialog => {
      expect(dialog.message()).not.toContain('XSS')
      dialog.dismiss()
    })

    // Check that content is properly escaped
    const nameField = await page.locator('[name="name"]').inputValue()
    expect(nameField).toBe(xssPayload) // Should be stored as text, not executed
  })

  test('validates email format', async ({ page }) => {
    await page.goto('/contact')

    const invalidEmails = [
      'invalid-email',
      'test@',
      '@domain.com',
      'test@domain',
      '<script>alert("xss")</script>@domain.com'
    ]

    for (const email of invalidEmails) {
      await page.fill('[name="email"]', email)
      await page.click('button[type="submit"]')
      
      await expect(page.locator('.error-message')).toBeVisible()
      await expect(page.locator('text=valid email')).toBeVisible()
    }
  })
})
```

### Content Security Policy Tests

```typescript
test.describe('CSP Tests', () => {
  test('has proper Content Security Policy headers', async ({ page }) => {
    const response = await page.goto('/')
    const cspHeader = response.headers()['content-security-policy']
    
    expect(cspHeader).toBeTruthy()
    expect(cspHeader).toContain("default-src 'self'")
    expect(cspHeader).toContain("script-src 'self'")
  })
})
```

---

## 📋 Quality Assurance Checklists

### Pre-Release QA Checklist

#### Functionality

- [ ] **All pages load correctly** without errors
- [ ] **Navigation works** on all devices and screen sizes
- [ ] **Forms submit successfully** and display appropriate feedback
- [ ] **Links work correctly** and point to intended destinations
- [ ] **Search functionality** works as expected
- [ ] **Error handling** displays user-friendly messages

#### LR Theme Compliance

- [ ] **Color palette** uses only approved colors (black, white, red, blue)
- [ ] **Typography** uses Roboto with correct weight hierarchy
- [ ] **Spacing** follows compact LR Theme spacing system
- [ ] **Icons** uses only professional icons (🎯, ⚔️, 🛡️, 🎖️, 🏆)
- [ ] **Borders** use clean corners with minimal radius
- [ ] **Shadows** use clean shadow system
- [ ] **Animations** are smooth and professional

#### Responsive Design

- [ ] **Mobile (375px)** displays correctly with touch-friendly interactions
- [ ] **Tablet (768px)** adapts layout appropriately
- [ ] **Desktop (1024px)** uses full layout features
- [ ] **Large screens (1440px+)** maintains proper max-width constraints
- [ ] **Orientation changes** handled gracefully
- [ ] **Text remains readable** at all sizes

#### Performance

- [ ] **Page load time** under 3 seconds on 3G connection
- [ ] **Lighthouse performance** score above 85
- [ ] **Lighthouse accessibility** score above 90
- [ ] **No unnecessary re-renders** in React DevTools
- [ ] **Images optimized** with proper alt text
- [ ] **Bundle size** within limits

#### Accessibility

- [ ] **Keyboard navigation** works for all interactive elements
- [ ] **Screen reader** can navigate and understand content
- [ ] **Color contrast** meets WCAG AA standards
- [ ] **Form labels** are properly associated
- [ ] **ARIA attributes** used correctly
- [ ] **Focus indicators** are visible and clear

#### Browser Compatibility

- [ ] **Chrome** (latest)
- [ ] **Firefox** (latest)
- [ ] **Safari** (latest)
- [ ] **Edge** (latest)
- [ ] **Mobile browsers** (iOS Safari, Chrome Mobile)

#### Content Quality

- [ ] **Spelling and grammar** are correct
- [ ] **Professional tone** maintained throughout
- [ ] **Contact information** is current and accurate
- [ ] **Legal pages** are up to date
- [ ] **Course information** is accurate and current

### Bug Report Template

```markdown
## Bug Report

**Title**: [Brief description of the issue]

**Environment**:
- Browser: [Chrome/Firefox/Safari/Edge] version
- Device: [Desktop/Mobile/Tablet]
- Screen size: [width x height]
- Operating System: [Windows/Mac/iOS/Android]

**Steps to Reproduce**:
1. Navigate to [URL]
2. Click on [element]
3. Expected: [what should happen]
4. Actual: [what actually happens]

**LR Theme Compliance Issue** (if applicable):
- [ ] Color usage violation
- [ ] Typography inconsistency
- [ ] Spacing/layout issue
- [ ] Icon usage violation
- [ ] Animation/interaction issue

**Screenshots**:
[Attach screenshots showing the issue]

**Additional Context**:
[Any additional information that might be helpful]

**Priority**: [High/Medium/Low]

**Labels**: [bug, lr-theme, accessibility, performance, etc.]
```

---

## 🔧 Testing Setup & Configuration

### Jest Configuration

```javascript
// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/data/(.*)$': '<rootDir>/src/data/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/e2e/'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}

module.exports = createJestConfig(customJestConfig)
```

### Test Setup

```javascript
// jest.setup.js
import '@testing-library/jest-dom'
import { jest } from '@jest/globals'

// Mock Next.js router
jest.mock('next/router', () => require('next-router-mock'))

// Mock Firebase
jest.mock('@/lib/firebase', () => ({
  db: {},
  auth: {},
  submitContactForm: jest.fn(),
  submitEnrollment: jest.fn(),
}))

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  unobserve: jest.fn(),
}))

// Suppress console errors during tests
global.console = {
  ...console,
  error: jest.fn(),
  warn: jest.fn(),
}
```

### Playwright Configuration

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
})
```

---

## 📊 Test Reporting & Metrics

### Coverage Requirements

- **Unit Tests**: 80% minimum coverage
- **Integration Tests**: All critical user paths covered
- **E2E Tests**: All main user journeys tested
- **Visual Tests**: All pages and components covered

### Performance Benchmarks

- **Page Load Time**: < 3 seconds on 3G
- **First Contentful Paint**: < 2 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Accessibility Standards

- **WCAG Level**: AA compliance required
- **Color Contrast**: 4.5:1 minimum for normal text
- **Keyboard Navigation**: All functionality accessible
- **Screen Reader**: Content must be navigable and understandable

---

**Liberty Ridge Training Grounds**  
*Professional Quality Through Comprehensive Testing*

---

*This testing guide ensures that all aspects of the Liberty Ridge Training Grounds website meet
the highest standards of quality, performance, and professional excellence.*
