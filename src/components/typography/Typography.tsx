import { VARIANT_MAPPING } from './Typography.constants';
import { BaseTypography } from './Typography.styles';
import { TypographyProps } from './Typography.types';

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
