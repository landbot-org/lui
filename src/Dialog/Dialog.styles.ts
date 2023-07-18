import { FloatingOverlay } from '@floating-ui/react';
import styled from 'styled-components';
import { Box } from '../Box';

export const StyledFloatingOverlay = styled(FloatingOverlay)`
  background-color: rgba(16, 22, 26, 0.7);
  display: grid;
  place-items: center;
`;

export const StyledContent = styled(Box)<{ $width?: number }>`
  position: relative;
  z-index: 1000;
  width: ${({ $width }) => $width && `${$width}px`};
  max-width: 95vw;
  max-height: 95vh;
  overflow: auto;
`;

export const StyledDialogCloseWrapper = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
`;
