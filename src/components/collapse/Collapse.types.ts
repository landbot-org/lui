import { ReactNode } from 'react';

export interface CollapseProps {
  children?: ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}
