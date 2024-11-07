import { ReactNode } from 'react';
import { Box } from '../box';
import { SelectedStatus, TableSelectableIndexCell } from './Table.SelectableIndexCell';

type TableHeaderProps = {
  children: ReactNode;
  index?: boolean;
  selectOptions?: {
    onToggleSelection: (selected: boolean) => void;
    selected?: SelectedStatus;
  };
};

export const TableHeader = ({ children, index, selectOptions }: TableHeaderProps) => {
  const handleToggleSelection = (_: unknown, selected: boolean) => {
    selectOptions?.onToggleSelection(selected);
  };

  return (
    <Box display="flex">
      <TableSelectableIndexCell
        index={index ? ' ' : ''}
        selectOptions={{
          selected: selectOptions?.selected,
          onToggleSelection: handleToggleSelection,
          forceSelector: !!selectOptions,
        }}
      />
      {children}
    </Box>
  );
};
