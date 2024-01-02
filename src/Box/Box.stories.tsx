import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { Box } from './Box';

const meta: Meta<typeof Box> = {
  component: Box,
  tags: ['autodocs'],
  args: {
    backgroundColor: 'blue.50',
    border: 1,
    borderColor: 'neutral.300',
    display: 'block',
    elevation: 1,
  },
  argTypes: {
    as: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

const Square = styled(Box)`
  width: 100px;
  height: 100px;
`;
Square.displayName = 'Box';

export const Default: Story = {
  render: (args) => <Square {...args} />,
};

export const Flexbox: Story = {
  args: {
    alignItems: 'center',
    children: (
      <>
        <p>col1</p>
        <p>col2</p>
      </>
    ),
    display: 'flex',
    elevation: 1,
    hoverElevation: 4,
    justifyContent: 'space-around',
  },
  render: (args) => <Square {...args} />,
};
