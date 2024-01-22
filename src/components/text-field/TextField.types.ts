import React from 'react';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  endAdornment?: React.ReactNode;
  error?: boolean | null;
  helperText?: string | null;
  startAdornment?: React.ReactNode;
  inputRef?: React.RefObject<HTMLInputElement>;
  inputGroupProps?: React.HTMLAttributes<HTMLDivElement>;
}
