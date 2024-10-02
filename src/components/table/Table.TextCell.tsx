import { StyledCell, StyledTableText } from './Table.styles';
import { CellProps } from './Table.types';

export const TableTextCell = ({ size, value, flexGrow }: CellProps) => {
  return (
    <StyledCell $width={size} flexGrow={flexGrow}>
      <StyledTableText fontWeight={400}>{value}</StyledTableText>
    </StyledCell>
  );
};
