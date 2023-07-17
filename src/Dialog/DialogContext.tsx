import React from 'react';
import { useDialog } from './useDialog';

type DialogContextType = ReturnType<typeof useDialog> | null;

export const DialogContext = React.createContext<DialogContextType>(null);

export const useDialogContext = () => {
  const context = React.useContext(DialogContext);

  if (context === null) {
    throw new Error('Dialog components must be wrapped in <Dialog />');
  }

  return context;
};
