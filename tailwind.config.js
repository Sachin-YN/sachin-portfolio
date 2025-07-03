// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'class', // ✅ Enable dark mode using class strategy
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        DEFAULT: '12px',
      },
      // You can add more theming customizations here later
    },
  },
  plugins: [],
}
