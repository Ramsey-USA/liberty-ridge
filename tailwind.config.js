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
        'patriot-red': '#dc2626',    // Patriotic red
        'patriot-blue': '#1e40af',   // Patriotic blue
        'patriot-navy': '#1e3a8a',   // Dark navy
        'tactical-dark': '#1f2937',   // Dark tactical color
        'tactical-gray': '#374151',   // Medium tactical gray
        'tactical-light': '#f9fafb',  // Light background
        patriot: {
          red: '#dc2626',    // Patriotic red
          blue: '#1e40af',   // Patriotic blue
          navy: '#1e3a8a',   // Dark navy
        },
        tactical: {
          dark: '#1f2937',   // Dark tactical color
          gray: '#374151',   // Medium tactical gray
          light: '#f9fafb',  // Light background
        }
      },
      fontFamily: {
        tactical: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}