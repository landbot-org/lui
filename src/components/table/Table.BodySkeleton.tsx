import {
  StyledSkeletonBody,
  StyledSkeletonCell,
  StyledSkeletonCellContent,
  StyledSkeletonIndexCell,
  StyledSkeletonIndexCellContent,
  StyledSkeletonRow,
} from './Table.BodySkeleton.styles';

export interface TableBodySkeletonProps {
  rows: number;
  columns: number;
  showIndex?: boolean;
  longCellsPositions?: number[];
  sizes?: number[];
}

export const TableBodySkeleton = ({ rows, columns, showIndex, longCellsPositions, sizes }: TableBodySkeletonProps) => {
  return (
    <StyledSkeletonBody>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <StyledSkeletonRow key={rowIndex} aria-label={`Loading row ${rowIndex}`}>
          {showIndex && (
            <StyledSkeletonIndexCell aria-label={`Loading index cell ${rowIndex}`}>
              <StyledSkeletonIndexCellContent />
            </StyledSkeletonIndexCell>
          )}
          {Array.from({ length: columns }).map((_, colIndex) => (
            <StyledSkeletonCell
              key={colIndex}
              flexGrow={longCellsPositions?.includes(colIndex) ? 1 : undefined}
              aria-label={`Loading cell ${rowIndex}-${colIndex}`}
              $width={sizes?.[colIndex]}
            >
              <StyledSkeletonCellContent />
            </StyledSkeletonCell>
          ))}
        </StyledSkeletonRow>
      ))}
    </StyledSkeletonBody>
  );
};
