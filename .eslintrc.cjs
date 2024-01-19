module.exports = {
  root: true,
  extends: ['@landbot/typescript-react', 'plugin:storybook/recommended'],
  overrides: [
    {
      files: ['src/**/*.stories.ts', 'src/**/*.stories.tsx', 'src/**/*.stories.js', 'src/**/*.stories.jsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
};
