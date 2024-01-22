import React from 'react';

import { render, screen, waitFor } from '../../test-utils';
import { SlideDown } from './SlideDown';
import { SlideDownProps } from './SlideDown.types';

const renderComponent = (props: Partial<SlideDownProps> = {}) =>
  render(
    <SlideDown visible={false} duration={100} {...props}>
      <p>SlideDown</p>
    </SlideDown>,
  );

describe('SlideDown', () => {
  it('should render when visible set to true', async () => {
    const { rerender } = renderComponent();

    expect(screen.getByText('SlideDown')).not.toBeVisible();

    rerender(
      <SlideDown visible duration={100}>
        <p>SlideDown</p>
      </SlideDown>,
    );

    await waitFor(() => expect(screen.getByText('SlideDown')).toBeVisible());
  });

  it('should be hidden when visible set to false', async () => {
    const { rerender } = renderComponent({ visible: true });

    expect(screen.getByText('SlideDown')).toBeVisible();

    rerender(
      <SlideDown visible={false} duration={100}>
        <p>SlideDown</p>
      </SlideDown>,
    );

    await waitFor(() => expect(screen.getByText('SlideDown')).not.toBeVisible());
  });
});
