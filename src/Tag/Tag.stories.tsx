import React from 'react';

import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../Icon';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    startAdornment: {
      control: {
        type: null,
      },
    },
    endAdornment: {
      control: {
        type: null,
      },
    },
  },
  args: {
    label: 'Tag Name',
    startAdornment: <Icon icon={<FontAwesomeIcon icon={faCheck} />} />,
    endAdornment: <Icon icon={<FontAwesomeIcon icon={faXmark} />} />,
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {};
