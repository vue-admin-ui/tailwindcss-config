const theme = require('./theme');

module.exports = {
  corePlugins: {
    transition: false,
    transitionProperty: false,
    transform: false,
    animation: false,

    container: false,
  },
  theme: {
    ...theme,
    extend: {},
  },
  variants: {
    position: ['important'],
  },
  plugins: [
    require('tailwindcss-important')(),
  ],
};
