import { ReactNode } from 'react';
import { faAngleDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { Divider } from '../divider';
import { Icon } from '../icon';
import { Typography } from '../typography';
import { Autocomplete } from './Autocomplete';

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  args: {
    placeholder: 'Write something',
    items: [
      { id: '1', value: 'Option 1' },
      { id: '2', value: 'Option 2' },
      { id: '3', value: 'Option 3' },
    ],
    startAdornment: <Icon icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} color="blue.main" />,
    endAdornment: <Icon icon={<FontAwesomeIcon icon={faAngleDown} />} color="blue.main" />,
  },
  argTypes: {
    startAdornment: {
      control: {
        type: null,
      },
    },
    endAdornment: {
      control: {
        type: null,
      },
    },
    onChange: {
      control: {
        type: null,
      },
    },
    onSelectItem: {
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {};

export const NoResults: Story = {
  args: {
    items: [],
  },
};

const Separator = ({ children }: { children: ReactNode }) => (
  <Box>
    <Typography>{children}</Typography>
    <Divider />
  </Box>
);
export const CustomRender: Story = {
  args: {
    items: [
      { type: 'separator', children: <Separator>LEAD DATA</Separator> },
      { type: 'option', id: 'name', value: 'name', optionType: 'Text' },
      { id: 'phone', value: 'phone', optionType: 'Text' },
      { type: 'separator', children: <Separator>Other Data</Separator> },
      { id: 'age', value: 'age', optionType: 'Date' },
    ],
    itemRenderer: (item) => {
      return (
        <Box display="flex" justifyContent="space-between">
          <Typography variant="text16" color="purple.main">
            {item.value}
          </Typography>
          <Typography variant="text14" color="purple.400">
            {item.optionType}
          </Typography>
        </Box>
      );
    },
  },
};
