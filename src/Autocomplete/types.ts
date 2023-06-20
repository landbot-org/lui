import { ReactNode } from 'react';
import { TextFieldProps } from '../TextField/types';

type AutoCompleteItem = { id: string; value: string };

export interface AutocompleteProps {
  items: AutoCompleteItem[];
  placeholder: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  inputValue?: string;
  onChangeInput: NonNullable<TextFieldProps['onChange']>;
  onSelectItem: (item: AutoCompleteItem) => void;
}
