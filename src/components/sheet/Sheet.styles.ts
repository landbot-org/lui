import styled from 'styled-components';
import { getColorFromTheme } from '../../shared/mixins';
import { Box } from '../box';

export const StyledContent = styled(Box).attrs({
  position: 'absolute',
  top: 0,
  right: 0,
  elevation: 3,
  backgroundColor: 'white.main',
  border: 0,
  radius: 0,
})<{ $width: number; $zIndex: number }>`
  z-index: ${({ $zIndex }) => $zIndex};
  width: ${({ $width }) => `${$width}px`};
  max-width: 94vw;
  max-height: 100vh;
  height: 100%;
  overflow: auto;
  border-left: 1px solid ${({ theme }) => getColorFromTheme(theme, 'neutral.300')};
`;
