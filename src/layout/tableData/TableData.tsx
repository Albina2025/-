import {
  Table,
  Button,
  Group,
  Pagination,
  Select,
  Flex,
  Box,
} from '@mantine/core';
import { useState } from 'react';

interface TableDataProps<T> {
  columns: { key: keyof T; label: string }[];
  data: T[];
  onAdd?: () => void;
  onFilter?: () => void;
}

 

export function TableData<T>({
  columns,
  data,
  onAdd,
  onFilter,
}: TableDataProps<T>) {
  const [activePage, setActivePage] = useState(1);
  const [pageSize, setPageSize] = useState('10');

  const size = Number(pageSize);
  const totalPages = Math.ceil(data.length / size);

  const paginatedData = data.slice(
    (activePage - 1) * size,
    activePage * size
  );

  return (
    <>
      <Group mb="sm">
        {onFilter && <Button onClick={onFilter} color='black' radius={'10'}>Фильтры</Button>}
        {onAdd && <Button onClick={onAdd} color='black' radius={'10'}>Добавить</Button>}
      </Group>

      <Box
        style={{
          width: '100%',
          overflowX: 'auto',
          maxWidth: '100%',  
          border: '1px solid #dee2e6',
          borderRadius: 8,
          //  color: '#fff',
        }}
      >
        <Table
          striped
          highlightOnHover
          withColumnBorders
          style={{
            width: 'max-content',
            borderCollapse: 'collapse',
          }}
        >
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  style={{
                    whiteSpace: 'nowrap',
                    // color: '#fff',
                    border: '1px solid #dee2e6',  
                    padding: '8px',
                  }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((row, i) => (
              <tr key={i}>
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    style={{
                      whiteSpace: 'nowrap',
                      border: '1px solid #dee2e6',  
                      padding: '8px',
                    }}
                  >
                    {String(row[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

        
        </Table>
      </Box>

     
      <Flex justify="space-between" align="center" mt="md">
        <div>Всего данных: {data.length}</div>

        <Group>
          <Pagination
            total={totalPages}
            value={activePage}
            onChange={setActivePage}
          />

          <Select
            value={pageSize}
            // color='#fff'
            onChange={(value) => {
              if (value) {
                setPageSize(value);
                setActivePage(1);
              }
            }}
            data={['2', '5', '10', '20', '50', '100']}
            w={100}
          />
        </Group>
      </Flex>
    </>
  );
}