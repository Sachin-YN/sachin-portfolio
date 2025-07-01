// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#00ffff',
        'accent-dark': '#00d4d4',
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
