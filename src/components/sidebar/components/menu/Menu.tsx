import { ForwardedRef, HTMLAttributes, ReactNode, createContext, forwardRef } from 'react';

import { StyledMenuItem } from './Menu.styles';

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const LevelContext = createContext<number>(0);

export const SidebarMenu = forwardRef(function Menu(
  { children, ...rest }: MenuProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div ref={ref} {...rest}>
      <LevelContext.Provider value={0}>
        <StyledMenuItem>{children}</StyledMenuItem>
      </LevelContext.Provider>
    </div>
  );
});
