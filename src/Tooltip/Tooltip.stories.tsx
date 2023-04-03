import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tooltip as TooltipComponent } from './Tooltip';
import { TooltipProps } from './types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../shared/theme';
import { Box } from '../Box';
import { Typography } from '../Typography';

export default {
  title: 'Components/Tooltip',
  component: TooltipComponent,
  parameters: {
    componentSubtitle: 'Displays a Tooltip',
  },
  args: {
    color: 'blue',
  },
} as ComponentMeta<typeof TooltipComponent>;

export const Tooltip: ComponentStory<typeof TooltipComponent> = (args: TooltipProps) => {
  const refChildren = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" justifyContent="center" m={10} ref={refChildren}>
        <TooltipComponent
          {...args}
          refTarget={refChildren}
          content={
            <Typography color={args.color === 'white' ? 'blue.main' : 'white.main'} variant="text12">
              Hello Tooltip!
            </Typography>
          }
        >
          <button>
            <Box p={2}>Mouse over me!</Box>
          </button>
        </TooltipComponent>
      </Box>
    </ThemeProvider>
  );
};

export const TooltipScroll: ComponentStory<typeof TooltipComponent> = (args: TooltipProps) => {
  const refChildren = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: '1500px', overflow: 'auto' }}>
        <Box display="flex" justifyContent="center" m={10} ref={refChildren}>
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          <TooltipComponent
            {...args}
            refTarget={refChildren}
            content={
              <Typography color={args.color === 'white' ? 'blue.main' : 'white.main'} variant="text12">
                Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo
                hac.
              </Typography>
            }
          >
            <button>
              <Box p={2}>Mouse over me!</Box>
            </button>
          </TooltipComponent>
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
          Lorem ipsum dolor sit amet consectetur. Commodo tempus hendrerit id nunc magnis faucibus consectetur leo hac.
        </Box>
      </div>
    </ThemeProvider>
  );
};
