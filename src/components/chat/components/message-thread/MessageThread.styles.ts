import { styled } from 'styled-components';

import { Box } from '../../../box';

export const StyledMessageThread = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  gap: 10,
  pr: 3,
  mt: 3,
  mr: 0.5,
  ml: 3,
})`
  overflow-y: auto;
`;
