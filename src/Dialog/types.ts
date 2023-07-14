export interface DialogProps {
  children?: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  hasCloseButton?: boolean;
  width?: number;
}
