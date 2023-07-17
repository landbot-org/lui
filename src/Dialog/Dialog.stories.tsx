import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../shared/theme';
import { Dialog } from './Dialog';
import { DialogProps } from './types';
import { DialogContent } from './DialogContent';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Divider } from '../Divider';

export default {
  title: 'Components/Dialog',
  component: Dialog,
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
} as ComponentMeta<typeof Dialog>;

export const Default: ComponentStory<typeof Dialog> = (args: DialogProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Dialog {...args}>
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
      </Dialog>
    </ThemeProvider>
  );
};

export const WithFooter: ComponentStory<typeof Dialog> = (args: DialogProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Dialog {...args}>
        <DialogContent>
          <Box p={4}>
            <Typography variant="h5" mb={1}>
              Dialog
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
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
      </Dialog>
    </ThemeProvider>
  );
};

export const WithHugeContent: ComponentStory<typeof Dialog> = (args: DialogProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Dialog {...args}>
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
      </Dialog>
    </ThemeProvider>
  );
};
WithHugeContent.args = {
  width: 3800,
};

export const WithFixedHeaderAndFooter: ComponentStory<typeof Dialog> = (args: DialogProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Dialog {...args}>
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
      </Dialog>
    </ThemeProvider>
  );
};

export const WithCustomContent: ComponentStory<typeof Dialog> = (args: DialogProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Dialog {...args}>
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
      </Dialog>
    </ThemeProvider>
  );
};
WithCustomContent.args = {
  width: 600,
};
