/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        lime: {
          DEFAULT: '#c8f135',
          50:  '#f7fde6',
          100: '#edfacc',
          200: '#d8f599',
          300: '#c8f135',
          400: '#a8cc1a',
          500: '#849f12',
        },
        brand: {
          dark:   '#0a0a0a',
          card:   '#141414',
          border: '#242424',
          muted:  '#666666',
          cream:  '#f0ece4',
        },
        orange: {
          DEFAULT: '#ff5c1a',
        },
      },
      borderRadius: {
        lg: '12px',
        xl: '16px',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
      },
      animation: {
        fadeIn:  'fadeIn 0.2s ease',
        slideUp: 'slideUp 0.3s ease',
      },
    },
  },
  plugins: [],
}