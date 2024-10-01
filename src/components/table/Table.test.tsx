import { render, screen } from '../../test-utils';
import { Table } from './Table';
import { TableBody } from './Table.Body';
import { TablePopoverCell } from './Table.PopoverCell';
import { TableRow } from './Table.Row';
import { TableTextCell } from './Table.TextCell';

describe('Tab;e', () => {
  it('should render values of cells on the table', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableTextCell value={'cell 1'} />
            <TableTextCell value={'cell 2'} />
            <TableTextCell value={'cell 3'} />
          </TableRow>
          <TableRow>
            <TableTextCell value={'cell 4'} />
            <TableTextCell value={'cell 5'} />
            <TableTextCell value={'cell 6'} />
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(screen.getByText('cell 1')).toBeVisible();
    expect(screen.getByText('cell 2')).toBeVisible();
    expect(screen.getByText('cell 3')).toBeVisible();
    expect(screen.getByText('cell 4')).toBeVisible();
    expect(screen.getByText('cell 5')).toBeVisible();
    expect(screen.getByText('cell 6')).toBeVisible();
  });

  it('Should not render Popover by default', async () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TablePopoverCell value={'cell 1'} />
            <TablePopoverCell value={'cell 2'} />
            <TablePopoverCell value={'cell 3'} />
          </TableRow>
          <TableRow>
            <TablePopoverCell value={'cell 4'} />
            <TablePopoverCell value={'cell 5'} />
            <TablePopoverCell value={'cell 6'} />
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(screen.queryAllByText('cell 1')).toHaveLength(1);
  });

  it('Should open Popover when clicking on popover cell', async () => {
    const { user } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TablePopoverCell value={'cell 1'} />
            <TablePopoverCell value={'cell 2'} />
            <TablePopoverCell value={'cell 3'} />
          </TableRow>
          <TableRow>
            <TablePopoverCell value={'cell 4'} />
            <TablePopoverCell value={'cell 5'} />
            <TablePopoverCell value={'cell 6'} />
          </TableRow>
        </TableBody>
      </Table>,
    );

    await user.click(screen.getByText('cell 1'));

    expect(screen.queryAllByText('cell 1')).toHaveLength(2);
  });
});
