import React from 'react';

import { BaseTypography } from './Typography.styles';
import { VARIANT_MAPPING } from './constants';
import { TypographyProps } from './types';

export const Typography = ({
  as,
  children,
  color,
  ellipsize,
  fontWeight,
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
