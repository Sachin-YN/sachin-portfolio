// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary accent for buttons, borders, etc.
        accent: '#10B981',        // Emerald
        'accent-dark': '#059669', // Darker Emerald on hover
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        DEFAULT: '12px',
      },
    },
  },
  plugins: [],
}
