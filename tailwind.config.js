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
      },
      animation: {
        'pulse-star': 'pulseStar 1.5s infinite ease-in-out',
        'rocket-flame': 'rocketFlame 0.3s infinite ease-in-out',
        'wave': 'wave 1.5s infinite ease-in-out',
      },
      boxShadow: {
        'glow': '0 0 6px rgba(255, 255, 255, 0.7)',
      },
    },
  },
  plugins: [],
}
