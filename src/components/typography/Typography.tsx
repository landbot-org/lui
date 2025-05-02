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
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  ...rest
}: TypographyProps<TAs>) => {
  return (
    <BaseTypography
      as={as || VARIANT_MAPPING[variant]}
      $color={color}
      $ellipsize={ellipsize}
      $fontWeight={fontWeight}
      $variant={variant}
      $m={m}
      $mt={mt}
      $mr={mr}
      $mb={mb}
      $ml={ml}
      $mx={mx}
      $my={my}
      $p={p}
      $pt={pt}
      $pr={pr}
      $pb={pb}
      $pl={pl}
      $px={px}
      $py={py}
      {...rest}
    >
      {children}
    </BaseTypography>
  );
};
