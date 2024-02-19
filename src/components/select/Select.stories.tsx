import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../icon';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
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

export const HasError: Story = {
  args: {
    error: true,
    description: 'Description',
    helperText: 'Helper text',
    label: 'Label',
  },
};

export const Disabled: Story = {
  args: {
    description: 'Description',
    helperText: 'Helper text',
    label: 'Label',
    disabled: true,
  },
};
