import React, { ReactElement, ReactNode } from 'react';

import { RenderOptions, render as rtlRender } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';

import { theme } from '../shared/theme';

export const render = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  function Wrapper({ children }: { children?: ReactNode }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }

  return {
    user: userEvent.setup(),
    ...rtlRender(ui, { wrapper: Wrapper, ...options }),
  };
};
