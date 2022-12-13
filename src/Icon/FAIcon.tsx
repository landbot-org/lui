import React from 'react';
import { getColorFromTheme } from '../shared/mixins';
import { theme } from '../shared/theme';
import { StyledFAIcon } from './FAIcon.styles';
import { FAIconProps } from './types';

export const FAIcon = ({ icon, size = '1x', color = 'inherit', ...rest }: FAIconProps) => (
  <StyledFAIcon
    icon={icon}
    $size={size}
    color={color === 'inherit' ? color : getColorFromTheme(theme, color)}
    {...rest}
  />
);
