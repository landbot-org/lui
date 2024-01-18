import React from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '../Button';
import type { ButtonProps } from '../Button/types';
import { usePopoverContext } from './PopoverContext';

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
