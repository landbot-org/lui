import { ReactNode } from 'react';

export interface DialogProps {
  canEscapeClose?: boolean;
  children?: ReactNode;
  hasCloseButton?: boolean;
  open: boolean;
  preventClose?: boolean;
  setOpen: (open: boolean) => void;
  width?: number;
  zIndex?: number;
}
