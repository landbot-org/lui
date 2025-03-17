import { ReactNode } from 'react';
import { faAngleDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { Button } from '../button';
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

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const NoResults: Story = {
  args: {
    items: [],
  },
};

export const NoResultsCustom: Story = {
  args: {
    items: [],
    noResults: (
      <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
        <Typography variant="text14" color="error.light">
          THERE IS
        </Typography>
        <Divider />
        <Typography variant="h3" color="error.dark">
          -- NO RESULTS --
        </Typography>
      </Box>
    ),
  },
};

export const PreventClose: Story = {
  args: {
    items: [
      { id: '1', value: 'Option 1' },
      { id: '2', value: 'Option 2' },
      { id: '3', value: 'Option 3' },
    ],
    prenventCloseOnEmptySearch: true,
  },
};

export const PreventOpen: Story = {
  args: {
    items: [
      { id: '1', value: 'Option 1' },
      { id: '2', value: 'Option 2' },
      { id: '3', value: 'Option 3' },
    ],
    preventOpen: true,
  },
};

export const CustomStyles: Story = {
  args: {
    items: [
      { id: '1', value: 'Option 1' },
      { id: '2', value: 'Option 2' },
      { id: '3', value: 'Option 3' },
    ],
    styles: {
      popover: {
        zIndex: 2000,
      },
      popoverContainer: {
        backgroundColor: 'red',
      },
      option: {
        padding: '4px',
      },
      optionHover: {
        backgroundColor: 'yellow',
      },
    },
  },
};

export const CustomItemsContainerFooter: Story = {
  args: {
    items: Array.from({ length: 100 }).map((_, i) => ({ id: i.toString(), value: `Option ${i}` })),
    itemsContainerFooter: <Button>Create new option</Button>,
    styles: {
      popoverContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        maxHeight: '268px',
        overflowY: 'auto',
        borderRadius: '4px',
      },
      popoverItemsContainer: { overflowY: 'auto' },
    },
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
