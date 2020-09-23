const { space, margin, padding, inset } = require('./space');
const { themeVars } = require('../tailwindcss-variables/theme');
const {
  colors,
  fontFamily,
  fontSize,
  borderRadius,
  transitionDuration,
  transitionProperty,
  letterSpacing,
} = themeVars;

const theme = {
  colors: {
    ...colors,
    transparent: 'transparent',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  fontFamily,
  fontSize: {
    ...fontSize,
    0: '0',
    '12px': '12px',
    '14px': '14px',
    '16px': '16px',
  },
  letterSpacing,
  borderRadius,
  transitionDuration: {
    ...transitionDuration,
    0: '0ms',
  },
  transitionProperty: {
    ...transitionProperty,
    none: 'none',
    all: 'all',
    color: 'color',
    'box-shadow': 'box-shadow',
  },
  transitionDelay: {},
  transitionTimingFunction: {},
  willChange: {},
  zIndex: {
    '-1': '-1',
    0: '0',
    1: '1',
    2: '2',
  },
  height: {
    0: '0',
    full: '100%',
    screen: '100vh',
  },
  minHeight: {
    screen: '100vh',
  },
  maxHeight: {
    full: '100%',
  },
  width: {
    full: '100%',
  },
  space,
  margin,
  padding,
  inset,
};

module.exports = theme;
