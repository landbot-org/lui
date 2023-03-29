import { css } from 'styled-components';
import type { Theme } from './theme.types';
import { pxToRem } from './mixins';

interface InputStylesProps {
  theme: Theme;
  $disabled?: boolean;
  $error?: boolean;
}

export const inputBorderStyle = css<InputStylesProps>`
  border-width: ${pxToRem(1)}rem;
  border-style: solid;
  border-color: ${({ $error, theme }) => ($error ? theme.palette.error.main : theme.palette.neutral[300])};
  border-radius: ${pxToRem(4)}rem;

  :hover {
    border-color: ${({ $error, theme }) => ($error ? theme.palette.error.main : theme.palette.neutral.main)};
  }

  :focus-within {
    border-color: ${({ $error, theme }) => ($error ? theme.palette.error.main : theme.palette.purple.main)};
    outline: ${pxToRem(2)}rem solid
      ${({ $error, theme }) => ($error ? theme.palette.error.light : theme.palette.blue[300])};
  }

  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      :hover {
        border-color: ${theme.palette.neutral[300]};
      }
    `}
`;

export const inputBackgroundStyle = css<InputStylesProps>`
  background-color: ${({ $disabled, theme }) => ($disabled ? theme.palette.neutral[100] : theme.palette.white.main)};
`;

export const inputGroupColorStyle = css<InputStylesProps>`
  color: ${({ $disabled, theme }) => ($disabled ? theme.palette.neutral[300] : theme.palette.neutral[400])};
`;

export const inputCursorStyle = css<InputStylesProps>`
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'text')};
`;

export const inputColorStyle = css<InputStylesProps>`
  color: ${({ $disabled, theme }) => ($disabled ? theme.palette.neutral[300] : theme.palette.blue.main)};

  ::placeholder {
    color: ${({ theme }) => theme.palette.neutral[400]};
  }

  :read-only {
    color: ${({ theme }) => theme.palette.neutral[400]};
  }
`;

export const inputFontStyles = css<InputStylesProps>`
  font-family: ${({ theme }) => theme.typography.font.primary};
  font-size: ${pxToRem(16)}rem;
`;
