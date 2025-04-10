import { useMemo } from 'react';
import { useClick, useDismiss, useFloating, useInteractions, useRole } from '@floating-ui/react';
import { SheetProps } from './Sheet.types';

export const useSheet = ({
  canEscapeClose = true,
  width = 500,
  zIndex = 60,
  open,
  preventClose = false,
  setOpen,
}: SheetProps) => {
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
      width,
      open,
      setOpen,
      zIndex,
      ...interactions,
      ...data,
    }),
    [width, open, setOpen, zIndex, interactions, data],
  );
};
