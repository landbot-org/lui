import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { ThemeProvider } from 'styled-components';

import { theme } from '../shared/theme';
import { BoxProps } from './types';
import Box from './Box';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    as: { control: 'text' },
  },
  parameters: {
    componentSubtitle: 'Add spacing everywhere you need',
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args: BoxProps) => (
  <ThemeProvider theme={theme}>
    <Box {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Test',
  display: 'block',
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText('Test'));
  await expect(canvas.getByText('Test')).toBeInTheDocument();
};

export const Flexbox = Template.bind({});
Flexbox.args = {
  children: (
    <>
      <p>row1</p>
      <p>row2</p>
    </>
  ),
  display: 'flex',
  justifyContent: 'space-around',
};
