import { CellProps } from './Table.Types';
import { StyledCell, StyledTableText } from './Table.styles';

export const TableTextCell = ({ size, value, flexGrow }: CellProps) => {
  return (
    <StyledCell $width={size} flexGrow={flexGrow}>
      <StyledTableText fontWeight={400}>{value}</StyledTableText>
    </StyledCell>
  );
};
