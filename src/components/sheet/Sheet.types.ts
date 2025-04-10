import { ReactNode } from 'react';

export interface SheetProps {
  canEscapeClose?: boolean;
  children?: ReactNode;
  open: boolean;
  preventClose?: boolean;
  setOpen: (open: boolean) => void;
  width?: number;
  zIndex?: number;
}
