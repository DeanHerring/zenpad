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
      gridTemplateColumns: {
        '3-1': 'repeat(2, 1fr)',
      },
      backgroundImage: {
        1: "url('https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        2: "url('https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        3: "url('https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
    },
    fontFamily: {
      ysa: ['Ysabeau Office', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
    },
    screens: {
      'md-1100': { max: '1100px' },
      'md-1000': { max: '1000px' },
      'md-750': { max: '750px' },
      'sm-500': { max: '500px' },
    },
  },
  plugins: [],
};
