const variables = require('./variables');

const theme = {
    colors: {
        white: '#ffffff',

        'background-darker': '#CFDBEB',
        'background-dark': '#E1E9F3',
        background: '#F3F6FA',

        'side-menu': '#2E384D', // DEPR!
        'side-menu-item': '#3D4C66', // DEPR!

        'primary-text': '#181C29', // 24,28,4
        'primary-text-alpha-10': 'rgba( 24,28,4,0.1)', // 24,28,4

        'plain-text': '#616266',

        borders: '#DADDE5',
        'borders-alt': '#DFE1E6',

        'accent-text': '#214ECC', // = accent-darker
        'accent-text-alpha-10': 'rgba(33,78,204,0.1)',

        'accent-darker': '#214ECC', // 33,78,204
        'accent-dark': '#416FDE',
        accent: '#6090F0',
        'accent-light': '#CCE0FF', // ~ 22% lighten

        'danger-darker': '#A22020',
        'danger-dark': '#B72525',
        danger: '#CC2929',
        'danger-light': '#F5D4D4', // 42% lighten
        'danger-alpha-10': 'rgba(204,41,41,0.1)',

        'success-darker': '#1E844A',
        'success-dark': '#229955',
        success: '#27AE61',
        'success-light': '#D4EFDF',

        'warning-darker': '#cbae16',
        'warning-dark': '#e2c219',
        warning: '#e8ca2c',
        'warning-light': '#faf2cd', // 35% lighten

        icons: '#AAADB3',
    },
    fontFamily: {
        roboto: 'Roboto, sans-serif',
        yandex: '"YS Text", sans-serif',
    },
    fontSize: {
        body: '13px',
        menu: '14px',
        h1: '28px',
        h2: '24px',
        h3: '20px',
        h4: '16px',
        h5: '14px',
        huge: '56px',
    },
    letterSpacing: {
        normal: 0,
        wide: '0.025em',
        wider: '0.05em',
    },
    borderRadius: {
        'form-item': '8px',
        layout: '12px',
    },
    transitionDuration: {
        default: '250ms',
    },
    transitionProperty: {
        'form-item': [
            'box-shadow',
            'color',
            'border-color',
            'background-color',
            'opacity',
        ],
    },
};

const themeVars = Object.keys(theme).reduce((o, key) => {
    let prefix = variables[key] || '';
    o[key] = Object.keys(theme[key]).reduce((o, item) => {
        o[item] = `var(--${prefix}${item !== 'default' && prefix ? `-${item}` : ''})`;
        return o;
    }, {});
    return o;
}, {});

module.exports = {
    theme,
    themeVars,
};
