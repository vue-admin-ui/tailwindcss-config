const defaultVarsModules = {
    screens: '',

    colors: 'color',
    fontFamily: 'font',
    fontSize: 'text',
    fontWeight: 'font',
    lineHeight: 'leading',
    letterSpacing: 'tracking',
    backgroundSize: 'bg',
    borderWidth: 'border',
    borderRadius: 'rounded',
    width: 'w',
    height: 'h',
    minWidth: 'min-w',
    minHeight: 'min-h',
    maxWidth: 'max-w',
    maxHeight: 'max-h',
    padding: 'p',
    margin: 'm',
    boxShadow: 'shadows',
    zIndex: 'z',
    opacity: 'opacity',
};

const disabledVarsModules = Object.keys(defaultVarsModules)
    .reduce((o, item) => ({ ...o, [item]: false }), {});

const variables = {
    ...disabledVarsModules,
    colors: 'color',
    borderRadius: 'rounded',
    fontFamily: 'font',
    fontSize: 'text',
    transitionDuration: 'transition-duration',
    transitionProperty: 'transition-property',
    letterSpacing: 'tracking',
};

module.exports = variables;
