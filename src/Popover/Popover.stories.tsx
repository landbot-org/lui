import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../shared/theme';
import { Popover } from './Popover';
import { Box } from '../Box';
import { PopoverProps } from './types';
import { PopoverTrigger } from './PopoverTrigger';
import { PopoverContent } from './PopoverContent';
import { PopoverClose } from './PopoverClose';
import { Typography } from '../Typography';

export default {
  title: 'Components/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

export const Default: ComponentStory<typeof Popover> = (args: PopoverProps) => {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" justifyContent="center" m={10}>
        <Popover {...args} open={open} onOpenChange={setOpen} preventClose>
          <PopoverTrigger onClick={() => setOpen(true)}>Click here to open</PopoverTrigger>
          <PopoverContent>
            <Box display="flex" justifyContent="center" p={10} gap={12} backgroundColor="blue.50">
              <Typography color="blue.main" variant="text12">
                This is the popover content
              </Typography>
              <PopoverClose onClick={() => setOpen(false)}>X</PopoverClose>
            </Box>
          </PopoverContent>
        </Popover>
      </Box>
    </ThemeProvider>
  );
};
