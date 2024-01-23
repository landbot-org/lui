import React, { useEffect, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
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
import { useWindowSize } from '../../hooks/useWindowSize';
import { Avatar } from '../avatar';
import { Icon } from '../icon';
import { GearTool, Menu, OpenAI, Sparkles } from '../icon/icons';
import { SidebarDivider } from './layout/Divider';
import { SidebarLogo } from './layout/Logo';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    collapsed: false,
    toggled: false,
  },
  render: function Render(args) {
    const windowSize = useWindowSize();

    const [toggled, setToggled] = useState(args.toggled);
    const [collapsed, setCollapsed] = useState(args.collapsed);

    useEffect(() => {
      setCollapsed(windowSize.width < 768);
    }, [windowSize]);

    const handleToggleSidebar = () => {
      setToggled(!toggled);
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
                icon={<Avatar name="John Doe" status="online" color="blue" />}
                variant="secondary"
              >
                <SidebarMenuItem icon={<Icon icon={<GearTool />} />}>More items</SidebarMenuItem>
                <SidebarMenuItem icon={<Icon icon={<OpenAI />} />}>More items</SidebarMenuItem>
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
              handleToggleSidebar();
            }}
          >
            <Icon icon={<Menu />} size="1.5x" />
          </SidebarToggle>
        )}
      </StyledStory>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};

const StyledStory = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
`;
