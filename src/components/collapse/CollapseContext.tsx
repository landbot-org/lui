import { createContext, useContext } from 'react';

import { useCollapse } from './useCollapse';

type ContextType = ReturnType<typeof useCollapse> | null;

export const CollapseContext = createContext<ContextType>(null);

export const useCollapseContext = () => {
  const context = useContext(CollapseContext);

  if (context === null) {
    throw new Error('Collapse components must be wrapped in <Collapse />');
  }

  return context;
};
