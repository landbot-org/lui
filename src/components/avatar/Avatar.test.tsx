import React from 'react';

import { mockResizeObserver, render, screen } from '../../test-utils';
import { Avatar } from './Avatar';
import { AvatarProps } from './Avatar.types';

const renderComponent = (props: Partial<AvatarProps> = {}) =>
  render(<Avatar items={[]} onChange={jest.fn()} onSelectItem={jest.fn()} {...props} />);

describe('Avatar', () => {
  beforeEach(() => {
    mockResizeObserver();
  });

  it('should render input with placeholder', () => {
    renderComponent({ placeholder: 'Write something here' });

    expect(screen.getByPlaceholderText('Write something here')).toBeVisible();
  });
  it('should render items when start typing', async () => {
    const { user } = renderComponent({
      placeholder: 'Write something here',
      items: [
        { id: '1', value: 'Option 1' },
        { id: '2', value: 'Option 2' },
        { id: '3', value: 'Option 3' },
      ],
    });

    await user.type(screen.getByPlaceholderText('Write something here'), '1');

    expect(screen.getByRole('option', { name: 'Option 1' })).toBeVisible();
  });
  it('should render option selected when there are  when start typing', async () => {
    const { user } = renderComponent({
      selectedItemId: '1',
      placeholder: 'Write something here',
      items: [
        { id: '1', value: 'Option 1' },
        { id: '2', value: 'Option 2' },
        { id: '3', value: 'Option 3' },
      ],
    });

    await user.type(screen.getByPlaceholderText('Write something here'), '1');

    expect(screen.getByRole('option', { name: 'Option 1', selected: true })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Option 2', selected: false })).toBeVisible();
    expect(screen.getByRole('option', { name: 'Option 3', selected: false })).toBeVisible();
  });
  it('should render no results when start typing and there are not items', async () => {
    const { user } = renderComponent({
      placeholder: 'Write something here',
      items: [],
    });

    await user.type(screen.getByPlaceholderText('Write something here'), '1');

    expect(screen.getByText('NO RESULTS...')).toBeVisible();
  });
});
