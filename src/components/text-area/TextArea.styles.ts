import { styled } from 'styled-components';
import {
  inputBackgroundStyle,
  inputBorderStyle,
  inputColorStyle,
  inputCursorStyle,
  inputFontStyles,
  inputGroupColorStyle,
} from '../../shared/inputStyles';
import { pxToRem } from '../../shared/mixins';
import type { Theme } from '../../shared/theme.types';
import { Resize } from './TextArea.types';

interface StyledTextAreaProps {
  $disabled?: boolean;
  $error?: boolean;
  $resize: Resize;
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
  resize: ${({ $resize }) => $resize};
`;
