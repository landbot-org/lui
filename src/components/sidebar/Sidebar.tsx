import React, { ForwardedRef, createContext, forwardRef, useEffect, useRef, useState } from 'react';

import { SidebarProps } from './Sidebar.types';
import { SidebarMinifyControl } from './layout/MinifyControl';

import { StyledLayout, StyledOverlay, StyledSidebar, StyledWrapper } from './Sidebar.styles';

export interface SidebarContextProps {
  toggled: boolean | undefined;
  collapsed?: boolean | undefined;
  onSelectMenuItem?: () => void;
}

export const SidebarContext = createContext<SidebarContextProps>({
  toggled: false,
  collapsed: false,
});

export const Sidebar = forwardRef(function Sidebar(
  { children, toggled = false, collapsed = false, onToggle, style, ...rest }: SidebarProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const referenceElement = useRef<HTMLDivElement>(null);

  const [showMinifyControl, setShowMinifyControl] = useState<boolean>(false);

  const [sidebarState, setSidebarState] = useState<SidebarContextProps>({
    toggled: typeof toggled === 'undefined' ? false : toggled,
    collapsed: typeof collapsed === 'undefined' ? false : collapsed,
    onSelectMenuItem: () => referenceElement.current?.click(),
  });

  const handleToggleSidebar = () => {
    if (sidebarState.collapsed && onToggle) {
      onToggle();
    }
  };

  useEffect(() => {
    setSidebarState((prevState) => ({
      ...prevState,
      toggled: toggled,
    }));
  }, [toggled]);

  useEffect(() => {
    setSidebarState((prevState) => ({
      ...prevState,
      collapsed: collapsed,
    }));
  }, [collapsed]);

  return (
    <SidebarContext.Provider value={sidebarState}>
      <StyledSidebar
        id="lui-sidebar"
        ref={ref}
        $collapsed={sidebarState.collapsed}
        $toggled={sidebarState.toggled}
        style={{ ...style }}
        {...rest}
      >
        <StyledWrapper
          onMouseEnter={() => {
            setShowMinifyControl(true);
          }}
          onMouseLeave={() => {
            setShowMinifyControl(false);
          }}
        >
          {!sidebarState.collapsed && showMinifyControl && (
            <SidebarMinifyControl
              toggled={sidebarState.toggled}
              onClick={() => {
                setSidebarState((prevState) => ({
                  ...prevState,
                  toggled: !prevState.toggled,
                }));
                setShowMinifyControl(false);
              }}
            />
          )}
          <StyledLayout>{children}</StyledLayout>
        </StyledWrapper>
        <StyledOverlay
          ref={referenceElement}
          $toggled={sidebarState.toggled && sidebarState.collapsed}
          onClick={handleToggleSidebar}
          role="button"
          aria-label="overlay"
        />
      </StyledSidebar>
    </SidebarContext.Provider>
  );
});
