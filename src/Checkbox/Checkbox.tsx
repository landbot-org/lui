import React, { useEffect, useRef } from 'react';
import { StyledCheckbox } from './Checkbox.styles';
import { CheckboxProps } from './types';

export const Checkbox = ({ indeterminate = false, checked, ...rest }: CheckboxProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef && checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate && !checked;
    }
  }, [indeterminate, checked]);

  return (
    <StyledCheckbox ref={checkboxRef} checked={checked} $indeterminate={indeterminate} {...rest} type="checkbox" />
  );
};
