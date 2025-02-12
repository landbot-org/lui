import { ReactNode } from 'react';
import { CellProps } from './Table.types';

export interface TablePopoverCellProps extends CellProps {
  popoverChildren?: ReactNode;
  clipboardContent?: string;
  styles?: {
    popoverContainer?: React.CSSProperties;
  };
}
