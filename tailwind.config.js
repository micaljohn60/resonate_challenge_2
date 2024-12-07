/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      screens: { 'xs': { 'max': '990px' } },

      colors: {
        'list-bg': "bg-gray-800",
        'card': "bg-gray-800",
        'card-2': '#454545'
      },

      keyframes: {
        'rotate-360': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'shake': {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '50%': { transform: 'translateX(4px)' },
          '75%': { transform: 'translateX(-4px)' },
          '100%': { transform: 'translateX(0)' },
        },
        'scale-up': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'rotate-360': 'rotate-360 1s ease-out',
        'shake': 'shake 0.5s ease-in-out',
        'scale-up': 'scale-up 0.5s ease-out',
      },
    },
  },
  plugins: [],
}

