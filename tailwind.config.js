import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontSize: {
      '10xl': '15rem',
      '11xl': '18rem',
    },
    colors: {
      ...colors,
      blue: {
        700: '#4242E0',
      },
      gray: {
        400: '#EBEFF2',
        500: '#959EA6',
        600: '#C8D2DA',
      },
      darkGray: {
        100: '#494B4D',
        200: '#2A2C2D',
      },
    },
  },
  plugins: [],
};
