import { styled } from 'styled-components';
import { Theme } from "../../../shared/theme.types";

export const StyledSendBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;

  //background: red;
`;

export const StyleInputGroup = styled.div<{ $error: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid ${({ $error, theme } : { $error: boolean, theme: Theme}) => $error ? theme.palette.error.main : 'transparent'};;
  border-radius: 12px;
  &:hover {
    border: 1px solid ${({ $error, theme } : { $error: boolean, theme: Theme}) => $error ? theme.palette.error.main : theme.palette.neutral[400]};
  }
  &:focus-within {
    border: 1px solid ${({ $error, theme } : { $error: boolean, theme: Theme}) => $error ? theme.palette.error.main : theme.palette.purple.main};
  }
`;

export const StyledHelperText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 4px;
`;

export const StyledTextArea = styled.textarea`
  font-family: ${({ theme }) => theme.typography.font.primary};
  font-size: 16px;
  width: 100%;
  max-height: 100px;
  overflow: auto;
  margin: 0;
  line-height: 1.5;
  background: transparent;
  border: none;
  outline: none;
  resize: none;

`;
