import React from 'react';
import { VARIANT_MAPPING } from './constants';
import { TypographyProps } from './types';
import { BaseTypography } from './Typography.styles';

export const Typography = ({
  as,
  children,
  color,
  ellipsize,
  fontWeight = 400,
  variant = 'text16',
  ...rest
}: TypographyProps) => {
  return (
    <BaseTypography
      as={as || VARIANT_MAPPING[variant]}
      $color={color}
      $ellipsize={ellipsize}
      $fontWeight={fontWeight}
      $variant={variant}
      {...rest}
    >
      {children}
    </BaseTypography>
  );
};
