import { StyledCell, StyledTableText } from './Table.styles';

export const TableHeaderCell = ({
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
      <StyledTableText fontWeight={500}>{value}</StyledTableText>
    </StyledCell>
  );
};
