import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Box } from '../Box';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { Tooltip } from './Tooltip';
import { TooltipContent } from './TooltipContent';
import { TooltipTrigger } from './TooltipTrigger';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {},
} as Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Uncontrolled: Story = {
  render: (args) => (
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
  ),
};

export const UncontrolledWithLargeContent: Story = {
  render: (args) => (
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
  ),
};
