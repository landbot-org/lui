import React from 'react';
import { BoxProps } from './types';
import { BoxStyled } from './Box.styles';

export const Box = ({ className, as = 'div', children, display = 'block', ...other }: BoxProps) => (
  <BoxStyled as={as} className={className} display={display} {...other}>
    {children}
  </BoxStyled>
);
