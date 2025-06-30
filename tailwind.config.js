// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Silver-neon palette
        'neon-silver-light': '#F0F0F0',
        'neon-silver':       '#D0D0D0',
        'neon-silver-dark':  '#A8A8A8',
        'neon-silver-glow':  '#FFFFFF',  // for text/icon glow accents
      },
      boxShadow: {
        // subtle glow effect
        'neon-silver': '0 0 8px rgba(255,255,255,0.7), 0 0 16px rgba(255,255,255,0.5)',
      }
    },
  },
  plugins: [],
}
