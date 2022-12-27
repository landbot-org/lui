import React from 'react';
import { StyledButton, StyledLink, StyledTypography } from './Button.styles';
import { TYPOGRAPHY_VARIANT_MAPPING } from './constants';
import { ButtonProps } from './types';

export const Button = ({
  color = 'pink.main',
  size = 'medium',
  variant = 'contained',
  disabled = false,
  fullWidth = false,
  href,
  children,
  onClick,
  ...rest
}: ButtonProps) => {
  const BaseButton = (href ? StyledLink : StyledButton) as React.ElementType;

  return (
    <BaseButton
      $color={color}
      $fullWidth={fullWidth}
      $size={size}
      $variant={variant}
      disabled={disabled}
      href={href}
      onClick={onClick}
      {...rest}
    >
      <StyledTypography
        $color={color}
        $variant={variant}
        disabled={disabled}
        variant={TYPOGRAPHY_VARIANT_MAPPING[size]}
        forwardedAs="span"
      >
        {children}
      </StyledTypography>
    </BaseButton>
  );
};
