import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    avatar: 'https://avatars.githubusercontent.com/u/263385',
    name: 'John Doe',
    email: 'john@doe.com',
    status: 'online',
    size: 40,
  },
  argTypes: {
    avatar: {
      control: {
        type: null,
      },
    },
    name: {
      control: {
        type: null,
      },
    },
    email: {
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};
