import React from 'react';
import { PopoverProps } from '../Popover/types';
import { usePopover } from '../Popover/usePopover';
import { PopoverContext } from '../Popover/PopoverContext';

export const Tooltip = ({
  children,
  interaction = 'hover',
  role = 'tooltip',
  color = 'blue',
  ...props
}: PopoverProps & { children?: React.ReactNode }) => {
  const popover = usePopover({ interaction, role, color, ...props });

  return <PopoverContext.Provider value={popover}>{children}</PopoverContext.Provider>;
};
