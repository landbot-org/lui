import React from 'react';
import { render } from '../test-utils';
import { Icon } from './Icon';
import { calendly } from './icons';

describe('Icon', () => {
  it('should render svg', () => {
    const { container } = render(<Icon icon={calendly} size="1x" color="blue.main" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
  it('should render svg when not setting size and color', () => {
    const { container } = render(<Icon icon={calendly} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
  // it('should render svg with different height and width', () => {
  //   const { container } = render(<Icon icon={calendly} size="1x" height={100} width={100} />);
  //   expect(container.querySelector('svg')).toHaveAttribute('height', '100');
  //   expect(container.querySelector('svg')).toHaveAttribute('width', '100');
  // });
});
