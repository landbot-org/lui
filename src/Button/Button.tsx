import React from 'react';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { Size } from '../Icon/types';
import { Spinner } from '../Spinner';
import { StyledButton, StyledLink, StyledTypography, StyledContent } from './Button.styles';
import { TYPOGRAPHY_VARIANT_MAPPING, SPINNER_VARIANT_MAPPING } from './constants';
import { ButtonProps, SizeTypes } from './types';

export const Button = ({
  color = 'pink.main',
  size = 'medium',
  variant = 'contained',
  disabled = false,
  fullWidth = false,
  href,
  isLoading = false,
  children,
  startIcon,
  endIcon,
  onClick,
  ...rest
}: ButtonProps) => {
  const BaseButton = (href ? StyledLink : StyledButton) as React.ElementType;

  const sizeIcon: Record<SizeTypes, Size> = {
    small: '0.5x',
    medium: '1x',
    large: '1.5x',
  };

  const hasChildren = Boolean(children);

  return (
    <BaseButton
      $color={color}
      $fullWidth={fullWidth}
      $size={size}
      $variant={variant}
      $hasChildren={hasChildren}
      $isLoading={isLoading}
      disabled={disabled}
      href={href}
      onClick={onClick}
      {...rest}
    >
      {isLoading && (
        <div style={{ position: 'absolute' }}>
          <Spinner size={SPINNER_VARIANT_MAPPING[size]} />
        </div>
      )}

      <StyledContent isLoading={isLoading}>
        {startIcon && (
          <Box mr={hasChildren ? 1 : undefined}>
            <Icon icon={startIcon} size={sizeIcon[size]} />
          </Box>
        )}
        {hasChildren && (
          <StyledTypography
            $color={color}
            $variant={variant}
            disabled={disabled}
            variant={TYPOGRAPHY_VARIANT_MAPPING[size]}
            forwardedAs="span"
          >
            {children}
          </StyledTypography>
        )}
        {endIcon && (
          <Box ml={hasChildren ? 1 : undefined}>
            <Icon icon={endIcon} size={sizeIcon[size]} />
          </Box>
        )}
      </StyledContent>
    </BaseButton>
  );
};
