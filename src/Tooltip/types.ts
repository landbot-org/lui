import React, { RefObject } from 'react';

export type TooltipProps = {
  children: React.ReactNode;
  content: string | JSX.Element;
  refTarget: RefObject<HTMLElement>;
  placement: PLACEMENT;
  color: 'blue' | 'white';
  isOpen: boolean;
};

export enum PLACEMENT {
  'BOTTOM' = 'bottom',
  'LEFT' = 'left',
  'RIGHT' = 'right',
  'TOP' = 'top',
  'TOP-RIGHT' = 'top-right',
  'TOP-LEFT' = 'top-left',
  'BOTTOM-RIGHT' = 'bottom-right',
  'BOTTOM-LEFT' = 'bottom-left',
}
