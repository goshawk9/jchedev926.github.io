module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-control-regex': 0,
    'no-console': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
