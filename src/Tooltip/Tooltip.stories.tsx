import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../shared/theme';
import { Tooltip } from './Tooltip';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { PopoverProps } from '../Popover/types';
import { Button } from '../Button';
import { TooltipTrigger } from './TooltipTrigger';
import { TooltipContent } from './TooltipContent';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    crossAxisOffset: 0,
  },
} as ComponentMeta<typeof Tooltip>;

export const Uncontrolled: ComponentStory<typeof Tooltip> = (args: PopoverProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" alignItems="center" justifyContent="center" style={{ height: 'calc(100vh - 2rem)' }}>
        <Tooltip {...args}>
          <TooltipTrigger>
            <Button>Hover to open</Button>
          </TooltipTrigger>
          <TooltipContent>
            <Typography variant="text12">Lorem ipsum dolor sit amet</Typography>
          </TooltipContent>
        </Tooltip>
      </Box>
    </ThemeProvider>
  );
};

export const UncontrolledWithLargeContent: ComponentStory<typeof Tooltip> = (args: PopoverProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" alignItems="center" justifyContent="center" style={{ height: 'calc(100vh - 2rem)' }}>
        <Tooltip {...args}>
          <TooltipTrigger>
            <Button>Hover to open</Button>
          </TooltipTrigger>
          <TooltipContent>
            <Typography variant="text12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Typography>
          </TooltipContent>
        </Tooltip>
      </Box>
    </ThemeProvider>
  );
};
