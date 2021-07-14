const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      display: ['Quattrocento Sans', 'sans-serif'],
      body: ['Work Sans', 'sans-serif']
    },
    colors:{
      primary: colors.indigo,
      secondary: colors.sky
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}