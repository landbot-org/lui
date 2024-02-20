import { ElementType, forwardRef } from 'react';

import { Box } from '../box';
import { Size } from '../icon/Icon.types';
import { Spinner } from '../spinner';
import { SPINNER_VARIANT_MAPPING, TYPOGRAPHY_VARIANT_MAPPING } from './Button.constants';
import { ButtonProps, ButtonSizeTypes } from './Button.types';

import {
  StyledButton,
  StyledContent,
  StyledIcon,
  StyledLink,
  StyledSpinnerWrapper,
  StyledTypography,
} from './Button.styles';

export const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    {
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
      textAlign = 'center',
      ellipsize,
      ...rest
    },
    ref,
  ) => {
    const BaseButton = (href ? StyledLink : StyledButton) as ElementType;

    const sizeIcon: Record<ButtonSizeTypes, Size> = {
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
        disabled={disabled || isLoading}
        href={href}
        onClick={onClick}
        {...rest}
        ref={ref}
      >
        {isLoading && (
          <StyledSpinnerWrapper>
            <Spinner size={SPINNER_VARIANT_MAPPING[size]} />
          </StyledSpinnerWrapper>
        )}

        <StyledContent $isLoading={isLoading}>
          {startIcon && (
            <Box display="flex" mr={hasChildren ? 1 : undefined}>
              <StyledIcon
                icon={startIcon}
                size={sizeIcon[size]}
                $isLoading={isLoading}
                disabled={disabled || isLoading}
                $variant={variant}
                $color={color}
              />
            </Box>
          )}
          {hasChildren && (
            <StyledTypography
              $textAlign={textAlign}
              forwardedAs={'span'}
              variant={TYPOGRAPHY_VARIANT_MAPPING[size]}
              fontWeight={700}
              ellipsize={ellipsize}
            >
              {children}
            </StyledTypography>
          )}
          {endIcon && (
            <Box display="flex" ml={hasChildren ? 1 : undefined}>
              <StyledIcon
                icon={endIcon}
                size={sizeIcon[size]}
                $isLoading={isLoading}
                disabled={disabled || isLoading}
                $variant={variant}
                $color={color}
              />
            </Box>
          )}
        </StyledContent>
      </BaseButton>
    );
  },
);

Button.displayName = 'Button';
