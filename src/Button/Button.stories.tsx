import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Robot } from '../Icon/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../Icon';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
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
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const ButtonStartIcon: Story = {
  args: {
    startIcon: <Robot />,
  },
};

export const ButtonEndIcon: Story = {
  args: {
    endIcon: <Robot />,
  },
};

export const ButtonBothIcons: Story = {
  args: {
    startIcon: <Robot />,
    endIcon: <Robot />,
  },
};

export const ButtonOnlyIcon: Story = {
  args: {
    children: null,
    startIcon: <Robot />,
  },
};

export const ButtonIconFontAwesome: Story = {
  args: {
    startIcon: <Icon icon={<FontAwesomeIcon icon={faArrowUpFromBracket} />} />,
  },
};

export const ButtonOnlyIconFontAwesome: Story = {
  args: {
    children: null,
    startIcon: <Icon icon={<FontAwesomeIcon icon={faArrowUpFromBracket} />} />,
  },
};

export const ButtonLoading: Story = {
  args: {
    isLoading: true,
  },
};

export const ButtonLink: Story = {
  args: {
    href: '#',
    target: '_blank',
  },
};

export const ButtonFullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const ButtonFullWidthBothIcons: Story = {
  args: {
    color: 'white.main',
    fullWidth: true,
    textAlign: 'left',
    startIcon: <Robot />,
    endIcon: <Icon icon={<FontAwesomeIcon icon={faArrowUpFromBracket} />} />,
  },
};

export const ButtonWithTextEllipsized: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non mollitia deleniti qui, commodi accusantium officiis. Impedit dolorum itaque nemo enim, aspernatur autem consectetur perferendis. Minus odit asperiores illum! Aperiam.',
    startIcon: <Robot />,
    endIcon: <Icon icon={<FontAwesomeIcon icon={faArrowUpFromBracket} />} />,
    fullWidth: true,
    ellipsize: true,
  },
};
