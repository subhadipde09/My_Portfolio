/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-flow': 'gradientFlow 10s ease-in-out infinite',
      },
      keyframes: {
        gradientFlow: {
          '0%': { backgroundPosition: '200% 0%' },
          '100%': { backgroundPosition: '-200% 0%' },
        },
      },
    },
  },
  plugins: [],
}