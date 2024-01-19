import React from 'react';

import { CollapseProps } from './Collapse.types';
import { CollapseContext } from './CollapseContext';
import { useCollapse } from './useCollapse';

export const Collapse = ({ children, ...props }: CollapseProps) => {
  const collapse = useCollapse(props);

  return <CollapseContext.Provider value={collapse}>{children}</CollapseContext.Provider>;
};
