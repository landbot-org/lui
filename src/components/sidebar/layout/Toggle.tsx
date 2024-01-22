import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

import { StyledToggle } from './Toggle.styles';

export type ToggleProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

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
