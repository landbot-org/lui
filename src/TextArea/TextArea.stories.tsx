import { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { TextArea } from './TextArea';
import { TextAreaProps } from './types';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  args: {},
} as Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

const TemplateWithHooks = (args: TextAreaProps) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  const _onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    args.onChange && args.onChange(e);
  };

  return <TextArea {...args} value={value} onChange={_onChange} />;
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
