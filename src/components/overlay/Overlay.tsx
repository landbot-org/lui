import { ReactNode } from 'react';
import { StyledFloatingOverlay } from './Overlay.styles';

interface OverlayProps {
  lockScroll?: boolean;
  children?: ReactNode;
  zIndex?: number;
}

export const Overlay = ({ lockScroll, children, zIndex = 60 }: OverlayProps) => {
  return (
    <StyledFloatingOverlay lockScroll={lockScroll} $zIndex={zIndex}>
      {children}
    </StyledFloatingOverlay>
  );
};
