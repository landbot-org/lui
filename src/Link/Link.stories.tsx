import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Link as LinkComponent } from './Link';

export default {
  title: 'Components/Link',
  component: LinkComponent,
  args: {
    bold: false,
    containsIcon: false,
    children: 'Text link',
    href: 'https://www.landbot.io',
    target: '_self',
  },
} as Meta<typeof LinkComponent>;

type Story = StoryObj<typeof LinkComponent>;

export const Default: Story = {
  render: (args) => <LinkComponent {...args} />,
};
