import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import React, { useEffect, useState } from 'react';

import { Radio } from './Radio';
import type { RadioProps } from './types';

export default {
  title: 'Components/Radio',
  component: Radio,
  args: {
    checked: false,
    disabled: false,
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    componentSubtitle: 'Displays a radio input',
  },
} as Meta<typeof Radio>;

type Story = StoryObj<typeof Radio>;

const TemplateWithHooks = (args: RadioProps) => {
  const [checked, setChecked] = useState(args.checked);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    args.onChange && args.onChange(e);
  };

  return <Radio {...args} checked={checked} onChange={_onChange} />;
};

export const Default: Story = {
  render: (args) => <TemplateWithHooks {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('radio')).toBeInTheDocument();
  },
};
