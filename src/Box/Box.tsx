import React from 'react';
import { BoxProps } from './types';
import { BoxStyled } from './Box.styles';

export const Box = (props: BoxProps) => {
  const { className, as = 'div', children = null, display = 'block', ...other } = props;

  return (
    <BoxStyled as={as} className={className} display={display} {...other}>
      {children}
    </BoxStyled>
  );
};
