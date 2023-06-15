import React, { ReactNode } from 'react';
import { PopoverProps } from './types';
import { usePopover } from './usePopover';
import { PopoverContext } from './PopoverContext';

export const Popover = ({
  children,
  modal = false,
  ...restOptions
}: {
  children: ReactNode;
} & PopoverProps) => {
  const popover = usePopover({ modal, ...restOptions });
  return <PopoverContext.Provider value={popover}>{children}</PopoverContext.Provider>;
};
