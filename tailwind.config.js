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
        accent: '#14B8A6',
       'accent-dark': '#0D9488', // Darker Emerald on hover
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
