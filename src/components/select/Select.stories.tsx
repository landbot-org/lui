import { ComponentProps, useState } from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../icon';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    placeholder: 'Choose an option',
    items: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    endAdornment: <Icon icon={<FontAwesomeIcon icon={faAngleDown} />} color="blue.main" />,
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const NoResults: Story = {
  args: {
    items: [],
    noResults: 'You must fetch your data first!',
  },
};

export const Labeled: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    helperText: 'Helper text',
  },
};

export const HasError: Story = {
  args: {
    error: true,
    description: 'Description',
    helperText: 'Helper text',
    label: 'Label',
  },
};

export const Disabled: Story = {
  args: {
    description: 'Description',
    helperText: 'Helper text',
    label: 'Label',
    disabled: true,
  },
};

const FetchOnScroll = ({ items, ...rest }: ComponentProps<typeof Select>) => {
  const [copyItems, setItems] = useState<ComponentProps<typeof Select>['items']>(items);
  const hasMore = copyItems.length < 50;

  const handleOnIntersection = () => {
    setItems((prevItems) => {
      const newItems = Array.from({ length: 10 }, (_, i) => ({
        label: `Option ${prevItems.length + i + 1}`,
        value: `${prevItems.length + i + 1}`,
      }));
      return [...prevItems, ...newItems];
    });
  };

  return (
    <Select {...rest} items={copyItems} infiniteMode={true} hasMore={hasMore} onIntersection={handleOnIntersection} />
  );
};

export const OnIntersection: Story = {
  args: {
    styles: {
      insideContainer: {
        maxHeight: '200px',
        overflowY: 'auto',
      },
    },
  },
  render: (args) => <FetchOnScroll {...args} />,
};
