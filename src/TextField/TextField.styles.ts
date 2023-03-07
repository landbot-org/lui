import styled, { css } from 'styled-components';
import { Typography } from '../Typography';

export const FormInput = styled.div<{ $disabled?: boolean }>`
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.palette.neutral[300]};
  border-radius: 4px;
  height: 40px;
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
  font-size: 16px;
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
  margin-top: 4px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 4px;
`;
