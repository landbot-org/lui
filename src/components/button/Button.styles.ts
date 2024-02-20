import { css, styled } from 'styled-components';

import { Icon } from '../icon';
import { Typography } from '../typography';
import type { TypographyProps } from '../typography/Typography.types';
import { SIZES_MAPPING } from './Button.constants';
import { ButtonColorTypes, ButtonSizeTypes, ButtonTextAlignTypes, ButtonVariants } from './Button.types';
import { getButtonVariantStyles, getIconColor } from './Button.utils';

interface StyledButtonProps {
  $color: ButtonColorTypes;
  $fullWidth: boolean;
  $size: ButtonSizeTypes;
  $variant: ButtonVariants;
  $hasChildren: boolean;
  $isLoading: boolean;
  disabled: boolean;
}

interface StyledContentProps {
  $isLoading: boolean;
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
  white-space: nowrap;

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

export const StyledSpinnerWrapper = styled.div`
  position: absolute;
`;

export const StyledContent = styled.div<StyledContentProps>`
  min-width: 0;
  flex-grow: 1;
  align-items: center;
  display: inline-flex;

  visibility: ${({ $isLoading }) => ($isLoading ? 'hidden' : 'inherit')};
`;

interface StyledTypographyProps extends TypographyProps {
  $textAlign?: ButtonTextAlignTypes;
}

export const StyledTypography = styled(Typography)<StyledTypographyProps>`
  flex-grow: 1;
  text-align: ${({ $textAlign }) => $textAlign};
`;

interface StyledIconProps {
  $color: ButtonColorTypes;
  $variant: ButtonVariants;
  $isLoading: boolean;
  disabled: boolean;
}

export const StyledIcon = styled(Icon)<StyledIconProps>`
  color: ${({ theme, $color, $variant, disabled, $isLoading }) =>
    getIconColor(theme, $color, disabled, $isLoading, $variant)};
`;
