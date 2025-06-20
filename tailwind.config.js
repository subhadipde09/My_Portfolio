/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-flow': 'gradientFlow 10s ease-in-out infinite',
        'slide-down': 'slideDown 0.5s ease-out forwards',
      },
      keyframes: {
        gradientFlow: {
          '0%': { backgroundPosition: '200% 0%' },
          '100%': { backgroundPosition: '-200% 0%' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}