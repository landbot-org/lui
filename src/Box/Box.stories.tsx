import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React from 'react';
import styled from 'styled-components';

import { Box } from './Box';

export default {
  title: 'Components/Box',
  component: Box,
  args: {
    backgroundColor: 'blue.50',
    border: 1,
    borderColor: 'neutral.300',
    display: 'block',
    elevation: 1,
  },
  argTypes: {
    as: { control: 'text' },
  },
  parameters: {
    componentSubtitle: 'Add spacing everywhere you need',
  },
} as Meta<typeof Box>;

const Square = styled(Box)`
  width: 100px;
  height: 100px;
`;

type Story = StoryObj<typeof Box>;

export const Figure: Story = {
  render: (args) => <Square role="figure" {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('figure'));
    await expect(canvas.getByRole('figure')).toBeInTheDocument();
  },
};

export const Flexbox: Story = {
  args: {
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
  },
  render: (args) => <Box role="figure" {...args} />,
};
