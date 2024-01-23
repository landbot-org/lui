import { ForwardedRef, LiHTMLAttributes, ReactNode, forwardRef, useContext } from 'react';

import { useSidebar } from '../../useSidebar';
import { ItemContent } from '../layout/ItemContent';
import { LevelContext } from './Menu';

import { StyledItem, StyledMenuItem } from './MenuItem.styles';

export interface MenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  icon?: ReactNode;
  active?: boolean;
  before?: ReactNode;
  after?: ReactNode;
}

export const SidebarMenuItem = forwardRef(function MenuItem(
  { children, icon, active, before, after, ...rest }: MenuItemProps,
  ref: ForwardedRef<HTMLLIElement>,
) {
  const level = useContext(LevelContext);

  const { toggled, collapsed } = useSidebar();

  return (
    <StyledMenuItem ref={ref} {...rest}>
      <StyledItem role="button" $active={active} $firstchild={level === 0}>
        <ItemContent
          icon={icon}
          before={before}
          after={after}
          toggled={toggled}
          collapsed={collapsed}
          firstchild={level === 0}
        >
          {children}
        </ItemContent>
      </StyledItem>
    </StyledMenuItem>
  );
});
