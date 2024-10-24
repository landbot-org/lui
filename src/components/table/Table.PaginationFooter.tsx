import { CSSProperties, useMemo } from 'react';
import { faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '../box';
import { Button } from '../button';
import { Icon } from '../icon';
import { Select } from '../select';
import { StyledBoxSelectorContainer, StyledLabel } from './Table.PaginationFooter.style';

const DEFAULT_MAX_OPTIONS_HEIGHT = '250px';

export interface PageSizeOptionsProps {
  selectedSize: number;
  options: number[];
  onPageSizeChange: (pageSize: number) => void;
}
export interface TablePaginationFooterProps {
  currentPage: number;
  totalPages: number;
  pageSizeOptions?: PageSizeOptionsProps;
  pageSizes?: number[];
  disabled?: boolean;
  styles?: {
    container?: CSSProperties;
    pageOptionsContainer?: CSSProperties;
    pageSizeOptionsContainer?: CSSProperties;
  };
  onPageChange: (page: number) => void;
}

export const TablePaginationFooter = ({
  currentPage,
  totalPages,
  disabled,
  styles,
  pageSizeOptions,
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

  const sizeOptions = useMemo(() => {
    if (!pageSizeOptions || pageSizeOptions.options.length <= 0) return [];

    return pageSizeOptions.options.map((size) => ({ label: `${size}`, value: `${size}` }));
  }, [pageSizeOptions]);

  const handlePageChange = (value: string) => {
    onPageChange(parseInt(value));
  };

  const handlePreviousPageClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPageClick = () => {
    onPageChange(currentPage + 1);
  };

  const handleSizeChange = (value: string) => {
    pageSizeOptions?.onPageSizeChange(parseInt(value));
  };

  return (
    <Box display="flex" justifyContent="flex-end" style={styles?.container} py={2} px={5}>
      <Box display="flex" alignItems="center" gap={24}>
        {pageSizeOptions && (
          <StyledBoxSelectorContainer>
            <StyledLabel>Rows per page</StyledLabel>
            <Select
              items={sizeOptions}
              onChange={handleSizeChange}
              value={`${pageSizeOptions.selectedSize}`}
              disabled={disabled}
              variant="small"
              endAdornment={<Icon icon={<FontAwesomeIcon icon={faChevronDown} />} color="blue.main" />}
              styles={{
                input: { width: '90px' },
                optionsContainer: styles?.pageSizeOptionsContainer ?? { maxHeight: DEFAULT_MAX_OPTIONS_HEIGHT },
              }}
              ariaLabel={'Select rows per page'}
            />
          </StyledBoxSelectorContainer>
        )}
        <StyledBoxSelectorContainer>
          <StyledLabel>Page nº</StyledLabel>
          <Select
            items={pageOptions}
            onChange={handlePageChange}
            value={`${currentPage}`}
            disabled={disabled}
            variant="small"
            endAdornment={<Icon icon={<FontAwesomeIcon icon={faChevronDown} />} color="blue.main" />}
            styles={{
              input: { width: '90px' },
              optionsContainer: styles?.pageOptionsContainer ?? { maxHeight: DEFAULT_MAX_OPTIONS_HEIGHT },
            }}
            ariaLabel={'Select page number'}
          />
          <StyledLabel>of {totalPages}</StyledLabel>
        </StyledBoxSelectorContainer>
        <StyledBoxSelectorContainer>
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
        </StyledBoxSelectorContainer>
      </Box>
    </Box>
  );
};
