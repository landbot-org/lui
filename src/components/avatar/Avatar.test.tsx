import React from 'react';

import { render, screen } from '../../test-utils';
import { Avatar } from './Avatar';
import { AvatarProps } from './Avatar.types';

const renderComponent = (props: Partial<AvatarProps> = {}) => render(<Avatar {...props} />);

describe('Avatar', () => {
  it('should render default', () => {
    renderComponent();

    expect(screen.getByRole('img')).toBeTruthy();
  });
});
