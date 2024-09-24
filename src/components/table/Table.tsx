import { ReactNode } from 'react';
import styled from 'styled-components';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '../box';
import { Button } from '../button';
import { Icon } from '../icon';
import { Popover, PopoverTrigger } from '../popover';
import { Typography } from '../typography';
import { FloatingContent } from './FloaringContent';

const StyledTable = styled.table`
  border: 0;
  width: 100%;
  border-color: ${({ theme }) => theme.palette.neutral[200]};
`;

const StyledTableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 1px;
  background-color: ${({ theme }) => theme.palette.neutral[200]};
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
  &:hover {
    background-color: ${({ theme }) => theme.palette.purple[50]};
  }
`;

const StyledCell = styled.div<{ $width?: number }>`
  width: ${({ $width }) => $width ?? 200}px;
  height: 40px;
  background-color: white;
`;

export const TableBody = ({ children }: { children: ReactNode }) => {
  return <StyledTableBody>{children}</StyledTableBody>;
};

export const TableRow = ({
  index,
  values,
  sizes = [],
}: {
  index?: string;
  values: (string | number)[];
  sizes?: (number | undefined)[];
}) => {
  return (
    <StyledRow key={index}>
      {values.map((cell, index) => (
        <StyledCell key={cell} $width={sizes[index]} style={{ flexGrow: (index + 1) % 4 ? undefined : 1 }}>
          <Box pl={1} pr={1} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <Typography style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {cell}
            </Typography>
          </Box>
        </StyledCell>
      ))}
    </StyledRow>
  );
};

export const Table = ({ children }: { children: ReactNode }) => {
  return <StyledTable>{children}</StyledTable>;
};
