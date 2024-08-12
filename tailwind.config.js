/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#292B36',
        customGrey: '#A8A98E',
        customOverlay: '#F4F5F6',
      },
      fontSize: {
        med: '1.188rem',
        small: '1.063rem'
      },
      fontFamily: {
        gelion: ['Gelion', 'sans-serif'],
      },
      lineHeight: {
        '22px': '22px',
      },
    },
  },
  plugins: [],
}