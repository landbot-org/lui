import styled from 'styled-components';
import { Box } from '../Box';

export const StyledPopoverContent = styled(Box)`
  background-color: ${({ theme }) => theme.palette.white.main};
  border: 1px solid ${({ theme }) => theme.palette.neutral[300]};
  border-radius: 4px;
  padding: 16px;
`;
