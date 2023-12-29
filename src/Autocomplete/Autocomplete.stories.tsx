import { faAngleDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Icon } from '../Icon';
import { Autocomplete } from './Autocomplete';
import { AutocompleteProps } from './types';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  args: {
    placeholder: 'Write something',
    items: [
      { id: '1', value: 'Option 1' },
      { id: '2', value: 'Option 2' },
      { id: '3', value: 'Option 3' },
    ],
    startAdornment: <Icon icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} color="blue.main" />,
    endAdornment: <Icon icon={<FontAwesomeIcon icon={faAngleDown} />} color="blue.main" />,
    onSelectItem: (item) => console.log('Selected item: ', item),
    onChange: (event) => console.log('Changed input: ', event.target.value),
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
    onChangeInput: {
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof Autocomplete>;

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  render: (args) => <Autocomplete {...args} />,
};

export const NoResults: Story = {
  render: (args) => <Autocomplete {...args} items={[]} />,
};

const TemplateWithHooks = (args: AutocompleteProps) => {
  const items = [
    { id: '1', value: 'Option 1' },
    { id: '2', value: 'Option 2' },
    { id: '3', value: 'Option 3' },
  ];
  const [itemsState, setItemsState] = useState(items);
  const [inputValue, setInputValue] = useState('');
  const [selectedItem, setSelectedItem] = useState<{ id: string; value: string } | null>(null);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedItem(null);
    setInputValue(event.target.value);
    setItemsState(items.filter((item) => item.value.includes(event.target.value)));
  };

  const handleSelectItem = (item: { id: string; value: string }) => {
    setSelectedItem(item);
  };

  return (
    <Autocomplete
      {...args}
      items={itemsState}
      onChange={handleChangeInput}
      onSelectItem={handleSelectItem}
      inputValue={selectedItem?.value || inputValue}
    />
  );
};

export const Searchable: Story = {
  render: (args) => <TemplateWithHooks {...args} />,
};
