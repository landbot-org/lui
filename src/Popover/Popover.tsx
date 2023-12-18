import React from 'react';
import { PopoverProps } from './types';
import { usePopover } from './usePopover';
import { PopoverContext } from './PopoverContext';

export const Popover = ({ children, interaction = 'click', color = 'white', ...props }: PopoverProps) => {
  const popover = usePopover({ interaction, color, ...props });

  return <PopoverContext.Provider value={popover}>{children}</PopoverContext.Provider>;
};