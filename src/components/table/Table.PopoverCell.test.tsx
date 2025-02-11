import { render, screen } from '../../test-utils';
import { TablePopoverCell } from './Table.PopoverCell';
import { TablePopoverCellProps } from './Table.PopoverCell.types';

const renderComponent = (props: Partial<TablePopoverCellProps> = {}) => {
  const defaultProps: TablePopoverCellProps = {
    children: <>Test</>,
  };

  return render(<TablePopoverCell {...defaultProps} {...props} />);
};

describe('TablePopoverCell', () => {
  describe('copy to clipboard', () => {
    it('allows to customize the content for the clipboard', async () => {
      const clipboardContent = 'clipboardContent';
      const children = <>childrenContent</>;
      const { user } = renderComponent({ children, clipboardContent });

      await user.click(screen.getByText('childrenContent'));
      await user.click(screen.getByRole('button'));

      const clipboardText = await navigator.clipboard.readText();
      expect(clipboardText).toEqual(clipboardContent);
    });

    it.each([
      {
        children: 'childrenContent',
        rowMatch: 'childrenContent',
        expectedString: 'childrenContent',
        label: 'a string',
      },
      {
        children: (
          <div>
            <span>childrenContent</span>
          </div>
        ),
        rowMatch: 'childrenContent',
        expectedString: 'childrenContent',
        label: 'a component',
      },
      {
        children: [<div>children</div>, <span>Content</span>],
        rowMatch: 'children',
        expectedString: 'childrenContent',
        label: 'an array of components',
      },
    ])('copies the textyfied children when children is: $label', async ({ children, expectedString, rowMatch }) => {
      const { user } = renderComponent({ children });

      await user.click(screen.getByText(rowMatch));
      await user.click(screen.getByRole('button'));

      const clipboardText = await navigator.clipboard.readText();
      expect(clipboardText).toEqual(expectedString);
    });
  });
});
