import React from 'react';
import { ColorsTypes } from '../shared/theme.types';

export type SizeTypes = 'small' | 'medium' | 'large';

export type VariantTypes = 'filled' | 'outlined';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  color?: ColorsTypes;
  backgroundColor?: ColorsTypes;
  borderColor?: ColorsTypes;
  variant?: VariantTypes;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  size?: SizeTypes;
}
