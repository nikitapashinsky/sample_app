const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    "./app/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/javascript/**/*.vue"
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.gray,
      coolgray: colors.coolGray,
      cyan: colors.cyan,
      lightblue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      lime: colors.lime,
      red: colors.red
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          950: '#141417'
        },
      },
      scale: {
        '98': '.98',
      },
    },
  },
  variants: {
    extend: {
      scale: ['active'],
      backgroundColor: ['active'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      textColor: ['active'],
      padding: ['first', 'last'],
      borderRadius: ['first', 'last'],
    },
  },
  plugins: [],
}
