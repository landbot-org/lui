import React from 'react';

import { render } from '../../test-utils';
import { Link } from './Link';

describe('Link', () => {
  it('renders with only mandatory props', () => {
    const { getByText } = render(<Link href="https://www.landbot.io">Text link</Link>);
    expect(getByText(/text link/i)).toBeInTheDocument();
  });
  it('renders bold link', () => {
    const { getByText } = render(
      <Link bold href="https://www.landbot.io">
        Text link
      </Link>,
    );
    expect(getByText(/text link/i)).toBeInTheDocument();
  });
  it('renders link with icon', () => {
    const { getByText } = render(
      <Link containsIcon href="https://www.landbot.io">
        Text link
      </Link>,
    );
    expect(getByText(/text link/i)).toBeInTheDocument();
  });
  it('renders link with _blank target', () => {
    const { getByText } = render(
      <Link target="_blank" href="https://www.landbot.io">
        Text link
      </Link>,
    );
    expect(getByText(/text link/i)).toBeInTheDocument();
  });
});
