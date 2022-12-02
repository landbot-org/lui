import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { theme } from '../shared/theme';
import { Icon } from './Icon';
import { calendly } from './icons';
import { IconProps } from './types';

export default {
  title: 'Components/Icon/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: {
        type: null,
      },
    },
    size: {
      control: {
        type: 'select',
      },
      defaultValue: '1x',
    },
  },
  parameters: {
    componentSubtitle: 'Displays a landbot icon',
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args: IconProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Icon icon={calendly} size={args.size} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};

// Default.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   await expect(canvas.getByRole('checkbox')).toBeInTheDocument();
//   await userEvent.click(canvas.getByRole('checkbox'));
//   await expect(canvas.getByRole('checkbox')).toBeChecked();
//   await userEvent.click(canvas.getByRole('checkbox'));
//   await expect(canvas.getByRole('checkbox')).not.toBeChecked();
// };
