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

interface StyledTextAreaProps {
  $disabled?: boolean;
  $error?: boolean;
  theme: Theme;
}

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  ${inputBorderStyle}
  ${inputBackgroundStyle}
  ${inputGroupColorStyle}
  ${inputCursorStyle}
  ${inputColorStyle}
  ${inputFontStyles}
  flex-grow: 1;
  min-height: ${pxToRem(80)}rem;
  padding: ${pxToRem(8)}rem ${pxToRem(16)}rem;
`;
