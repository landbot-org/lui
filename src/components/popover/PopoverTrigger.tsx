import { cloneElement, isValidElement } from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { usePopoverContext } from './PopoverContext';

export interface PopoverTriggerProps {
  children: JSX.Element;
}

export const PopoverTrigger = ({ children }: PopoverTriggerProps) => {
  const context = usePopoverContext();
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([context.refs.setReference, childrenRef]);

  if (isValidElement(children)) {
    return cloneElement(
      children,
      context.getReferenceProps({ ref, ...(children as any).props, 'data-state': context.open ? 'open' : 'closed' }),
    );
  }

  return null;
};
