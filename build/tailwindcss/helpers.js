const keysToOptions = keys => keys.reduce((o, key) => ({ ...o, [key]: key }), {});

module.exports = {
    keysToOptions,
};
