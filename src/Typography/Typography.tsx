import React from 'react';
import { VARIANT_MAPPING } from './constants';
import { TypographyProps } from './types';
import { BaseTypography } from './Typography.styles';

export const Typography = ({
  as,
  children,
  color = 'blue.900',
  fontWeight = 400,
  variant = 'body1',
  ...rest
}: TypographyProps) => {
  return (
    <BaseTypography
      as={as || VARIANT_MAPPING[variant]}
      color={color}
      fontWeight={fontWeight}
      variant={variant}
      {...rest}
    >
      {children}
    </BaseTypography>
  );
};
