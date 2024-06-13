import { useState } from 'react';

import { Column, Row } from './Table.types';

export const useTable = ({ columns, rows }: { columns: Column[]; rows: Row[] } = { columns: [], rows: [] }) => {
  const [table, setTable] = useState(() => ({
    columns: columns,
    rows: rows,
  }));

  const addColumn = (column: Column) => {
    setTable((prevTable) => ({
      ...prevTable,
      columns: [...prevTable.columns, column],
    }));
  };

  const addRow = (row: Row) => {
    setTable((prevTable) => ({
      ...prevTable,
      rows: [...prevTable.rows, row],
    }));
  };

  return {
    table,
    addColumn,
    addRow,
  };
};
