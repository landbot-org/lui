import React from 'react';
import { getColorFromTheme, pxToRem } from '../shared/mixins';
import { DIMENSIONS } from './constants';
import { StyledIconContainer } from './Icon.styles';
import { IconProps } from './types';
import { theme } from '../shared/theme';

export const Icon = ({ icon, size = '1x', color = 'inherit' }: IconProps) => {
  const dimensions = pxToRem(DIMENSIONS[size]);

  return (
    <StyledIconContainer
      $width={dimensions}
      $height={dimensions}
      $color={color === 'inherit' ? color : getColorFromTheme(theme, color)}
    >
      {icon}
    </StyledIconContainer>
  );
};
