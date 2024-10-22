import { render, screen } from '../../test-utils';
import { Table } from './Table';
import { TableBody } from './Table.Body';
import { TablePopoverCell } from './Table.PopoverCell';
import { TableRow } from './Table.Row';
import { TableTextCell } from './Table.TextCell';

describe('Table', () => {
  it('should render values of cells on the table', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableTextCell>cell 1</TableTextCell>
            <TableTextCell>cell 2</TableTextCell>
            <TableTextCell>cell 3</TableTextCell>
          </TableRow>
          <TableRow>
            <TableTextCell>cell 4</TableTextCell>
            <TableTextCell>cell 5</TableTextCell>
            <TableTextCell>cell 6</TableTextCell>
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
            <TablePopoverCell>cell 1</TablePopoverCell>
            <TablePopoverCell>cell 2</TablePopoverCell>
            <TablePopoverCell>cell 3</TablePopoverCell>
          </TableRow>
          <TableRow>
            <TablePopoverCell>cell 4</TablePopoverCell>
            <TablePopoverCell>cell 5</TablePopoverCell>
            <TablePopoverCell>cell 6</TablePopoverCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(screen.getAllByText('cell 1')).toHaveLength(1);
  });

  it('Should open Popover when clicking on popover cell', async () => {
    const { user } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TablePopoverCell>cell 1</TablePopoverCell>
            <TablePopoverCell>cell 2</TablePopoverCell>
            <TablePopoverCell>cell 3</TablePopoverCell>
          </TableRow>
          <TableRow>
            <TablePopoverCell>cell 4</TablePopoverCell>
            <TablePopoverCell>cell 5</TablePopoverCell>
            <TablePopoverCell>cell 6</TablePopoverCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    await user.click(screen.getByText('cell 1'));

    expect(screen.getAllByText('cell 1')).toHaveLength(2);
  });
});
