/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        white: {
          1: '#FFF',
          2: '#F4F4F4',
        },
        black: {
          1: '#222',
          2: '#000',
        },
        gray: {
          1: '#797979',
          2: '#979797',
          3: '#D2D2D2',
        },
        yellow: {
          1: '#EFCD75',
        },
      },
    },
    fontFamily: {
      ysa: ['Ysabeau Office', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
    },
  },
  plugins: [],
};
