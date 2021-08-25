module.exports = function (api) {
    api.cache(true);
    const presets = [
        '@babel/react',
        [
            '@babel/env',
            {
                // "modules": false
                modules: 'commonjs'
            }
        ]
    ];
    const plugins = [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-optional-chaining',
        ['import', { libraryName: 'antd', style: 'css' }]
    ];

    return {
        presets,
        plugins
    };
};
