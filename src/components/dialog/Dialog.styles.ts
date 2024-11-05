import { styled } from 'styled-components';
import { Box } from '../box';

export const StyledContent = styled(Box)<{ $width: number; $zIndex: number }>`
  position: relative;
  z-index: ${({ $zIndex }) => $zIndex};
  width: ${({ $width }) => `${$width}px`};
  max-width: 95vw;
  max-height: 95vh;
  overflow: auto;
`;

export const StyledDialogCloseWrapper = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
`;
