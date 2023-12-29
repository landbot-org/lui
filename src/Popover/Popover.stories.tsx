import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';
import { Link } from '../Link';
import { Typography } from '../Typography';
import { Popover } from './Popover';
import { PopoverContent } from './PopoverContent';
import { PopoverTrigger } from './PopoverTrigger';
import { PopoverProps } from './types';

export default {
  title: 'Components/Popover',
  component: Popover,
  args: {
    placement: 'top',
  },
} as Meta<typeof Popover>;

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
      <Button size="small">Primary small</Button>
    </Box>
  </Box>
);

const TemplateWithHooks = (args: PopoverProps) => {
  const [open, setOpen] = useState(args.open);

  return (
    <Box display="flex" alignItems="center" justifyContent="center" style={{ height: 'calc(100vh - 2rem)' }}>
      <Popover {...args} open={open} setOpen={setOpen}>
        <PopoverTrigger>
          <Button>Click here to open</Button>
        </PopoverTrigger>
        <PopoverContent>{commonPopoverContent}</PopoverContent>
      </Popover>
    </Box>
  );
};

export const Controlled: Story = {
  render: (args) => <TemplateWithHooks {...args} />,
};

export const Uncontrolled: Story = {
  render: (args) => (
    <Box display="flex" alignItems="center" justifyContent="center" style={{ height: 'calc(100vh - 2rem)' }}>
      <Popover {...args}>
        <PopoverTrigger>
          <Button>Click here to open</Button>
        </PopoverTrigger>
        <PopoverContent>{commonPopoverContent}</PopoverContent>
      </Popover>
    </Box>
  ),
};

export const UncontrolledOnAbsolutePositionedElement: Story = {
  args: {
    placement: 'bottom-end',
  },
  render: (args) => (
    <Box display="flex" alignItems="center" justifyContent="center" style={{ height: 'calc(100vh - 2rem)' }}>
      <Popover {...args}>
        <PopoverTrigger>
          <Button style={{ position: 'absolute', bottom: 50, right: 50 }}>Click here to open</Button>
        </PopoverTrigger>
        <PopoverContent>{commonPopoverContent}</PopoverContent>
      </Popover>
    </Box>
  ),
};

export const CloseOnScroll: Story = {
  args: {
    closeOnScroll: true,
    placement: 'bottom-start',
  },
  render: (args) => (
    <div style={{ height: '2000px' }}>
      <Popover {...args}>
        <PopoverTrigger>
          <Button>Click here to open</Button>
        </PopoverTrigger>
        <PopoverContent>{commonPopoverContent}</PopoverContent>
      </Popover>
    </div>
  ),
};

export const UncontrolledWithoutPortal: Story = {
  args: {
    usePortal: false,
  },
  render: (args) => (
    <Box display="flex" alignItems="center" justifyContent="center" style={{ height: 'calc(100vh - 2rem)' }}>
      <Popover {...args}>
        <PopoverTrigger>
          <Button>Click here to open</Button>
        </PopoverTrigger>
        <PopoverContent>{commonPopoverContent}</PopoverContent>
      </Popover>
    </Box>
  ),
};
