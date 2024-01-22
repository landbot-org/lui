import React, {
  Children,
  ForwardedRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  forwardRef,
} from 'react';

import { StyledMenuItem } from './Menu.styles';

export type MenuProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
};

export const LevelContext = createContext<number>(0);

export const SidebarMenu = forwardRef(function Menu(
  { children, ...rest }: MenuProps,
  ref: ForwardedRef<HTMLLIElement>,
) {
  return (
    <nav ref={ref} {...rest}>
      <LevelContext.Provider value={0}>
        <StyledMenuItem>
          {Children.toArray(children)
            .filter(Boolean)
            .map((child, index) =>
              cloneElement(child as ReactElement, {
                key: index,
              }),
            )}
        </StyledMenuItem>
      </LevelContext.Provider>
    </nav>
  );
});
