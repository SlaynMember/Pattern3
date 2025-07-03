/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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