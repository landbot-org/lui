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
import { PopoverClose } from './PopoverClose';

export default {
  title: 'Components/Popover',
  component: Popover,
  args: {
    placement: 'right',
    open: true,
    hasArrow: true,
    hasCloseButton: true,
    preventClose: false,
  },
} as ComponentMeta<typeof Popover>;

export const Default: ComponentStory<typeof Popover> = (args: PopoverProps) => {
  const [open, setOpen] = useState(args.open);

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" justifyContent="flex-start" m={20}>
        <Popover {...args} open={open} onOpenChange={setOpen}>
          <PopoverTrigger onClick={() => setOpen(true)}>Click here to open</PopoverTrigger>
          <PopoverContent>
            <Box style={{ width: '252px' }} display="flex" flexDirection="column" gap={8}>
              <Typography variant="text14" fontWeight={700} color="blue.main">
                Title
              </Typography>
              <Typography variant="text12" fontWeight={400} color="blue.main">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Typography>
              <Link containsIcon={true}>Text link</Link>
            </Box>
            <Box display="flex" my={2} style={{ height: '100px', backgroundColor: 'LightSlateGrey' }}></Box>

            <Box display="flex" justifyContent="flex-end">
              <Button size="small">Primary small</Button>
            </Box>
          </PopoverContent>
        </Popover>
      </Box>
    </ThemeProvider>
  );
};

export const PopoverWithCustomClose: ComponentStory<typeof Popover> = (args: PopoverProps) => {
  const [open, setOpen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" justifyContent="flex-start" m={20}>
        <Popover {...args} open={open} onOpenChange={setOpen} preventClose>
          <PopoverTrigger onClick={() => setOpen(true)}>Click here to open</PopoverTrigger>
          <PopoverContent>
            <Box style={{ width: '252px' }} display="flex" flexDirection="column" gap={8}>
              <Typography variant="text14" fontWeight={700} color="blue.main">
                Title
              </Typography>
              <Typography variant="text12" fontWeight={400} color="blue.main">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Typography>
              <PopoverClose>Close Me!</PopoverClose>
            </Box>
          </PopoverContent>
        </Popover>
      </Box>
    </ThemeProvider>
  );
};
PopoverWithCustomClose.args = {
  hasCloseButton: false,
  preventClose: true,
};
