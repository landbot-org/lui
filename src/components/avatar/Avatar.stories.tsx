import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import { AVATAR_STATUS } from './Avatar.types';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    status: AVATAR_STATUS.ONLINE,
    showStatus: true,
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const WithoutStatus: Story = {
  args: {
    showStatus: false,
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};
