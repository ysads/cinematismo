module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2020,
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
    'eol-last': ['error', 'always'],
    'max-len': [
      'error',
      {
        ignorePattern: '@/',
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
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
    'vue/component-tags-order' : [
      'error',
      {
        'order': ['template', 'script', 'style']
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
        multiline: 1,
      },
    ],
    'vue/no-v-html': 'off',
  },

  globals: {},
}
