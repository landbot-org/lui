import styled, { css } from 'styled-components';
import { Typography } from '../Typography';
import { SIZES_MAPPING } from './constants';
import { ButtonVariants, ColorTypes, SizeTypes } from './types';
import { getButtonVariantStyles, getTypographyVariantStyles } from './utils';

interface StyledButtonProps {
  $color: ColorTypes;
  $fullWidth: boolean;
  $size: SizeTypes;
  $variant: ButtonVariants;
  disabled: boolean;
}

interface StyledTypographyProps {
  $color: ColorTypes;
  $variant: ButtonVariants;
  disabled: boolean;
  variant: string;
  as: string;
}

const BaseButtonStyles = css<StyledButtonProps>`
  ${({ theme, $color, $variant, disabled }) => getButtonVariantStyles(theme, $color, $variant, disabled)}
  align-items: center;
  display: inline-flex;
  justify-content: center;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : undefined)};
  height: ${({ $size }) => SIZES_MAPPING[$size]};
  min-width: 80px;
  padding: 0 16px;
  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  }
`;

export const StyledLink = styled.a<StyledButtonProps>`
  ${BaseButtonStyles}
  text-decoration: none !important;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${BaseButtonStyles}
`;

export const StyledTypography = styled(Typography)<StyledTypographyProps>`
  ${({ theme, $color, $variant, disabled }) => getTypographyVariantStyles(theme, $color, $variant, disabled)}
`;
