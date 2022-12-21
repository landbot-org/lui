import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Divider } from './Divider';
import { DividerProps } from './types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../shared/theme';

export default {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    componentSubtitle: 'Displays a Divider',
  },
  args: {
    orientation: 'horizontal',
    size: 'small',
    color: 'neutral.300',
  },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args: DividerProps) => (
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
          <Divider {...args} />
          <p style={{ margin: 'auto' }}>item</p>
          <Divider {...args} />
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
          <Divider {...args} />
          <p style={{ margin: 'auto' }}>item</p>
          <Divider {...args} />
          <p style={{ margin: 'auto' }}>item</p>
        </div>
      )}
    </div>

    <br />

    <div style={{ width: '250px' }}>
      <Divider orientation="horizontal" size="small" />
      <br />
      <Divider orientation="horizontal" size="medium" />
      <br />
      <Divider orientation="horizontal" size="large" />
    </div>

    <br />

    <div style={{ height: '100px', display: 'flex', gap: '30px' }}>
      <Divider orientation="vertical" size="small" />

      <Divider orientation="vertical" size="medium" />

      <Divider orientation="vertical" size="large" />
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
