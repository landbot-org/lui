import React, { ForwardedRef, LiHTMLAttributes, ReactNode, forwardRef, useContext, useState } from 'react';

import { Tooltip, TooltipTrigger } from '../../tooltip';
import { SidebarContext } from '../Sidebar';
import { ItemContent } from '../layout/ItemContent';
import { LevelContext } from './Menu';

import { StyledInnerItem, StyledItem, StyledMenuItem } from './MenuItem.styles';
import { StyledContent, StyledSubMenuContent } from './SubMenu.styles';

export type SubMenuProps = LiHTMLAttributes<HTMLLIElement> & {
  children?: ReactNode;
  icon?: ReactNode;
  active?: boolean;
  title?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  variant?: 'primary' | 'secondary';
};

export const SidebarSubMenu = forwardRef(function SubMenu(
  { children, icon, active, title, prefix, suffix, variant = 'primary', ...rest }: SubMenuProps,
  ref: ForwardedRef<HTMLLIElement>,
) {
  const level = useContext(LevelContext);
  const { collapsed, minified } = useContext(SidebarContext);

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
            <ItemContent icon={icon} prefix={prefix} suffix={suffix} minified={minified} firstchild={level === 0}>
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
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                event.stopPropagation();
              }}
            >
              <ItemContent icon={icon} prefix={prefix} suffix={suffix} minified={minified} firstchild={level === 0}>
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
