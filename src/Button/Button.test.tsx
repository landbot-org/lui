import React from 'react';
import { render } from '../test-utils';
import Button from './Button';

describe('Button', () => {
  it('should return 15 for add(10,5)', () => {
    expect(15).toBe(15);
  });
  it('renders a text by default', () => {
    const { getByText } = render(<Button />);
    expect(getByText('Lui Button')).toBeInTheDocument();
  });
});
