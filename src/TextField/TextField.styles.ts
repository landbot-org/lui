import styled, { css } from 'styled-components';
import { pxToRem } from '../shared/mixins';
import { Typography } from '../Typography';

export const FormInput = styled.div<{ $disabled?: boolean }>`
  padding: 0 ${pxToRem(16)}rem;
  border: ${pxToRem(1)}rem solid ${({ theme }) => theme.palette.neutral[300]};
  border-radius: ${pxToRem(4)}rem;
  height: ${pxToRem(40)}rem;
  display: flex;
  align-items: center;
  cursor: text;
  background-color: ${({ theme }) => theme.palette.white.main};
  color: ${({ theme }) => theme.palette.neutral[400]};

  :hover {
    border-color: ${({ theme }) => theme.palette.neutral.main};
  }

  :focus-within {
    border-color: ${({ theme }) => theme.palette.purple.main};
  }

  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      color: ${theme.palette.neutral[300]};
      background-color: ${theme.palette.neutral[100]};
      cursor: not-allowed;

      :hover,
      :focus-within {
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
`;

export const FormHelperText = styled(Typography)`
  margin-top: ${pxToRem(4)}rem;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: ${pxToRem(4)}rem;
`;
