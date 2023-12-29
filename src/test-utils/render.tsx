import { RenderOptions, render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../shared/theme';

export const render = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  function Wrapper({ children }: { children?: React.ReactNode }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }

  return {
    user: userEvent.setup(),
    ...rtlRender(ui, { wrapper: Wrapper, ...options }),
  };
};
