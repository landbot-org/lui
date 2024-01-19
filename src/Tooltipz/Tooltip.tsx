import React from 'react';

import { PopoverContext } from '../Popoverz/PopoverContext';
import { PopoverProps } from '../Popoverz/types';
import { usePopover } from '../Popoverz/usePopover';

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
