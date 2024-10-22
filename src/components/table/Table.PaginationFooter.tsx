import { CSSProperties, useMemo } from 'react';
import { faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '../box';
import { Button } from '../button';
import { Icon } from '../icon';
import { Select } from '../select';
import { Typography } from '../typography';

export interface TablePaginationFooterProps {
  currentPage: number;
  totalPages: number;
  disabled?: boolean;
  styles?: {
    container?: CSSProperties;
  };
  onPageChange: (page: number) => void;
}

export const TablePaginationFooter = ({
  currentPage,
  totalPages,
  disabled,
  styles,
  onPageChange,
}: TablePaginationFooterProps) => {
  const pageOptions = useMemo(
    () =>
      Array.from({ length: totalPages }, (_, i) => {
        const pageNumber = `${i + 1}`;
        return { label: pageNumber, value: pageNumber };
      }),
    [totalPages],
  );

  const handlePageChange = (value: string) => {
    onPageChange(parseInt(value));
  };

  const handlePreviousPageClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPageClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <Box display="flex" justifyContent="flex-end" style={styles?.container} py={2} px={5}>
      <Box display="flex" alignItems="center" gap={12}>
        <Typography fontWeight={400} variant={'text14'}>
          Page nº {currentPage}
        </Typography>
        <Select
          items={pageOptions}
          onChange={handlePageChange}
          value={`${currentPage}`}
          disabled={disabled}
          variant="small"
          endAdornment={<Icon icon={<FontAwesomeIcon icon={faChevronDown} />} color="blue.main" />}
          styles={{ input: { width: '90px' } }}
        />
        <Button
          color="blue.main"
          variant="text"
          startIcon={<FontAwesomeIcon icon={faChevronLeft} />}
          onClick={handlePreviousPageClick}
          disabled={disabled || currentPage <= 1}
          aria-label="Previous page"
        />
        <Button
          color="blue.main"
          variant="text"
          startIcon={<FontAwesomeIcon icon={faChevronRight} />}
          onClick={handleNextPageClick}
          disabled={disabled || currentPage >= totalPages}
          aria-label="Next page"
        />
      </Box>
    </Box>
  );
};
