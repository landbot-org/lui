import { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  args: {
    children: 'Text link',
    href: '#',
    target: '_self',
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {};
