import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import React, { ChangeEvent, useEffect, useState } from 'react';

import { Toggle } from './Toggle';
import { ToggleProps } from './types';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: 'radio', options: ['small', 'medium'] },
    onChange: { action: 'onChange' },
  },
  args: {
    size: 'medium',
  },
  parameters: {
    componentSubtitle: 'Displays a toggle switch',
  },
} as Meta<typeof Toggle>;

type Story = StoryObj<typeof Toggle>;

const TemplateWithHooks = (args: ToggleProps) => {
  const [checked, setChecked] = useState(args.checked);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    args.onChange && args.onChange(e);
  };

  return <Toggle {...args} checked={checked} onChange={_onChange} />;
};

export const Default: Story = {
  render: (args) => <TemplateWithHooks {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // await userEvent.click(canvas.getByRole('checkbox'));
    await expect(canvas.getByRole('checkbox')).toBeInTheDocument();
  },
};
