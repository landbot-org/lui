import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../shared/theme';
import { Popover } from './Popover';
import { Box } from '../Box';
import { PopoverProps } from './types';
import { PopoverTrigger } from './PopoverTrigger';
import { PopoverContent } from './PopoverContent';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Link } from '../Link';

export default {
  title: 'Components/Popover',
  component: Popover,
  args: {
    placement: 'top',
    crossAxisOffset: 0,
  },
} as ComponentMeta<typeof Popover>;

export const Controlled: ComponentStory<typeof Popover> = (args: PopoverProps) => {
  const [open, setOpen] = useState(args.open);

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" alignItems="center" justifyContent="center" style={{ height: 'calc(100vh - 2rem)' }}>
        <Popover {...args} open={open} setOpen={setOpen}>
          <PopoverTrigger>
            <Button>Click here to open</Button>
          </PopoverTrigger>
          <PopoverContent>
            <Box p={2}>
              <Typography variant="text14" fontWeight={700} color="blue.main" mb={1}>
                Title
              </Typography>
              <Typography variant="text12" fontWeight={400} color="blue.main" mb={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Typography>
              <Box mb={1}>
                <Link containsIcon={true}>Text link</Link>
              </Box>
              <Box display="flex" backgroundColor="neutral.300" mb={2} style={{ height: '100px' }} />
              <Box display="flex" justifyContent="flex-end">
                <Button size="small">Primary small</Button>
              </Box>
            </Box>
          </PopoverContent>
        </Popover>
      </Box>
    </ThemeProvider>
  );
};

export const Uncontrolled: ComponentStory<typeof Popover> = (args: PopoverProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" alignItems="center" justifyContent="center" style={{ height: 'calc(100vh - 2rem)' }}>
        <Popover {...args}>
          <PopoverTrigger>
            <Button>Click here to open</Button>
          </PopoverTrigger>
          <PopoverContent>
            <Box p={2}>
              <Typography variant="text14" fontWeight={700} color="blue.main" mb={1}>
                Title
              </Typography>
              <Typography variant="text12" fontWeight={400} color="blue.main" mb={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Typography>
              <Box mb={1}>
                <Link containsIcon={true}>Text link</Link>
              </Box>
              <Box display="flex" backgroundColor="neutral.300" mb={2} style={{ height: '100px' }} />
              <Box display="flex" justifyContent="flex-end">
                <Button size="small">Primary small</Button>
              </Box>
            </Box>
          </PopoverContent>
        </Popover>
      </Box>
    </ThemeProvider>
  );
};

export const UncontrolledOnAbsolutePositionedElement: ComponentStory<typeof Popover> = (args: PopoverProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" alignItems="center" justifyContent="center" style={{ height: 'calc(100vh - 2rem)' }}>
        <Popover {...args}>
          <PopoverTrigger>
            <Button style={{ position: 'absolute', bottom: 50, right: 50 }}>Click here to open</Button>
          </PopoverTrigger>
          <PopoverContent>
            <Box p={2}>
              <Typography variant="text14" fontWeight={700} color="blue.main" mb={1}>
                Title
              </Typography>
              <Typography variant="text12" fontWeight={400} color="blue.main" mb={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Typography>
              <Box mb={1}>
                <Link containsIcon={true}>Text link</Link>
              </Box>
              <Box display="flex" backgroundColor="neutral.300" mb={2} style={{ height: '100px' }} />
              <Box display="flex" justifyContent="flex-end">
                <Button size="small">Primary small</Button>
              </Box>
            </Box>
          </PopoverContent>
        </Popover>
      </Box>
    </ThemeProvider>
  );
};

export const CloseOnScroll: ComponentStory<typeof Popover> = (args: PopoverProps) => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: '2000px' }}>
        <Popover {...args} closeOnScroll>
          <PopoverTrigger>
            <Button>Click here to open</Button>
          </PopoverTrigger>
          <PopoverContent>
            <Box p={2}>
              <Typography variant="text14" fontWeight={700} color="blue.main" mb={1}>
                Title
              </Typography>
              <Typography variant="text12" fontWeight={400} color="blue.main" mb={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Typography>
              <Box mb={1}>
                <Link containsIcon={true}>Text link</Link>
              </Box>
              <Box display="flex" backgroundColor="neutral.300" mb={2} style={{ height: '100px' }} />
              <Box display="flex" justifyContent="flex-end">
                <Button size="small">Primary small</Button>
              </Box>
            </Box>
          </PopoverContent>
        </Popover>
      </div>
    </ThemeProvider>
  );
};

UncontrolledOnAbsolutePositionedElement.args = {
  placement: 'bottom-end',
};
