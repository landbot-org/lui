import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../test-utils';
import { Breadcrumb } from './Breadcrumb';
import { BreadcrumbProps } from './Breadcrumb.types';

const renderComponent = (props: Partial<BreadcrumbProps> = {}) =>
  render(
    <MemoryRouter>
      <Breadcrumb items={[]} {...props} />
    </MemoryRouter>,
  );

describe('Breadcrumb', () => {
  it('should render breadcrumb', () => {
    renderComponent();

    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeVisible();
  });
  it('should render links in breadcrumb', () => {
    renderComponent({
      items: [
        { label: 'Root level', route: '/root' },
        { label: 'First level', route: '/first' },
        { label: 'Second level', route: '/second' },
      ],
    });

    expect(screen.getByRole('link', { name: 'Root level' })).toHaveAttribute('href', '/root');
    expect(screen.getByRole('link', { name: 'First level' })).toHaveAttribute('href', '/first');
    expect(screen.getByRole('link', { name: 'Second level' })).toHaveAttribute('href', '/second');
  });
  it('should render item disabled in breadcrumb', () => {
    renderComponent({
      items: [
        { label: 'Root level', route: '/root' },
        { label: 'First level', route: '/first', disabled: true },
        { label: 'Second level', route: '/second' },
      ],
    });

    expect(screen.getByText('First level')).toHaveAttribute('aria-disabled', 'true');
  });
});
