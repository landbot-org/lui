import { ReactNode } from 'react';
import { SelectedOptionProps, TableSelectableIndexCell } from './Table.SelectableIndexCell';
import { StyledRow } from './Table.styles';

export type TableRowProps = {
  children: ReactNode;
  index?: string;
  selectOptions?: SelectedOptionProps;
};

export const TableRow = ({ children, index, selectOptions }: TableRowProps) => {
  return (
    <StyledRow $selected={selectOptions?.selected === true}>
      <TableSelectableIndexCell index={index} selectOptions={selectOptions} />
      {children}
    </StyledRow>
  );
};
