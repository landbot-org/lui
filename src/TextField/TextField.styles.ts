import styled, { css } from 'styled-components';
import type { Theme } from '../shared/theme.types';
import { pxToRem } from '../shared/mixins';
import { Typography } from '../Typography';

interface FormInputProps {
  theme: Theme;
  $disabled?: boolean;
  $error?: boolean;
}

const getBorderStyle = ({ $error, theme }: FormInputProps) => css`
  border-color: ${$error ? theme.palette.error.main : theme.palette.neutral[300]};

  :hover {
    border-color: ${$error ? theme.palette.error.main : theme.palette.neutral.main};
  }

  :focus-within {
    border-color: ${$error ? theme.palette.error.main : theme.palette.purple.main};
    outline: 2px solid ${$error ? theme.palette.error.light : theme.palette.blue[300]};
  }
`;

export const FormInput = styled.div<FormInputProps>`
  padding: 0 ${pxToRem(16)}rem;
  border-width: ${pxToRem(1)}rem;
  border-style: solid;
  border-radius: ${pxToRem(4)}rem;
  height: ${pxToRem(40)}rem;
  display: flex;
  align-items: center;
  cursor: text;
  background-color: ${({ theme }) => theme.palette.white.main};
  color: ${({ theme }) => theme.palette.neutral[400]};

  ${getBorderStyle}

  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      color: ${theme.palette.neutral[300]};
      background-color: ${theme.palette.neutral[100]};
      cursor: not-allowed;

      :hover {
        border-color: ${theme.palette.neutral[300]};
      }
    `}
`;

export const StyledInput = styled.input`
  border: 0;
  outline: 0;
  flex-grow: 1;
  font-size: ${pxToRem(16)}rem;
  color: ${({ theme }) => theme.palette.blue.main};
  background-color: transparent;

  ::placeholder {
    color: ${({ theme }) => theme.palette.neutral[400]};
  }

  :disabled {
    color: ${({ theme }) => theme.palette.neutral[300]};
    cursor: not-allowed;
  }

  :read-only {
    color: ${({ theme }) => theme.palette.neutral[400]};
  }
`;

export const FormHelperText = styled(Typography)`
  margin-top: ${pxToRem(4)}rem;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: ${pxToRem(4)}rem;
`;
