import React, { useEffect, useRef } from 'react';
import { StyledCheckbox } from './Checkbox.styles';
import { CheckboxProps } from './types';

export const Checkbox = ({ checked, disabled, indeterminate, onChange, ...rest }: CheckboxProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef && checkboxRef.current) {
      checkboxRef.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate]);

  return (
    <StyledCheckbox
      ref={checkboxRef}
      checked={checked}
      disabled={Boolean(disabled)}
      onChange={onChange}
      $indeterminate={indeterminate}
      {...rest}
    />
  );
};
