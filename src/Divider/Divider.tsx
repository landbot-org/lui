import React from 'react';
import { HorizontalDividerStyled, VerticalDividerStyled } from './Divider.styles';
import { DividerProps } from './types';

export const Divider = ({ orientation = 'horizontal', size = 'small', ...rest }: DividerProps) =>
  orientation === 'vertical' ? (
    <VerticalDividerStyled role="separator" aria-orientation="vertical" $size={size} {...rest} />
  ) : (
    <HorizontalDividerStyled $size={size} {...rest} />
  );
