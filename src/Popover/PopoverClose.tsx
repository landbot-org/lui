import React, { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react';
import { usePopoverContext } from './PopoverContext';

const PopoverCloseBase = (props: ButtonHTMLAttributes<HTMLButtonElement>, ref: ForwardedRef<HTMLButtonElement>) => {
  const { setOpen } = usePopoverContext();
  return (
    <button
      type="button"
      ref={ref}
      {...props}
      onClick={(event) => {
        props.onClick?.(event);
        setOpen(false);
      }}
    />
  );
};
export const PopoverClose = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(PopoverCloseBase);
