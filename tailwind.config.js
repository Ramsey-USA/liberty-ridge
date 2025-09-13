/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors using CSS variables
        'patriot-red': 'var(--patriot-red)',
        'patriot-blue': 'var(--patriot-blue)', 
        'patriot-navy': 'var(--patriot-navy)',
        'tactical-dark': 'var(--tactical-dark)',
        'tactical-gray': 'var(--tactical-gray)',
        'tactical-light': 'var(--tactical-light)',
        
        // Text colors
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-description': 'var(--text-description)',
        'text-dark': 'var(--text-dark)',
        
        // Background colors
        'bg-dark': 'var(--bg-dark)',
        'bg-tactical': 'var(--bg-tactical)',
        'bg-light': 'var(--bg-light)',
        
        // Accent colors
        'accent-gold': 'var(--accent-gold)',
        'accent-orange': 'var(--accent-orange)',
        'accent-yellow': 'var(--accent-yellow)',
        
        // Nested object for better organization
        patriot: {
          red: 'var(--patriot-red)',
          blue: 'var(--patriot-blue)',
          navy: 'var(--patriot-navy)',
        },
        tactical: {
          dark: 'var(--tactical-dark)',
          gray: 'var(--tactical-gray)',
          light: 'var(--tactical-light)',
        }
      },
      backgroundImage: {
        'tactical': 'var(--gradient-tactical)',
        'primary': 'var(--gradient-primary)',
        'text-gradient': 'var(--gradient-text)',
      },
      boxShadow: {
        'text': 'var(--shadow-text)',
        'glow': 'var(--shadow-glow)',
        'card': 'var(--shadow-card)',
      },
      fontFamily: {
        tactical: ['Saira', 'system-ui', 'sans-serif'],
        sans: ['Saira', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}