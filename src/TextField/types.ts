import React from 'react';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  endAdornment?: React.ReactNode;
  error?: boolean;
  helperText?: string;
  startAdornment?: React.ReactNode;
  inputRef?: React.RefObject<HTMLInputElement>;
  inputGroupProps?: React.HTMLAttributes<HTMLDivElement>;
}
