module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    // Enforce consistent spacing
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],

    // Prevent common errors
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-debugger': 'error',

    // Enforce modern JavaScript
    'prefer-const': 'error',
    'no-var': 'error',
    'arrow-spacing': 'error',
    'object-shorthand': 'error',

    // Spacing and formatting
    'space-before-function-paren': ['error', 'never'],
    'keyword-spacing': 'error',
    'space-infix-ops': 'error',
    'comma-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],

    // Best practices
    'eqeqeq': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'eol-last': 'error'
  },
  globals: {
    // Firebase globals
    'firebase': 'readonly',
    'process': 'readonly'
  }
};
