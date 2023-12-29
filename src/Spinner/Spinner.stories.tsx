import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Spinner as SpinnerComponent } from './Spinner';

export default {
  title: 'Components/Spinner',
  component: SpinnerComponent,
  parameters: {
    componentSubtitle: 'Displays a Spinner',
  },
  args: {
    size: 'M',
    color: 'blue.main',
  },
} as Meta<typeof SpinnerComponent>;

type Story = StoryObj<typeof SpinnerComponent>;

export const Default: Story = {
  render: (args) => <SpinnerComponent {...args} />,
};
