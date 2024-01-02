import { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  component: Radio,
  tags: ['autodocs'],
  args: {
    checked: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {};
