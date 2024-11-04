import { styled } from 'styled-components';
import { Box } from '../box';

export const StyledContainer = styled(Box).attrs({
  backgroundColor: 'white.main',
  p: 1,
  radius: 1,
  border: 1,
  borderColor: 'neutral.200',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  elevation: 2,
})`
  width: fit-content;
`;
