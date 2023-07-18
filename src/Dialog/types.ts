export interface DialogProps {
  canEscapeClose?: boolean;
  hasCloseButton?: boolean;
  open: boolean;
  preventClose?: boolean;
  setOpen: (open: boolean) => void;
  width?: number;
}
