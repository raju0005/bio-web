/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'font1': ['Alegreya Sans', 'sans-serif'],
        'font2': ['Alegreya Sans SC', 'sans-serif'],
        'font3':['Amarante', 'display'],
        customPD:['PriceDown', 'sans-serif'],
      },
      colors: {
        'primary':'#000000',
        'secondary':'#000000',
        'text1':'#ffffff'
      },
      keyframes: {
        loadtwo: {
          '50%': {
            transform: 'rotate(-80deg)',
          },
        },
        buzz: {
          '10%, 30%, 50%, 70%, 90%': {
            transform: 'translateX(-2px)',
          },
          '20%, 40%, 60%, 80%': {
            transform: 'translateX(2px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        loadtwo: 'loadtwo 1s ease-in-out infinite',
        buzz: 'buzz 0.3s linear',
      },

    },
  },
  plugins: [],
}