import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Box } from '../Boxz';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ['autodocs'],
  args: {
    tabs: [
      {
        label: 'Tab1',
      },
      {
        label: 'Tab2',
        disabled: true,
      },
      {
        label: 'Tab3',
      },
      {
        label: 'Tab4',
      },
      {
        label: 'Tab5',
        disabled: true,
      },
      {
        label: 'Tab6',
      },
      {
        label: 'Tab7',
      },
      {
        label: 'Tab8',
      },
    ],
    size: 'medium',
    showScrollButtons: true,
    showBottomLine: false,
    value: 3,
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    value: 3,
  },
  decorators: [
    (Story) => (
      <Box backgroundColor="neutral.300" py={5} px={5} style={{ width: 400 }}>
        <Story />
      </Box>
    ),
  ],
  render: function Render(args) {
    const [active, setActive] = useState<number>(args.value as number);

    return <Tabs {...args} value={active} onChange={(newActive) => setActive(newActive)} />;
  },
};
