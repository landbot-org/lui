import { ReactNode } from 'react';

export interface SelectItemProps {
  label: string;
  value: string;
}

export interface SelectProps {
  className?: string;
  items: SelectItemProps[];
  placeholder?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  onChange: (value: string) => void;
  value: string;
  label?: string;
  description?: string;
  error?: boolean;
  helperText?: string;
  noResults?: string;
  disabled?: boolean;
  'aria-label'?: string;
}
