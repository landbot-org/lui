import React, { ReactNode, useState } from 'react';
import { Dialog, DialogContent } from '.';
import { mockResizeObserver, render, screen } from '../../test-utils';
import { DialogProps } from './Dialog.types';

const SUT = ({ children, ...dialogProps }: Partial<DialogProps> & { children?: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <Dialog {...dialogProps} open={open} setOpen={setOpen}>
        {children}
      </Dialog>
    </>
  );
};

const renderComponent = (children: ReactNode, { props }: { props?: Partial<DialogProps> } = {}) => {
  return render(<SUT {...props}>{children}</SUT>);
};

describe('Dialog', () => {
  beforeEach(() => {
    mockResizeObserver();
  });

  it('should open Dialog when click in trigger button', async () => {
    const { user } = renderComponent(
      <DialogContent>
        <div>Dialog content</div>
      </DialogContent>,
    );

    await user.click(screen.getByRole('button', { name: 'Open Dialog' }));

    expect(screen.getByText('Dialog content')).toBeVisible();
  });

  it('should close Dialog when click in close button', async () => {
    const { user } = renderComponent(
      <DialogContent>
        <div>Dialog content</div>
      </DialogContent>,
    );

    await user.click(screen.getByRole('button', { name: 'Open Dialog' }));
    await user.click(screen.getByRole('button', { name: 'dialog-close' }));

    expect(screen.queryByText('Dialog content')).toBeNull();
  });

  it('should not render close button if hasCloseButton is false', async () => {
    const { user } = renderComponent(
      <DialogContent>
        <div>Dialog content</div>
      </DialogContent>,
      { props: { hasCloseButton: false } },
    );

    await user.click(screen.getByRole('button', { name: 'Open Dialog' }));

    expect(screen.queryByRole('button', { name: 'dialog-close' })).toBeNull();
  });
});
