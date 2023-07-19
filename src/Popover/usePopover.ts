import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  arrow,
  useClick,
  useHover,
  useDismiss,
  useRole,
  useInteractions,
  safePolygon,
} from '@floating-ui/react';
import React, { useRef, useState } from 'react';
import { PopoverProps } from './types';

const ARROW_HEIGHT = 7;
const GAP = 2;

export const usePopover = ({
  canEscapeClose = true,
  color,
  defaultOpen,
  hasArrow = true,
  hasCloseButton = false,
  interaction = 'click',
  open: controlledOpen,
  setOpen: setControlledOpen,
  placement = 'top',
  preventClose = false,
  role: roleType,
}: PopoverProps) => {
  const arrowRef = useRef(null);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(hasArrow ? ARROW_HEIGHT + GAP : 0),
      arrow({
        element: arrowRef,
      }),
      flip(),
    ],
  });

  const click = useClick(data.context, { enabled: interaction === 'click' });
  const hover = useHover(data.context, {
    enabled: interaction === 'hover',
    handleClose: preventClose ? safePolygon() : null,
  });
  const dismiss = useDismiss(data.context, {
    escapeKey: canEscapeClose,
    outsidePress: !preventClose,
  });
  const role = useRole(data.context, { enabled: Boolean(roleType), role: roleType });

  const interactions = useInteractions([click, hover, dismiss, role]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      arrowRef,
      color,
      hasArrow,
      hasCloseButton,
    }),
    [open, setOpen, interactions, data, color, hasArrow, hasCloseButton]
  );
};
