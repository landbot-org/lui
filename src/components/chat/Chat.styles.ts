import { styled } from 'styled-components';
import { Box } from '../box';

export const StyledChat = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
})`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.purple[50]};
`;
