import React, { ReactNode, useState } from 'react';
import { Popover } from './Popover';
import { PopoverTrigger } from './PopoverTrigger';
import { PopoverContent } from './PopoverContent';
import { PopoverClose } from './PopoverClose';
import { act, mockResizeObserver, render, screen } from '../test-utils';

interface SUTProps {
  triggerContent: ReactNode;
  popoverContent: ReactNode;
  closeButtonContent: ReactNode;
}

const SUT = ({ triggerContent, popoverContent, closeButtonContent }: SUTProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger onClick={() => setOpen(true)}>{triggerContent}</PopoverTrigger>
      <PopoverContent>
        <div>
          <div>{popoverContent}</div>
          <PopoverClose onClick={() => setOpen(false)}>{closeButtonContent}</PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const renderComponent = (props: Partial<SUTProps> = {}) => {
  const defaultProps: SUTProps = {
    popoverContent: <>Popover content</>,
    triggerContent: <>Open popover</>,
    closeButtonContent: <>Click to close</>,
  };

  return render(<SUT {...defaultProps} {...props} />);
};

describe('Popover', () => {
  beforeEach(() => {
    mockResizeObserver();
  });

  it('shows button to open popover', () => {
    const popoverContent = 'popover.content';
    const triggerContent = 'click-to-open';

    renderComponent({ popoverContent, triggerContent });

    expect(screen.getByRole('button', { name: triggerContent })).toBeVisible();
    expect(screen.queryByText(popoverContent)).not.toBeInTheDocument();
  });

  it('shows popover content on click', async () => {
    const popoverContent = 'popover.content';
    const triggerContent = 'click-to-open';
    const { user } = renderComponent({ popoverContent, triggerContent });

    // TODO - review this act upgrade to last version
    await act(async () => {
      await user.click(screen.getByRole('button', { name: triggerContent }));
    });

    expect(screen.getByText(popoverContent)).toBeVisible();
  });

  it('hides popover content on close click', async () => {
    const popoverContent = 'popover.content';
    const triggerContent = 'click-to-open';
    const closeButtonContent = 'click-to-close';
    const { user } = renderComponent({ popoverContent, triggerContent, closeButtonContent });

    // TODO - review this act upgrade to last version
    await act(async () => {
      await user.click(screen.getByRole('button', { name: triggerContent }));
    });
    await act(async () => {
      await user.click(screen.getByRole('button', { name: closeButtonContent }));
    });

    expect(screen.queryByText(popoverContent)).not.toBeInTheDocument();
  });
});
