import { CellProps } from './Table.Types';
import { StyledCell, StyledTableText } from './Table.styles';

export const TableHeaderCell = ({ size, value, flexGrow }: CellProps) => {
  return (
    <StyledCell $width={size} flexGrow={flexGrow}>
      <StyledTableText fontWeight={500}>{value}</StyledTableText>
    </StyledCell>
  );
};
