import React, { ChangeEvent, useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { ThemeProvider } from 'styled-components';

import { theme } from '../shared/theme';
import { ToggleProps } from './types';
import { Toggle } from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: 'radio', options: ['small', 'medium'], defaultValue: 'medium' },
    onChange: { action: 'onChange' },
  },
  parameters: {
    componentSubtitle: 'Displays a toggle switch',
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args: ToggleProps) => {
  const [checked, setChecked] = useState(args.checked);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    args.onChange && args.onChange(e);
  };

  return (
    <ThemeProvider theme={theme}>
      <Toggle {...args} checked={checked} onChange={_onChange} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // await userEvent.click(canvas.getByRole('checkbox'));
  await expect(canvas.getByRole('checkbox')).toBeInTheDocument();
};
