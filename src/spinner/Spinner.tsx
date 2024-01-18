import React from 'react';

import { PillStyled, PillWrapperStyled, SpinnerStyled } from './Spinner.styles';
import { SpinnerProps } from './Spinner.types';
import { NUMBER_OF_PILLS } from './constants';

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
