import { render, screen } from '../../test-utils';
import { TableBodySkeleton, TableBodySkeletonProps } from './Table.BodySkeleton';

const renderComponent = (props: Partial<TableBodySkeletonProps> = {}) => {
  const defaultProps: TableBodySkeletonProps = {
    rows: 10,
    columns: 4,
  };
  return render(<TableBodySkeleton {...defaultProps} {...props} />);
};

describe('TableBodySkeleton', () => {
  it('renders as many rows as required', () => {
    const rows = 10;
    const columns = 4;

    renderComponent({ rows, columns });

    for (let i = 0; i < rows; i++) {
      expect(screen.getByLabelText(`Loading row ${i}`)).toBeVisible();

      for (let j = 0; j < columns; j++) {
        expect(screen.getByLabelText(`Loading cell ${i}-${j}`)).toBeVisible();
      }
    }
  });

  it('renders an index column if showIndex is true', () => {
    const showIndex = true;
    const rows = 10;

    renderComponent({ showIndex, rows });

    for (let i = 0; i < rows; i++) {
      expect(screen.getByLabelText(`Loading index cell ${i}`)).toBeVisible();
    }
  });

  it('renders long cells if longCellsPositions is defined', () => {
    const longCellPosition = 3;
    const rows = 10;
    const columns = 4;

    renderComponent({ longCellsPositions: [longCellPosition], rows, columns });

    for (let i = 0; i < rows; i++) {
      expect(screen.getByLabelText(`Loading cell ${i}-${longCellPosition}`)).toHaveStyle({ flexGrow: 1 });
    }
  });
});
