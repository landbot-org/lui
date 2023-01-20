import React from 'react';
import { BoxProps } from './types';
import { BoxStyled } from './Box.styles';

export const Box = ({
  alignItems,
  as = 'div',
  backgroundColor,
  border,
  borderColor,
  children,
  className,
  display = 'block',
  elevation = 0,
  flexDirection,
  flexWrap,
  flexGap,
  justifyContent,
  radius = 0,
  ...other
}: BoxProps) => (
  <BoxStyled
    as={as}
    className={className}
    $alignItems={alignItems}
    $backgroundColor={backgroundColor}
    $border={border}
    $borderColor={borderColor}
    $display={display}
    $elevation={elevation}
    $flexDirection={flexDirection}
    $flexWrap={flexWrap}
    $flexGap={flexGap}
    $justifyContent={justifyContent}
    $radius={radius}
    {...other}
  >
    {children}
  </BoxStyled>
);
