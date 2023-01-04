import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { theme } from '../shared/theme';
import { Link as LinkComponent } from './Link';
import { ThemeProvider } from 'styled-components';
import { LinkProps } from './types';

export default {
  title: 'Components/Link',
  component: LinkComponent,
  args: {
    bold: false,
    containsIcon: false,
    children: 'Text link',
    href: 'https://www.landbot.io',
    target: '_self',
  },
} as ComponentMeta<typeof LinkComponent>;

export const Link: ComponentStory<typeof LinkComponent> = (args: LinkProps) => (
  <ThemeProvider theme={theme}>
    <LinkComponent {...args} />
  </ThemeProvider>
);
