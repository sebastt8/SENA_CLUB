import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: ['element', 'attribute'],
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: ['element', 'attribute'],
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    rules: {
      "@angular-eslint/template/label-has-associated-control": "off",
    }
  },
];
