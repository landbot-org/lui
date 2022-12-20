import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../shared/theme';
import { Typography } from './Typography';
import { TypographyProps } from './types';

export default {
  title: 'Components/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args: TypographyProps) => (
  <ThemeProvider theme={theme}>
    <Typography {...args}>The Most Powerful No-Code Chatbot Builder</Typography>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
};

export const H2 = Template.bind({});
H2.args = {
  variant: 'h2',
};

export const H3 = Template.bind({});
H3.args = {
  variant: 'h3',
};

export const H4 = Template.bind({});
H4.args = {
  variant: 'h4',
};

export const H5 = Template.bind({});
H5.args = {
  variant: 'h5',
};

export const H6 = Template.bind({});
H6.args = {
  variant: 'h6',
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  variant: 'subtitle1',
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  variant: 'subtitle2',
};

export const Text16 = Template.bind({});
Text16.args = {
  variant: 'text16',
};

export const Text14 = Template.bind({});
Text14.args = {
  variant: 'text14',
};

export const Text12 = Template.bind({});
Text12.args = {
  variant: 'text12',
};

export const Text10 = Template.bind({});
Text10.args = {
  variant: 'text10',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: 'info.main',
  variant: 'h1',
};

export const Ellipsize = () => (
  <ThemeProvider theme={theme}>
    <div style={{ maxWidth: '150px' }}>
      <Typography ellipsize>The Most Powerful No-Code Chatbot Builder</Typography>
    </div>
  </ThemeProvider>
);
