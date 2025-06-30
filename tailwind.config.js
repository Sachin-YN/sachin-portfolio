// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue-light': '#66fcf1',
        'neon-blue':       '#00ffff',
        'neon-blue-dark':  '#00b7eb',
      },
    },
  },
  plugins: [],
}
