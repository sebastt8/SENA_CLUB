import baseConfig from '../../../../eslint.config.mjs';

export default [
    ...baseConfig,
    {
        rules: {
            '@nx/enforce-module-boundaries': 'off',
        },
    },
];
