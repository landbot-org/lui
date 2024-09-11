import { ReactNode } from 'react';

import { Placement } from '@floating-ui/react';

import { ColorsTypes } from '../../shared/theme.types';
import { TextFieldProps } from '../text-field/TextField.types';

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
  optionColor?: ColorsTypes;
  optionPlacement?: Placement;
  borderColor?: ColorsTypes;
  borderWidth?: number;
  height?: number;
  hasEnd?: boolean;
  borderStyle: string;
  floatingZIndex?: number;
  keepOpenOnNoValue?: boolean;
}
