import { Table, Button } from '@mantine/core';
import { useState } from 'react';
import { ModalForm } from '../../UI/modalForm/ModalForm';

interface TableDataProps<T> {
  columns: (keyof T)[];
  data: T[];
}

export function TableData<T extends Record<string, any>>({ columns, data }: TableDataProps<T>) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button mb="sm" onClick={() => setOpened(true)}>
        Add / Filter
      </Button>

      <Table highlightOnHover>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col)}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={String(col)}>{row[col as keyof typeof row]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>

      <ModalForm opened={opened} onClose={() => setOpened(false)} />
    </>
  );
}
