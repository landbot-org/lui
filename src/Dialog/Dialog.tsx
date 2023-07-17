import React from 'react';
import { DialogContext } from './DialogContext';
import { useDialog } from './useDialog';
import { DialogProps } from './types';

export const Dialog = ({ children, hasCloseButton = true, width = 500, open, setOpen }: DialogProps) => {
  const dialog = useDialog({ open, setOpen, hasCloseButton, width });

  return <DialogContext.Provider value={dialog}>{children}</DialogContext.Provider>;
};
