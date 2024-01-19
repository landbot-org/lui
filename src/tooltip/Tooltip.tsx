import React from 'react';

import { PopoverContext } from '../popover/PopoverContext';
import { PopoverProps } from '../popover/types';
import { usePopover } from '../popover/usePopover';

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
