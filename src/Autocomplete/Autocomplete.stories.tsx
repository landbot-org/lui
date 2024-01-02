import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from './Autocomplete';
import { Icon } from '../Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Autocomplete> = {
  component: Autocomplete,
  tags: ['autodocs'],
  args: {
    placeholder: 'Write something',
    items: [
      { id: '1', value: 'Option 1' },
      { id: '2', value: 'Option 2' },
      { id: '3', value: 'Option 3' },
    ],
    startAdornment: <Icon icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} color="blue.main" />,
    endAdornment: <Icon icon={<FontAwesomeIcon icon={faAngleDown} />} color="blue.main" />,
  },
  argTypes: {
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
    onChange: {
      control: {
        type: null,
      },
    },
    onSelectItem: {
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {};

export const NoResults: Story = {
  args: {
    items: [],
  },
};
