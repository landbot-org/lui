import React, { ForwardedRef, createContext, forwardRef, useEffect, useRef, useState } from 'react';

import { SidebarProps } from './Sidebar.types';
import { SidebarMinify } from './layout/Minify';

import { StyledLayout, StyledOverlay, StyledSidebar, StyledWrapper } from './Sidebar.styles';

export interface SidebarContextProps {
  toggled: boolean | undefined;
  collapsed?: boolean | undefined;
  minified?: boolean | undefined;
  setMinified?: (minified: boolean) => void;
  onSelectMenuItem?: () => void;
}

export const SidebarContext = createContext<SidebarContextProps>({
  toggled: false,
  collapsed: false,
  minified: false,
});

export const Sidebar = forwardRef(function Sidebar(
  { children, toggled = false, collapsed = false, onToggle, style, ...rest }: SidebarProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const referenceElement = useRef<HTMLDivElement>(null);

  const [showMinified, setShowMinified] = useState<boolean>(false);

  const [sidebarState, setSidebarState] = useState<SidebarContextProps>({
    toggled: typeof toggled === 'undefined' ? false : toggled,
    collapsed: typeof collapsed === 'undefined' ? false : collapsed,
    onSelectMenuItem: () => referenceElement.current?.click(),
    setMinified: (minified: boolean) => {
      setSidebarState((prevState) => ({
        ...prevState,
        minified: minified,
      }));
    },
  });

  const handleToggleSidebar = () => {
    const toggleValue = sidebarState.toggled;
    setSidebarState({ ...sidebarState, toggled: !toggleValue });
    if (onToggle) {
      onToggle(!toggleValue);
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

  useEffect(() => {
    if (sidebarState.collapsed) {
      setSidebarState((prevState) => ({
        ...prevState,
        minified: false,
      }));
    }
  }, [sidebarState.collapsed]);

  return (
    <SidebarContext.Provider value={sidebarState}>
      <StyledSidebar
        id="lui-sidebar"
        ref={ref}
        $collapsed={sidebarState.collapsed}
        $toggled={sidebarState.toggled}
        $minified={sidebarState.minified}
        style={{ ...style }}
        {...rest}
      >
        <StyledWrapper
          onMouseEnter={() => {
            setShowMinified(true);
          }}
          onMouseLeave={() => {
            setShowMinified(false);
          }}
        >
          {!sidebarState.collapsed && showMinified && <SidebarMinify />}
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
