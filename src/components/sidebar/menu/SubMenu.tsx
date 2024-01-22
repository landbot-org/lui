import React, { ForwardedRef, LiHTMLAttributes, ReactNode, forwardRef, useContext, useRef, useState } from 'react';

import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { SlideDown } from '../../slide-down';
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
  const { collapsed } = useContext(SidebarContext);

  const [open, setOpen] = useState(false);
  const referenceElement = useRef<HTMLDivElement>(null);

  useOnClickOutside(referenceElement, () => {
    setOpen(false);
  });

  const handleToggleSubMenu = () => {
    setOpen(!open);
  };

  return (
    <StyledMenuItem ref={ref} {...rest}>
      {collapsed ? (
        <div ref={referenceElement}>
          <StyledItem onMouseDown={handleToggleSubMenu} role="button" $active={active} $firstchild={level === 0}>
            <ItemContent icon={icon} prefix={prefix} suffix={suffix}>
              {title}
            </ItemContent>
          </StyledItem>
          <SlideDown visible={open} duration={800}>
            <StyledInnerItem>
              <LevelContext.Provider value={level + 1}>
                <StyledSubMenuContent>{children}</StyledSubMenuContent>
              </LevelContext.Provider>
            </StyledInnerItem>
          </SlideDown>
        </div>
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
              <ItemContent icon={icon} prefix={prefix} suffix={suffix}>
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
