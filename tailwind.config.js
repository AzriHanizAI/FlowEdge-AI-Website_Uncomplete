/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0B1D36',
        'electric-blue': '#0077FF',
        'light-gray': '#E5E5E5',
        'teal': '#00BFA6',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}