import { StyledCell, StyledTableText } from './Table.styles';
import { CellProps } from './Table.types';

export const TableHeaderCell = ({ size, children, flexGrow }: CellProps) => {
  return (
    <StyledCell $width={size} flexGrow={flexGrow}>
      <StyledTableText>{children}</StyledTableText>
    </StyledCell>
  );
};
