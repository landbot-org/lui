import React from 'react';
import { CollapseContext } from './CollapseContext';
import { CollapseProps } from './types';
import { useCollapse } from './useCollapse';

export const Collapse = ({ children, ...props }: CollapseProps) => {
  const collapse = useCollapse(props);

  return <CollapseContext.Provider value={collapse}>{children}</CollapseContext.Provider>;
};
