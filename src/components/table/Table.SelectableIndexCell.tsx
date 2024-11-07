import { MouseEvent, useState } from 'react';
import { Checkbox } from '../checkbox';
import { Typography } from '../typography';
import { StyledIndexCellContainer } from './Table.SelectableIndexCell.styles';
import { StyledIndexCell } from './Table.styles';

export type SelectedStatus = true | false | 'indeterminate';

type DisabledSelectedOptionProps = {
  disableSelection: true;
  selected?: SelectedStatus;
  value?: never;
  forceSelector?: never;
  ariaLabel?: never;
};

type EnabledSelectedOptionProps = {
  disableSelection?: false;
  onToggleSelection: (value: any, selected: boolean) => void;
  selected?: SelectedStatus;
  value?: any;
  forceSelector?: boolean;
  ariaLabel?: string;
};

export type SelectedOptionProps = DisabledSelectedOptionProps | EnabledSelectedOptionProps;

export type TableSelectableIndexCellProps = {
  index?: string;
  selectOptions?: SelectedOptionProps;
};

export const TableSelectableIndexCell = ({ index, selectOptions }: TableSelectableIndexCellProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const showIndexCell = index || !!selectOptions;
  const showSelectionCheckbox =
    !!selectOptions && (isHovered || selectOptions.selected || selectOptions?.forceSelector);

  const handleToggleSelection = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (selectOptions?.disableSelection) return;

    selectOptions?.onToggleSelection(selectOptions.value, !selectOptions.selected);
  };

  if (!showIndexCell) return false;

  return (
    <StyledIndexCellContainer
      aria-label={`Row ${selectOptions?.value ?? index}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleToggleSelection}
      $selectable={!!showSelectionCheckbox}
    >
      <StyledIndexCell aria-label={index}>
        {showSelectionCheckbox ? (
          <Checkbox
            checked={selectOptions?.selected === true}
            indeterminate={selectOptions.selected === 'indeterminate'}
            disabled={selectOptions?.disableSelection}
            aria-label={selectOptions?.ariaLabel}
            readOnly
          />
        ) : (
          <Typography fontWeight={500} variant="text16" color="blue.main">
            {index}
          </Typography>
        )}
      </StyledIndexCell>
    </StyledIndexCellContainer>
  );
};
