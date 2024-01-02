import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/shared/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
