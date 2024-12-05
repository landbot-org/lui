import { createContext, useContext } from 'react';
import { useDialog } from './useDialog';

type DialogContextType = ReturnType<typeof useDialog> | null;

export const DialogContext = createContext<DialogContextType>(null);

export const useDialogContext = () => {
  const context = useContext(DialogContext);

  if (context === null) {
    throw new Error('Dialog components must be wrapped in <Dialog />');
  }

  return context;
};
