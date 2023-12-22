import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  component: Divider,
  tags: ['autodocs'],
  args: {
    orientation: 'horizontal',
    size: 'small',
    color: 'neutral.300',
  },
  decorators: [
    (Story) => (
      <div style={{ height: 50 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {};
