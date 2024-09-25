import { styled } from 'styled-components';
import { Box } from '../box';
import { Typography } from '../typography';

export const StyledTable = styled.div`
  border-style: solid;
  border-width: 0.5px;
  border-color: ${({ theme }) => theme.palette.neutral[200]};
  overflow-x: scroll;
`;

export const StyledTableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  &:hover {
    background-color: ${({ theme }) => theme.palette.purple[50]};
  }
`;

export const StyledCell = styled(Box).attrs({ pl: 1, pr: 1, display: 'flex', alignItems: 'center' })<{
  $width?: number;
}>`
  width: ${({ $width }) => $width ?? 200}px;
  min-width: 200px;
  height: 40px;
  border-width: 0.5px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.neutral[200]};
`;

export const StyledTableText = styled(Typography).attrs({
  color: 'blue.main',
  variant: 'text14',
})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
