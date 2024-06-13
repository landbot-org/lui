import { ForwardedRef, forwardRef, useEffect } from 'react';

import { TableProps } from './Table.types';

export const Table = forwardRef(function Table({ table, ...rest }: TableProps, ref: ForwardedRef<HTMLTableElement>) {
  useEffect(() => {
    console.log(table);
  }, [table]);

  return (
    <table ref={ref} {...rest}>
      <thead>
        <tr>
          {table.columns.map((column, index) => (
            <th key={index}>{column.value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row, index) => (
          <tr key={index}>
            {row.cells.map((cell, index) => {
              switch (cell.value.type) {
                case 'index':
                  return (
                    <td key={index}>
                      {cell.value.href ? <a href={cell.value.href}>{cell.value.value}</a> : cell.value.value}
                    </td>
                  );
                case 'text':
                  return <td key={index}>{cell.value.value}</td>;
                case 'link':
                  return (
                    <td key={index}>
                      <a href={cell.value.href}>{cell.value.value}</a>
                    </td>
                  );
                case 'tag':
                  return (
                    <td key={index}>
                      <span>{cell.value.value}</span>
                    </td>
                  );
                case 'toggle':
                  return (
                    <td key={index}>
                      <input type="checkbox" checked={cell.value.value} onChange={cell.value.onToggle} />
                    </td>
                  );
                case 'button':
                  return (
                    <td key={index}>
                      <button onClick={cell.value.onClick}>{cell.value.value}</button>
                    </td>
                  );
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
});
