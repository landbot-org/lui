import { styled } from 'styled-components';
import { Box } from '../box';

export const StyledContent = styled(Box)<{ $width: number }>`
  position: relative;
  z-index: 1000;
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
