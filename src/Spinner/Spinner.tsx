import React from 'react';

import { SpinnerProps } from './types';

import { SpinnerStyled, PillWrapperStyled, PillStyled } from './Spinner.styles';

import { NUMBER_OF_PILLS } from './constants';

const arrayPills = Array.from({ length: NUMBER_OF_PILLS }, (_, i) => i);

export const Spinner = ({ size = 'M', color = 'blue.main' }: SpinnerProps) => (
  <SpinnerStyled $size={size}>
    {arrayPills.map((n) => (
      <PillWrapperStyled key={n} $nth={n}>
        <PillStyled $nth={n} $color={color} />
      </PillWrapperStyled>
    ))}
  </SpinnerStyled>
);
