import { JSXElementConstructor, Key, ReactElement, ReactNode } from 'react';

import styled from 'styled-components';

import { Box } from '../box';
import { Typography } from '../typography';

const StyledTable = styled.table`
  border-collapse: collapse;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  border-color: ${({ theme }) => theme.palette.neutral[200]};
`;

const StyledHeaderCell = styled.th`
  text-align: left;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.palette.neutral[200]};
`;

const IndexCell = styled.td`
  width: 40px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.palette.neutral[200]};
`;

const StyledCell = styled.td<{ $width?: number }>`
  max-width: ${({ $width }) => $width ?? 200}px;
  width: ${({ $width }) => $width ?? 200}px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.palette.neutral[200]};
`;

const StyledRow = styled.tr`
  &:hover {
    background-color: ${({ theme }) => theme.palette.purple[50]};
  }
`;

export const TableHeader = ({ hasIndexCell, headers }: { hasIndexCell: boolean; headers: string[] }) => {
  return (
    <thead>
      <tr>
        {hasIndexCell && <StyledHeaderCell scope="col"></StyledHeaderCell>}
        {headers.map((header) => (
          <StyledHeaderCell scope="col" key={header}>
            <Box p={1}>
              <Typography variant="text14" fontWeight={500} color="blue.main">
                {header}
              </Typography>
            </Box>
          </StyledHeaderCell>
        ))}
      </tr>
    </thead>
  );
};

export const TableBody = ({ children }: { children: ReactNode }) => {
  return <tbody>{children}</tbody>;
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
      {index && (
        <IndexCell>
          <Box p={1} display="flex" alignItems="center" justifyContent="center">
            <Typography variant="text16" fontWeight={400} color="blue.main">
              {index}
            </Typography>
          </Box>
        </IndexCell>
      )}
      {values.map((cell, index) => (
        <StyledCell key={cell} $width={sizes[index]}>
          <Box p={1} style={{}}>
            <Typography
              variant="text14"
              fontWeight={400}
              color="blue.main"
              style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
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
