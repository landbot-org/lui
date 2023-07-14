import React from 'react';
import { useClick, useDismiss, useFloating, useInteractions, useRole } from '@floating-ui/react';

interface UseDialogProps {
  hasCloseButton?: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  width?: number;
}

export const useDialog = ({ hasCloseButton, width, open, setOpen }: UseDialogProps) => {
  const data = useFloating({ open, onOpenChange: setOpen });

  const { context } = data;
  const click = useClick(context);
  const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });
  const role = useRole(context);

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
