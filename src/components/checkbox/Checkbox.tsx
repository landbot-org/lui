import React, { useEffect, useRef } from 'react';

import { CheckboxProps } from './Checkbox.types';

import { CheckboxStyled } from './Checkbox.styles';

export const Checkbox = ({ indeterminate = false, checked, ...rest }: CheckboxProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef && checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate && !checked;
    }
  }, [indeterminate, checked]);

  return (
    <CheckboxStyled ref={checkboxRef} checked={checked} $indeterminate={indeterminate} {...rest} type="checkbox" />
  );
};
