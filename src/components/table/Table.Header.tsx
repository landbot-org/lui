import { ReactNode } from 'react';
import { StyledIndexCell, StyledTableHeader } from './Table.styles';

export const TableHeader = ({ children, index }: { children: ReactNode; index?: boolean }) => {
  return (
    <StyledTableHeader>
      {index && <StyledIndexCell />}
      {children}
    </StyledTableHeader>
  );
};
