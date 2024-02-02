import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Box } from '../box';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    tabs: [
      {
        label: 'Description',
      },
      {
        label: 'Tab disabled',
        disabled: true,
      },
      {
        label: 'How to install',
      },
      {
        label: 'Accounts',
      },
      {
        label: 'Other tab disabled',
        disabled: true,
      },
      {
        label: 'Logs',
      },
      {
        label: 'Contacts',
      },
      {
        label: 'Campaigns',
      },
    ],
    size: 'medium',
    showBottomLine: false,
    value: 3,
  },
  render: function Render(args) {
    const [active, setActive] = useState<number>(args.value as number);

    return <Tabs {...args} value={active} onChange={(newActive) => setActive(newActive)} />;
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {};

export const DisabledScrollButtons: Story = {
  args: {
    disableScrollButtons: true,
  },
};

export const WithBottomLine: Story = {
  args: {
    showBottomLine: true,
  },
};

export const WithScrollButtonsAndBottomLine: Story = {
  args: {
    showBottomLine: true,
  },
};

export const InSmallContainer: Story = {
  args: {
    value: 3,
    showBottomLine: true,
  },
  decorators: [
    (Story) => (
      <Box backgroundColor="neutral.300" py={5} px={5} style={{ width: 500 }}>
        <Story />
      </Box>
    ),
  ],
};
