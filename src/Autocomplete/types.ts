import { ReactNode } from 'react';
import { TextFieldProps } from '../TextField/types';

export interface AutocompleteProps {
  items: { id: string; value: string }[];
  placeholder: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  inputValue?: string;
  onChangeInput: NonNullable<TextFieldProps['onChange']>;
  onSelectItem: (item: unknown) => void;
}
