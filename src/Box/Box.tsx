import React from 'react';
import { BoxProps } from './types';
import { BoxStyled } from './Box.styles';

export const Box = ({
  as = 'div',
  border,
  borderColor,
  children,
  className,
  display = 'block',
  elevation = 0,
  radius = 0,
  ...other
}: BoxProps) => (
  <BoxStyled
    as={as}
    className={className}
    $border={border}
    $borderColor={borderColor}
    $display={display}
    $elevation={elevation}
    $radius={radius}
    {...other}
  >
    {children}
  </BoxStyled>
);
