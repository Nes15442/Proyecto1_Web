module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: [2, 'never'],
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'linebreak-style': 0,
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
    }],
    'import/no-extraneous-dependencies': [0, {
      devDependencies: ['**/*.prop-types.*'],
      peerDependencies: true,
    }],
    'prefer-template': 0,
    'arrow-parens': [0, 'as-needed'],
    'no-console': [1, {
      allow: ['warn', 'error'],
    }],
    'consistent-return': 0,
    'jsx-a11y/media-has-caption': [0, {
      'video': ['Video'],
      'track': ['Track'],
    }],
    "import/extensions": 0,
  },
}
