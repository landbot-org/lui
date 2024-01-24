import { PopoverProps } from './Popover.types';
import { PopoverContext } from './PopoverContext';
import { usePopover } from './usePopover';

export const Popover = ({ children, interaction = 'click', color = 'white', ...props }: PopoverProps) => {
  const popover = usePopover({ interaction, color, ...props });

  return <PopoverContext.Provider value={popover}>{children}</PopoverContext.Provider>;
};
