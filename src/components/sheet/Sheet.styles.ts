import styled from 'styled-components';
import { Box } from '../box';

export const StyledContent = styled(Box).attrs({
  position: 'absolute',
  top: 0,
  right: 0,
  elevation: 3,
  backgroundColor: 'white.main',
  border: 1,
  radius: 0,
})<{ $width: number; $zIndex: number }>`
  z-index: ${({ $zIndex }) => $zIndex};
  width: ${({ $width }) => `${$width}px`};
  max-width: 94vw;
  max-height: 100vh;
  height: 100%;
  overflow: auto;
`;
