import {
  Table,
  Button,
  Group,
  Pagination,
  Select,
  Flex,
  Box,
  ScrollArea,
  Text,
} from '@mantine/core';
import { useState } from 'react';
import { useMantineColorScheme } from '@mantine/core';

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
  const { colorScheme } = useMantineColorScheme();
const isDark = colorScheme === "dark";

  const size = Number(pageSize);
  const totalPages = Math.ceil(data.length / size);


  const paginatedData = data.slice(
    (activePage - 1) * size,
    activePage * size
  );

  return (
    <>
      <Group mb="sm">
        {onFilter && (
          <Button
            onClick={onFilter}
            radius={10}
            variant="filled"
            styles={{
              root: {
                backgroundColor: isDark ? '#ffffff' : '#000000',
                color: isDark ? '#000000' : '#ffffff',

                '&:hover': {
                  backgroundColor: isDark ? '#e6e6e6' : '#1a1a1a',
                },
              },
            }}
          >
            Фильтры
          </Button>
        )}

        {onAdd && (
          <Button
            onClick={onAdd}
            radius={10}
            variant="filled"
            styles={{
              root: {
                backgroundColor: isDark ? '#ffffff' : '#000000',
                color: isDark ? '#000000' : '#ffffff',

                '&:hover': {
                  backgroundColor: isDark ? '#e6e6e6' : '#1a1a1a',
                },
              },
            }}
          >
            Добавить
          </Button>
        )}
      </Group>

      <Box
        style={{
          background: isDark ? "#161d21" : "#fdfdfd",
          border: `1px solid ${isDark ? "#2c2f33" : "#d9d9d9"}`,
          borderRadius: 12,
          padding: 16,
        }}
      >
        <Box mb="md" > 
           <ScrollArea w="100%"  
              type="always"
              scrollbarSize={12} 
              offsetScrollbars
              styles={{
                thumb: {
                  backgroundColor: isDark ? '#ffffff' : '#000000',
                  '&:hover': {
                    backgroundColor: isDark ? '#d0d0d0' : '#333333',
                  },
                },
              }}
            > 
        
        <Table
          striped
          highlightOnHover
          withColumnBorders
          withTableBorder
          style={{
            borderCollapse: 'collapse',
            minWidth: 1200 ,
            width: '100%',
          }}
        >
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  style={{
                    whiteSpace: 'nowrap',
                    border: '1px solid #dee2e6',  
                    padding: '8px',
                    color: isDark ? "#ffffff" : "#000000", 
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
                      color: isDark ? "#ffffff" : "#000000", 
                    }}
                  >
                    {String(row[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

        
        </Table>
     
      </ScrollArea>
      </Box>
     
      <Flex justify="flex-end" align="center" mt="md">
        <Group >
          <Text
            size="sm"
            style={{
              color: isDark ? '#ffffff' : '#000000',
              fontWeight: 500,
            }}
          >
            Всего данных: {data.length}
          </Text>

          {data.length === 0 ? (
            <div style={{ padding: 20}}>Нет данных</div>
          ) : (
            <Pagination
              total={totalPages}
              value={activePage}
              onChange={setActivePage}
              styles={{
                control: {
                  borderRadius: '50%',
                  width: 36,
                  height: 36,
                  backgroundColor: isDark ? '#161d21' : '#ffffff',
                  color: isDark ?  '#ffffff' : '#000000',
                  borderColor: isDark ? '#2c2f33' : '#dee2e6',
                  

                  '&[data-active]': {
                    backgroundColor: isDark ? '#2f9e44' : '#228be6',
                    color: '#ffffff',
                  },

                  '&:hover': {
                    backgroundColor: isDark ? '#2a2f33' : '#f1f3f5',
                  },
                },
              }}
            />
          )}

          <Select
            value={pageSize}
            onChange={(value) => {
              if (value) {
                setPageSize(value);
                setActivePage(1);
              }
            }}
            data={['2', '5', '10', '20', '50', '100']}
            w={100}
            styles={{
              input: {
                backgroundColor: isDark ? '#161d21' : '#fdfdfd',
                color: isDark ? '#fff' : '#000',
              },
              dropdown: {
                backgroundColor: isDark ? '#161d21' : '#ffffff',
              },
              option: {
                color: isDark ? '#fff' : '#000',
              },
            }}
          />
        </Group>
      </Flex>
       </Box>
    </>
  );
}