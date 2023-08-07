import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '.';
import { fireEvent, mockResizeObserver, render, screen } from '../test-utils';
import { PopoverProps } from './types';

const SUTControlled = (props: Partial<PopoverProps> = {}) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover {...props} open={open} setOpen={setOpen}>
      <PopoverTrigger>
        <button onClick={() => setOpen(true)}>Open Popover</button>
      </PopoverTrigger>
      <PopoverContent>
        <div>Popover content</div>
      </PopoverContent>
    </Popover>
  );
};

const renderComponent = (props: Partial<PopoverProps> = {}) => {
  return render(<SUTControlled {...props} />);
};

describe('Popover', () => {
  beforeEach(() => {
    mockResizeObserver();
  });

  it('should open Popover when click in trigger button', async () => {
    const { user } = renderComponent();

    await user.click(screen.getByRole('button', { name: 'Open Popover' }));

    expect(screen.getByText('Popover content')).toBeVisible();
  });

  it('should open Popover when hover in trigger button if interaction is hover', async () => {
    const { user } = renderComponent({ interaction: 'hover' });

    await user.hover(screen.getByRole('button', { name: 'Open Popover' }));

    expect(screen.getByText('Popover content')).toBeVisible();
  });

  it('should open Popover when click in trigger button (uncontrolled)', async () => {
    const { user } = render(
      <Popover>
        <PopoverTrigger>
          <button>Open Popover</button>
        </PopoverTrigger>
        <PopoverContent>
          <div>Popover content</div>
        </PopoverContent>
      </Popover>
    );

    await user.click(screen.getByRole('button', { name: 'Open Popover' }));

    expect(screen.getByText('Popover content')).toBeVisible();
  });

  it('should render opened Popover when defaultOpen is true (uncontrolled)', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>
          <button>Open Popover</button>
        </PopoverTrigger>
        <PopoverContent>
          <div>Popover content</div>
        </PopoverContent>
      </Popover>
    );

    expect(screen.getByText('Popover content')).toBeVisible();
  });

  it('should render close button when hasCloseButton is true', async () => {
    const { user } = renderComponent({ hasCloseButton: true });

    await user.click(screen.getByRole('button', { name: 'Open Popover' }));
    await user.click(screen.getByRole('button', { name: 'popover-close' }));

    expect(screen.queryByText('Popover content')).toBeNull();
  });

  describe('closeOnScroll', () => {
    it('can be closed on scroll event', async () => {
      const { user } = renderComponent({ closeOnScroll: true });

      await user.click(screen.getByRole('button', { name: 'Open Popover' }));
      fireEvent.scroll(window);

      expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
    });

    it('remains open on scroll if not specified', async () => {
      const { user } = renderComponent({ closeOnScroll: false });

      await user.click(screen.getByRole('button', { name: 'Open Popover' }));
      fireEvent.scroll(window);

      expect(screen.getByText('Popover content')).toBeVisible();
    });
  });
});
