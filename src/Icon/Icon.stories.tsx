import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Box } from '../Box';
import { Divider } from '../Divider';
import { Typography } from '../Typography';
import { theme } from '../shared/theme';
import { Icon } from './Icon';
import * as icons from './icons';
import { IconProps } from './types';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: {
        type: null,
      },
    },
  },
  parameters: {
    componentSubtitle: 'Displays a landbot icon',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta<typeof Icon>;

type Story = StoryObj<typeof Icon>;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 8px;
`;

const GridItem = styled(Box).attrs({
  radius: 3,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})`
  height: 80px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.blue[100]};
  }
`;

const Template = (args: IconProps) => {
  const handleClick = (iconName: string) => navigator.clipboard.writeText(`<${iconName} />`);

  return (
    <>
      <Typography variant="subtitle2">Click to copy an icon component (e.g. &lt;Calendly /&gt;)</Typography>
      <Box mt={1} mb={3}>
        <Divider />
      </Box>
      <GridBox>
        {Object.keys(icons).map((iconName) => {
          const IconRender = icons[iconName as keyof typeof icons];
          return (
            <GridItem key={iconName} title={iconName} onClick={() => handleClick(iconName)}>
              <Icon {...args} icon={<IconRender />} />
              <Typography ellipsize>{iconName}</Typography>
            </GridItem>
          );
        })}
      </GridBox>
    </>
  );
};

export const Default: Story = {
  args: {
    size: '2x',
  },
  render: (args) => <Template {...args} />,
};

export const FontAwesomeExample: Story = {
  args: {
    size: '2x',
    color: 'pink.main',
  },
  render: (args) => <Icon {...args} icon={<FontAwesomeIcon icon={faRobot} />} />,
};
