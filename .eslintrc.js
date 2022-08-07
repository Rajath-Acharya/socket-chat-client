module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
  ],
  plugins: [
  '@typescript-eslint'
  ],
  extends: [
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  "plugin:import/recommended"
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'class-methods-use-this': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'import/no-cycle': 'off',
  },
}