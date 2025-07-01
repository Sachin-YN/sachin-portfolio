// tailwind.config.js
module.exports = {
  // … your existing config …
  theme: {
    extend: {
      colors: {
        accent: '#10B981',
        'accent-dark': '#059669',
      },
      boxShadow: {
        // subtle default glow
        neon: '0 0 4px rgba(16, 185, 129, 0.6), 0 0 8px rgba(16, 185, 129, 0.4)',
        // stronger on hover
        'neon-lg': '0 0 8px rgba(16, 185, 129, 0.8), 0 0 16px rgba(16, 185, 129, 0.6)',
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
