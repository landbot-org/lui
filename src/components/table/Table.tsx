import { ReactNode } from 'react';
import { StyledTable } from './Table.styles';

export const Table = ({ children }: { children: ReactNode }) => {
  return <StyledTable>{children}</StyledTable>;
};
