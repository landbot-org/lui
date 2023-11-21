import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { ThemeProvider } from 'styled-components';

import { theme } from '../shared/theme';
import { BoxProps } from './types';
import { Box } from './Box';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    as: { control: 'text' },
    bottom: { control: 'number' },
    height: { control: 'number' },
    left: { control: 'number' },
    maxHeight: { control: 'number' },
    maxWidth: { control: 'number' },
    minHeight: { control: 'number' },
    minWidth: { control: 'number' },
    right: { control: 'number' },
    top: { control: 'number' },
    width: { control: 'number' },
  },
  parameters: {
    componentSubtitle: 'Add spacing everywhere you need',
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = ({ width = 100, height = 100, ...args }: BoxProps) => (
  <ThemeProvider theme={theme}>
    <Box role="figure" width={width} height={height} {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'blue.50',
  border: 1,
  borderColor: 'neutral.300',
  display: 'block',
  elevation: 1,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('figure'));
  await expect(canvas.getByRole('figure')).toBeInTheDocument();
};

export const Flexbox = Template.bind({});
Flexbox.args = {
  alignItems: 'center',
  backgroundColor: 'blue.50',
  border: 1,
  borderColor: 'neutral.300',
  children: (
    <>
      <p>row1</p>
      <p>row2</p>
    </>
  ),
  display: 'flex',
  elevation: 1,
  hoverElevation: 4,
  justifyContent: 'space-around',
};
