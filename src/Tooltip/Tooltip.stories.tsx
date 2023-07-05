import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../shared/theme';
import { Tooltip } from './Tooltip';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { TooltipProps } from './types';
import { Button } from '../Button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    color: 'blue',
    interaction: 'hover',
  },
} as ComponentMeta<typeof Tooltip>;

export const Default: ComponentStory<typeof Tooltip> = (args: TooltipProps) => (
  <ThemeProvider theme={theme}>
    <Box display="flex" justifyContent="center" m={10}>
      <Tooltip
        {...args}
        content={
          <Typography color={args.color === 'white' ? 'blue.main' : 'white.main'} variant="text12">
            This is the content of Tooltip!
          </Typography>
        }
      >
        <Button size="large">Interact with me!</Button>
      </Tooltip>
    </Box>
  </ThemeProvider>
);

export const LargeTooltip: ComponentStory<typeof Tooltip> = (args: TooltipProps) => (
  <ThemeProvider theme={theme}>
    <Box display="flex" justifyContent="center" m={10}>
      <Tooltip
        {...args}
        content={
          <Typography color={args.color === 'white' ? 'blue.main' : 'white.main'} variant="text12">
            This is the content of Tooltip! This is the content of Tooltip! This is the content of Tooltip! This is the
            content of Tooltip! This is the content of Tooltip! This is the content of Tooltip!
          </Typography>
        }
      >
        <Button size="large">Interact with me!</Button>
      </Tooltip>
    </Box>
  </ThemeProvider>
);

export const FlipTooltip: ComponentStory<typeof Tooltip> = (args: TooltipProps) => (
  <ThemeProvider theme={theme}>
    <Box display="flex" justifyContent="center" py={20} m={10} style={{ height: '550px', overflowY: 'hidden' }}>
      <Tooltip
        {...args}
        content={
          <Typography color={args.color === 'white' ? 'blue.main' : 'white.main'} variant="text12">
            This is the content of Tooltip! This is the content of Tooltip! This is the content of Tooltip! This is the
            content of Tooltip! This is the content of Tooltip! This is the content of Tooltip!
          </Typography>
        }
      >
        <Button size="large">Interact with me and scroll!</Button>
      </Tooltip>
    </Box>
  </ThemeProvider>
);

export const ClickableContentTooltip: ComponentStory<typeof Tooltip> = (args: TooltipProps) => (
  <ThemeProvider theme={theme}>
    <Box display="flex" justifyContent="center" py={20} m={10} style={{ height: '550px', overflowY: 'hidden' }}>
      <Tooltip
        {...args}
        content={
          <Typography color={args.color === 'white' ? 'blue.main' : 'white.main'} variant="text12">
            This is the content of Tooltip! <a href="https://www.google.com">This is a link</a>
          </Typography>
        }
      >
        <Button size="large">Interact with me and click the link!</Button>
      </Tooltip>
    </Box>
  </ThemeProvider>
);