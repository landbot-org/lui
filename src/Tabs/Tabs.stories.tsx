import React from 'react';
import { theme } from '../shared/theme';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

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
      <div style={{ width: '400px', backgroundColor: '#F0F5FF', padding: '64px 320px' }}>
        <TabsComponent {...args} />
      </div>
    </ThemeProvider>
  );
};
