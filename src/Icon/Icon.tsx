import React, { useMemo } from 'react';
import { pxToRem } from '../shared/mixins';
import { DIMENSIONS } from './constants';
import { StyledIconContainer } from './Icon.styles';
import { IconProps } from './types';

export const Icon = ({ icon, size = '1x', ...rest }: IconProps) => {
  const dimensions = pxToRem(DIMENSIONS[size]);

  return (
    <StyledIconContainer $width={dimensions} $height={dimensions}>
      {icon}
    </StyledIconContainer>
  );
};
