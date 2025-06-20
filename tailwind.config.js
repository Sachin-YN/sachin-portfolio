// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Define a custom color palette
      colors: {
        'primary-bg': '#0a0a0a', // A very dark almost black for main backgrounds
        'secondary-bg': '#1a1a1a', // Slightly lighter for cards/sections
        'accent-teal': { // Custom teal shades for consistency
          DEFAULT: '#00e676', // A vibrant teal
          light: '#64ffda',
          dark: '#00bfa5',
          '400': '#22d3ee', // Your existing cyan 400
          '500': '#06b6d4', // Your existing cyan 500
          '600': '#0891b2', // Your existing cyan 600
        },
        'accent-purple': { // A vibrant purple for secondary accents
          DEFAULT: '#8854c2',
          light: '#b16ddb',
          dark: '#673ab7',
        },
      },
      // Define custom font families
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // 'inter' custom name for the font, with sans-serif fallback
      },
      // Define custom box shadows for glow effects
      boxShadow: {
        '2xl-custom': '0 0 40px rgba(0, 240, 255, 0.2), 0 0 80px rgba(138, 43, 226, 0.1)', // Dual color glow
        'teal-500/60': '0 10px 15px -3px rgba(6, 182, 212, 0.3), 0 4px 6px -2px rgba(6, 182, 212, 0.2)', // Example for button hover
        'purple-500/60': '0 10px 15px -3px rgba(138, 43, 226, 0.3), 0 4px 6px -2px rgba(138, 43, 226, 0.2)', // Example for button hover
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
