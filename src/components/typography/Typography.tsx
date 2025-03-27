import { ElementType } from 'react';
import { VARIANT_MAPPING } from './Typography.constants';
import { BaseTypography } from './Typography.styles';
import { TypographyProps } from './Typography.types';

export const Typography = <TAs extends ElementType = 'p'>({
  as,
  children,
  color,
  ellipsize,
  fontWeight,
  variant = 'text16',
  ...rest
}: TypographyProps<TAs>) => {
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
