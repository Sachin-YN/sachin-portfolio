/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['Inter','system-ui','sans-serif'],
        roboto:['Roboto','sans-serif']
      },
      colors: {
        'hero-from':    '#1e3a8a',  // deep indigo
        'hero-via':     '#7e22ce',  // rich violet
        'hero-to':      '#db2777'   // vibrant pink
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out'
      }
    }
  },
  plugins: []
};
