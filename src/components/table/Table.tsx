import { ReactNode } from 'react';
import { Typography } from '../typography';
import {
  StyledCell,
  StyledIndexCell,
  StyledRow,
  StyledTable,
  StyledTableBody,
  StyledTableHeader,
  StyledTableText,
} from './Table.styles';

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

export const TablePopoverCell = () => {};

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

export const TableRow = ({ children, index }: { children: ReactNode; index: string }) => {
  return (
    <StyledRow>
      {index && (
        <StyledIndexCell>
          <Typography fontWeight={500} variant="text16" color="blue.main">
            {index}
          </Typography>
        </StyledIndexCell>
      )}
      {children}
    </StyledRow>
  );
};

export const TableBody = ({ children }: { children: ReactNode }) => {
  return <StyledTableBody>{children}</StyledTableBody>;
};
export const TableHeader = ({ children, index }: { children: ReactNode; index?: boolean }) => {
  return (
    <StyledTableHeader>
      {index && <StyledIndexCell />}
      {children}
    </StyledTableHeader>
  );
};

export const Table = ({ children }: { children: ReactNode }) => {
  return <StyledTable>{children}</StyledTable>;
};
