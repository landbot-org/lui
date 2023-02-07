import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner } from './Spinner';
import { SpinnerProps } from './types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../shared/theme';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    componentSubtitle: 'Displays a Spinner',
  },
  args: {
    size: 'M',
    color: 'blue.main',
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args: SpinnerProps) => (
  <ThemeProvider theme={theme}>
    <Spinner {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
