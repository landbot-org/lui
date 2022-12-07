import React from 'react';
import { StyledButton, StyledLink, StyledTypography } from './Button.styles';
import { ButtonProps } from './types';

export const Button = ({
  color = 'pink.main',
  size = 'medium',
  variant = 'contained',
  disabled = false,
  href,
  children,
  onClick,
  ...rest
}: ButtonProps) => {
  const BaseButton = (href ? StyledLink : StyledButton) as React.ElementType;

  return (
    <BaseButton
      $color={color}
      $size={size}
      $variant={variant}
      disabled={disabled}
      href={href}
      onClick={onClick}
      {...rest}
    >
      <StyledTypography $color={color} $variant={variant} as="span" disabled={disabled} variant="body1">
        {children}
      </StyledTypography>
    </BaseButton>
  );
};
