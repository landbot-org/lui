import { HTMLAttributes, ReactNode } from 'react';

import { ColorsTypes } from '../../shared/theme.types';

export type TagSizeTypes = 'small' | 'medium' | 'large';

export type TagVariantTypes = 'filled' | 'outlined';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  color?: ColorsTypes;
  backgroundColor?: ColorsTypes;
  borderColor?: ColorsTypes;
  variant?: TagVariantTypes;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  size?: TagSizeTypes;
}
