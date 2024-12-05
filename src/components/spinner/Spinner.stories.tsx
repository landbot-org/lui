import { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  args: {
    size: 'M',
    color: 'blue.main',
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
