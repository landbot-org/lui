import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { Icon } from '../Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ['autodocs'],
  args: {
    placeholder: 'Choose an option',
    items: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
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
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const NoResults: Story = {
  args: {
    items: [],
    noResults: 'You must fetch your data first!',
  },
};

export const Labeled: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    helperText: 'Helper text',
  },
};

export const Error: Story = {
  args: {
    error: true,
    description: 'Description',
    helperText: 'Helper text',
    label: 'Label',
  },
};
