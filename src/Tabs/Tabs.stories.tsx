import React from 'react';
import { theme } from '../shared/theme';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { Tabs as TabsComponent } from './Tabs';
import { TabsProps } from './types';
import { Box } from '../Box';

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
} as ComponentMeta<typeof TabsComponent>;

export const Tabs: ComponentStory<typeof TabsComponent> = (args: TabsProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box backgroundColor="neutral.300" py={5} px={5} style={{ width: '400px' }}>
        <TabsComponent {...args} />
      </Box>
    </ThemeProvider>
  );
};
