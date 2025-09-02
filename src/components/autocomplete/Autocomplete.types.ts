import { CSSProperties, ReactNode } from 'react';
import { Placement } from '@floating-ui/react';
import { TextFieldProps } from '../text-field/TextField.types';

export type AutoCompleteItemSeparator = {
  type: 'separator';
  id?: never;
  children: ReactNode;
};

export type AutoCompleteItemOption = {
  type?: 'option';
  id: string;
  value: string;
} & Record<string, any>;

export type AutoCompleteItem = AutoCompleteItemOption | AutoCompleteItemSeparator;

export interface AutocompleteProps {
  error?: boolean;
  label?: string;
  id?: string;
  description?: string;
  helperText?: string | null;
  items: AutoCompleteItem[];
  selectedItemId?: AutoCompleteItemOption['id'];
  placeholder?: string;
  disabled?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  inputValue?: string;
  placement?: Placement;
  prenventCloseOnEmptySearch?: boolean;
  preventOpen?: boolean;
  noResults?: ReactNode;
  onFocus?: TextFieldProps['onFocus'];
  onBlur?: TextFieldProps['onBlur'];
  onChange: NonNullable<TextFieldProps['onChange']>;
  onSelectItem: (item: AutoCompleteItemOption) => void;
  itemRenderer?: (item: AutoCompleteItemOption) => ReactNode;
  itemsContainerFooter?: ReactNode;
  styles?: {
    textfield?: TextFieldProps['styles'];
    popover?: CSSProperties;
    popoverContainer?: CSSProperties;
    popoverItemsContainer?: CSSProperties;
    option?: CSSProperties;
    optionHover?: CSSProperties;
  };
  'aria-labelledby'?: string;
}
