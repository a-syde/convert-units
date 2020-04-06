module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'standard-trailing-commas',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'ignore',
      'asyncArrow': 'always',
    }],
    'space-before-blocks': ['error', {
      'functions': 'off',
    }],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'ignore',
    }],
    'keyword-spacing': ['error', {
      'overrides': {
        'if': {
          'after': false,
        },
      },
    }],
  },
}
