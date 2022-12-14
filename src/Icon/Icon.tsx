import React from 'react';
import { StyledIconContainer } from './Icon.styles';
import { GRID_AREA, IconProps } from './types';

export const Icon = ({ icon, size = '1x', gridArea = GRID_AREA.NONE, color = 'inherit' }: IconProps) => {
  return (
    <StyledIconContainer $color={color} $gridArea={gridArea} $size={size}>
      {icon}
    </StyledIconContainer>
  );
};
