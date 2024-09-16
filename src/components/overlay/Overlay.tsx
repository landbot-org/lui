import { ReactNode } from 'react';
import { StyledFloatingOverlay } from './Overlay.styles';

export const Overlay = ({ lockScroll, children }: { children?: ReactNode; lockScroll?: boolean | undefined }) => {
  return <StyledFloatingOverlay lockScroll={lockScroll}>{children}</StyledFloatingOverlay>;
};
