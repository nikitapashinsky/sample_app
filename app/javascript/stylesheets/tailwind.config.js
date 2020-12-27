const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    "./app/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/javascript/**/*.vue"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.coolGray,
        cyan: colors.cyan,
        lightblue: colors.lightBlue,
      },
    },
  },
  variants: {
    extend: {
      scale: ['active'],
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [],
}
