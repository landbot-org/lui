import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { theme } from '../src/shared/theme';

/* TODO: replace with your own global styles, or remove */
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: theme,
    },
    defaultTheme: 'default',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];
