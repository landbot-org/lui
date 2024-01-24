import { render, screen } from '../../test-utils';
import { Icon } from '../icon';
import { GearTool, OpenAI, Sparkles } from '../icon/icons';
import { Sidebar } from './Sidebar';
import { SidebarProps } from './Sidebar.types';
import { SidebarContent } from './components/layout/Content';
import { SidebarDivider } from './components/layout/Divider';
import { SidebarFooter } from './components/layout/Footer';
import { SidebarHeader } from './components/layout/Header';
import { SidebarLogo } from './components/layout/Logo';
import { SidebarMenu } from './components/menu/Menu';
import { SidebarMenuItem } from './components/menu/MenuItem';
import { SidebarSubMenu } from './components/menu/SubMenu';

const renderComponent = (props: Partial<SidebarProps> = {}) =>
  render(
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem icon={<Icon icon={<OpenAI />} />}>OpenAI</SidebarMenuItem>
          <SidebarSubMenu title="More items" icon={<Sparkles data-testid="more-items-icon" />}>
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
  it.each([[true], [false]])('Should render when collapsed status is %s', (collapsed) => {
    renderComponent({
      collapsed,
    });

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

  it.each([[true], [false]])('Should render when collapsed status is %s and open submenu', async (collapsed) => {
    const { user } = renderComponent({
      collapsed,
    });

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

  it('Should render when collapsed status is false and toggled', () => {
    renderComponent({
      collapsed: false,
      toggled: true,
    });

    expect(screen.queryByText('OpenAI')).not.toBeInTheDocument();
    expect(screen.queryByText('More items')).not.toBeInTheDocument();
    expect(screen.queryByText('Other item')).not.toBeInTheDocument();
    expect(screen.queryByText('Another item')).not.toBeInTheDocument();
    expect(screen.queryByText('Submenu')).not.toBeInTheDocument();
    expect(screen.queryByText('Submenu items')).not.toBeInTheDocument();
    expect(screen.queryByText('Submenu another item')).not.toBeInTheDocument();
    expect(screen.queryByText('Help')).not.toBeInTheDocument();
    expect(screen.queryByText('Help item')).not.toBeInTheDocument();
    expect(screen.queryByText('Help another item')).not.toBeInTheDocument();
  });

  it('Should render when click on icon, collapsed status is false and is toggled', async () => {
    const { user } = renderComponent({
      collapsed: false,
      toggled: true,
    });

    await user.click(screen.getByTestId('more-items-icon'));

    expect(screen.getByText('Other item')).toBeVisible();
    expect(screen.getByText('Another item')).toBeVisible();
    expect(screen.getByText('Submenu')).toBeVisible();
  });

  it('Should render minify button', async () => {
    const { user } = renderComponent();

    await user.hover(screen.getByText('OpenAI'));

    expect(screen.getByLabelText('minify-button')).toBeVisible();
  });

  it('Should render minify button and click', async () => {
    const { user } = renderComponent();

    await user.hover(screen.getByText('OpenAI'));
    await user.click(screen.getByLabelText('minify-button'));

    expect(screen.queryByLabelText('minify-button')).not.toBeInTheDocument();
  });
});
