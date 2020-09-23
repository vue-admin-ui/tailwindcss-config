const variables = require('./variables');
const { theme } = require('./theme');

module.exports = {
  corePlugins: {
    transition: false,
    transitionProperty: false,
    transform: false,
    animation: false,

    container: false,
  },
  theme,
  variants: {},
  plugins: [
    require('tailwind-css-variables')(variables, {}),
  ],
};
