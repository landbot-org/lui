import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  // Required
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // Optional
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-themes',
    '@storybook/themes',
  ],
  typescript: {
    check: true,
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
    },
  },
  docs: {
    autodocs: false,
  },
  features: {
    storyStoreV7: !global.navigator?.userAgent?.match?.('jsdom'),
    buildStoriesJson: true,
    warnOnLegacyHierarchySeparator: false,
  },
};

export default config;
