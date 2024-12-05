import { useMemo, useState } from 'react';
import { CollapseProps } from './Collapse.types';

export const useCollapse = ({ open: controlledOpen, setOpen: setControlledOpen }: CollapseProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  return useMemo(
    () => ({
      open,
      setOpen,
    }),
    [open, setOpen],
  );
};
