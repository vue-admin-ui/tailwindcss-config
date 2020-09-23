module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')(require('./index.js')),
  ],
};
