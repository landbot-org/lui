import React from 'react';

import { Box } from '../Boxz';
import { BoxProps } from '../Boxz/types';
import { useCollapseContext } from './CollapseContext';

export const CollapseContent = ({ children, ...props }: BoxProps) => {
  const { open } = useCollapseContext();

  return open ? <Box {...props}>{children}</Box> : null;
};
