import { ReactNode } from 'react';
import { Box } from '../box';
import { SelectedStatus, TableSelectableIndexCell } from './Table.SelectableIndexCell';

type TableHeaderProps = {
  children: ReactNode;
  index?: boolean;
  selectOptions?: {
    onToogleSelection: (selected: boolean) => void;
    selected?: SelectedStatus;
  };
};

export const TableHeader = ({ children, index, selectOptions }: TableHeaderProps) => {
  const handleToogleSelection = (_: unknown, selected: boolean) => {
    selectOptions?.onToogleSelection(selected);
  };

  return (
    <Box display="flex">
      <TableSelectableIndexCell
        index={index ? ' ' : ''}
        selectOptions={{
          selected: selectOptions?.selected,
          onToogleSelection: handleToogleSelection,
          forceSelector: !!selectOptions,
        }}
      />
      {children}
    </Box>
  );
};
