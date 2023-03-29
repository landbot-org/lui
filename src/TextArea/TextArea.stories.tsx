import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { theme } from '../shared/theme';
import { TextArea } from './TextArea';
import { ThemeProvider } from 'styled-components';
import { TextAreaProps } from './types';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  args: {},
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args: TextAreaProps) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  const _onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    args.onChange && args.onChange(e);
  };

  return (
    <ThemeProvider theme={theme}>
      <TextArea {...args} value={value} onChange={_onChange} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Placeholder text',
};

export const Value = Template.bind({});
Value.args = {
  value: 'Input value',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Placeholder text',
  value: 'Input value',
};

export const Labeled = Template.bind({});
Labeled.args = {
  id: 'textfield-id',
  label: 'Label',
  description: 'Description',
  helperText: 'Helper text',
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  description: 'Description',
  helperText: 'Helper text',
  label: 'Label',
};
