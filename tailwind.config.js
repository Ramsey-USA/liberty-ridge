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
      /* ===== BLACK & WHITE COLOR SYSTEM ===== */
      colors: {
        /* Core Brand Colors - Red & Blue Highlights Only */
        'patriot-red': 'rgb(var(--patriot-red) / <alpha-value>)',
        'patriot-blue': 'rgb(var(--patriot-blue) / <alpha-value>)', 
        'patriot-navy': 'rgb(var(--patriot-navy) / <alpha-value>)',
        
        /* Pure Black & White Foundation */
        'pure-black': 'rgb(var(--pure-black) / <alpha-value>)',
        'pure-white': 'rgb(var(--pure-white) / <alpha-value>)',
        'off-black': 'rgb(var(--off-black) / <alpha-value>)',
        'off-white': 'rgb(var(--off-white) / <alpha-value>)',
        
        /* Semantic Color Tokens - Black & White */
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
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-foreground': 'rgb(var(--text-inverse) / <alpha-value>)',
        
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
        
        /* Surface Colors */
        'surface': 'rgb(var(--surface) / <alpha-value>)',
        'surface-elevated': 'rgb(var(--surface-elevated) / <alpha-value>)',
        'surface-dark': 'rgb(var(--surface-dark) / <alpha-value>)',
        'surface-contrast': 'rgb(var(--surface-contrast) / <alpha-value>)',
      },
      
      /* ===== SHARP BORDER RADIUS SYSTEM ===== */
      borderRadius: {
        'none': '0px',      // Pure sharp corners
        'xs': '2px',        // Minimal radius
        'sm': '4px',        // Buttons and inputs
        'md': '6px',        // Standard cards
        'lg': '8px',        // Sharp but not harsh
        'xl': '12px',       // Larger elements
        '2xl': '16px',      // Hero sections
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
      
      /* ===== COMPACT SPACING SYSTEM ===== */
      spacing: {
        '0.5': '0.125rem',   // 2px
        '1': '0.25rem',      // 4px
        '1.5': '0.375rem',   // 6px
        '2': '0.5rem',       // 8px
        '2.5': '0.625rem',   // 10px
        '3': '0.75rem',      // 12px
        '3.5': '0.875rem',   // 14px
        '4': '1rem',         // 16px
        '5': '1.25rem',      // 20px
        '6': '1.5rem',       // 24px
        '8': '2rem',         // 32px
        '10': '2.5rem',      // 40px
        '12': '3rem',        // 48px
        '16': '4rem',        // 64px
        '20': '5rem',        // 80px
        '24': '6rem',        // 96px
        '32': '8rem',        // 128px
      },
      
      /* ===== SLEEK SHADOWS ===== */
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'sharp': '0 2px 8px 0 rgb(0 0 0 / 0.15)',
        'sharp-lg': '0 4px 16px 0 rgb(0 0 0 / 0.2)',
      },
      
      /* ===== ANIMATIONS ===== */
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out',
        'slideIn': 'slideIn 0.3s ease-out',
        'sharp-hover': 'sharpHover 0.2s ease-out',
        'two-tone-pulse': 'twoTonePulse 2s ease-in-out infinite',
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
        sharpHover: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.02)' },
        },
        twoTonePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}