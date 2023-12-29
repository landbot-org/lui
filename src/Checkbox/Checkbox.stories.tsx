import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React, { useEffect, useState } from 'react';

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
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

const TemplateWithHooks = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(args.checked);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    args.onChange && args.onChange(e);
  };

  return <Checkbox {...args} checked={checked} onChange={_onChange} />;
};

export const Default: Story = {
  args: {
    disabled: false,
    checked: false,
  },
  render: (args) => <TemplateWithHooks {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('checkbox')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('checkbox'));
    await expect(canvas.getByRole('checkbox')).toBeChecked();
    await userEvent.click(canvas.getByRole('checkbox'));
    await expect(canvas.getByRole('checkbox')).not.toBeChecked();
  },
};
