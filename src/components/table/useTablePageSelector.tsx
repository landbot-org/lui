import { useCallback, useEffect, useState } from 'react';
import { SelectedStatus } from './Table.SelectableIndexCell';

export const useTablePageSelector = <T = unknown,>(rowIds: T[] = []) => {
  const [selection, setSelection] = useState<T[]>([]);
  const [allSelectionState, setAllSelectionState] = useState<SelectedStatus>(false);

  useEffect(() => {
    if (selection.length <= 0) return setAllSelectionState(false);
    if (selection.length === rowIds.length) return setAllSelectionState(true);

    setAllSelectionState('indeterminate');
  }, [rowIds, selection.length]);

  const toggleAllSelection = useCallback(
    (selected: boolean) => {
      if (selected) {
        setSelection(rowIds.map((rowId) => rowId));
      } else {
        setSelection([]);
      }
    },
    [rowIds],
  );

  const toggleSelection = useCallback((value: T, selected: boolean) => {
    if (selected) {
      setSelection((prev) => [...prev, value]);
    } else {
      setSelection((prev) => prev.filter((item) => item !== value));
    }
  }, []);

  const clearSelection = useCallback(() => {
    setSelection([]);
    setAllSelectionState(false);
  }, []);

  return {
    selection,
    allSelectionState,
    clearSelection,
    toggleSelection,
    toggleAllSelection,
  };
};
