import { DialogProps } from './Dialog.types';
import { DialogContext } from './DialogContext';
import { useDialog } from './useDialog';

export const Dialog = ({ children, ...props }: DialogProps) => {
  const dialog = useDialog(props);

  return <DialogContext.Provider value={dialog}>{children}</DialogContext.Provider>;
};
