module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2020,
    parser: 'babel-eslint',
  },

  env: {
    browser: true,
    node: true,
  },

  extends: [
    '@vue/standard',
    'plugin:vue/vue3-recommended',
    'plugin:vue/essential',
    'standard',
  ],

  // required to lint *.vue files
  plugins: ['vue'],

  // add your custom rules here
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'max-len': [
      'error',
      {
        ignorePattern: '@/',
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: [
      'error',
      'never',
    ],
    'space-before-function-paren': 'error',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'vue/attributes-order': 'error',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
        multiline: 1,
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },

  globals: {},
}
