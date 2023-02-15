import React from 'react';
import { render } from '../test-utils';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders by default', async () => {
    const { findByRole } = render(<Spinner />);
    expect(await findByRole('figure')).toBeInTheDocument();
  });

  it('renders small', async () => {
    const { findByRole } = render(<Spinner size="XS" />);
    expect(await findByRole('figure')).toBeInTheDocument();
  });

  it('renders large', async () => {
    const { findByRole } = render(<Spinner size="XL" />);
    expect(await findByRole('figure')).toBeInTheDocument();
  });

  it('renders with custom color', async () => {
    const { findByRole } = render(<Spinner color="blue.50" />);
    expect(await findByRole('figure')).toBeInTheDocument();
  });
});
