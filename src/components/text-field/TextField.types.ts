import { HTMLAttributes, InputHTMLAttributes, ReactNode, RefObject } from 'react';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  endAdornment?: ReactNode;
  error?: boolean | null;
  helperText?: string | null;
  startAdornment?: ReactNode;
  inputRef?: RefObject<HTMLInputElement>;
  inputGroupProps?: HTMLAttributes<HTMLDivElement>;
}
