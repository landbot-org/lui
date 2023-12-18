import styled from 'styled-components';
import type { Theme } from '../shared/theme.types';
import {
  inputBackgroundStyle,
  inputBorderStyle,
  inputColorStyle,
  inputCursorStyle,
  inputGroupColorStyle,
  inputFontStyles,
} from '../shared/inputStyles';
import { pxToRem } from '../shared/mixins';

interface FormInputProps {
  theme: Theme;
  $disabled?: boolean;
  $error?: boolean | null;
}

export const StyledInputGroup = styled.div<FormInputProps>`
  ${inputBorderStyle}
  ${inputBackgroundStyle}
  ${inputGroupColorStyle}
  ${inputCursorStyle}
  height: ${pxToRem(40)}rem;
  padding: 0 ${pxToRem(16)}rem;
  display: flex;
  align-items: center;
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
