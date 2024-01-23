import { ForwardedRef, LiHTMLAttributes, MouseEvent, ReactNode, forwardRef, useContext, useState } from 'react';

import { Tooltip, TooltipTrigger } from '../../tooltip';
import { ItemContent } from '../layout/ItemContent';
import { useSidebar } from '../useSidebar';
import { LevelContext } from './Menu';

import { StyledInnerItem, StyledItem, StyledMenuItem } from './MenuItem.styles';
import { StyledContent, StyledSubMenuContent } from './SubMenu.styles';

export interface SubMenuProps extends LiHTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  icon?: ReactNode;
  active?: boolean;
  before?: ReactNode;
  after?: ReactNode;
  variant?: 'primary' | 'secondary';
}

export const SidebarSubMenu = forwardRef(function SubMenu(
  { children, icon, active, title, before, after, variant = 'primary', ...rest }: SubMenuProps,
  ref: ForwardedRef<HTMLLIElement>,
) {
  const level = useContext(LevelContext);
  const { toggled, collapsed } = useSidebar();

  const [open, setOpen] = useState(false);

  return (
    <StyledMenuItem ref={ref} {...rest}>
      {collapsed ? (
        <>
          <StyledItem
            role="button"
            $active={active}
            $firstchild={level === 0}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <ItemContent
              icon={icon}
              before={before}
              after={after}
              toggled={toggled}
              collapsed={collapsed}
              firstchild={level === 0}
            >
              {title}
            </ItemContent>
          </StyledItem>
          {open && (
            <StyledInnerItem>
              <LevelContext.Provider value={level + 1}>
                <StyledSubMenuContent>{children}</StyledSubMenuContent>
              </LevelContext.Provider>
            </StyledInnerItem>
          )}
        </>
      ) : (
        <Tooltip
          placement="right-start"
          interaction="click"
          closeOnClickInside
          color={variant === 'primary' ? 'blue' : 'white'}
        >
          <TooltipTrigger>
            <StyledItem
              role="button"
              $active={active}
              $firstchild={level === 0}
              onClick={(event: MouseEvent<HTMLElement>) => {
                event.stopPropagation();
              }}
            >
              <ItemContent
                icon={icon}
                before={before}
                after={after}
                toggled={toggled}
                collapsed={collapsed}
                firstchild={level === 0}
              >
                {title}
              </ItemContent>
            </StyledItem>
          </TooltipTrigger>
          <StyledContent id="lui-sidebar">
            <LevelContext.Provider value={level + 1}>
              <StyledSubMenuContent>{children}</StyledSubMenuContent>
            </LevelContext.Provider>
          </StyledContent>
        </Tooltip>
      )}
    </StyledMenuItem>
  );
});
