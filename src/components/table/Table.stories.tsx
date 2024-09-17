import { Meta, StoryObj } from '@storybook/react';

import { Table, TableBody, TableHeader, TableRow } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

const headers = ['Person', 'Most interest in', 'Age', 'test'];
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
  ['Chris', 'HTML tables', 22, 'hi'],
  [
    'Dennis',
    'Web accessibility',
    45,
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  ],
  ['Sarah', 'JavaScript frameworks', 29, 'test'],
  ['Karen', 'Web performance', 36, 'bay'],
];

export const Interactive: Story = {
  render: function Render(args) {
    return (
      <Table>
        <TableHeader hasIndexCell={true} headers={headers}></TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow sizes={[200, 200, 200, 400]} key={index} values={row} index={index.toString()}></TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
