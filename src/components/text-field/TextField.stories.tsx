import React, { ChangeEvent, useEffect, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button';
import { Icon } from '../icon';
import { GearTool } from '../icon/icons';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  render: function Render(args) {
    const [value, setValue] = useState(args.value || '');

    useEffect(() => {
      setValue(args.value || '');
    }, [args.value]);

    const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      args.onChange?.(e);
    };

    return <TextField {...args} value={value} onChange={_onChange} />;
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: 'Placeholder text',
  },
};

export const Value: Story = {
  args: {
    value: 'Input value',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Placeholder text',
    value: 'Input value',
  },
};

export const Adornments: Story = {
  args: {
    endAdornment: <Button color="purple.main" variant="text" startIcon={<GearTool />} />,
    placeholder: 'Placeholder text',
    startAdornment: <Icon icon={<FontAwesomeIcon icon={faSearch} />} />,
  },
};

export const Labeled: Story = {
  args: {
    id: 'textfield-id',
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
