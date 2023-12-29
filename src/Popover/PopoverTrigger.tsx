import { useMergeRefs } from '@floating-ui/react';
import React from 'react';

import { usePopoverContext } from './PopoverContext';

export interface PopoverTriggerProps {
  children: JSX.Element;
}

export const PopoverTrigger = ({ children }: PopoverTriggerProps) => {
  const context = usePopoverContext();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([context.refs.setReference, childrenRef]);

  if (React.isValidElement(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(children as any).props,
        'data-state': context.open ? 'open' : 'closed',
      }),
    );
  }

  return null;
};
