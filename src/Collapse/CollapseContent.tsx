import React from 'react';

import { Box } from '../Box';
import { BoxProps } from '../Box/types';
import { useCollapseContext } from './CollapseContext';

export const CollapseContent = ({ children, ...props }: BoxProps) => {
  const { open } = useCollapseContext();

  return open ? <Box {...props}>{children}</Box> : null;
};
