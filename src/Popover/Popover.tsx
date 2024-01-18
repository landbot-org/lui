import React from 'react';

import { PopoverContext } from './PopoverContext';
import { PopoverProps } from './types';
import { usePopover } from './usePopover';

export const Popover = ({ children, interaction = 'click', color = 'white', ...props }: PopoverProps) => {
  const popover = usePopover({ interaction, color, ...props });

  return <PopoverContext.Provider value={popover}>{children}</PopoverContext.Provider>;
};
