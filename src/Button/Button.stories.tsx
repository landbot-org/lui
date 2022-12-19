import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { theme } from '../shared/theme';
import { ThemeProvider } from 'styled-components';
import { ButtonProps } from './types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  args: {
    children: 'Button',
    color: 'pink.main',
    size: 'medium',
    variant: 'contained',
    disabled: false,
    fullWidth: false,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
