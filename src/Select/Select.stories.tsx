import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../shared/theme';
import { SelectProps } from './types';
import { Select } from './Select';
import { Icon } from '../Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

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
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: SelectProps) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <ThemeProvider theme={theme}>
      <Select {...args} value={value} onChange={setValue} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

export const NoResults = Template.bind({});
NoResults.args = {
  items: [],
};

export const Labeled = Template.bind({});
Labeled.args = {
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
