import { forwardRef } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../button';
import { ButtonProps } from '../button/Button.types';
import { useDialogContext } from './DialogContext';

export const DialogClose = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
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
