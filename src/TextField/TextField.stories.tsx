import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { theme } from '../shared/theme';
import { TextField } from './TextField';
import { ThemeProvider } from 'styled-components';
import { TextFieldProps } from './types';
import { Button } from '../Button';
import { GearTool } from '../Icon/icons';
import { Icon } from '../Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/TextField',
  component: TextField,
  args: {},
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args: TextFieldProps) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    args.onChange && args.onChange(e);
  };

  return (
    <ThemeProvider theme={theme}>
      <TextField {...args} value={value} onChange={_onChange} />
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

export const Adornments = Template.bind({});
Adornments.args = {
  endAdornment: <Button color="purple.main" variant="text" startIcon={<GearTool />} />,
  placeholder: 'Placeholder text',
  startAdornment: <Icon icon={<FontAwesomeIcon icon={faSearch} />} />,
};

export const Labeled = Template.bind({});
Labeled.args = {
  id: 'textfield-id',
  label: 'Label',
  description: 'Description',
  helperText: 'Helper text',
};
