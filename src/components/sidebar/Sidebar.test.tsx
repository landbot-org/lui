import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Sidebar from './Sidebar';
import SidebarContent from './layout/Content';
import SidebarFooter from './layout/Footer';
import SidebarHeader from './layout/Header';
import Menu from './menu/Menu';
import MenuItem from './menu/MenuItem';
import SubMenu from './menu/SubMenu';

describe('Sidebar', () => {
  const sidebarPayload = (
    <>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <Menu>
          <MenuItem>Home</MenuItem>
          <SubMenu title="More">
            <MenuItem>More</MenuItem>
            <SubMenu title="Submenu">
              <MenuItem>Submenu more items</MenuItem>
              <MenuItem>Submenu another item</MenuItem>
            </SubMenu>
            <MenuItem>More items</MenuItem>
            <MenuItem>Another item</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <Menu>
          <MenuItem>Account</MenuItem>
        </Menu>
      </SidebarFooter>
    </>
  );

  it('Should render', () => {
    render(<Sidebar>{sidebarPayload}</Sidebar>);

    screen.getByText('Home');
    screen.getByText('More');
    screen.getByText('Account');
  });

  it('Should render collapsed', () => {
    render(<Sidebar collapsed>{sidebarPayload}</Sidebar>);

    const sidebar = screen.getByTestId('ui-sidebar');

    expect(sidebar).toHaveClass('sidebar--collapsed');
  });

  it('Should render toggled', () => {
    render(<Sidebar toggled>{sidebarPayload}</Sidebar>);

    const sidebar = screen.getByTestId('ui-sidebar');

    expect(sidebar).toHaveClass('sidebar--toggled');
  });

  it('Should render toggled and collapsed', () => {
    render(
      <Sidebar toggled collapsed>
        {sidebarPayload}
      </Sidebar>,
    );

    const sidebar = screen.getByTestId('ui-sidebar');

    expect(sidebar).toHaveClass('sidebar--collapsed');
    expect(sidebar).toHaveClass('sidebar--toggled');
  });

  it('Should change on toggle', async () => {
    const onToggleMock = jest.fn();

    render(
      <Sidebar toggled onToggle={onToggleMock}>
        {sidebarPayload}
      </Sidebar>,
    );

    const sidebar = screen.getByTestId('ui-sidebar');

    expect(sidebar).toHaveClass('sidebar--toggled');

    const overlay = screen.getByTestId('ui-sidebar_overlay');

    await userEvent.click(overlay);

    expect(onToggleMock).toHaveBeenCalled();
    expect(onToggleMock).toHaveBeenCalledWith(false);

    expect(sidebar).not.toHaveClass('sidebar--toggled');
  });
});
