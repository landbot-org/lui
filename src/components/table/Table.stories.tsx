import { Meta, StoryObj } from '@storybook/react';
import { TableHeader } from '.';
import { Table } from './Table';
import { TableBody } from './Table.Body';
import { TableHeaderCell } from './Table.HeaderCell';
import { TablePopoverCell } from './Table.PopoverCell';
import { TableRow } from './Table.Row';
import { TableTextCell } from './Table.TextCell';

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
    );
  },
};
