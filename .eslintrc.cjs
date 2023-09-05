/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  overrides: [
    {
      files: [
        '**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}',
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
      ],
      'extends': [
        'plugin:cypress/recommended',
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    semi: [ 1, 'always' ],
    quotes: [ 1, 'single' ],
    indent: [ 1, 2 ],
    'comma-dangle': [ 2, 'always-multiline' ],
    'object-curly-spacing': [ 1, 'always' ],
    'array-bracket-spacing': [ 1, 'always' ],
  },
};
