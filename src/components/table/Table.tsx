import { JSXElementConstructor, Key, ReactElement, ReactNode } from 'react';

import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { Box } from '../box';
import { Button } from '../button';
import { Icon } from '../icon';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
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
  height: 40px;
`;

const IndexCell = styled.td`
  width: 50px;
  height: 40px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.palette.neutral[200]};
  line-height: 50%;
`;

const StyledCell = styled.td<{ $width?: number }>`
  max-width: ${({ $width }) => $width ?? 200}px;
  width: ${({ $width }) => $width ?? 200}px;
  height: 40px;
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
          <Box pl={1} pr={1} display="flex" alignItems="center" justifyContent="center">
            <Typography variant="text16" fontWeight={400} color="blue.main">
              {index}
            </Typography>
          </Box>
        </IndexCell>
      )}
      {values.map((cell, index) => (
        <Popover hasArrow={false} placement="bottom-start">
          <PopoverContent>
            <div
              style={{
                padding: '8px',
                backgroundColor: 'white',
                border: 'solid 2px #6361F0',
                width: `${sizes[index]}px`,
              }}
            >
              <Typography variant="text14" fontWeight={400} color="blue.main">
                {cell}
              </Typography>
              <Box display="flex" justifyContent="flex-end" style={{ width: '100%' }}>
                <Button
                  variant="text"
                  color="purple.main"
                  startIcon={<Icon icon={<FontAwesomeIcon icon={faCopy} />} />}
                  onClick={() => {
                    navigator.clipboard.writeText(cell.toString());
                  }}
                />
              </Box>
            </div>
          </PopoverContent>
          <PopoverTrigger>
            <StyledCell key={cell} $width={sizes[index]}>
              <Box pl={1} pr={1} style={{}}>
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
          </PopoverTrigger>
        </Popover>
      ))}
    </StyledRow>
  );
};

export const Table = ({ children }: { children: ReactNode }) => {
  return <StyledTable>{children}</StyledTable>;
};
