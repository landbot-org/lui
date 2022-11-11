import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { theme } from '../shared/theme';
import { Checkbox } from './Checkbox';
import { CheckboxProps } from './types';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
  parameters: {
    componentSubtitle: 'Displays a checkbox',
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(args.checked);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    args.onChange && args.onChange(e);
  };

  return (
    <ThemeProvider theme={theme}>
      <Checkbox {...args} checked={checked} onChange={_onChange} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  checked: false,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await expect(canvas.getByRole('checkbox')).toBeInTheDocument();
  await userEvent.click(canvas.getByRole('checkbox'));
  await expect(canvas.getByRole('checkbox')).toBeChecked();
  await userEvent.click(canvas.getByRole('checkbox'));
  await expect(canvas.getByRole('checkbox')).not.toBeChecked();
};
