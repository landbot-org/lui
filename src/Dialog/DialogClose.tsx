import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Button';
import { useDialogContext } from './DialogContext';
import { ButtonProps } from '../Button/types';

export const DialogClose = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { setOpen } = useDialogContext();

  return (
    <Button
      aria-label="dialog-close"
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

DialogClose.displayName = 'DialogClose';
