import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button';
import { Typography } from '../typography';
import { Tooltip } from './Tooltip';
import { TooltipContent } from './TooltipContent';
import { TooltipTrigger } from './TooltipTrigger';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  args: {
    placement: 'top-start',
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Uncontrolled: Story = {
  args: {
    children: (
      <>
        <TooltipTrigger>
          <Button>Hover to open</Button>
        </TooltipTrigger>
        <TooltipContent>
          <Typography variant="text12">Lorem ipsum dolor sit amet</Typography>
        </TooltipContent>
      </>
    ),
  },
};

export const Controlled: Story = {
  args: {
    open: true,
    children: (
      <>
        <TooltipTrigger>
          <Button>Hover to open</Button>
        </TooltipTrigger>
        <TooltipContent>
          <Typography variant="text12">Lorem ipsum dolor sit amet</Typography>
        </TooltipContent>
      </>
    ),
  },
};

export const UncontrolledWithLargeContent: Story = {
  args: {
    children: (
      <>
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
      </>
    ),
  },
};
