/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        'custom-dark-overlay': 'rgba(0, 0, 0, 0.7)', // Custom overlay color
      },
    },
  },
  plugins: [],
}