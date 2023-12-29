import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Icon } from '../Icon';
import { Robot } from '../Icon/icons';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    startIcon: {
      control: {
        type: null,
      },
    },
    endIcon: {
      control: {
        type: null,
      },
    },
  },
  args: {
    color: 'pink.main',
    size: 'medium',
    variant: 'contained',
    disabled: false,
    fullWidth: false,
    isLoading: false,
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args} />,
};

export const ButtonStartIcon: Story = {
  render: (args) => (
    <Button {...args} startIcon={<Robot />}>
      Button
    </Button>
  ),
};

export const ButtonEndIcon: Story = {
  render: (args) => (
    <Button {...args} endIcon={<Robot />}>
      Button
    </Button>
  ),
};

export const ButtonBothIcons: Story = {
  render: (args) => (
    <Button {...args} startIcon={<Robot />} endIcon={<Robot />}>
      Button
    </Button>
  ),
};

export const ButtonOnlyIcon: Story = {
  render: (args) => <Button {...args} startIcon={<Robot />} />,
};

export const ButtonIconFontAwesome: Story = {
  render: (args) => (
    <Button {...args} startIcon={<Icon icon={<FontAwesomeIcon icon={faArrowUpFromBracket} />} />}>
      Button
    </Button>
  ),
};

export const ButtonOnlyIconFontAwesome: Story = {
  render: (args) => <Button {...args} startIcon={<Icon icon={<FontAwesomeIcon icon={faArrowUpFromBracket} />} />} />,
};

export const ButtonLoading: Story = {
  render: (args) => (
    <Button {...args} isLoading={true}>
      Button
    </Button>
  ),
};

export const ButtonLink: Story = {
  args: {
    href: '#',
    target: '_blank',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const ButtonFullWidth: Story = {
  args: {
    fullWidth: true,
    size: 'large',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const ButtonFullWidthBothIcons: Story = {
  args: {
    color: 'white.main',
    fullWidth: true,
    textAlign: 'left',
    size: 'large',
    startIcon: <Robot />,
    endIcon: <Icon icon={<FontAwesomeIcon icon={faArrowUpFromBracket} />} />,
  },
  render: (args) => <Button {...args}>Select a date range</Button>,
};

export const ButtonWithTextEllipsized: Story = {
  args: {
    startIcon: <Robot />,
    endIcon: <Icon icon={<FontAwesomeIcon icon={faArrowUpFromBracket} />} />,
    fullWidth: true,
    ellipsize: true,
  },
  render: (args) => <Button {...args}>Button with large content that needs ellipsis</Button>,
};
