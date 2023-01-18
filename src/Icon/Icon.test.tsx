import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { render } from '../test-utils';
import { Icon } from './Icon';
import * as icons from './icons';
import { GRID_AREA } from './types';

describe('Icon', () => {
  it('should render svg with custom icons', () => {
    Object.keys(icons).map((icon) => {
      const IconRender = icons[icon as keyof typeof icons];
      const { container } = render(<Icon icon={<IconRender />} size="1x" color="blue.main" />);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });
  it('should render svg when not setting size and color  with custom icon', () => {
    const { container } = render(<Icon icon={<icons.Calendly />} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
  it('should render svg with different height and width  with custom icon', () => {
    const { container } = render(<Icon icon={<icons.Calendly height={100} width={100} />} size="1x" />);
    expect(container.querySelector('svg')).toHaveAttribute('height', '100');
    expect(container.querySelector('svg')).toHaveAttribute('width', '100');
  });
  it('should render svg with FontAwesome icon', () => {
    const { container } = render(<Icon icon={<FontAwesomeIcon icon={faRobot} />} size="1x" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
  it.each(Object.values(GRID_AREA).map((gridAreaValue) => [gridAreaValue]))(
    'should render svg with %s gridArea',
    (gridArea) => {
      const { container } = render(<Icon icon={<FontAwesomeIcon icon={faRobot} />} size="1x" gridArea={gridArea} />);
      expect(container.querySelector('svg')).toBeInTheDocument();
    }
  );
});
