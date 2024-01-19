import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  args: {
    children: 'The Most Powerful No-Code Chatbot Builder',
  },
  argTypes: {
    as: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {};

export const H1: Story = {
  args: {
    variant: 'h1',
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
  },
};

export const H3: Story = {
  args: {
    variant: 'h3',
  },
};

export const H4: Story = {
  args: {
    variant: 'h4',
  },
};

export const H5: Story = {
  args: {
    variant: 'h5',
  },
};

export const H6: Story = {
  args: {
    variant: 'h6',
  },
};

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
  },
};

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
  },
};

export const Text16: Story = {
  args: {
    variant: 'text16',
  },
};

export const Text14: Story = {
  args: {
    variant: 'text14',
  },
};

export const Text12: Story = {
  args: {
    variant: 'text12',
  },
};

export const Text10: Story = {
  args: {
    variant: 'text10',
  },
};

export const CustomColor: Story = {
  args: {
    color: 'info.main',
    variant: 'h1',
  },
};

export const Ellipsize: Story = {
  args: {
    ellipsize: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 150 }}>
        <Story />
      </div>
    ),
  ],
};
