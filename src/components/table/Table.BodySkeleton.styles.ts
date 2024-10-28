import { styled } from 'styled-components';
import { Box } from '../box';
import { CELL_WIDTH } from './Table.constants';

const SKELETON_CELL_HEIGHT = 24;

export const StyledSkeletonBody = styled(Box).attrs({ pb: 1, backgroundColor: 'neutral.50' })``;

export const StyledSkeletonIndexCell = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})`
  width: 50px;
  height: ${SKELETON_CELL_HEIGHT}px;
  padding: 0px;
`;

export const StyledSkeletonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const StyledSkeletonCell = styled(Box).attrs({
  pl: 1,
  pr: 1,
  display: 'flex',
  alignItems: 'center',
})<{
  $width?: number;
}>`
  padding: 8px;
  width: ${({ $width }) => $width ?? CELL_WIDTH}px;
  min-width: ${({ $width }) => $width ?? CELL_WIDTH}px;
  height: ${SKELETON_CELL_HEIGHT}px;
`;

export const StyledSkeletonCellContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.neutral[100]};
  border-radius: 4px;
  height: ${SKELETON_CELL_HEIGHT}px;
`;

export const StyledSkeletonIndexCellContent = styled(StyledSkeletonCellContent)`
  padding: 0px 8px;
  width: auto;
  padding: 0px 20px;
`;
