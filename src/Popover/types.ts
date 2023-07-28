import React from 'react';
import { Placement } from '@floating-ui/react';

export interface PopoverProps {
  canEscapeClose?: boolean;
  children?: React.ReactNode;
  color?: 'blue' | 'white';
  defaultOpen?: boolean;
  hasArrow?: boolean;
  hasCloseButton?: boolean;
  interaction?: 'click' | 'hover';
  open?: boolean;
  setOpen?: (open: boolean) => void;
  placement?: Placement;
  preventClose?: boolean;
  role?: 'dialog' | 'alertdialog' | 'tooltip' | 'menu' | 'listbox' | 'grid' | 'tree';
}