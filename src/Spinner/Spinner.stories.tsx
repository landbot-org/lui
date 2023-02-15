import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner as SpinnerComponent } from './Spinner';
import { SpinnerProps } from './types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../shared/theme';

export default {
  title: 'Components/Spinner',
  component: SpinnerComponent,
  parameters: {
    componentSubtitle: 'Displays a Spinner',
  },
  args: {
    size: 'M',
    color: 'blue.main',
  },
} as ComponentMeta<typeof SpinnerComponent>;

export const Spinner: ComponentStory<typeof SpinnerComponent> = (args: SpinnerProps) => (
  <ThemeProvider theme={theme}>
    <SpinnerComponent {...args} />
  </ThemeProvider>
);
