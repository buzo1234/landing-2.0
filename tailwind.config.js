module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        porabay : '#2d9cdb',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
