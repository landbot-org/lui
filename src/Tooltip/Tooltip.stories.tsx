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

export const TooltipScroll: ComponentStory<typeof Tooltip> = (args: TooltipProps) => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: '1500px', overflow: 'auto' }}>
        <Box display="flex" justifyContent="center" m={10}>
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          <Tooltip
            {...args}
            content={
              <Typography color={args.color === 'white' ? 'blue.main' : 'white.main'} variant="text12">
                Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo
                hac.
              </Typography>
            }
          >
            <Button size="large">Interact with me!</Button>
          </Tooltip>
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
        </Box>
      </div>
    </ThemeProvider>
  );
};
