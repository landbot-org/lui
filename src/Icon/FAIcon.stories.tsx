import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../shared/theme';
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

Default.play = async ({ canvasElement }) => {
  await expect(canvasElement.querySelector('[data-icon=robot]')).toBeInTheDocument();
};
