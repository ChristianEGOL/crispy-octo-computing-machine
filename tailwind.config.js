module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['focus', 'hover', 'active'],
      ringWidth: ['hover', 'active', 'focus'],
    },
  },
  plugins: [],
};
