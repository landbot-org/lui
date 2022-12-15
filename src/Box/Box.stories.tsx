import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from '../shared/theme';
import { BoxProps } from './types';
import { Box } from './Box';

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

const Square = styled(Box)`
  background-color: ${({ theme }) => theme.palette.blue[50]};
  width: 100px;
  height: 100px;
`;

const Template: ComponentStory<typeof Box> = (args: BoxProps) => (
  <ThemeProvider theme={theme}>
    <Square role="figure" {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
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
  children: (
    <>
      <p>row1</p>
      <p>row2</p>
    </>
  ),
  display: 'flex',
  justifyContent: 'space-around',
};
