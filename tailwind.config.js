/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        pulseStar: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        rocketFlame: {
          '0%': { transform: 'scaleY(1)', opacity: '1' },
          '50%': { transform: 'scaleY(1.5)', opacity: '0.7' },
          '100%': { transform: 'scaleY(1)', opacity: '1' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        dropIn: {
          '0%': {
            transform: 'translateY(-30px) skewX(-15deg)',
            opacity: '0',
          },
          '60%': {
            transform: 'translateY(10px) skewX(-5deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(0) skewX(0deg)',
            opacity: '1',
          },
        },
      },
      animation: {
        'pulse-star': 'pulseStar 1.5s infinite ease-in-out',
        'rocket-flame': 'rocketFlame 0.3s infinite ease-in-out',
        'wave': 'wave 1.5s infinite ease-in-out',
        'drop-in': 'dropIn 0.6s ease-out forwards',
      },
      boxShadow: {
        glow: '0 0 6px rgba(255, 255, 255, 0.7)',
      },
    },
  },
  plugins: [],
}
