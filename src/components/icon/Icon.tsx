import React from 'react';

import { GRID_AREA, IconProps } from './Icon.types';

import { StyledIconContainer } from './Icon.styles';

export const Icon = ({ icon, size = '1x', gridArea = GRID_AREA.NONE, color = 'inherit', ...rest }: IconProps) => (
  <StyledIconContainer $color={color} $gridArea={gridArea} $size={size} {...rest}>
    {icon}
  </StyledIconContainer>
);
