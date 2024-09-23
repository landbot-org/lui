import { useEffect, useMemo, useRef, useState } from 'react';

import {
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';

import { PopoverProps } from './Popover.types';

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
  closeOnScroll = false,
  closeOnClickInside = false,
  crossAxisOffset,
  usePortal = true,
  mainAxisOffset,
}: PopoverProps) => {
  const arrowRef = useRef(null);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  useEffect(() => {
    if (!closeOnScroll) return;

    const close = () => {
      setOpen(false);
    };

    window.addEventListener('scroll', close);

    return () => {
      window.removeEventListener('scroll', close);
    };
  }, [setOpen, closeOnScroll]);

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset({ mainAxis: hasArrow ? ARROW_HEIGHT + GAP : mainAxisOffset ?? 0, crossAxis: crossAxisOffset ?? 0 }),
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

  return useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      arrowRef,
      color,
      hasArrow,
      hasCloseButton,
      usePortal,
      closeOnClickInside,
    }),
    [open, setOpen, interactions, data, color, hasArrow, hasCloseButton, usePortal, closeOnClickInside],
  );
};
