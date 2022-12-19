import React from 'react';
import { render } from '../test-utils';
import { Divider } from './Divider';
import { cleanup } from '../test-utils';

describe('Divider', () => {
  it('renders by default', async () => {
    const { findByRole } = render(<Divider />);
    expect(await findByRole('separator')).toBeInTheDocument();
  });

  it('render horizontally', async () => {
    const { findByRole } = render(<Divider orientation="horizontal" />);
    expect(await findByRole('separator')).toBeInTheDocument();
  });

  it('renders vertically', async () => {
    const { findByTestId } = render(<Divider data-testid="content-divider" orientation="vertical" />);
    expect(await findByTestId('content-divider')).toBeInTheDocument();
  });

  it('renders with all combintaions of props horizontal', async () => {
    let component;

    component = render(<Divider orientation="horizontal" size="small" />);
    expect(await component.findByRole('separator')).toHaveStyle('height: 1px; width:auto');
    cleanup();

    component = render(<Divider orientation="horizontal" size="medium" />);
    expect(await component.findByRole('separator')).toHaveStyle('height: 2px; width:auto');
    cleanup();

    component = render(<Divider orientation="horizontal" size="large" />);
    expect(await component.findByRole('separator')).toHaveStyle('height: 4px; width:auto');
  });

  it('renders with all combintaions of props vertically', async () => {
    let component;

    component = render(<Divider data-testid="content-divider" orientation="vertical" size="small" />);
    expect(await component.findByTestId('content-divider')).toHaveStyle('width: 1px; height: 100%');
    cleanup();

    component = render(<Divider data-testid="content-divider" orientation="vertical" size="medium" />);
    expect(await component.findByTestId('content-divider')).toHaveStyle('width: 2px; height: 100%');
    cleanup();

    component = render(<Divider data-testid="content-divider" orientation="vertical" size="large" />);
    expect(await component.findByTestId('content-divider')).toHaveStyle('width: 4px; height: 100%');
  });
});
