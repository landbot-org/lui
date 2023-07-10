import React, { ForwardedRef, HTMLProps, ReactNode, forwardRef } from 'react';
import { usePopoverContext } from './PopoverContext';
import { useMergeRefs } from '@floating-ui/react';
import { StyledButtonDefaultRemoved } from './Popover.styles';
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
    <StyledButtonDefaultRemoved ref={ref} type="button" {...context.getReferenceProps(props)}>
      {children}
    </StyledButtonDefaultRemoved>
  );
};

export const PopoverTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement> & PopoverTriggerProps>(PopoverTriggerBase);
