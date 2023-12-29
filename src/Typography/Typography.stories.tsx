import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Typography } from './Typography';
import { TypographyProps } from './types';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    as: { control: 'text' },
  },
} as Meta<typeof Typography>;

type Story = StoryObj<typeof Typography>;

const Template = (args: TypographyProps) => {
  return <Typography {...args}>The Most Powerful No-Code Chatbot Builder</Typography>;
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
};

export const H1: Story = {
  args: {
    variant: 'h1',
  },
  render: (args) => <Template {...args} />,
};

export const H2: Story = {
  args: {
    variant: 'h2',
  },
  render: (args) => <Template {...args} />,
};

export const H3: Story = {
  args: {
    variant: 'h3',
  },
  render: (args) => <Template {...args} />,
};

export const H4: Story = {
  args: {
    variant: 'h4',
  },
  render: (args) => <Template {...args} />,
};

export const H5: Story = {
  args: {
    variant: 'h5',
  },
  render: (args) => <Template {...args} />,
};

export const H6: Story = {
  args: {
    variant: 'h6',
  },
  render: (args) => <Template {...args} />,
};

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
  },
  render: (args) => <Template {...args} />,
};

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
  },
  render: (args) => <Template {...args} />,
};

export const Text16: Story = {
  args: {
    variant: 'text16',
  },
  render: (args) => <Template {...args} />,
};

export const Text14: Story = {
  args: {
    variant: 'text14',
  },
  render: (args) => <Template {...args} />,
};

export const Text12: Story = {
  args: {
    variant: 'text12',
  },
  render: (args) => <Template {...args} />,
};

export const Text10: Story = {
  args: {
    variant: 'text10',
  },
  render: (args) => <Template {...args} />,
};

export const CustomColor: Story = {
  args: {
    color: 'info.main',
    variant: 'h1',
  },
  render: (args) => <Template {...args} />,
};

export const Ellipsize: Story = {
  args: {
    ellipsize: true,
  },
  render: (args) => (
    <div style={{ maxWidth: '150px' }}>
      <Template {...args} />
    </div>
  ),
};
