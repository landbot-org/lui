import React from 'react';

import { DialogContext } from './DialogContext';
import { DialogProps } from './types';
import { useDialog } from './useDialog';

export const Dialog = ({ children, ...props }: DialogProps) => {
  const dialog = useDialog(props);

  return <DialogContext.Provider value={dialog}>{children}</DialogContext.Provider>;
};
