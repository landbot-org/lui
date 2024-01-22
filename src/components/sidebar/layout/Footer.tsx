import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

import { StyledFooter } from './Footer.styles';

export type FooterProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

export const SidebarFooter = forwardRef(function Footer(
  { children, ...rest }: FooterProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <StyledFooter ref={ref} {...rest}>
      {children}
    </StyledFooter>
  );
});
