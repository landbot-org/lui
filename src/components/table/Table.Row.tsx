import { ReactNode } from 'react';
import { Typography } from '../typography';
import { StyledIndexCell, StyledRow } from './Table.styles';

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
