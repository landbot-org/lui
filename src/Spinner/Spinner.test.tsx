import React from 'react';
import { render } from '../test-utils';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders by default', async () => {
    const { findByRole } = render(<Spinner />);
    expect(await findByRole('figure')).toBeInTheDocument();
  });
});
