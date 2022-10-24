import React from 'react';
import { render } from '../test-utils';

import Box from './Box';

describe('Box', () => {
  it('renders by default', () => {
    const { getByText } = render(<Box>Test</Box>);
    expect(getByText('Test')).toBeInTheDocument();
  });
});
