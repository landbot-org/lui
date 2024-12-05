import { styled } from 'styled-components';
import {
  InputStylesProps,
  inputBackgroundStyle,
  inputBorderStyle,
  inputCursorStyle,
} from '../../../../shared/inputStyles';
import { pxToRem } from '../../../../shared/mixins';
import { Box } from '../../../box';
import { Icon } from '../../../icon';

export const StyledInputGroup = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  p: 1.5,
})<InputStylesProps>`
  ${inputBorderStyle}
  ${inputBackgroundStyle}
  ${inputCursorStyle}
  border-radius: ${pxToRem(12)}rem;
`;

export const StyledTextArea = styled.textarea`
  font-family: ${({ theme }) => theme.typography.font.primary};
  font-size: ${pxToRem(16)}rem;
  width: 100%;
  max-height: ${pxToRem(100)}rem;
  overflow: auto;
  margin: 0;
  line-height: 1.5;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
`;

export const StyledIcon = styled(Icon)`
  cursor: pointer;
`;
