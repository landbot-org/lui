import React from 'react';
import { render } from '../test-utils';
import Button from './Button';

describe('Button', () => {
  it('renders by default', () => {
    const { getByText } = render(<Button />);
    expect(getByText('Lui Button')).toBeInTheDocument();
  });
});
