import React, { ReactNode } from 'react';
import { PopoverProps } from './types';
import { usePopover } from './usePopover';
import { PopoverContext } from './PopoverContext';

export const Popover = ({
  children,
  placement = 'top',
  modal = false,
  hasArrow = true,
  onOpenChange,
  hasCloseButton = true,
  ...restOptions
}: {
  children: ReactNode;
} & PopoverProps) => {
  const popover = usePopover({ modal, placement, hasArrow, onOpenChange, hasCloseButton, ...restOptions });
  return <PopoverContext.Provider value={popover}>{children}</PopoverContext.Provider>;
};
