import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Box } from '../box';
import { Button } from '../button';
import { Link } from '../link';
import { Typography } from '../typography';
import { Popover } from './Popover';
import { PopoverContent } from './PopoverContent';
import { PopoverTrigger } from './PopoverTrigger';

const meta: Meta<typeof Popover> = {
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

const commonPopoverContent = (
  <Box p={2}>
    <Typography variant="text14" fontWeight={700} color="blue.main" mb={1}>
      Title
    </Typography>
    <Typography variant="text12" fontWeight={400} color="blue.main" mb={1}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
    </Typography>
    <Box mb={1}>
      <Link containsIcon={true}>Text link</Link>
    </Box>
    <Box display="flex" backgroundColor="neutral.300" mb={2} style={{ height: '50px' }} />
    <Box display="flex" justifyContent="flex-end">
      <Button size="small" tabIndex={-1}>
        Primary small
      </Button>
    </Box>
  </Box>
);

export const Uncontrolled: Story = {
  args: {
    children: (
      <>
        <PopoverTrigger>
          <Button>Click here to open</Button>
        </PopoverTrigger>
        <PopoverContent>{commonPopoverContent}</PopoverContent>
      </>
    ),
  },
};

export const Controlled: Story = {
  args: {
    open: true,
    children: (
      <>
        <PopoverTrigger>
          <Button>Click here to open</Button>
        </PopoverTrigger>
        <PopoverContent>{commonPopoverContent}</PopoverContent>
      </>
    ),
  },
  render: function Render(args) {
    const [open, setOpen] = useState(args.open);

    return (
      <Popover {...args} open={open} setOpen={setOpen}>
        {args.children}
      </Popover>
    );
  },
};

export const UncontrolledOnAbsolutePositionedElement: Story = {
  args: {
    placement: 'bottom-end',
    children: (
      <>
        <PopoverTrigger>
          <Button style={{ position: 'absolute', bottom: 0, right: 50 }}>Click here to open</Button>
        </PopoverTrigger>
        <PopoverContent>{commonPopoverContent}</PopoverContent>
      </>
    ),
  },
};

export const CloseOnScroll: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '2000px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    closeOnScroll: true,
    placement: 'bottom-start',
    children: (
      <>
        <PopoverTrigger>
          <Button>Click here to open</Button>
        </PopoverTrigger>
        <PopoverContent>{commonPopoverContent}</PopoverContent>
      </>
    ),
  },
};

export const UncontrolledWithoutPortal: Story = {
  args: {
    usePortal: false,
    children: (
      <>
        <PopoverTrigger>
          <Button>Click here to open</Button>
        </PopoverTrigger>
        <PopoverContent>{commonPopoverContent}</PopoverContent>
      </>
    ),
  },
};
