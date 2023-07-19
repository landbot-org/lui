import React from 'react';
import { useClick, useDismiss, useFloating, useInteractions, useRole } from '@floating-ui/react';
import { DialogProps } from './types';

export const useDialog = ({
  canEscapeClose = true,
  hasCloseButton = true,
  width = 500,
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

  return React.useMemo(
    () => ({
      hasCloseButton,
      width,
      open,
      setOpen,
      ...interactions,
      ...data,
    }),
    [hasCloseButton, width, open, setOpen, interactions, data]
  );
};
