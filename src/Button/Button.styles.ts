import styled, { css } from 'styled-components';
import { Typography } from '../Typography';
import { TypographyVariants } from '../Typography/types';
import { SIZES_MAPPING } from './constants';
import { ButtonVariants, ColorTypes, SizeTypes } from './types';
import { getButtonVariantStyles, getTypographyVariantStyles } from './utils';

interface StyledButtonProps {
  $color: ColorTypes;
  $fullWidth: boolean;
  $size: SizeTypes;
  $variant: ButtonVariants;
  $hasChildren: boolean;
  $isLoading: boolean;
  disabled: boolean;
}

interface StyledTypographyProps {
  $variant: ButtonVariants;
  disabled: boolean;
  variant: TypographyVariants;
}

interface StyledContentProps {
  isLoading: boolean;
}

const BaseButtonStyles = css<StyledButtonProps>`
  ${({ theme, $color, $variant, disabled, $isLoading }) =>
    getButtonVariantStyles(theme, $color, $variant, disabled, $isLoading)}
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
`;

export const StyledLink = styled.a<StyledButtonProps>`
  ${BaseButtonStyles}
  text-decoration: none;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${BaseButtonStyles}
`;

export const StyledTypography = styled(Typography)<StyledTypographyProps>`
  ${({ $variant }) => getTypographyVariantStyles($variant)}
`;

export const StyledSpinnerWrapper = styled.div`
  position: absolute;
`;

export const StyledContent = styled.div<StyledContentProps>`
  align-items: center;
  display: inline-flex;

  visibility: ${({ isLoading }) => (isLoading ? 'hidden' : 'visible')};
`;
