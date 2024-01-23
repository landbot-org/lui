import { ForwardedRef, forwardRef, useState } from 'react';

import { SidebarProps } from './Sidebar.types';
import { SidebarMinifyControl } from './layout/MinifyControl';
import { SidebarProvider } from './useSidebar';

import { StyledLayout, StyledOverlay, StyledSidebar, StyledWrapper } from './Sidebar.styles';

export const Sidebar = forwardRef(function SidebarLayout(
  { children, toggled = false, collapsed = false, onToggle, style, ...rest }: SidebarProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const [showMinifyControl, setShowMinifyControl] = useState<boolean>(false);

  return (
    <SidebarProvider toggled={toggled} collapsed={collapsed}>
      <StyledSidebar
        id="lui-sidebar"
        ref={ref}
        $collapsed={collapsed}
        $toggled={toggled}
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
          {!collapsed && showMinifyControl && (
            <SidebarMinifyControl
              toggled={toggled}
              onClick={() => {
                onToggle && onToggle();
                setShowMinifyControl(false);
              }}
            />
          )}
          <StyledLayout>{children}</StyledLayout>
        </StyledWrapper>
        <StyledOverlay
          $toggled={toggled && collapsed}
          onClick={() => {
            onToggle && onToggle();
          }}
          role="button"
          aria-label="overlay"
        />
      </StyledSidebar>
    </SidebarProvider>
  );
});
