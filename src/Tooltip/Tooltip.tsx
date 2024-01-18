import React from 'react';

import { PopoverContext } from '../Popover/PopoverContext';
import { PopoverProps } from '../Popover/types';
import { usePopover } from '../Popover/usePopover';

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
