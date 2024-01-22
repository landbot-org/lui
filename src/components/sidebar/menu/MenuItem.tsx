import React, { ForwardedRef, LiHTMLAttributes, ReactNode, forwardRef, useContext } from 'react';

import { SidebarContext } from '../Sidebar';
import { ItemContent } from '../layout/ItemContent';
import { LevelContext } from './Menu';

import { StyledItem, StyledMenuItem } from './MenuItem.styles';

export type MenuItemProps = LiHTMLAttributes<HTMLLIElement> & {
  children?: ReactNode;
  icon?: ReactNode;
  active?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
};

export const SidebarMenuItem = forwardRef(function MenuItem(
  { children, icon, active, prefix, suffix, ...rest }: MenuItemProps,
  ref: ForwardedRef<HTMLLIElement>,
) {
  const level = useContext(LevelContext);

  const { onSelectMenuItem, minified } = useContext(SidebarContext);

  return (
    <StyledMenuItem ref={ref} {...rest}>
      <StyledItem
        role="button"
        $active={active}
        $firstchild={level === 0}
        onClick={() => {
          onSelectMenuItem && onSelectMenuItem();
        }}
      >
        <ItemContent icon={icon} prefix={prefix} suffix={suffix} minified={minified} firstchild={level === 0}>
          {children}
        </ItemContent>
      </StyledItem>
    </StyledMenuItem>
  );
});
