import React, { ReactNode } from 'react';
import { usePopoverContext } from './PopoverContext';
import { useMergeRefs } from '@floating-ui/react';

interface PopoverTriggerProps {
  children: ReactNode;
}

export const PopoverTrigger = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement> & PopoverTriggerProps>(
  function PopoverTrigger({ children, ...props }, propRef) {
    const context = usePopoverContext();
    const childrenRef = (children as any).ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    return (
      <button ref={ref} type="button" {...context.getReferenceProps(props)}>
        {children}
      </button>
    );
  }
);
