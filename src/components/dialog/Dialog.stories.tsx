import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { Button } from '../button';
import { Divider } from '../divider';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip';
import { Typography } from '../typography';
import { Dialog } from './Dialog';
import { DialogContent } from './DialogContent';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['!autodocs'], // disable docs page generation as it renders all dialogs opened and is not useful
  args: {
    open: true,
    width: 500,
    hasCloseButton: true,
  },
  argTypes: {
    width: {
      control: { type: 'number', min: 100, max: 3000, step: 10 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    children: (
      <DialogContent>
        <Box p={4}>
          <Typography variant="h5" mb={1}>
            Dialog
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam,
          </Typography>
        </Box>
      </DialogContent>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    hasCloseButton: false,
    children: (
      <DialogContent>
        <Box p={4}>
          <Typography variant="h5" mb={1}>
            Dialog
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
          <Box my={2}>
            <Divider />
          </Box>
          <Box display="flex" justifyContent="flex-end" gap={8}>
            <Button variant="outlined" color="blue.main">
              CANCEL
            </Button>
            <Button>SAVE</Button>
          </Box>
        </Box>
      </DialogContent>
    ),
  },
};

export const WithHugeContent: Story = {
  args: {
    width: 3800,
    children: (
      <DialogContent>
        <Box p={4}>
          <Typography variant="h5" mb={1}>
            Dialog
          </Typography>
          <Box mb={2} backgroundColor="orange.200" style={{ height: 100 }} />
          <Box mb={2} backgroundColor="orange.400" style={{ height: 100 }} />
          <Box mb={2} backgroundColor="orange.600" style={{ height: 100 }} />
          <Box mb={2} backgroundColor="teal.200" style={{ height: 100 }} />
          <Box mb={2} backgroundColor="teal.400" style={{ height: 100 }} />
          <Box mb={2} backgroundColor="teal.600" style={{ height: 100 }} />
          <Box my={2}>
            <Divider />
          </Box>
          <Box display="flex" justifyContent="flex-end" gap={8}>
            <Button variant="outlined" color="blue.main">
              CANCEL
            </Button>
            <Button>SAVE</Button>
          </Box>
        </Box>
      </DialogContent>
    ),
  },
};

export const WithFixedHeaderAndFooter: Story = {
  args: {
    children: (
      <DialogContent>
        <Box display="flex" flexDirection="column" p={4} style={{ height: '95vh' }}>
          <Typography variant="h5">Dialog</Typography>
          <Box my={2}>
            <Divider />
          </Box>
          <Box flexGrow={1} style={{ overflow: 'auto' }}>
            <Box mb={2} backgroundColor="orange.200" style={{ height: 100 }} />
            <Box mb={2} backgroundColor="orange.400" style={{ height: 100 }} />
            <Box mb={2} backgroundColor="orange.600" style={{ height: 100 }} />
            <Box mb={2} backgroundColor="teal.200" style={{ height: 100 }} />
            <Box mb={2} backgroundColor="teal.400" style={{ height: 100 }} />
            <Box mb={2} backgroundColor="teal.600" style={{ height: 100 }} />
          </Box>
          <Box my={2}>
            <Divider />
          </Box>
          <Box display="flex" justifyContent="flex-end" gap={8}>
            <Button variant="outlined" color="blue.main">
              CANCEL
            </Button>
            <Button>SAVE</Button>
          </Box>
        </Box>
      </DialogContent>
    ),
  },
};

export const WithCustomContent: Story = {
  args: {
    width: 600,
    hasCloseButton: false,
    children: (
      <DialogContent>
        <Box backgroundColor="warning.main" p={6} display="flex" justifyContent="center" flexDirection="column">
          <Typography color="neutral.800" variant="h3" mb={3} style={{ textAlign: 'center' }}>
            Dialog
          </Typography>
          <Box display="grid" gap={16} style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            <Box radius={2} backgroundColor="warning.dark" style={{ height: 150, cursor: 'pointer' }}></Box>
            <Box radius={2} backgroundColor="warning.dark" style={{ height: 150, cursor: 'pointer' }}></Box>
            <Box radius={2} backgroundColor="warning.dark" style={{ height: 150, cursor: 'pointer' }}></Box>
          </Box>
        </Box>
      </DialogContent>
    ),
  },
};

export const WithInnerPopovers: Story = {
  args: {
    children: (
      <DialogContent>
        <Box display="flex" gap={8} p={4}>
          <Popover placement="bottom-start" hasArrow={false}>
            <PopoverTrigger>
              <Button variant="outlined" color="purple.main">
                Click to expand popover
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Box p={2}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </Typography>
              </Box>
            </PopoverContent>
          </Popover>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="outlined" color="blue.main">
                Tooltip
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <Typography variant="text12">A basic tooltip</Typography>
            </TooltipContent>
          </Tooltip>
        </Box>
      </DialogContent>
    ),
  },
};
