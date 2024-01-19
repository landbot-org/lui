import React from 'react';

import { ColorsTypes } from '../shared/theme.types';

export type TagSizeTypes = 'small' | 'medium' | 'large';

export type TagVariantTypes = 'filled' | 'outlined';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  color?: ColorsTypes;
  backgroundColor?: ColorsTypes;
  borderColor?: ColorsTypes;
  variant?: TagVariantTypes;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  size?: TagSizeTypes;
}
