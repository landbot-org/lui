import { Placement } from '@floating-ui/core';
import { ReactNode } from 'react';

export type StylesProps = {
  $color: TooltipProps['color'];
};

export type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  placement?: Placement;
  color?: 'blue' | 'white';
  interaction?: 'click' | 'hover';
};
