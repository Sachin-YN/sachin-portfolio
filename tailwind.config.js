module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
    },
  },
  plugins: [],
}
