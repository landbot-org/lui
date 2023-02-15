import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider as DividerComponent } from './Divider';
import { DividerProps } from './types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../shared/theme';

export default {
  title: 'Components/Divider',
  component: DividerComponent,
  parameters: {
    componentSubtitle: 'Displays a Divider',
  },
  args: {
    orientation: 'horizontal',
    size: 'small',
    color: 'neutral.300',
  },
} as ComponentMeta<typeof DividerComponent>;

export const Divider: ComponentStory<typeof DividerComponent> = (args: DividerProps) => (
  <ThemeProvider theme={theme}>
    <div style={{ minHeight: '100px' }}>
      {args.orientation === 'horizontal' ? (
        <div
          style={{
            backgroundColor: 'rgb(247 249 252)',
            height: '100px',
            width: '250px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p style={{ margin: 'auto' }}>item</p>
          <DividerComponent {...args} />
          <p style={{ margin: 'auto' }}>item</p>
          <DividerComponent {...args} />
          <p style={{ margin: 'auto' }}>item</p>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: 'rgb(247 249 252)',
            height: '50px',
            width: '300px',
            display: 'flex',
          }}
        >
          <p style={{ margin: 'auto' }}>item</p>
          <DividerComponent {...args} />
          <p style={{ margin: 'auto' }}>item</p>
          <DividerComponent {...args} />
          <p style={{ margin: 'auto' }}>item</p>
        </div>
      )}
    </div>
  </ThemeProvider>
);
