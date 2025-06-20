// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#0a1128",      // darkest navy
        "secondary-bg": "#001f3f",    // deep indigo
        "accent": "#00d1b2",          // bright teal
        "accent-dark": "#009d8a",     // darker teal on hover
        "card-bg": "#081b3a",         // slightly lighter for cards
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 25px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
