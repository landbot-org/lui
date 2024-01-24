import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';

interface SidebarContextProps {
  toggled: boolean;
  collapsed: boolean;
}

export const SidebarContext = createContext<SidebarContextProps | null>(null);

export const SidebarProvider = ({
  toggled: isToggled,
  collapsed: isCollapsed,
  children,
}: PropsWithChildren<SidebarContextProps>) => {
  const [toggled, setToggled] = useState<boolean>(isToggled);
  const [collapsed, setCollapsed] = useState<boolean>(isCollapsed);

  useEffect(() => {
    setToggled(isToggled);
  }, [isToggled]);

  useEffect(() => {
    setCollapsed(isCollapsed);
  }, [isCollapsed]);

  return (
    <SidebarContext.Provider
      value={{
        toggled: toggled,
        collapsed: collapsed,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('SidebarContext must be used within a SidebarContext provider');
  }

  return context;
};
