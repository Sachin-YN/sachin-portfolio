/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode toggle via class
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#3B82F6', // Tailwind blue-500
        secondary: '#1E293B', // Tailwind slate-800
      },
      zIndex: {
        '-1': '-1',
        '60': '60',
        '70': '70',
      },
      blur: {
        xs: '2px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        bounceSlow: 'bounceSlow 2s infinite',
      },
    },
  },

  plugins: [],
};
