import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Box } from '../Box';
import { Tabs as TabsComponent } from './Tabs';
import { TabsProps } from './types';

export default {
  title: 'Components/Tabs',
  component: TabsComponent,
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
    onChange: (newActiveTab) => newActiveTab,
    size: 'medium',
    showScrollButtons: true,
    showBottomLine: false,
    value: 3,
  },
} as Meta<typeof TabsComponent>;

type Story = StoryObj<typeof TabsComponent>;

const TemplateWithHooks = (args: TabsProps) => {
  const [active, setActive] = useState<number>(3);

  return (
    <Box backgroundColor="neutral.300" py={5} px={5} style={{ width: '400px' }}>
      <TabsComponent {...args} value={active} onChange={(newActive) => setActive(newActive)} />
    </Box>
  );
};

export const Default: Story = {
  render: (args) => <TemplateWithHooks {...args} />,
};
