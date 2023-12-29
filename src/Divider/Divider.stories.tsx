import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Divider as DividerComponent } from './Divider';

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
} as Meta<typeof DividerComponent>;

type Story = StoryObj<typeof DividerComponent>;

export const Default: Story = {
  render: (args) => (
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
  ),
};
