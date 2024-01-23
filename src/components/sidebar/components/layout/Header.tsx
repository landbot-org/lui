import { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

import { StyledHeader } from './Header.styles';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const SidebarHeader = forwardRef(function Header(
  { children, ...rest }: HeaderProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <StyledHeader ref={ref} {...rest}>
      {children}
    </StyledHeader>
  );
});
