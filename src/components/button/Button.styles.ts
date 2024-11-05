import { css, styled } from 'styled-components';
import { Typography } from '../typography';
import type { TypographyProps } from '../typography/Typography.types';
import { SIZES_MAPPING } from './Button.constants';
import { ButtonColorTypes, ButtonSizeTypes, ButtonTextAlignTypes, ButtonVariants } from './Button.types';
import { getButtonVariantStyles } from './Button.utils';

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
  $variant: StyledButtonProps['$variant'];
}

const getBaseButtonPadding = ({ $variant, $hasChildren }: StyledButtonProps) => {
  if ($variant === 'menu-item') return '4px 8px';
  if ($hasChildren) return '0 16px';
  return '0 8px';
};

const BaseButtonStyles = css<StyledButtonProps>`
  ${({ theme, $color, $variant, disabled, $isLoading }) =>
    getButtonVariantStyles(theme, $color, $variant, disabled, $isLoading)}
  align-items: center;
  display: inline-flex;
  justify-content: center;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : undefined)};
  height: ${({ $size }) => SIZES_MAPPING[$size]};
  min-width: ${({ $hasChildren }) => ($hasChildren ? '80px' : 'auto')};
  padding: ${(props) => getBaseButtonPadding(props)};
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

  ${({ $variant }) => $variant === 'menu-item' && 'gap: 4px'}
`;

interface StyledTypographyProps extends TypographyProps {
  $textAlign?: ButtonTextAlignTypes;
}

export const StyledTypography = styled(Typography)<StyledTypographyProps>`
  flex-grow: 1;
  text-align: ${({ $textAlign }) => $textAlign};
`;
