import React from 'react';
import { HorizontalDividerStyled, VerticalDividerStyled } from './Divider.styles';
import { DividerProps } from './types';

export const Divider = ({ orientation = 'horizontal', size = 'small', ...rest }: DividerProps) =>
  orientation === 'vertical' ? (
    <VerticalDividerStyled $size={size} {...rest} />
  ) : (
    <HorizontalDividerStyled $size={size} {...rest} />
  );
