import { ReactNode } from 'react';
import { StyledCell, StyledTableText } from './Table.styles';
import { CellProps } from './Table.types';

export const TableHeaderCell = ({ size, children, flexGrow, menuActions }: CellProps & { menuActions?: ReactNode }) => {
  return (
    <StyledCell $width={size} flexGrow={flexGrow}>
      <StyledTableText>{children}</StyledTableText>
      {menuActions}
    </StyledCell>
  );
};
