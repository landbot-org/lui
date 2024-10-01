import { ReactNode } from 'react';
import { Box } from '../box';
import { StyledIndexCell } from './Table.styles';

type TableHeaderProps = {
  children: ReactNode;
  index?: boolean;
};

export const TableHeader = ({ children, index }: TableHeaderProps) => {
  return (
    <Box display="flex">
      {index && <StyledIndexCell />}
      {children}
    </Box>
  );
};
