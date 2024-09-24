import { ReactNode } from 'react';
import { Box } from '../box';
import { StyledCell, StyledRow, StyledTable, StyledTableBody, StyledTableText } from './Table.styles';

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

export const TablePopoverCell = () => {};

export const TableHeader = ({ children }: { children: ReactNode }) => {
  return <Box display="flex">{children}</Box>;
};

export const TableRow = ({ children }: { children: ReactNode }) => {
  return <StyledRow>{children}</StyledRow>;
};

export const TableBody = ({ children }: { children: ReactNode }) => {
  return <StyledTableBody>{children}</StyledTableBody>;
};

export const Table = ({ children }: { children: ReactNode }) => {
  return <StyledTable>{children}</StyledTable>;
};
