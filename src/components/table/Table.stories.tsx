import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Column, Row, Table } from '.';
import { useTable } from './useTable';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {};

export const Custom: Story = {
  render: function Render() {
    const [toggle, setToggle] = useState(false);
    const [columns] = useState<Column[]>([
      { value: 'Index' },
      { value: 'Text' },
      { value: 'Link' },
      { value: 'Tag' },
      { value: 'Toggle' },
      { value: 'Button' },
    ]);
    const [rows] = useState<Row[]>([
      {
        cells: [
          { value: { type: 'index', key: 'index1', value: 'd', href: '#' } },
          { value: { type: 'text', value: 'Text' } },
          { value: { type: 'link', value: 'Link', href: '#' } },
          { value: { type: 'tag', value: 'Tag', variant: 'default' } },
          {
            value: {
              type: 'toggle',
              value: false,
              onToggle: () => {
                setToggle(!toggle);
              },
            },
          },
          { value: { type: 'button', value: 'Button', onClick: () => {} } },
        ],
      },
      {
        cells: [
          { value: { type: 'index', key: 'index2', value: 'd', href: '#' } },
          { value: { type: 'text', value: 'Text' } },
          { value: { type: 'link', value: 'Link', href: '#' } },
          { value: { type: 'tag', value: 'Tag', variant: 'default' } },
          { value: { type: 'toggle', value: false, onToggle: () => {} } },
          { value: { type: 'button', value: 'Button', onClick: () => {} } },
        ],
      },
      {
        cells: [
          { value: { type: 'index', key: 'index3', value: 'd', href: '#' } },
          { value: { type: 'text', value: 'Text' } },
          { value: { type: 'link', value: 'Link', href: '#' } },
          { value: { type: 'tag', value: 'Tag', variant: 'default' } },
          { value: { type: 'toggle', value: false, onToggle: () => {} } },
          { value: { type: 'button', value: 'Button', onClick: () => {} } },
        ],
      },
    ]);

    const { table, addRow } = useTable({ columns, rows });

    return (
      <>
        <Table table={table} bulkSelect={true} />
        <button
          onClick={() =>
            addRow({
              cells: [
                { value: { type: 'index', key: 'index4', value: 'd', href: '#' } },
                { value: { type: 'text', value: 'Text' } },
                { value: { type: 'link', value: 'Link', href: '#' } },
                { value: { type: 'tag', value: 'Tag', variant: 'default' } },
                { value: { type: 'toggle', value: toggle, onToggle: () => {} } },
                { value: { type: 'button', value: 'Button', onClick: () => {} } },
              ],
            })
          }
        >
          fds
        </button>
        <input type="checkbox" checked={toggle} onChange={() => setToggle(!toggle)} />
      </>
    );
  },
};
