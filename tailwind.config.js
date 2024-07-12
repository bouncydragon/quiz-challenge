/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        '3xs': '320px',
        '2xs': '375px',
        xs: '425px',
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '15rem',
        '13xl': '18rem',
      },
      colors: {
        oceanBlue: {
          700: '#4242E0',
        },
        stoneGray: {
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
  },
  plugins: [],
};
