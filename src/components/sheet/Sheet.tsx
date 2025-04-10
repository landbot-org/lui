import { SheetProps } from './Sheet.types';
import { SheetContext } from './SheetContext';
import { useSheet } from './useSheet';

export const Sheet = ({ children, ...props }: SheetProps) => {
  const sheet = useSheet(props);

  return <SheetContext.Provider value={sheet}>{children}</SheetContext.Provider>;
};
