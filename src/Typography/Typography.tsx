import React from 'react';
import { VARIANT_MAPPING } from './constants';
import { TypographyProps } from './types';
import { BaseTypography } from './Typography.styles';

export const Typography = ({ as, children, variant = 'body1', weight = 400, ...rest }: TypographyProps) => {
  return (
    <BaseTypography as={as || VARIANT_MAPPING[variant]} variant={variant} weight={weight} {...rest}>
      {children}
    </BaseTypography>
  );
};
