import React from 'react';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { Size } from '../Icon/types';
import { StyledButton, StyledLink, StyledTypography } from './Button.styles';
import { TYPOGRAPHY_VARIANT_MAPPING } from './constants';
import { ButtonProps, SizeTypes } from './types';

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    {
      color = 'pink.main',
      size = 'medium',
      variant = 'contained',
      disabled = false,
      fullWidth = false,
      href,
      children,
      startIcon,
      endIcon,
      onClick,
      ...rest
    },
    ref
  ) => {
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
        disabled={disabled}
        href={href}
        onClick={onClick}
        {...rest}
        ref={ref}
      >
        {startIcon && (
          <Box display="flex" mr={hasChildren ? 1 : undefined}>
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
          <Box display="flex" ml={hasChildren ? 1 : undefined}>
            <Icon icon={endIcon} size={sizeIcon[size]} />
          </Box>
        )}
      </BaseButton>
    );
  }
);

Button.displayName = 'Button';
