import React from 'react';

import { PillStyled, PillWrapperStyled, SpinnerStyled } from './Spinner.styles';
import { NUMBER_OF_PILLS } from './constants';
import { SpinnerProps } from './types';

const arrayPills = Array.from({ length: NUMBER_OF_PILLS }, (_, i) => i);

export const Spinner = ({ size = 'M', color, ...rest }: SpinnerProps) => (
  <SpinnerStyled aria-busy="true" aria-live="polite" $color={color} $size={size} {...rest}>
    {arrayPills.map((n) => (
      <PillWrapperStyled key={n} $nth={n}>
        <PillStyled $nth={n} />
      </PillWrapperStyled>
    ))}
  </SpinnerStyled>
);
