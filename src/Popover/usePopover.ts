import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  arrow,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
} from '@floating-ui/react';
import React, { useRef, useState } from 'react';
import { PopoverProps } from './types';

const ARROW_HEIGHT = 7;
const GAP = 2;

export const usePopover = ({
  initialOpen = false,
  placement = 'bottom',
  modal,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  preventClose = false,
}: PopoverProps = {}) => {
  const arrowRef = useRef(null);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
  const [labelId, setLabelId] = useState<string | undefined>();
  const [descriptionId, setDescriptionId] = useState<string | undefined>();

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(ARROW_HEIGHT + GAP),
      arrow({
        element: arrowRef,
      }),
      flip(),
    ],
  });

  const click = useClick(data.context, { enabled: controlledOpen === null });
  const dismiss = useDismiss(data.context, { enabled: !preventClose });
  const role = useRole(data.context);

  const interactions = useInteractions([click, dismiss, role]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      modal,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
    }),
    [open, setOpen, interactions, data, modal, labelId, descriptionId]
  );
};
