import React from 'react';
import { ColorsTypes } from '../shared/theme.types';

export type Size = '0.5x' | '1x' | '1.25x' | '1.5x' | '2x' | '2.5x' | '3x' | '4x' | '5x';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: ColorsTypes | 'inherit';
  icon: React.ReactNode;
  size?: Size;
  gridArea?: GRID_AREA;
}

export enum GRID_AREA {
  FIXED_WIDTH = 'FIXED_WIDTH',
  NONE = 'NONE',
  ROOMY = 'ROOMY',
  SQUARE = 'SQUARE',
}
