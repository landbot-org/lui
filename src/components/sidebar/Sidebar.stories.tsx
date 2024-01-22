import React, { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSubMenu,
  SidebarToggle,
} from '.';
import { Avatar } from '../avatar';
import { useWindowSize } from '../hooks/useWindowSize';
import { Icon } from '../icon';
import { GearTool, Menu, OpenAI, Sparkles } from '../icon/icons';
import { SidebarDivider } from './layout/Divider';
import { SidebarLogo } from './layout/Logo';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => {
  const windowSize = useWindowSize();

  const [toggled, setToggled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setCollapsed(windowSize.width < 768);
  }, [windowSize]);

  const handleToggleSidebar = (checked: boolean) => {
    setToggled(checked);
  };

  return (
    <StyledStory>
      <Sidebar style={{ height: '100dvh' }} toggled={toggled} collapsed={collapsed} onToggle={handleToggleSidebar}>
        <SidebarHeader>
          <SidebarLogo />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem icon={<Icon icon={<OpenAI />} />}>Home</SidebarMenuItem>
            <SidebarMenuItem icon={<Icon icon={<OpenAI />} />} active>
              Builder
            </SidebarMenuItem>
            <SidebarMenuItem icon={<Icon icon={<Sparkles />} />}>AI Assistant</SidebarMenuItem>
            <SidebarSubMenu title="Another item" icon={<Sparkles />}>
              <SidebarMenuItem>Another item</SidebarMenuItem>
              <SidebarSubMenu title="Submenu" active>
                <SidebarMenuItem>More items</SidebarMenuItem>
                <SidebarMenuItem>Another item</SidebarMenuItem>
                <SidebarSubMenu title="Submenu2">
                  <SidebarMenuItem>More items</SidebarMenuItem>
                  <SidebarMenuItem>Another item</SidebarMenuItem>
                  <SidebarMenuItem>More items</SidebarMenuItem>
                  <SidebarMenuItem>Another item</SidebarMenuItem>
                </SidebarSubMenu>
                <SidebarSubMenu title="Submenu3">
                  <SidebarMenuItem>More items</SidebarMenuItem>
                  <SidebarMenuItem>Another item</SidebarMenuItem>
                  <SidebarMenuItem>More items</SidebarMenuItem>
                  <SidebarMenuItem>Another item</SidebarMenuItem>
                </SidebarSubMenu>
              </SidebarSubMenu>
              <SidebarMenuItem>More items</SidebarMenuItem>
              <SidebarMenuItem>Another item</SidebarMenuItem>
            </SidebarSubMenu>
            <SidebarSubMenu title="Another item 2" icon={<Sparkles />}>
              <SidebarMenuItem>Another item</SidebarMenuItem>
              <SidebarSubMenu title="Submenu" active>
                <SidebarMenuItem>More items</SidebarMenuItem>
                <SidebarMenuItem>Another item</SidebarMenuItem>
                <SidebarSubMenu title="Submenu2">
                  <SidebarMenuItem>More items</SidebarMenuItem>
                  <SidebarMenuItem>Another item</SidebarMenuItem>
                  <SidebarMenuItem>More items</SidebarMenuItem>
                  <SidebarMenuItem>Another item</SidebarMenuItem>
                </SidebarSubMenu>
              </SidebarSubMenu>
              <SidebarMenuItem>More items</SidebarMenuItem>
              <SidebarMenuItem>Another item</SidebarMenuItem>
            </SidebarSubMenu>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarSubMenu title="Help" icon={<Sparkles />} variant="secondary">
              <SidebarMenuItem>More items</SidebarMenuItem>
              <SidebarMenuItem>Another item</SidebarMenuItem>
              <SidebarMenuItem>More items</SidebarMenuItem>
              <SidebarMenuItem>Another item</SidebarMenuItem>
            </SidebarSubMenu>
            <SidebarSubMenu
              title="Avatar"
              icon={
                <Avatar
                  avatar="https://avatars.githubusercontent.com/u/263385"
                  name="John Doe"
                  status="online"
                  color="blue"
                />
              }
              variant="secondary"
            >
              <SidebarMenuItem icon={<Icon icon={<GearTool />} />}>More items</SidebarMenuItem>
              <SidebarDivider />
              <SidebarMenuItem>More items</SidebarMenuItem>
              <SidebarSubMenu title="Submenu2" variant="secondary">
                <SidebarMenuItem>More items</SidebarMenuItem>
                <SidebarMenuItem>Another item</SidebarMenuItem>
              </SidebarSubMenu>
            </SidebarSubMenu>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      {collapsed && (
        <SidebarToggle
          onClick={() => {
            handleToggleSidebar(!toggled);
          }}
        >
          <Icon icon={<Menu />} size="1.5x" />
        </SidebarToggle>
      )}
    </StyledStory>
  );
};

const StyledStory = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
`;
