import React from 'react';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { render } from '../test-utils';
import { FAIcon } from './FAIcon';

describe('FAIcon', () => {
  it('should render svg with data-icon when not setting size and color', () => {
    const { container } = render(<FAIcon icon={faRobot} />);
    expect(container.querySelector('[data-icon=robot]')).toBeInTheDocument();
  });
  it('should render svg with data-icon when setting size and color', () => {
    const { container } = render(<FAIcon icon={faRobot} size="1x" color="blue.main" />);
    expect(container.querySelector('[data-icon=robot]')).toBeInTheDocument();
  });
});
