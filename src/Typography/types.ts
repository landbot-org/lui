import React from 'react';

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
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline';

type FontWeightVariants = 400 | 500 | 700;

export interface TypographyProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  color?: ColorsTypes;
  fontWeight?: FontWeightVariants;
  ellipsize?: boolean;
  variant?: TypographyVariants;
}
