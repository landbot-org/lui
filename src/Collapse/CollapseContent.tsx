import React from 'react';
import { BoxProps } from '../Box/types';
import { useCollapseContext } from './CollapseContext';
import { Box } from '../Box';

export const CollapseContent = ({ children, ...props }: BoxProps) => {
  const { open } = useCollapseContext();

  return open ? <Box {...props}>{children}</Box> : null;
};
