import { useMemo } from 'react';
import { useClick, useDismiss, useFloating, useInteractions, useRole } from '@floating-ui/react';
import { DialogProps } from './Dialog.types';

export const useDialog = ({
  canEscapeClose = true,
  hasCloseButton = true,
  width = 500,
  zIndex = 60,
  open,
  preventClose = false,
  setOpen,
}: DialogProps) => {
  const data = useFloating({ open, onOpenChange: setOpen });

  const { context } = data;
  const click = useClick(context);
  const dismiss = useDismiss(context, {
    escapeKey: canEscapeClose,
    outsidePress: !preventClose,
    outsidePressEvent: 'mousedown',
  });
  const role = useRole(context, { role: 'dialog' });

  const interactions = useInteractions([click, dismiss, role]);

  return useMemo(
    () => ({
      hasCloseButton,
      width,
      open,
      setOpen,
      zIndex,
      ...interactions,
      ...data,
    }),
    [hasCloseButton, width, open, setOpen, zIndex, interactions, data],
  );
};
