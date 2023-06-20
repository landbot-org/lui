import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../shared/theme';
import { AutocompleteProps } from './types';
import { Autocomplete } from './Autocomplete';
import { Icon } from '../Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
    onChangeInput: (event) => console.log('Changed input: ', event.target.value),
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
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args: AutocompleteProps) => (
  <ThemeProvider theme={theme}>
    <Autocomplete {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

export const NoResults = Template.bind({});
NoResults.args = {
  items: [],
};

export const Searchable: ComponentStory<typeof Autocomplete> = (args: AutocompleteProps) => {
  const items = [
    { id: '1', value: 'Option 1' },
    { id: '2', value: 'Option 2' },
    { id: '3', value: 'Option 3' },
  ];
  const [itemsState, setItemsState] = useState(items);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemsState(items.filter((item) => item.value.includes(event.target.value)));
  };

  return (
    <ThemeProvider theme={theme}>
      <Autocomplete {...args} items={itemsState} onChangeInput={handleChangeInput} />
    </ThemeProvider>
  );
};
