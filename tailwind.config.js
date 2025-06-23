module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    // Add any dynamic classes here
    { pattern: /bg-(primary|secondary|accent)(-dark)?/ },
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        "primary-bg": "#0a1128",
        "secondary-bg": "#001f3f",
        accent: "#00d1b2",
        "accent-dark": "#009d8a",
        "card-bg": "#081b3a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 25px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
