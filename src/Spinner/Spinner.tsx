import React from 'react';

import { SpinnerProps } from './types';

import { SpinnerStyled, PillWrapperStyled, PillStyled } from './Spinner.styles';

import { NUMBER_OF_PILLS } from './constants';

const arrayPills = Array.from({ length: NUMBER_OF_PILLS }, (_, i) => i);

export const Spinner = ({ size = 'M', color, spinnerColor = 'neutral.300', ...rest }: SpinnerProps) => (
  <SpinnerStyled aria-busy="true" aria-live="polite" $color={color} $size={size} {...rest}>
    {arrayPills.map((n) => (
      <PillWrapperStyled key={n} $nth={n}>
        <PillStyled $nth={n} $spinnerColor={spinnerColor} />
      </PillWrapperStyled>
    ))}
  </SpinnerStyled>
);
