import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { theme } from '../shared/theme';
import { faRobot } from '@fortawesome/pro-solid-svg-icons';
import { FAIcon } from './FAIcon';
import { FAIconProps } from './types';

export default {
  title: 'Components/Icon/FAIcon',
  component: FAIcon,
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      defaultValue: 'blue.main',
    },
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
    componentSubtitle: 'Displays a fontawesome icon',
  },
} as ComponentMeta<typeof FAIcon>;

const TemplateFAIcon: ComponentStory<typeof FAIcon> = (args: FAIconProps) => (
  <ThemeProvider theme={theme}>
    <FAIcon icon={faRobot} size={args.size} color={args.color} />
  </ThemeProvider>
);

export const Default = TemplateFAIcon.bind({});
Default.args = {};

// Default.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   await expect(canvas.getByRole('checkbox')).toBeInTheDocument();
//   await userEvent.click(canvas.getByRole('checkbox'));
//   await expect(canvas.getByRole('checkbox')).toBeChecked();
//   await userEvent.click(canvas.getByRole('checkbox'));
//   await expect(canvas.getByRole('checkbox')).not.toBeChecked();
// };
