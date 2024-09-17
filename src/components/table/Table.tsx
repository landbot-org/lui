import { JSXElementConstructor, Key, ReactElement, ReactNode } from 'react';

import styled from 'styled-components';

import { Box } from '../box';
import { Typography } from '../typography';

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
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

const NumberCell = styled.td`
  width: 40px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.palette.neutral[200]};
`;

const StyledCell = styled.td`
  width: 200px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.palette.neutral[200]};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const StyledRow = styled.tr`
  &:hover {
    background-color: ${({ theme }) => theme.palette.purple[50]};
  }
`;

const HeaderRow = ({ hasRowNumbers, headers }: { hasRowNumbers: boolean; headers: string[] }) => {
  return (
    <thead>
      <tr>
        {hasRowNumbers && <StyledHeaderCell scope="col"></StyledHeaderCell>}
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

export const Table = () => {
  const headers = ['Person', 'Most interest in', 'Age', 'Text'];
  const hasHeaders = headers.length > 0;
  const data = [
    [
      'Chris',
      'HTML tables',
      22,
      'djjfdjasfkldjfklasjfldsakfjaslfjaslkdjsflkdasjflkasffdsaf fdasfdsaf fdsa f sf f dsfafafds fsdaf fdasfsdafdasfas ',
    ],
    [
      'Dennis',
      'Web accessibility',
      45,
      'djjfdjasfkldjfklasjfldsakfjaslfjaslkdjsflkdasjflkasffdsaf fdasfdsaf fdsa f sf f dsfafafds fsdaf fdasfsdafdasfas ',
    ],
    [
      'Sarah',
      'JavaScript frameworks',
      29,
      'djjfdjasfkldjfklasjfldsakfjaslfjaslkdjsflkdasjflkasffdsaf fdasfdsaf fdsa f sf f dsfafafds fsdaf fdasfsdafdasfas ',
    ],
    [
      'Karen',
      'Web performance',
      36,
      'djjfdjasfkldjfklasjfldsakfjaslfjaslkdjsflkdasjflkasffdsaf fdasfdsaf fdsa f sf f dsfafafds fsdaf fdasfsdafdasfas ',
    ],
    [
      'Chris',
      'HTML tables',
      22,
      'djjfdjasfkldjfklasjfldsakfjaslfjaslkdjsflkdasjflkasffdsaf fdasfdsaf fdsa f sf f dsfafafds fsdaf fdasfsdafdasfas ',
    ],
    [
      'Dennis',
      'Web accessibility',
      45,
      'djjfdjasfkldjfklasjfldsakfjaslfjaslkdjsflkdasjflkasffdsaf fdasfdsaf fdsa f sf f dsfafafds fsdaf fdasfsdafdasfas ',
    ],
    [
      'Sarah',
      'JavaScript frameworks',
      29,
      'djjfdjasfkldjfklasjfldsakfjaslfjaslkdjsflkdasjflkasffdsaf fdasfdsaf fdsa f sf f dsfafafds fsdaf fdasfsdafdasfas ',
    ],
    [
      'Karen',
      'Web performance',
      36,
      'djjfdjasfkldjfklasjfldsakfjaslfjaslkdjsflkdasjflkasffdsaf fdasfdsaf fdsa f sf f dsfafafds fsdaf fdasfsdafdasfas ',
    ],
  ];
  const hasRowNumbers = true;

  return (
    <StyledTable>
      <HeaderRow hasRowNumbers={hasRowNumbers} headers={headers}></HeaderRow>
      <tbody>
        {data.map((row, index) => (
          <StyledRow key={row[0]}>
            {hasRowNumbers && (
              <NumberCell>
                <Box p={1} display="flex" alignItems="center" justifyContent="center" style={{ width: '100%' }}>
                  <Typography variant="text16" fontWeight={400} color="blue.main">
                    {index}
                  </Typography>
                </Box>
              </NumberCell>
            )}
            {row.map((cell) => (
              <StyledCell key={cell}>
                <Box p={1}>
                  <Typography variant="text14" fontWeight={400} color="blue.main">
                    {cell}
                  </Typography>
                </Box>
              </StyledCell>
            ))}
          </StyledRow>
        ))}
      </tbody>
    </StyledTable>
  );
};
