/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#006A52', // Deep Teal Specification
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Typography Specification
      },
      borderRadius: {
        'brand': '10px', // Border Radius Specification (8px-12px)[cite: 1]
      },
    },
  },
  plugins: [],
}