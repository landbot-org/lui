import { act, renderHook } from '../../test-utils';
import { useTablePageSelector } from './useTablePageSelector';

const renderUseTablePageSelector = (rowIds: number[] = []) => {
  return renderHook(() => useTablePageSelector<number>(rowIds));
};

describe('useTablePageSelector', () => {
  it('initializes with empty selection', () => {
    const rowIds = [1, 2, 3];

    const { result } = renderUseTablePageSelector(rowIds);

    expect(result.current.selection).toEqual([]);
    expect(result.current.allSelectionState).toEqual(false);
  });

  describe('toggleSelection', () => {
    it('sets partial selection when selectiing not all rows', () => {
      const rowIds = [1, 2, 3];
      const { result } = renderUseTablePageSelector(rowIds);

      act(() => {
        result.current.toggleSelection(rowIds[0], true);
      });

      expect(result.current.selection).toEqual([rowIds[0]]);
      expect(result.current.allSelectionState).toEqual('indeterminate');
    });

    it('sets all selection when selecting all rows', () => {
      const rowIds = [1, 2];
      const { result } = renderUseTablePageSelector(rowIds);

      act(() => {
        result.current.toggleSelection(rowIds[0], true);
      });
      act(() => {
        result.current.toggleSelection(rowIds[1], true);
      });

      expect(result.current.selection).toEqual(rowIds);
      expect(result.current.allSelectionState).toEqual(true);
    });

    it('clears selections when unselecting', () => {
      const rowIds = [1, 2, 3];
      const { result } = renderUseTablePageSelector(rowIds);
      act(() => {
        result.current.toggleSelection(rowIds[0], true);
      });

      act(() => {
        result.current.toggleSelection(rowIds[0], false);
      });

      expect(result.current.selection).toEqual([]);
      expect(result.current.allSelectionState).toEqual(false);
    });
  });

  describe('toggleAllSelection', () => {
    it('sets all selection when selecting all rows', () => {
      const rowIds = [1, 2, 3];
      const { result } = renderUseTablePageSelector(rowIds);

      act(() => {
        result.current.toggleAllSelection(true);
      });

      expect(result.current.selection).toEqual(rowIds);
      expect(result.current.allSelectionState).toEqual(true);
    });

    it('clears selection when deselecting selecting all rows', () => {
      const rowIds = [1, 2];
      const { result } = renderUseTablePageSelector(rowIds);
      act(() => {
        result.current.toggleSelection(rowIds[0], true);
      });
      act(() => {
        result.current.toggleSelection(rowIds[1], true);
      });

      act(() => {
        result.current.toggleAllSelection(false);
      });

      expect(result.current.selection).toEqual([]);
      expect(result.current.allSelectionState).toEqual(false);
    });
  });

  describe('clearSelection', () => {
    it('clears selection', () => {
      const rowIds = [1, 2, 3];
      const { result } = renderUseTablePageSelector(rowIds);
      act(() => {
        result.current.toggleSelection(rowIds[0], true);
      });
      act(() => {
        result.current.toggleSelection(rowIds[1], true);
      });

      act(() => {
        result.current.clearSelection();
      });

      expect(result.current.selection).toEqual([]);
      expect(result.current.allSelectionState).toEqual(false);
    });
  });
});
