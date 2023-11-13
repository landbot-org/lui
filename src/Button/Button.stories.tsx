import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { theme } from '../shared/theme';
import { ThemeProvider } from 'styled-components';
import { ButtonProps } from './types';
import { Robot } from '../Icon/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../Icon';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    startIcon: {
      control: {
        type: null,
      },
    },
    endIcon: {
      control: {
        type: null,
      },
    },
  },
  args: {
    color: 'pink.main',
    size: 'medium',
    variant: 'contained',
    disabled: false,
    fullWidth: false,
    isLoading: false,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args}>Button</Button>
  </ThemeProvider>
);

export const Default = Template.bind({});

export const ButtonStartIcon: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args} startIcon={<Robot />}>
      Button
    </Button>
  </ThemeProvider>
);

export const ButtonEndIcon: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args} endIcon={<Robot />}>
      Button
    </Button>
  </ThemeProvider>
);

export const ButtonBothIcons: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args} startIcon={<Robot />} endIcon={<Robot />}>
      Button
    </Button>
  </ThemeProvider>
);

export const ButtonOnlyIcon: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args} startIcon={<Robot />} />
  </ThemeProvider>
);

export const ButtonIconFontAwesome: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args} startIcon={<Icon icon={<FontAwesomeIcon icon={faArrowUpFromBracket} />} />}>
      Button
    </Button>
  </ThemeProvider>
);

export const ButtonOnlyIconFontAwesome: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args} startIcon={<Icon icon={<FontAwesomeIcon icon={faArrowUpFromBracket} />} />} />
  </ThemeProvider>
);

export const ButtonLoading: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args} isLoading={true}>
      Button
    </Button>
  </ThemeProvider>
);

export const ButtonLink: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args}>Button</Button>
  </ThemeProvider>
);
ButtonLink.args = {
  href: '#',
  target: '_blank',
};

export const ButtonFullWidth: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args}>Button</Button>
  </ThemeProvider>
);
ButtonFullWidth.args = {
  fullWidth: true,
  size: 'large',
};

export const ButtonFullWidthBothIcons: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args}>Select a date range</Button>
  </ThemeProvider>
);
ButtonFullWidthBothIcons.args = {
  color: 'white.main',
  fullWidth: true,
  textAlign: 'left',
  size: 'large',
  startIcon: <Robot />,
  endIcon: <Icon icon={<FontAwesomeIcon icon={faArrowUpFromBracket} />} />,
};

export const ButtonWithTextEllipsized: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <div style={{ width: 200 }}>
      <Button {...args}>Button with large content that needs ellipsis</Button>
    </div>
  </ThemeProvider>
);
ButtonWithTextEllipsized.args = {
  startIcon: <Robot />,
  endIcon: <Icon icon={<FontAwesomeIcon icon={faArrowUpFromBracket} />} />,
  fullWidth: true,
  ellipsize: true,
};
