import { ReactNode } from 'react';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '../box';
import { Button } from '../button';
import { Icon } from '../icon';
import { Popover, PopoverTrigger } from '../popover';
import { Typography } from '../typography';
import { FloatingContent } from './FloatingContent';
import {
  StyledCell,
  StyledIndexCell,
  StyledRow,
  StyledTable,
  StyledTableBody,
  StyledTableHeader,
  StyledTableText,
} from './Table.styles';

export const TableTextCell = ({
  size,
  value,
  flexGrow,
}: {
  value: string | number;
  size?: number;
  flexGrow?: number;
}) => {
  return (
    <StyledCell $width={size} flexGrow={flexGrow}>
      <StyledTableText fontWeight={400}>{value}</StyledTableText>
    </StyledCell>
  );
};

export const TablePopoverCell = ({
  size,
  value,
  flexGrow,
}: {
  value: string | number;
  size?: number;
  flexGrow?: number;
}) => {
  return (
    <Popover hasArrow={false} mainAxisOffset={-40} placement="bottom-start">
      <FloatingContent floatingWidth={400}>
        <Typography color="blue.main" variant="text14" fontWeight={400}>
          {value}
        </Typography>
        <Box display="flex" justifyContent="flex-end" style={{ width: '100%' }}>
          <Button
            variant="text"
            color="purple.main"
            startIcon={<Icon icon={<FontAwesomeIcon icon={faCopy} />} />}
            onClick={() => {
              navigator.clipboard.writeText(value.toString());
            }}
          />
        </Box>
      </FloatingContent>
      <PopoverTrigger>
        <StyledCell $width={size} flexGrow={flexGrow} style={{ cursor: 'pointer' }}>
          <StyledTableText fontWeight={400}>{value}</StyledTableText>
        </StyledCell>
      </PopoverTrigger>
    </Popover>
  );
};

export const TableHeaderCell = ({
  size,
  value,
  flexGrow,
}: {
  value: string | number;
  size?: number;
  flexGrow?: number;
}) => {
  return (
    <StyledCell $width={size} flexGrow={flexGrow}>
      <StyledTableText fontWeight={500}>{value}</StyledTableText>
    </StyledCell>
  );
};

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

export const TableBody = ({ children }: { children: ReactNode }) => {
  return <StyledTableBody>{children}</StyledTableBody>;
};
export const TableHeader = ({ children, index }: { children: ReactNode; index?: boolean }) => {
  return (
    <StyledTableHeader>
      {index && <StyledIndexCell />}
      {children}
    </StyledTableHeader>
  );
};

export const Table = ({ children }: { children: ReactNode }) => {
  return <StyledTable>{children}</StyledTable>;
};
