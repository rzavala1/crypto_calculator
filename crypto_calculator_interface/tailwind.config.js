const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#819869',
        secondary: '#2F3559',
        text:"#E6D8CB",
        pantanqu:"#B620E0",
        resalt:"##EAC6F4"

      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  content: ["./src/**/*.jsx"],
  variants: {},
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ]
}
