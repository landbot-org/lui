import { HTMLAttributes, InputHTMLAttributes, ReactNode, RefObject } from 'react';

import { ColorsTypes } from '../../shared/theme.types';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  endAdornment?: ReactNode;
  error?: boolean | null;
  helperText?: string | null;
  startAdornment?: ReactNode;
  inputRef?: RefObject<HTMLInputElement>;
  inputGroupProps?: HTMLAttributes<HTMLDivElement>;
  borderColor?: ColorsTypes;
  borderWidth?: number;
  height?: number;
  hasEnd?: boolean;
  borderStyle?: string;
}
