import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '.';
import { mockResizeObserver, render, screen } from '../test-utils';
import { PopoverProps } from '../Popover/types';

const renderComponent = (props: Partial<PopoverProps> = {}) => {
  return render(
    <Tooltip {...props}>
      <TooltipTrigger>
        <button>Open Tooltip</button>
      </TooltipTrigger>
      <TooltipContent>
        <div>Tooltip content</div>
      </TooltipContent>
    </Tooltip>
  );
};

describe('Tooltip', () => {
  beforeEach(() => {
    mockResizeObserver();
  });

  it('should open Tooltip when hover in trigger button', async () => {
    const { user } = renderComponent();

    await user.click(screen.getByRole('button', { name: 'Open Popover' }));

    expect(screen.getByText('Popover content')).toBeVisible();
  });
});
