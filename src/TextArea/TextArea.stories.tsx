import React, { useEffect, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  tags: ['autodocs'],
  args: {
    value: '',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value || '');

    useEffect(() => {
      setValue(args.value || '');
    }, [args.value]);

    const _onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
      args.onChange && args.onChange(e);
    };

    return <TextArea {...args} value={value} onChange={_onChange} />;
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

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
