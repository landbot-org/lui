import { ReactNode } from 'react';
import { Typography } from '../typography';
import { StyledIndexCell, StyledRow, StyledTable, StyledTableBody, StyledTableHeader } from './Table.styles';

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

export const TableHeader = ({ children, index }: { children: ReactNode; index?: boolean }) => {
  return (
    <StyledTableHeader>
      {index && <StyledIndexCell />}
      {children}
    </StyledTableHeader>
  );
};

export const TableBody = ({ children }: { children: ReactNode }) => {
  return <StyledTableBody>{children}</StyledTableBody>;
};

export const Table = ({ children }: { children: ReactNode }) => {
  return <StyledTable>{children}</StyledTable>;
};
