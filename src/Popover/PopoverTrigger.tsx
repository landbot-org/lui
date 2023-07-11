import React, { ForwardedRef, HTMLProps, ReactNode, forwardRef } from 'react';
import { usePopoverContext } from './PopoverContext';
import { useMergeRefs } from '@floating-ui/react';

interface PopoverTriggerProps {
  children: ReactNode;
}

const PopoverTriggerBase = (
  { children, ...props }: HTMLProps<HTMLElement> & PopoverTriggerProps,
  propRef: ForwardedRef<HTMLElement>
) => {
  const context = usePopoverContext();
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

  return (
    <span ref={ref} {...context.getReferenceProps(props)}>
      {children}
    </span>
  );
};

export const PopoverTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement> & PopoverTriggerProps>(PopoverTriggerBase);
