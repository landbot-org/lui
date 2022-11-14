import React from 'react';
import { ToggleStyled } from './Toggle.styles';
import { ToggleProps } from './types';

export const Toggle = ({ size = 'medium', ...rest }: ToggleProps) => (
  <ToggleStyled $size={size}>
    <input type="checkbox" {...rest} />
    <span></span>
  </ToggleStyled>
);
