import { ReactNode } from 'react';

import { TextFieldProps } from '../TextField/types';

export interface AutoCompleteItem {
  id: string;
  value: string;
}

export interface AutocompleteProps {
  items: AutoCompleteItem[];
  selectedItemId?: AutoCompleteItem['id'];
  placeholder?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  inputValue?: string;
  onChange: NonNullable<TextFieldProps['onChange']>;
  onSelectItem: (item: AutoCompleteItem) => void;
}
