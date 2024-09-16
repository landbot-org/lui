import styled from 'styled-components';
import { FloatingOverlay } from '@floating-ui/react';

export const StyledFloatingOverlay = styled(FloatingOverlay)`
  background-color: rgba(16, 22, 26, 0.7);
  display: grid;
  place-items: center;
  z-index: 60;
`;
