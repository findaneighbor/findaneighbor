const { theme: { colors } } = require('tailwindcss/defaultConfig')

module.exports = {
  purge: {
    enable: true,
    content: ['./src/index.html', './src/**/*.js'],
    options: {
      whitelist: ['google_translate_element', 'goog-te-gadget', 'goog-te-combo']
    }
  },
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.teal
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
  variants: {},
  plugins: [],
}
