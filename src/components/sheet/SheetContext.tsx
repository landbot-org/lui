import { createContext, useContext } from 'react';
import { useSheet } from './useSheet';

type SheetContextType = ReturnType<typeof useSheet> | null;

export const SheetContext = createContext<SheetContextType>(null);

export const useSheetContext = () => {
  const context = useContext(SheetContext);

  if (context === null) {
    throw new Error('Sheet components must be wrapped in <Dialog />');
  }

  return context;
};
