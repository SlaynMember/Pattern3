/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pattern': ['Pattern', 'Inter', 'sans-serif'],
        'pattern-stamp': ['Pattern Stamp', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0891b2',
          light: '#06b6d4',
          dark: '#0e7490',
        },
        accent: {
          DEFAULT: '#14b8a6',
          light: '#5eead4',
          dark: '#0f766e',
        },
      },
    },
  },
  plugins: [],
}