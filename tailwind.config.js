/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom color palette
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
      },
      
      // Typography
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
        mono: ['Fira Code', 'ui-monospace', 'monospace'],
        display: ['Poppins', 'sans-serif'],
      },
      
      // Spacing
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      
      // Border radius
      borderRadius: {
        'xs': '0.125rem',
        '4xl': '2rem',
      },
      
      // Box shadows
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'hard': '0 4px 4px rgba(0, 0, 0, 0.25)',
        'inner-xl': 'inset 0 0 10px 0 rgba(0, 0, 0, 0.1)',
      },
      
      // Transitions
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      
      // Keyframes for animations
      keyframes: {
        'wobble': {
          '0%, 100%': { transform: 'translateX(0%)' },
          '15%': { transform: 'translateX(-5%) rotate(-5deg)' },
          '30%': { transform: 'translateX(4%) rotate(3deg)' },
          '45%': { transform: 'translateX(-3%) rotate(-3deg)' },
          '60%': { transform: 'translateX(2%) rotate(2deg)' },
          '75%': { transform: 'translateX(-1%) rotate(-1deg)' },
        },
      },
      
      // Animation
      animation: {
        'wobble': 'wobble 1s ease-in-out',
      },
      
      // Screens breakpoints
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      
      // Z-index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  
  // Plugins
  plugins: [
    // You can add plugin functions here
    function({ addComponents, theme }) {
      addComponents({
        '.btn': {
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          borderRadius: theme('borderRadius.md'),
          fontWeight: theme('fontWeight.medium'),
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 150ms ease',
          '&:focus': {
            outline: 'none',
            boxShadow: `0 0 0 3px ${theme('colors.primary.200')}`,
          },
        },
        '.btn-primary': {
          backgroundColor: theme('colors.primary.500'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.primary.600'),
          },
        },
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.md'),
          overflow: 'hidden',
        },
      });
    },
  ],
  
  darkMode: 'class',
}