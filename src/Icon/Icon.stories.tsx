import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ComponentMeta } from '@storybook/react';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../shared/theme';
import { Icon } from './Icon';
import * as icons from './icons';
import { IconProps } from './types';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default {
  title: 'Components/Icon/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      options: Object.keys(icons),
    },
    size: {
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    componentSubtitle: 'Displays a landbot icon',
  },
} as ComponentMeta<typeof Icon>;

const Template = (args: { size: IconProps['size']; icon: string }) => {
  return (
    <ThemeProvider theme={theme}>
      <Icon icon={icons[args.icon as keyof typeof icons]} size={args.size} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

const TemplateFontAwesome = (args: { size: IconProps['size']; icon: string }) => {
  return (
    <ThemeProvider theme={theme}>
      <Icon icon={<FontAwesomeIcon icon={faRobot} />} size={args.size} />
    </ThemeProvider>
  );
};

export const DefaultFontAwesome = TemplateFontAwesome.bind({});

const AllIcons = ({ size }: IconProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {Object.keys(icons).map((icon) => (
          <Box key={icon} display="flex" flexDirection="column" alignItems="center" m={4} title={icon}>
            <Typography>{icon}</Typography>
            <Icon icon={icons[icon as keyof typeof icons]} size={size} />
          </Box>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export const DefaultAllIcons = AllIcons.bind({});
