/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      /* ===== OPTIMIZED COLOR SYSTEM ===== */
      colors: {
        /* Core Brand Colors - Using CSS Variables */
        'patriot-red': 'rgb(var(--patriot-red) / <alpha-value>)',
        'patriot-blue': 'rgb(var(--patriot-blue) / <alpha-value>)', 
        'patriot-navy': 'rgb(var(--patriot-navy) / <alpha-value>)',
        'military-green': 'rgb(var(--military-green) / <alpha-value>)',
        'accent-gold': 'rgb(var(--accent-gold) / <alpha-value>)',
        
        /* Semantic Color Tokens */
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--text-primary) / <alpha-value>)',
        card: 'rgb(var(--surface) / <alpha-value>)',
        'card-foreground': 'rgb(var(--text-primary) / <alpha-value>)',
        popover: 'rgb(var(--surface-elevated) / <alpha-value>)',
        'popover-foreground': 'rgb(var(--text-primary) / <alpha-value>)',
        
        primary: 'rgb(var(--primary) / <alpha-value>)',
        'primary-foreground': 'rgb(var(--text-inverse) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        'secondary-foreground': 'rgb(var(--text-inverse) / <alpha-value>)',
        
        muted: 'rgb(var(--surface-elevated) / <alpha-value>)',
        'muted-foreground': 'rgb(var(--text-muted) / <alpha-value>)',
        accent: 'rgb(var(--surface-elevated) / <alpha-value>)',
        'accent-foreground': 'rgb(var(--text-primary) / <alpha-value>)',
        
        destructive: 'rgb(var(--primary) / <alpha-value>)',
        'destructive-foreground': 'rgb(var(--text-inverse) / <alpha-value>)',
        
        border: 'rgb(var(--border) / <alpha-value>)',
        input: 'rgb(var(--border) / <alpha-value>)',
        ring: 'rgb(var(--primary) / <alpha-value>)',
        
        /* Text Colors */
        'text-primary': 'rgb(var(--text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--text-secondary) / <alpha-value>)',
        'text-muted': 'rgb(var(--text-muted) / <alpha-value>)',
        'text-inverse': 'rgb(var(--text-inverse) / <alpha-value>)',
        
        /* Tactical Colors for Legacy Support */
        'tactical-dark': 'rgb(var(--surface-tactical) / <alpha-value>)',
        'tactical-gray': 'rgb(var(--gray-800) / <alpha-value>)',
        'tactical-light': 'rgb(var(--gray-50) / <alpha-value>)',
        'tactical-border': 'rgb(var(--border-tactical) / <alpha-value>)',
        
        /* Surface Colors */
        'surface': 'rgb(var(--surface) / <alpha-value>)',
        'surface-elevated': 'rgb(var(--surface-elevated) / <alpha-value>)',
        'surface-tactical': 'rgb(var(--surface-tactical) / <alpha-value>)',
      },
      
      /* ===== ENHANCED TYPOGRAPHY ===== */
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        tactical: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.025em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.025em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.025em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
      },
      
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      
      lineHeight: {
        'none': '1',
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },
      
      /* ===== SPACING & LAYOUT ===== */
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
      },
      
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'tactical': 'var(--shadow-tactical)',
      },
      
      /* ===== ANIMATIONS ===== */
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out',
        'slideIn': 'slideIn 0.3s ease-out',
        'bullet-travel': 'bullet-travel 2s ease-out infinite',
        'patriotic-flow': 'patrioticFlow 3s ease-in-out infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'bullet-travel': {
          '0%': { transform: 'translateX(-6.25rem) translateY(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(calc(100vw + 6.25rem)) translateY(-0.3125rem)', opacity: '0' },
        },
        patrioticFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}