import { styled } from 'styled-components';

import { Box } from '../box';

import { StyledInput, StyledInputGroup } from '../text-field/TextField.styles';

export const StyledOption = styled(Box)`
  cursor: pointer;
`;

export const StyledSelect = styled.div`
  ${StyledInputGroup}, ${StyledInput} {
    cursor: pointer;
  }

  input:read-only {
    /* overrides default read-only input color */
    color: ${({ theme }) => theme.palette.blue.main};
  }
`;
