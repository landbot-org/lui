import React from 'react';

import { render } from '../test-utils';
import { Box } from './Box';

describe('Box', () => {
  it('renders by default', () => {
    const { getByText } = render(<Box>Test</Box>);
    expect(getByText('Test')).toBeInTheDocument();
  });
  it('should render with background', () => {
    const { getByText } = render(<Box backgroundColor="pink.main">Test</Box>);
    expect(getByText('Test')).toBeInTheDocument();
  });
  it('should render with elevation', () => {
    const { getByText } = render(<Box elevation={1}>Test</Box>);
    expect(getByText('Test')).toBeInTheDocument();
  });
  it('should render with border', () => {
    const { getByText } = render(<Box border={1}>Test</Box>);
    expect(getByText('Test')).toBeInTheDocument();
  });
});
