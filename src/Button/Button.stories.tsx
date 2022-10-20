import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Button, { ButtonPropTypes } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    componentSubtitle:
      'Displays an awesome button',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonPropTypes) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

Primary.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(args.onClick).toHaveBeenCalled();
};
