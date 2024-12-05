import { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';
import { StyledToggle } from './Toggle.styles';

export interface ToggleProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const SidebarToggle = forwardRef(function Toggle(
  { children, ...rest }: ToggleProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <StyledToggle ref={ref} {...rest}>
      {children}
    </StyledToggle>
  );
});
