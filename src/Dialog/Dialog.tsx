import React from 'react';
import { DialogContext } from './DialogContext';
import { useDialog } from './useDialog';
import { DialogProps } from './types';

export const Dialog = ({ children, ...props }: DialogProps) => {
  const dialog = useDialog(props);

  return <DialogContext.Provider value={dialog}>{children}</DialogContext.Provider>;
};
