module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  testMatch: ['**/src/**/*.test.+(ts|tsx|js|jsx)'],
  collectCoverageFrom: [
    '**/*.{ts|tsx|js|jsx}',
    '!**/*.d.{js,jsx,ts,tsx}',
    '!**/*.stories.{js,jsx,ts,tsx}',
    '!**/test-utils/**',
  ],
};
