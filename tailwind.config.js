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
        // Re-mapping existing Tailwind colors for clarity if needed,
        // or just rely on Tailwind's default gray/zinc scales.
        // I've kept your existing cyan shades as they were.
      },
      // Define custom font families
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // 'inter' custom name for the font, with sans-serif fallback
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
