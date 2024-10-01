import { StyledCell, StyledTableText } from './Table.styles';

export const TableTextCell = ({
  size,
  value,
  flexGrow,
}: {
  value: string | number;
  size?: number;
  flexGrow?: number;
}) => {
  return (
    <StyledCell $width={size} flexGrow={flexGrow}>
      <StyledTableText fontWeight={400}>{value}</StyledTableText>
    </StyledCell>
  );
};
