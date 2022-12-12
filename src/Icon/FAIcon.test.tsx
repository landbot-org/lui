import { faRobot } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { render } from '../test-utils';
import { FAIcon } from './FAIcon';

describe('FAIcon', () => {
  it('should render svg with data-icon', () => {
    const { container } = render(<FAIcon icon={faRobot} size="1x" color="blue.main" />);
    expect(container.querySelector('[data-icon=robot]')).toBeInTheDocument();
  });
});
