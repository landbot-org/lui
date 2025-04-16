import { MutableRefObject, ReactNode } from 'react';
import { Placement } from '@floating-ui/react';
import { BorderType } from '../box';

export interface PopoverProps {
  canEscapeClose?: boolean;
  children?: ReactNode;
  color?: 'blue' | 'white';
  defaultOpen?: boolean;
  hasArrow?: boolean;
  hasCloseButton?: boolean;
  interaction?: 'click' | 'hover';
  open?: boolean;
  setOpen?: (open: boolean) => void;
  placement?: Placement;
  preventClose?: boolean;
  closeOnScroll?: boolean;
  closeOnClickInside?: boolean;
  role?: 'dialog' | 'alertdialog' | 'tooltip' | 'menu' | 'listbox' | 'grid' | 'tree';
  crossAxisOffset?: number;
  usePortal?: boolean;
  mainAxisOffset?: number;
  fitInContaier?: boolean;
}

export interface PopoverContentProps {
  children?: ReactNode;
  id?: string;
  root?: HTMLElement | null | MutableRefObject<HTMLElement | null>;
  border?: BorderType;
}
