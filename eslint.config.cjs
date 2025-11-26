const landbotConfig = require('@landbot/eslint-config-typescript-react');
const storybook = require('eslint-plugin-storybook');

module.exports = [
  ...landbotConfig,
  // Add your custom rules here
  ...storybook.configs['flat/recommended'],
];
