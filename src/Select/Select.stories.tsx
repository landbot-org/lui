import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Icon } from '../Icon';
import { Select } from './Select';
import { SelectProps } from './types';

export default {
  title: 'Components/Select',
  component: Select,
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
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

const TemplateWithHooks = (args: SelectProps) => {
  const [value, setValue] = useState(args.value || '');

  return <Select {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: (args) => <TemplateWithHooks {...args} />,
};

export const NoResults: Story = {
  args: {
    items: [],
    noResults: 'You must fetch your data first!',
  },
  render: (args) => <TemplateWithHooks {...args} />,
};

export const Labeled: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    helperText: 'Helper text',
  },
  render: (args) => <TemplateWithHooks {...args} />,
};

export const Error: Story = {
  args: {
    error: true,
    description: 'Description',
    helperText: 'Helper text',
    label: 'Label',
  },
  render: (args) => <TemplateWithHooks {...args} />,
};
