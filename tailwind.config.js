// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // ← make sure this covers all your components
  ],
  theme: {
    extend: {
      // you can add any custom colors here, e.g.
      colors: {
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // optional, if you ever use form styles
  ],
};
