import { StyledCell, StyledTableText } from './Table.styles';
import { CellProps } from './Table.types';

export const TableTextCell = ({ size, flexGrow, children }: CellProps) => {
  return (
    <StyledCell $width={size} flexGrow={flexGrow}>
      <StyledTableText fontWeight={400}>{children}</StyledTableText>
    </StyledCell>
  );
};
