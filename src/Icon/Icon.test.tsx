import React from 'react';
import { render } from '../test-utils';
import { Icon } from './Icon';
import { calendly } from './icons';

describe('Icon', () => {
  it('should render svg', () => {
    const { container } = render(<Icon icon={calendly} size="1x" color="blue.main" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
