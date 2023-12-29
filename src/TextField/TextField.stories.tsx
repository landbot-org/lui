import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { GearTool } from '../Icon/icons';
import { TextField } from './TextField';
import { TextFieldProps } from './types';

export default {
  title: 'Components/TextField',
  component: TextField,
  args: {},
} as Meta<typeof TextField>;

type Story = StoryObj<typeof TextField>;

const TemplateWithHooks = (args: TextFieldProps) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    args.onChange && args.onChange(e);
  };

  return <TextField {...args} value={value} onChange={_onChange} />;
};

export const Default: Story = {
  render: (args) => <TemplateWithHooks {...args} />,
};

export const Placeholder: Story = {
  args: {
    placeholder: 'Placeholder text',
  },
  render: (args) => <TemplateWithHooks {...args} />,
};

export const Value: Story = {
  args: {
    value: 'Input value',
  },
  render: (args) => <TemplateWithHooks {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Placeholder text',
    value: 'Input value',
  },
  render: (args) => <TemplateWithHooks {...args} />,
};

export const Adornments: Story = {
  args: {
    endAdornment: <Button color="purple.main" variant="text" startIcon={<GearTool />} />,
    placeholder: 'Placeholder text',
    startAdornment: <Icon icon={<FontAwesomeIcon icon={faSearch} />} />,
  },
  render: (args) => <TemplateWithHooks {...args} />,
};

export const Labeled: Story = {
  args: {
    id: 'textfield-id',
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
