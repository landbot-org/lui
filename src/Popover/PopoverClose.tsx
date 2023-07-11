import React, { HTMLAttributes, ForwardedRef, forwardRef } from 'react';
import { usePopoverContext } from './PopoverContext';

const PopoverCloseBase = (props: HTMLAttributes<HTMLSpanElement>, ref: ForwardedRef<HTMLSpanElement>) => {
  const { setOpen } = usePopoverContext();
  return (
    <span
      ref={ref}
      {...props}
      onClick={(event) => {
        props.onClick?.(event);
        setOpen(false);
      }}
    />
  );
};

export const PopoverClose = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(PopoverCloseBase);
