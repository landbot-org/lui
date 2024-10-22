import { render, screen } from '../../test-utils';
import { TablePaginationFooter, TablePaginationFooterProps } from './Table.PaginationFooter';

const renderComponent = (props: Partial<TablePaginationFooterProps> = {}) => {
  const defaultProps: TablePaginationFooterProps = {
    currentPage: 1,
    totalPages: 10,
    onPageChange: jest.fn(),
  };

  return render(<TablePaginationFooter {...defaultProps} {...props} />);
};

describe('TablePaginationFooter', () => {
  describe('page selector', () => {
    it('shows options to change page', async () => {
      const totalPages = 10;
      const { user } = renderComponent({ totalPages });

      await user.click(screen.getByRole('combobox'));

      for (let i = 1; i <= totalPages; i++) {
        expect(await screen.findByText(i.toString())).toBeVisible();
      }
    });

    it('triggers a callback when a page is selected', async () => {
      const totalPages = 10;
      const onPageChange = jest.fn();
      const { user } = renderComponent({ totalPages, onPageChange });

      await user.click(screen.getByRole('combobox'));
      await user.click(screen.getByText('2'));

      expect(onPageChange).toHaveBeenCalledWith(2);
    });
  });

  describe('next page button', () => {
    it('is disabled when on the last page', () => {
      const totalPages = 10;

      renderComponent({ totalPages, currentPage: totalPages });

      expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled();
    });

    it('triggers a callback when clicked', async () => {
      const totalPages = 10;
      const currentPage = 3;
      const onPageChange = jest.fn();
      const { user } = renderComponent({ totalPages, currentPage, onPageChange });

      await user.click(screen.getByRole('button', { name: 'Next page' }));

      expect(onPageChange).toHaveBeenCalledWith(currentPage + 1);
    });
  });

  describe('previous page button', () => {
    it('is disabled when on the first page', () => {
      const totalPages = 10;

      renderComponent({ totalPages, currentPage: 1 });

      expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled();
    });

    it('triggers a callback when clicked', async () => {
      const totalPages = 10;
      const currentPage = 3;
      const onPageChange = jest.fn();
      const { user } = renderComponent({ totalPages, currentPage, onPageChange });

      await user.click(screen.getByRole('button', { name: 'Previous page' }));

      expect(onPageChange).toHaveBeenCalledWith(currentPage - 1);
    });
  });
});
