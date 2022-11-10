import React from 'react';

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
}
