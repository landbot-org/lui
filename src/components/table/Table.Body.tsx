import { ReactNode } from 'react';
import { StyledTableBody } from './Table.styles';

export const TableBody = ({ children }: { children: ReactNode }) => {
  return <StyledTableBody>{children}</StyledTableBody>;
};
