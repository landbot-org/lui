import { styled } from 'styled-components';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { Divider } from '../divider';
import { Typography } from '../typography';
import { Icon } from './Icon';
import * as icons from './icons';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    size: '2x',
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: <icons.Landbot />,
  },
};

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

export const Icons: Story = {
  args: {
    size: '2x',
  },
  render: (args) => {
    const handleClick = (iconName: string) => navigator.clipboard.writeText(`<${iconName} />`);

    return (
      <>
        <Typography variant="subtitle2">Click to copy an icon component (e.g. &lt;Calendly /&gt;)</Typography>
        <Box mt={1} mb={3}>
          <Divider />
        </Box>
        <GridBox>
          {Object.keys(icons).map((iconName) => {
            // eslint-disable-next-line import/namespace
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
  },
};

export const FontAwesomeExample: Story = {
  args: {
    size: '2x',
    color: 'pink.main',
    icon: <FontAwesomeIcon icon={faRobot} />,
  },
};
