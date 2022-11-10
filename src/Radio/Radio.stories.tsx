import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { theme } from '../shared/theme';
import { Radio } from './Radio';
import type { RadioProps } from './types';

export default {
  title: 'components/Radio',
  component: Radio,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    componentSubtitle: 'Displays a radio input',
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args: RadioProps) => {
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
      <Radio {...args} checked={checked} onChange={_onChange} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await expect(canvas.getByRole('radio')).toBeInTheDocument();
};
