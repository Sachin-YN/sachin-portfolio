/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{svelte,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0a1128',
        'secondary-bg': '#001f3f',
        accent: '#00d1b2',
        'accent-dark': '#009d8a',
        'card-bg': '#081b3a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 25px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
