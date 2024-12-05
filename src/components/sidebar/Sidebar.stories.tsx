import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Meta, StoryObj } from '@storybook/react';
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
import { AVATAR_STATUS, Avatar } from '../avatar';
import { Icon } from '../icon';
import { GearTool, Menu, OpenAI } from '../icon/icons';
import { SidebarDivider } from './components/layout/Divider';
import { SidebarLogo } from './components/layout/Logo';

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

    return (
      <StyledStory>
        <Sidebar
          style={{ height: '100dvh' }}
          toggled={toggled}
          collapsed={collapsed}
          onToggle={() => {
            setToggled(!toggled);
          }}
        >
          <SidebarHeader>
            <SidebarLogo />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>No icon</SidebarMenuItem>
              <SidebarMenuItem icon={<Icon icon={<OpenAI />} />} active>
                Builder
              </SidebarMenuItem>
              <SidebarMenuItem icon={<Icon icon={<OpenAI />} />}>Large menu item with a lot of text</SidebarMenuItem>
              <SidebarSubMenu title="First submenu" icon={<OpenAI />}>
                <SidebarMenuItem>Another item</SidebarMenuItem>
                <SidebarSubMenu title="Submenu" active>
                  <SidebarMenuItem>More items with large text</SidebarMenuItem>
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
              <SidebarSubMenu title="Another submenu" icon={<OpenAI />}>
                <SidebarMenuItem>Another item</SidebarMenuItem>
                <SidebarSubMenu title="Submenu" active>
                  <SidebarMenuItem>More items</SidebarMenuItem>
                  <SidebarMenuItem>Another item</SidebarMenuItem>
                </SidebarSubMenu>
                <SidebarMenuItem>More items</SidebarMenuItem>
                <SidebarMenuItem>Another item</SidebarMenuItem>
              </SidebarSubMenu>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarSubMenu title="Help" icon={<OpenAI />} variant="secondary">
                <SidebarMenuItem>Dev documentation</SidebarMenuItem>
                <SidebarMenuItem>Another item</SidebarMenuItem>
              </SidebarSubMenu>
              <SidebarSubMenu
                title="Avatar"
                icon={<Avatar status={AVATAR_STATUS.ONLINE} size="sm" />}
                variant="secondary"
              >
                <SidebarMenuItem icon={<Icon icon={<GearTool />} />}>More items</SidebarMenuItem>
                <SidebarMenuItem icon={<Icon icon={<OpenAI />} />}>More items</SidebarMenuItem>
                <SidebarDivider />
                <SidebarMenuItem>More items</SidebarMenuItem>
                <SidebarSubMenu title="Submenu" variant="secondary">
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
              setToggled(!toggled);
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
