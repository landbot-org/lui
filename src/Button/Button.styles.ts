import styled, { css } from 'styled-components';
import { StyledIconContainer } from '../Icon/Icon.styles';
import { Typography } from '../Typography';
import { TypographyVariants } from '../Typography/types';
import { SIZES_MAPPING } from './constants';
import { ButtonVariants, ColorTypes, SizeTypes } from './types';
import { getButtonVariantStyles, getTypographyVariantStyles, getIconVariantStyles } from './utils';

interface StyledButtonProps {
  $color: ColorTypes;
  $fullWidth: boolean;
  $size: SizeTypes;
  $variant: ButtonVariants;
  $hasChildren: boolean;
  disabled: boolean;
}

interface StyledTypographyProps {
  $color: ColorTypes;
  $variant: ButtonVariants;
  disabled: boolean;
  variant: TypographyVariants;
}

const BaseButtonStyles = css<StyledButtonProps>`
  ${({ theme, $color, $variant, disabled }) => getButtonVariantStyles(theme, $color, $variant, disabled)}
  align-items: center;
  display: inline-flex;
  justify-content: center;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : undefined)};
  height: ${({ $size }) => SIZES_MAPPING[$size]};
  min-width: ${({ $hasChildren }) => ($hasChildren ? '80px' : 'auto')};
  padding: ${({ $hasChildren }) => ($hasChildren ? '0 16px' : '0 8px')};
  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  }
  ${StyledIconContainer} {
    ${({ theme, $color, $variant, disabled }) => getIconVariantStyles(theme, $color, $variant, disabled)}
  }
`;

export const StyledLink = styled.a<StyledButtonProps>`
  ${BaseButtonStyles}
  text-decoration: none;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${BaseButtonStyles}
`;

export const StyledTypography = styled(Typography)<StyledTypographyProps>`
  ${({ theme, $color, $variant, disabled }) => getTypographyVariantStyles(theme, $color, $variant, disabled)}
`;
