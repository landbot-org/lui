import { styled } from 'styled-components';

import {
  inputBackgroundStyle,
  inputBorderStyle,
  inputColorStyle,
  inputCursorStyle,
  inputFontStyles,
  inputGroupColorStyle,
} from '../../shared/inputStyles';
import { getColorFromTheme, pxToRem } from '../../shared/mixins';
import type { ColorsTypes, Theme } from '../../shared/theme.types';

interface FormInputProps {
  theme: Theme;
  hasEnd?: boolean;
  $disabled?: boolean;
  $error?: boolean | null;
  $borderColor?: ColorsTypes;
  $borderWidth?: number;
  $height?: number;
  borderStyle?: string;
}

export const StyledInputGroup = styled.div<FormInputProps>`
  ${({ borderStyle }) => borderStyle ?? inputBorderStyle};
  ${inputBackgroundStyle}
  ${inputGroupColorStyle}
  ${inputCursorStyle}
  height: ${({ $height }) => pxToRem($height ?? 40)}rem;
  padding: 0 ${pxToRem(16)}rem;
  display: flex;
  align-items: center;
  border-color: ${({ $borderColor, theme }) => getColorFromTheme(theme, $borderColor ?? 'blue.main')};
  border-width: ${({ $borderWidth }) => pxToRem($borderWidth ?? 1)}rem;
  ${({ hasEnd }) => !hasEnd && 'border-right: 0;'}
  ${({ hasEnd }) => !hasEnd && 'border-radius: 4px 0px 0px 4px;'}
`;

export const StyledInput = styled.input<FormInputProps>`
  ${inputColorStyle}
  ${inputFontStyles}
  flex-grow: 1;
  /* fixes flex grow */
  min-width: 0;
  border: 0;
  outline: 0;
  background-color: transparent;
`;
