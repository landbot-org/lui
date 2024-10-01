import { ReactNode } from 'react';
import { Typography } from '../typography';
import { StyledIndexCell, StyledRow } from './Table.styles';

type TableRowProps = {
  children: ReactNode;
  index?: string;
};

export const TableRow = ({ children, index }: TableRowProps) => {
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
