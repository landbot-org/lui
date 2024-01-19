import React from 'react';

import { BaseSpacingProps } from '../BaseSpacingz';
import { ColorsTypes } from '../shared/theme.types';

export type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'text16'
  | 'text14'
  | 'text12'
  | 'text10';

type FontWeightVariants = 400 | 500 | 700;

export interface TypographyProps extends BaseSpacingProps, React.HTMLAttributes<HTMLParagraphElement> {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  color?: ColorsTypes;
  fontWeight?: FontWeightVariants;
  ellipsize?: boolean;
  variant?: TypographyVariants;
}

export interface TypographyStyledProps {
  $color: TypographyProps['color'];
  $ellipsize: TypographyProps['ellipsize'];
  $fontWeight: TypographyProps['fontWeight'];
  $variant: TypographyProps['variant'];
}
