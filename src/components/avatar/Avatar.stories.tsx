import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import { AVATAR_STATUS } from './Avatar.types';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    name: 'John Doe',
    email: 'john@doe.com',
    status: AVATAR_STATUS.ONLINE,
    size: 40,
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};
