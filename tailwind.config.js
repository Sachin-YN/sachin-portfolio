/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  darkMode: 'class', // Enable dark mode via a class (you toggle with JS if needed)

  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // For a smooth typewriter style
      },
      colors: {
        primary: '#3B82F6', // Tailored primary blue (for text, cursor)
        secondary: '#1E40AF', // A richer blue if needed
      },
      animation: {
        bounceSlow: 'bounce 3s infinite',
      },
    },
  },

  plugins: [],
};
