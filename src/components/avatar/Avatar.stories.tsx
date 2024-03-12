import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import { AVATAR_STATUS } from './Avatar.types';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    showStatus: true,
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const WithoutStatus: Story = {
  args: {
    showStatus: false,
  },
};

export const Online: Story = {
  args: {
    status: AVATAR_STATUS.ONLINE,
  },
};

export const Offline: Story = {
  args: {
    status: AVATAR_STATUS.OFFLINE,
  },
};

export const Busy: Story = {
  args: {
    status: AVATAR_STATUS.BUSY,
  },
};

export const Away: Story = {
  args: {
    status: AVATAR_STATUS.AWAY,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const WithCustomImage: Story = {
  args: {
    avatar: 'https://avatars.githubusercontent.com/u/115721865',
  },
};
