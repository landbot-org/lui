import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Button';
import { usePopoverContext } from './PopoverContext';
import type { ButtonProps } from '../Button/types';

export const PopoverClose = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { setOpen } = usePopoverContext();

  return (
    <Button
      aria-label="popover-close"
      type="button"
      startIcon={<FontAwesomeIcon icon={faXmark} />}
      color="blue.main"
      variant="text"
      {...props}
      ref={ref}
      onClick={() => setOpen(false)}
    />
  );
});

PopoverClose.displayName = 'PopoverClose';
