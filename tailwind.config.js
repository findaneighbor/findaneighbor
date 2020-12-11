const { theme: { colors } } = require('tailwindcss/defaultConfig')

module.exports = {
  purge: {
    enable: process.env.MODE !== 'development',
    content: ['./src/index.html', './src/**/*.js'],
    options: {
      safelist: ['google_translate_element', 'goog-te-gadget', 'goog-te-combo']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: {
          ...{
            100: '#e6fffa',
            200: '#b2f5ea',
            300: '#81e6d9',
            400: '#4fd1c5',
            500: '#38b2ac',
            600: '#319795',
            700: '#2c7a7b',
            800: '#285e61',
            900: '#234e52',
          },
          150: '#dbfff9',
          200: '#d7fbf4'
        }
      },
      maxHeight: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem'
      },
      minHeight: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
