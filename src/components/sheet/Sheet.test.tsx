import React, { ReactNode, useState } from 'react';
import { Sheet, SheetContent } from '.';
import { mockResizeObserver, render, screen } from '../../test-utils';
import { SheetProps } from './Sheet.types';

const SUT = ({ children, ...SheetProps }: Partial<SheetProps> & { children?: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Sheet</button>
      <Sheet {...SheetProps} open={open} setOpen={setOpen}>
        {children}
      </Sheet>
    </>
  );
};

const renderComponent = (children: ReactNode, { props }: { props?: Partial<SheetProps> } = {}) => {
  return render(<SUT {...props}>{children}</SUT>);
};

describe('Sheet', () => {
  beforeEach(() => {
    mockResizeObserver();
  });

  it('should open Sheet when click in trigger button', async () => {
    const { user } = renderComponent(
      <SheetContent>
        <div>Sheet content</div>
      </SheetContent>,
    );

    await user.click(screen.getByRole('button', { name: 'Open Sheet' }));

    expect(screen.getByText('Sheet content')).toBeVisible();
  });
});
