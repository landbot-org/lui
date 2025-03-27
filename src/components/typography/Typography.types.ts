import { ElementType, ReactNode } from 'react';
import { ColorsTypes } from '../../shared/theme.types';
import { BaseSpacingProps } from '../base-spacing';

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

export type FontWeightVariants = 400 | 500 | 700;

export type TypographyProps<TAs extends ElementType = 'p'> = {
  as?: TAs;
  children?: ReactNode;
  color?: ColorsTypes;
  fontWeight?: FontWeightVariants;
  ellipsize?: boolean;
  variant?: TypographyVariants;
} & BaseSpacingProps &
  React.ComponentPropsWithoutRef<TAs>;

export interface TypographyStyledProps {
  $color: TypographyProps['color'];
  $ellipsize: TypographyProps['ellipsize'];
  $fontWeight: TypographyProps['fontWeight'];
  $variant: TypographyProps['variant'];
}
