import { StyledCell, StyledTableText } from './Table.styles';
import { CellProps } from './Table.types';

export const TableHeaderCell = ({ size, value, flexGrow }: CellProps) => {
  return (
    <StyledCell $width={size} flexGrow={flexGrow}>
      <StyledTableText>{value}</StyledTableText>
    </StyledCell>
  );
};
