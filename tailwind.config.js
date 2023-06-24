/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        white: {
          1: "#FFF"
        },
        black: {
          1: "#222"
        }
      }
    },
    fontFamily: {
      ysa: ['Ysabeau Office', 'sans-serif'],
    },
  },
  plugins: [],
};
