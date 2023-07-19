import React from 'react';

export interface DialogProps {
  canEscapeClose?: boolean;
  children?: React.ReactNode;
  hasCloseButton?: boolean;
  open: boolean;
  preventClose?: boolean;
  setOpen: (open: boolean) => void;
  width?: number;
}
