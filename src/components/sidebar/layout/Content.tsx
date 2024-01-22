import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

import { StyledContent } from './Content.styles';

export type ContentProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

export const SidebarContent = forwardRef(function Content(
  { children, ...rest }: ContentProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <StyledContent ref={ref} {...rest}>
      {children}
    </StyledContent>
  );
});
