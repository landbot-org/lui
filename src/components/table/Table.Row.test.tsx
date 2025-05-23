import { render, screen } from '../../test-utils';
import { TableRow, TableRowProps } from './Table.Row';
import { SelectedOptionProps } from './Table.SelectableIndexCell';

const renderComponent = (props: Partial<TableRowProps> = {}) => {
  const defaultProps: TableRowProps = {
    children: <div>Row 1</div>,
  };
  return render(<TableRow {...defaultProps} {...props} />);
};

describe('Table Row', () => {
  it('renders an extra cell for index', () => {
    const index = '27';
    const rowContent = 'Row 1';

    renderComponent({ index, children: rowContent });

    expect(screen.getByText(index)).toBeVisible();
  });

  describe('selection', () => {
    it('allows to select a row by clicking the index cell', async () => {
      const rowContent = 'Row 1';
      const selectOptions: SelectedOptionProps = {
        value: '2',
        onToggleSelection: jest.fn(),
      };
      const { user } = renderComponent({ children: rowContent, selectOptions });

      await user.click(screen.getByLabelText(`Row ${selectOptions.value}`));

      expect(selectOptions.onToggleSelection).toHaveBeenCalledWith(selectOptions.value, true);
    });

    it('shows a selection checkbox on hover', async () => {
      const rowContent = 'Row 1';
      const selectOptions: SelectedOptionProps = {
        value: '2',
        onToggleSelection: jest.fn(),
      };
      const { user } = renderComponent({ children: rowContent, selectOptions });

      await user.hover(screen.getByLabelText(`Row ${selectOptions.value}`));

      expect(screen.getByRole('checkbox')).toBeVisible();
    });

    it('shows a selection checkbox when selected', () => {
      const rowContent = 'Row 1';
      const selectOptions: SelectedOptionProps = {
        value: '2',
        onToggleSelection: jest.fn(),
        selected: true,
      };

      renderComponent({ children: rowContent, selectOptions });

      expect(screen.getByRole('checkbox')).toBeVisible();
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it("prevents unselecting a row when it's disabled", () => {
      const rowContent = 'Row 1';
      const selectOptions: SelectedOptionProps = {
        disableSelection: true,
        selected: true,
      };

      renderComponent({ children: rowContent, selectOptions });

      expect(screen.getByRole('checkbox')).toBeVisible();
      expect(screen.getByRole('checkbox')).toBeChecked();
      expect(screen.getByRole('checkbox')).toBeDisabled();
    });
  });
});
