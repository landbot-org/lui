import { styled } from 'styled-components';
import { Box } from '../box';

export const StyledContainer = styled(Box).attrs({
  backgroundColor: 'white.main',
  radius: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
})`
  width: fit-content;
`;
