import { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { TableBody } from './Table.Body';
import { TableBodySkeleton } from './Table.BodySkeleton';
import { TableHeader } from './Table.Header';
import { TableHeaderCell } from './Table.HeaderCell';
import { TablePaginationFooter } from './Table.PaginationFooter';
import { TablePopoverCell } from './Table.PopoverCell';
import { TableRow } from './Table.Row';
import { TableTextCell } from './Table.TextCell';
import { useTablePageSelector } from './useTablePageSelector';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof Table>;

const headers = [
  'Person',
  'Most interest in',
  'Age',
  'long long long long long long long long long long long long text',
];

const data = [
  [
    'Chris',
    'HTML tables',
    22,
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  ],
  [
    'Dennis',
    'Web accessibility',
    45,
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  ],
  [
    'Sarah',
    'JavaScript frameworks',
    29,
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  ],
  ['Karen', 'Web performance', 36, 'Hello'],
  ['Chris', 'HTML tables', 22, 'welcome'],
  [
    'Dennis',
    'Web accessibility',
    45,
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  ],
  ['Sarah', 'JavaScript frameworks', 29, 'test'],
  ['Karen', 'Web performance', 36, 'bay'],
];

const sizes = [200, 200, 200, 200];

export const Interactive: Story = {
  render: function Render() {
    return (
      <>
        <Table>
          <TableHeader index>
            {headers.map((header, i) => {
              return (
                <TableHeaderCell size={sizes[i]} flexGrow={headers.length - 1 === i ? 1 : undefined}>
                  {header}
                </TableHeaderCell>
              );
            })}
          </TableHeader>
          <TableBody>
            {data.map((row, i) => (
              <TableRow index={i.toString()} key={i}>
                {row.map((cell, j) => {
                  if (row.length - 1 === j) {
                    return (
                      <TablePopoverCell flexGrow={1} size={sizes[j]} key={cell}>
                        {cell.toString()}
                      </TablePopoverCell>
                    );
                  }
                  return (
                    <TableTextCell key={cell} size={sizes[j]}>
                      {cell}
                    </TableTextCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePaginationFooter
          pageSizeOptions={{ onPageSizeChange: () => {}, options: [10, 20, 30], selectedSize: 10 }}
          currentPage={1}
          totalPages={100}
          onPageChange={() => {}}
        />
      </>
    );
  },
};

export const Loading: Story = {
  render: function Render() {
    return (
      <Table>
        <TableHeader index>
          {headers.map((header, i) => {
            return (
              <TableHeaderCell size={sizes[i]} flexGrow={headers.length - 1 === i ? 1 : undefined}>
                {header}
              </TableHeaderCell>
            );
          })}
        </TableHeader>
        <TableBodySkeleton rows={data.length} columns={headers.length} longCellsPositions={[3]} showIndex />
      </Table>
    );
  },
};

export const RowSelection: Story = {
  render: function Render() {
    const rowIds = Array.from({ length: data.length }, (_, index) => index);
    const { selection, allSelectionState, toggleSelection, toggleAllSelection } = useTablePageSelector(rowIds);

    return (
      <Table>
        <TableHeader index selectOptions={{ onToogleSelection: toggleAllSelection, selected: allSelectionState }}>
          {headers.map((header, i) => {
            return (
              <TableHeaderCell size={sizes[i]} flexGrow={headers.length - 1 === i ? 1 : undefined}>
                {header}
              </TableHeaderCell>
            );
          })}
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow
              index={i.toString()}
              key={i}
              selectOptions={{ onToogleSelection: toggleSelection, value: i, selected: selection.includes(i) }}
            >
              {row.map((cell, j) => {
                if (row.length - 1 === j) {
                  return (
                    <TablePopoverCell flexGrow={1} size={sizes[j]} key={cell}>
                      {cell.toString()}
                    </TablePopoverCell>
                  );
                }
                return (
                  <TableTextCell key={cell} size={sizes[j]}>
                    {cell}
                  </TableTextCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
