module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'no-console': 'off',
    'no-unused-vars': 'off'
  },
  'globals': {
    'require': 'readonly'
  }
};
