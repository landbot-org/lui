import React from 'react';

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarSubMenu } from '.';
import { render, screen } from '../../test-utils';
import { Icon } from '../icon';
import { GearTool, OpenAI, Sparkles } from '../icon/icons';
import { SidebarProps } from './Sidebar.types';
import { SidebarDivider } from './layout/Divider';
import { SidebarLogo } from './layout/Logo';

const renderComponent = (props: Partial<SidebarProps> = {}) =>
  render(
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem icon={<Icon icon={<OpenAI />} />}>OpenAI</SidebarMenuItem>
          <SidebarSubMenu title="More items" icon={<Sparkles />}>
            <SidebarMenuItem>Other item</SidebarMenuItem>
            <SidebarMenuItem>Another item</SidebarMenuItem>
            <SidebarSubMenu title="Submenu">
              <SidebarMenuItem>Submenu items</SidebarMenuItem>
              <SidebarMenuItem>Submenu another item</SidebarMenuItem>
            </SidebarSubMenu>
          </SidebarSubMenu>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarSubMenu title="Help" icon={<Sparkles />} variant="secondary">
            <SidebarMenuItem icon={<Icon icon={<GearTool />} />}>Help item</SidebarMenuItem>
            <SidebarDivider />
            <SidebarMenuItem>Help another item</SidebarMenuItem>
          </SidebarSubMenu>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>,
  );

describe('Sidebar', () => {
  it('Should render', () => {
    renderComponent();

    expect(screen.getByText('OpenAI')).toBeVisible();
    expect(screen.getByText('More items')).toBeVisible();

    expect(screen.queryByText('Other item')).not.toBeInTheDocument();
    expect(screen.queryByText('Another item')).not.toBeInTheDocument();
    expect(screen.queryByText('Submenu')).not.toBeInTheDocument();
    expect(screen.queryByText('Submenu items')).not.toBeInTheDocument();
    expect(screen.queryByText('Submenu another item')).not.toBeInTheDocument();

    expect(screen.getByText('Help')).toBeVisible();

    expect(screen.queryByText('Help item')).not.toBeInTheDocument();
    expect(screen.queryByText('Help another item')).not.toBeInTheDocument();
  });

  it('Should render when open submenu', async () => {
    const { user } = renderComponent();

    await user.click(screen.getByText('More items'));

    expect(screen.getByText('OpenAI')).toBeVisible();
    expect(screen.getByText('More items')).toBeVisible();
    expect(screen.getByText('Other item')).toBeVisible();
    expect(screen.getByText('Another item')).toBeVisible();
    expect(screen.getByText('Submenu')).toBeVisible();

    expect(screen.queryByText('Submenu items')).not.toBeInTheDocument();
    expect(screen.queryByText('Submenu another item')).not.toBeInTheDocument();

    expect(screen.getByText('Help')).toBeVisible();

    expect(screen.queryByText('Help item')).not.toBeInTheDocument();
    expect(screen.queryByText('Help another item')).not.toBeInTheDocument();
  });

  it('Should render minify button', async () => {
    const { user } = renderComponent();

    await user.hover(screen.getByText('OpenAI'));

    expect(screen.getByLabelText('minify-button')).toBeVisible();
  });

  it('Should render collapsed', () => {
    renderComponent({
      collapsed: true,
    });

    expect(screen.getByText('OpenAI')).toBeVisible();
    expect(screen.getByText('More items')).toBeVisible();

    expect(screen.queryByText('Other item')).not.toBeVisible();
    expect(screen.queryByText('Another item')).not.toBeVisible();
    expect(screen.queryByText('Submenu')).not.toBeVisible();
    expect(screen.queryByText('Submenu items')).not.toBeVisible();
    expect(screen.queryByText('Submenu another item')).not.toBeVisible();

    expect(screen.getByText('Help')).toBeVisible();

    expect(screen.queryByText('Help item')).not.toBeVisible();
    expect(screen.queryByText('Help another item')).not.toBeVisible();
  });

  it('Should render when open submenu and collapsed', async () => {
    const { user } = renderComponent({
      collapsed: true,
    });

    await user.click(screen.getByText('More items'));

    expect(screen.getByText('OpenAI')).toBeVisible();
    expect(screen.getByText('More items')).toBeVisible();
    expect(screen.getByText('Other item')).toBeVisible();
    expect(screen.getByText('Another item')).toBeVisible();
    expect(screen.getByText('Submenu')).toBeVisible();

    expect(screen.queryByText('Submenu items')).not.toBeVisible();
    expect(screen.queryByText('Submenu another item')).not.toBeVisible();

    expect(screen.getByText('Help')).toBeVisible();

    expect(screen.queryByText('Help item')).not.toBeVisible();
    expect(screen.queryByText('Help another item')).not.toBeVisible();
  });
});
