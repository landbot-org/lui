import { styled } from 'styled-components';
import { Box } from '../box';
import { Typography } from '../typography';
import { CELL_HEIGHT, CELL_WIDTH } from './Table.constants';

const StyledGridBorder = styled(Box)`
  border-style: solid;
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.palette.neutral[200]};
`;

export const StyledTable = styled(StyledGridBorder)`
  overflow-x: scroll;
  width: 100%;
  display: grid;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  &:hover {
    background-color: ${({ theme }) => theme.palette.purple[50]};
  }
`;

export const StyledIndexCell = styled(StyledGridBorder).attrs({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})`
  width: 50px;
  height: ${CELL_HEIGHT}px;
`;

export const StyledCell = styled(StyledGridBorder).attrs({ pl: 1, pr: 1, display: 'flex', alignItems: 'center' })<{
  $width?: number;
}>`
  width: ${({ $width }) => $width ?? CELL_WIDTH}px;
  min-width: ${({ $width }) => $width ?? CELL_WIDTH}px;
  height: ${CELL_HEIGHT}px;
`;

export const StyledPopoverCell = styled(StyledCell)`
  cursor: pointer;
`;

export const StyledPopoverButtonWrapper = styled(Box).attrs({ display: 'flex', justifyContent: 'flex-end' })`
  width: 100%;
`;

export const StyledTableText = styled(Typography).attrs({
  color: 'blue.main',
  variant: 'text14',
  fontWeight: 500,
})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledFloatingContent = styled.div<{ $width?: number }>`
  padding: 8px;
  background-color: white;
  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme }) => theme.palette.purple.main};
`;
